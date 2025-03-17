'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function registerAction(
  email: string,
  password: string,
  name: string
) {

  const supabase = await createClient();

  const { error: regError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name, role: 'user' },
    },
  });

  // if (error) {
  //   throw new Error('Registration failed: ' + error.message);
  // }

  console.log(`regError: ${regError}`)

  // const { error: roleError } = await supabase
  // .from('profiles')
  // .insert([{ 
  //   id: data.user?.id, 
  //   role: data.user?.user_role,
  // }]);

  // if (roleError) throw new Error(roleError.message);

  // Redirect to verification page
  redirect(`/auth/verify?email=${encodeURIComponent(email)}`);
}