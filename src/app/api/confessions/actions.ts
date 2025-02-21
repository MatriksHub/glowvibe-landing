"use server";

import { supabase } from "@/utils/supabase";

// Approve Confession
export async function approveConfession(id: string) {
  const { error } = await supabase
    .from("confessions")
    .update({ approved: true })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Reject (Delete) Confession
export async function deleteConfession(id: string) {
  const { error } = await supabase
    .from("confessions")
    .delete()
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
