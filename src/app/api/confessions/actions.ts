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
export async function addExpertAdvice(id: string, expert_advice: string) {
  const { data, error } = await supabase
    .from("confessions")
    .update({ expert_advice: expert_advice })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// update confession
export async function updateConfession(id: string, title: string, confession: string) {
  const { error } = await supabase
  .from("confessions")
  .update({ title, confession})
  .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}