'use server'

// import { Notification, SendNotificationResponse } from "@/types/global";
import { supabase } from "@/utils/supabase";
import { Expo } from 'expo-server-sdk';

// push notifications for individual user
// send notifications to users approved confession

export async function fetchNotifications(): Promise<Notification[]> {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });
  
    if (error) throw new Error(error.message);
    
    return data;
}

export async function sendNotification(title: string, body: string) {
    const expo = new Expo();

    const {data: userPushTokens, error: userError} = await supabase
        .from('profiles')
        .select('push_token');

    // validate
    if (!Expo.isExpoPushToken(userPushTokens)) {
        console.error(`Push token ${userPushTokens} is not a valid Expo push Token`);
    }

    if (userError) throw new Error(userError.message);

    const messages = userPushTokens
        .filter(user => Expo.isExpoPushToken(user.push_token))
        .map(user => ({
            to: user.push_token,
            sound: 'default',
            title,
            body
        })
    );

    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];

    for (const chunk of chunks) {
        try {
            const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
            tickets.push(...ticketChunk);
        } catch (error) {
            console.error(error);
        }
    }

    return {success: true, tickets};
}

export async function createNotification(title: string, body: string) {
    const {success, tickets } = await sendNotification(title, body);

    const { error } = await supabase
      .from('notifications')
      .insert([{ 
        title, 
        body, 
        sent_at: success? new Date() : null,
        status: success? 'sent' : 'failed', 
        created_at: new Date() 
      }]
    );
  
    if (error) throw new Error(error.message);

    return { success: true, tickets };
}


export async function sendANotification(pushToken: string, title: string, body: string) {
    const expo = new Expo();

    // const pushToken = "ExponentPushToken[FJaPOiEZPwvO20jFk6cHEB]";

    // validate
    if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push Token`);
    }

    const message = {
        to: pushToken,
        sound: 'default',
        title,
        body,
        data: { withSome: 'data' },
    };

    try {
        const tickets = await expo.sendPushNotificationsAsync([message]);
        console.log('Notification sent:', tickets);

        return {success: true, tickets};
    } catch (error) {
        console.error('Error sending notification:', error);
    }
}