import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { WelcomeEmail } from "@/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        // Render the email using React Email
        const emailHtml = await render(WelcomeEmail({}));

        const emailResponse = await resend.emails.send({
            from: "Glowvibe <hello@glowvibeapp.com>",
            to: [email],
            subject: "Welcome Glowvibe",
            html: emailHtml,
        });

        return NextResponse.json({ success: true, data: emailResponse });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }
        return NextResponse.json({ success: false, error: "An unexpected error occured" }, { status: 500 });
    }
}
