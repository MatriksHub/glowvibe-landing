'use server'

import { User } from "@/types/global";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { supabaseClient } from "@/utils/supabase/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(email: string, password: string): Promise<User> {
  const supabase = await createSupabaseServerClient();

  const { data, error} = await supabase.auth.signInWithPassword({email, password});

  console.log(`Login error: ${error}`); 

  if (error) {
    throw new Error('Login failed: ' + error.message);
  }

  const user = data.user;

  if (!user) {
    throw new Error("User authentication failed.");
  }

  // Fetch user role
  const { data: userRole, error: roleError } = await supabaseClient
    .from("profiles")
    .select()
    .eq("id", user.id)
    .eq("isAdmin", true)
    .single();

    // console.log(`Data: ${JSON.stringify(userRole, null, 2)}`)
    // console.log(`UserData: ${userRole}`)
    // console.log(`Error: ${roleError}`)

  if (roleError) {
    throw new Error("You are not authorized to view this page.");
  }

  // // Store user role in a cookie
  // const cookieStore = await cookies();

  // cookieStore.set(
  //   "user_role", 
  //   userRole.role, 
  //   { 
  //     path: "/", 
  //     httpOnly: true, 
  //     secure: true 
  //   }
  // );

  // Redirect based on role
    return redirect("/dashboard");
  
   
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