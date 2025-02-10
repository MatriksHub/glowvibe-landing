import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import * as React from 'react';



const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Glowvibes <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Hello World',
            react: EmailTemplate({ firstName: 'John'}) as React.ReactElement,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }
      
        return Response.json(data); 
    } catch (error) {
        console.error(error);
        return Response.json({ error, message: 'Unable to send email this time' }, { status: 500 });
    }
}