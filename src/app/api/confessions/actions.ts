"use server";

import { supabase } from "@/utils/supabase";
import { sendANotification } from "../notifications/actions";

// Get users token
export async function getUserPushToken(id: string) {
  const { data: userToken, error } = await supabase
  .from('profiles')
  .select('push_token')
  .eq('id', id)
  .single();

  if (error || !userToken?.push_token) {
      console.error('Error fetching user push token:', error);
      return null;
  }

  return userToken.push_token;
}

// Approve Confession
export async function approveConfession(id: string) {
  const { data: confession, error: fetchError } = await supabase
  .from("confessions")
  .select("user_id")
  // .update({ approved: true })
  .eq("id", id)
  .single();

  if (fetchError) {
    return { success: false, error: fetchError.message };
  }

  const { error: approvalError } = await supabase
  .from('confessions')
  .update({ approved: true })
  .eq('id', id);

  if (approvalError) {
    return { success: false, error: approvalError.message };
  }

  const pushToken = await getUserPushToken(confession.user_id);

  if (pushToken) {
    await sendANotification(pushToken, 'Confession Approved', 'Your confession has been approved!');
  }

  return { success: true };
}

// Reject (Delete) Confession
export async function deleteConfession(id: string) {
  const { data: confession, error: confessionError } = await supabase
  .from('confessions')
  .select('user_id')
  .eq('id', id)
  .single();

  if (confessionError || !confession) {
    console.error('Confession not found:', confessionError);
    return { success: false, error: 'Confession not found' };
  }

  const { error } = await supabase
  .from("confessions")
  .delete()
  .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  const pushToken = await getUserPushToken(confession.user_id);

  if (pushToken) {
    await sendANotification(pushToken, 'Confession Removed', 'Your confession has been removed by an admin.');
  }

  return { success: true };
}

// Add Expert Answer
export async function addExpertAdvice(id: string, expert_answers: string) {
  const { data: confession, error: confessionError } = await supabase
  .from('confessions')
  .select('user_id')
  .eq('id', id)
  .single();

  if (confessionError || !confession) {
    console.error('Confession not found:', confessionError);
    return { success: false, error: 'Confession not found' };
  }

  const { error } = await supabase
  .from("confessions")
  .update({ expert_answers: expert_answers })
  .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  const pushToken = await getUserPushToken(confession.user_id);

  if (pushToken) {
    await sendANotification(pushToken, 'Expert Advice Added', 'An expert has responded to your confession.');
  }
    
  return { success: true };

}


// update confession
export async function updateConfession(id: string, title: string, confession: string) {
  const { data: userConfession, error: UpdateError } = await supabase
  .from('confessions')
  .select('user_id')
  .eq('id', id)
  .single();

  if (userConfession || !UpdateError) {
    console.error('Confession not found:', UpdateError);
    return { success: false, error: 'Confession not found' };
  }
  
  const { error } = await supabase
  .from("confessions")
  .update({ title, confession })
  .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  // const pushToken = await getUserPushToken(userConfession.user_id);

  // if (pushToken) {
  //   await sendANotification(pushToken, 'Confession Updated', 'Your confession has been updated successfully.');
  // }

  return { success: true };
}