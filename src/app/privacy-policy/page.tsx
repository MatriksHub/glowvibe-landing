
import Link from "next/link"

export default function page() {
  return (
    <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>

        <p className="text-xl font-bold tracking-tight text-foreground">Last Updated: 19th February, 2025</p>

        <p className="text-muted-foreground">
          Welcome to GlowVibe! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our mobile application ("App"). By using GlowVibe, you agree to the terms outlined below.
        </p>

        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">1. Information We Collect</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                    <strong>Account Information:</strong> When you register, we may collect your email address, username, and other details.
                </li>
                <li className="list-disc">
                    <strong>User-Generated Content:</strong> Any confessions, comments, or insights you post.
                </li>
                <li className="list-disc">
                    <strong>Device & Usage Data:</strong> We collect analytics on how you interact with the App (e.g., device type, IP address, usage patterns).
                </li>
                <li className="list-disc">
                    <strong>Payment Information:</strong> If you subscribe to premium features, payments are processed through the App Store or Google Play. We do not store payment details.
                </li> 
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                    To provide and improve the App's functionality.
                </li>
                <li className="list-disc">
                    To moderate content and enforce community guidelines.
                </li>
                <li className="list-disc">
                    To personalize user experience and show relevant content.
                </li>
                <li className="list-disc">
                    To communicate with you regarding updates, support, or promotional offers.
                </li> 
            </ul>
            
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">3. Sharing of Information</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                    <strong>With Service Providers:</strong> We may use third-party services (e.g., analytics, cloud storage, content moderation tools).
                </li>
                <li className="list-disc">
                    <strong>Legal Compliance:</strong> We may disclose data if required by law or to protect users from harm.
                </li>
                <li className="list-disc">
                    <strong>Anonymous Data:</strong> Aggregated data may be used for research and analytics without personally identifying you.
                </li> 
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">4. Data Retention & Deletion</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                    Confessions and user data may be stored as long as necessary to provide our services.
                </li>
                <li className="list-disc">
                You can request account deletion by contacting <a className="text-secondary font-bold"  href="mailto:hello@glowvibeapp.com">hello@glowvibeapp.com</a>.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">5. Security Measures</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                    We use encryption and other security practices to protect user data. However, no system is 100% secure.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">6. Changes to This Policy</h2>
            <p className="text-muted-foreground">
                We may update this policy. Continued use of the App means you accept the latest version.
            </p>
            <p className="text-muted-foreground">
            For any privacy concerns, contact us at <a className="text-secondary font-bold" href="mailto:hello@glowvibeapp.com">hello@glowvibeapp.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}