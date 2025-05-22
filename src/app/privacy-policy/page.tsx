

export default function page() {
  return (
    <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1>Privacy Policy for AskTaboo</h1>

        <h5 className="text-foreground">Effective Date: February, 2025</h5>

        <p className="text-muted-foreground">
          At <strong>AskTaboo</strong>, we respect your privacy. This <strong>Privacy Policy</strong> explains how we collect, use, and protect your information.
        </p>

        <div className="space-y-4">
          <div className="space-y-4">
            <h5>1. Information We Collect</h5>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  <strong>Personal Information:</strong> Email for login.
                </li>
                <li className="list-disc">
                  <strong>Anonymous Content:</strong> Confessions and interactions.
                </li>
                <li className="list-disc">
                  <strong>Device Data:</strong> For security, analytics, and push notifications.
                </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5>2. How We Use Your Data</h5>
            <ul className="text-muted-foreground pl-[40px] gap-4">
              <li className="list-disc">
                To provide <strong>anonymous confession features</strong>.
              </li>
              <li className="list-disc">
                To send <strong>OTP logins and notifications</strong>.
              </li>
              <li className="list-disc">
                To improve moderation and user experience.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5>3. Sharing of Information</h5>
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
            <h5>3. Data Security & Retention</h5>
            <ul className="text-muted-foreground pl-[40px] gap-4">
              <li className="list-disc">
                We take reasonable steps to protect your data.
              </li>
              <li>
              Anonymous posts may be stored for moderation.
              </li>
              <li className="list-disc">
                Users can request account deletion via <a className="text-secondary font-bold"  href="mailto:hello@asktaboo.com">hello@asktaboo.com</a>.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5>4. Your Privacy Rights</h5>
            <ul className="text-muted-foreground pl-[40px] gap-4">
              <li className="list-disc">
                You can access, edit, or delete your data.
              </li>
              <li className="list-disc">
                Users in <strong>GDPR-compliant regions</strong> can request data portability.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5>6. Changes to This Policy</h5>
            <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Users will be notified of significant changes.
            </p>
            <p className="text-muted-foreground">
            For questions, contact us at <a className="text-secondary font-bold" href="mailto:hello@asktaboo.com">hello@asktaboo.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
