// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { email } = req.body;

//         if ( !email ) {
//             return res.status(400).json({ 
//                 success: false, 
//                 error: 'All fields are required' 
//             });
//         }

//         try {
//             await transporter.sendMail({
//                 from: email,
//                 to: 'aniekanedetdev@gmail.com',
//                 subject: 'Form Subscription Submission',
//                 text: `Email: ${email}\n`
//             });

//             res.status(200).json({ success: true})
//         } catch (error) {
//             res.status(500).json({ 
//                 success: false, 
//                 error: error.message 
//             });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end('Method ${req.method} Not Allowed');
//     }
// }