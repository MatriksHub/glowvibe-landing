'use server';

import { supabaseClient } from '@/utils/supabase/client';
import { createSupabaseServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
const supabase = await createSupabaseServerClient();

export async function verifyAction(email: string, otp: string) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: 'email',
  });

  if (error || !data?.user ) {
    throw new Error('Invalid or expired verification code.');
  }

  const user = data.user;

  const { error: roleError } = await supabaseClient
    .from("profiles")
    .select("isAdmin")
    .eq("id", user.id)
    .eq("isAdmin", true)
    .single();

  if (roleError) {
    throw new Error("You are not authorized to view this page.");
  }

  // Redirect based on role
    return redirect("/dashboard");
}