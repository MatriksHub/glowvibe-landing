import { sendEmail } from "@/lib/mailtrap.utils"


export async function POST() {
    const sender = {
        name: 'My App',
        address: 'no-reply@example.com',
    }

    const recipients = [{
        name: 'John Doe',
        address: 'john.doe@example.com',
    }]

    try {
        const result = await sendEmail({
            sender,
            recipients, 
            subject: 'Welcome to Glowvibes',
            message: 'You are welcome to our platform'
        })

        return Response.json({
            accepted: result.accepted,
        })
    } catch (error) {
        return Response.json({
            message: 'Unable to send email this time'
        }, {status: 500})
    }
}