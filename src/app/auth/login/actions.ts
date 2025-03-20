'use server'

import { supabaseClient } from '@/utils/supabase/client';
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation';


export async function sendOtp(email: string) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({email});

  console.log(`Login error: ${error}`); 

  if (error) {
    return { success: false, error: error.message};
  } 

  return { success: true };
}

export async function verifyOtp(email: string, otp: string) {
  const supabase = await createSupabaseServerClient();
 const { data, error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: 'email',
  });

  // console.log('errorrr', error)
  // console.log('data from verify', data)

  if (error) { 
    return { success: false, error: 'Invalid or expired verification code.'};
  }

  const { data: profile, error: roleError } = await supabaseClient
    .from("profiles")
    .select('*')
    .eq("id", data.user?.id)
    .eq("isAdmin", true)
    .single();

  if (roleError) {
    return { 
      success: false, 
      error: "You are not authorized to view this page."
    };
  }

  const user = {
    id: data?.user?.id,
    email: data?.user?.email,
    username: profile?.username,
    isAdmin: profile?.isAdmin,
  }
  
  console.log(`Login user action data with profile: ${JSON.stringify(user, null, 2)}`);

  if (user.isAdmin !== true) {
    redirect('/unauthorized');
  } else {
    redirect('/dashboard');
  }
}















// 'use server';

// import { createClient } from '@/utils/supabase/server';

// export async function loginAction(email: string, password: string) {
//   const supabase = await createClient();

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     throw new Error('Login failed: ' + error.message);
//   }

//   const { data: user, error: userError } = await supabase.auth.getUser();
  
//   if (userError) throw new Error(userError.message);

//   return {
//     uid: user.user.id,
//     email: user.user.email!,
//     name: user.user?.user_metadata?.name || '',
//   };

//   // fetch user 
//   // feth teh role
//   // store the cookie
// }