'use server'

import { User } from "@/types/global";
import { supabase } from "@/utils/supabase";

export async function fetchUsers(): Promise<User[]> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
}