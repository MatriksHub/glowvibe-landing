import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        const emailResponse = await resend.emails.send({
            from: "GlowVibe <noreply@glowvibeapp.com>",
            to: [email],
            subject: "Welcome to GlowVibe!",
            html: `
                <h1>Welcome to GlowVibe!</h1>
                <p>Thank you for joining the waitlist.</p>
                <p>Here’s what you can expect:</p>
                <ul>
                    <li>🚀 Exclusive updates and features</li>
                    <li>📢 Early access to new features</li>
                    <li>🎁 Special offers and insights</li>
                </ul>
                <p>Stay tuned for more!</p>
                
                <p>Best Regards,</p>
                <p>The Team</p>
            `,
        });

        return NextResponse.json({ success: true, data: emailResponse });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}