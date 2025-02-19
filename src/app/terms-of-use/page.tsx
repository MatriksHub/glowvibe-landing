

export default function page() {
  return (
    <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Terms of Use</h1>

        <p className="text-xl font-bold tracking-tight text-foreground">Effective Date: 19th  February, 2025</p>

        <p className="text-muted-foreground">
          These Terms of Use govern your access to and use of GlowVibe. By using the App, you agree to comply with these terms.
        </p>

        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">1. Eligibility & Registration</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  You must be at least 18 years old (or meet your country's minimum age for digital services).
                </li>
                <li className="list-disc">
                  You are responsible for maintaining the confidentiality of your account.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">2. User Conduct & Content</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  You agree not to post harmful, offensive, or illegal content.
                </li>
                <li className="list-disc">
                  We have the right to remove or restrict content that violates community guidelines.
                </li>
                <li className="list-disc">
                  Users retain ownership of their content but grant GlowVibe a license to display and distribute content within the App.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">3. Subscriptions & Payments</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  Premium features require a subscription. Payments are managed by Apple App Store or Google Play.
                </li>
                <li className="list-disc">
                  No refunds are provided unless required by law.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">4. Account Termination</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  We reserve the right to suspend or terminate accounts that violate these Terms or pose a risk to the community.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">5. Limitation of Liability</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  GlowVibe is provided "as is." We are not responsible for user-generated content.
                </li>
                <li className="list-disc">
                  We are not liable for any damages arising from your use of the App.
                </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">6. Changes to These Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms. Your continued use of the App means you accept any changes.
            </p>
            <p className="text-muted-foreground">
              For support, contact <a className="text-secondary" href="mailto:hello@glowVibeapp.com">hello@glowvibeapp.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}