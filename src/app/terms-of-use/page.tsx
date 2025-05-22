

export default function page() {
  return (
    <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1>Terms of Use for AskTaboo App</h1>

        <h5>Effective Date: February, 2025</h5>

        <p className="text-muted-foreground">
          Welcome to <strong>AskTaboo!</strong> By accessing or using our app, you agree to these <strong>Terms of Use.</strong> If you do not agree, please do not use the app.
        </p>

        <div className="space-y-4">
          <div className="space-y-4">
            <h5>1. Acceptance of Terms</h5>
            <p>
              By using AskTaboo, you agree to abide by these Terms and all applicable laws. We reserve the right to modify these terms at any time.
            </p>
          </div>

          <div className="space-y-4">
            <h5>2. Age Requirement
            </h5>
            <p className="text-muted-foreground">
              AskTaboo is intended for users <strong>18 years and older</strong>. By using this app, you confirm that you meet this age requirement.
            </p>
          </div>

          <div className="space-y-4">
            <h5>3. User Conduct & Content Guidelines</h5>
            <ul className="text-muted-foreground pl-[40px] gap-4">
              <li className="list-disc">
                You are responsible for all content you submit, including <strong>anonymous confessions, comments, and interactions</strong>.
              </li>
              <li className="list-disc">
                The following content is <strong>strictly prohibited</strong>:
              </li>
                <ul className="pl-[20px]">
                  <li className="list-disc">
                    Hate speech, harassment, or threats.
                  </li>
                  <li className="list-disc">
                    Pornographic, sexually explicit, or obscene material.
                  </li>
                  <li className="list-disc">
                    Content promoting violence, illegal activities, or self-harm.
                  </li>
                  <li className="list-disc">
                    False or misleading information.
                  </li>
                </ul>
              <li className="list-disc">
                Users who violate these rules may have their accounts <strong>suspended or permanently banned</strong>.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5>4. Privacy & Anonymity</h5>
            <p>
              AskTaboo allows users to post anonymously, but we may collect device-related data for security and moderation purposes. Read our <strong>Privacy Policy</strong> for more details.
            </p>
          </div>

          <div className="space-y-4">
            <h5>5. Account Termination</h5>
            <p>
              We reserve the right to suspend or terminate any user account at our discretion if violations occur.
            </p>
          </div>

          <div className="space-y-4">
            <h5>6. Disclaimer of Liability</h5>
            <ul className="pl-[20px]">
              <li className="list-disc">
                AskTaboo is for informational and entertainment purposes only.
              </li>
              <li className="list-disc">
                We do not provide medical or professional advice. Consult a qualified professional for personal concerns.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5>7. Governing Law
            </h5>
            <p className="text-muted-foreground">
              These Terms shall be governed by the laws of Nigeria
            </p>
            <p className="text-muted-foreground">
              For any questions, contact <a className="text-secondary" href="mailto:hello@asktaboo.com">hello@asktaboo.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
