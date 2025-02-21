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

// Add Expert Answer
export async function addExpertAnswer(id: string, answer: string) {
  const { data, error } = await supabase
    .from("confessions")
    .update({ expert_advice: answer })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}