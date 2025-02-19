

export default function page() {
  return (
    <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Content Moderation Policy</h1>

        <p className="text-xl font-bold tracking-tight text-foreground">Last Updated: 19th February, 2025</p>

        <p className="text-muted-foreground">
          At GlowVibe, we are committed to fostering a safe and respectful community. This Content Moderation Policy outlines how we handle user-generated content.
        </p>

        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">1. Prohibited Content</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  Hate speech, harassment, or threats.
                </li>
                <li className="list-disc">
                  Illegal or violent content.
                </li>
                <li className="list-disc">
                  Explicit adult content outside of designated areas.
                </li>
                <li className="list-disc">
                  Misinformation, spam, or fraudulent content.
                </li> 
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">2. Reporting & Moderation</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                  Users can report inappropriate content within the App.
                </li>
                <li className="list-disc">
                  Our moderation team reviews reports and takes appropriate action, including content removal or account suspension.
                </li>
               
            </ul>
            
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">3. Consequences of Violations</h2>
            <ul className="text-muted-foreground pl-[40px] gap-4">
                <li className="list-disc">
                First-time violations may receive warnings.
                </li>
                <li className="list-disc">
                Repeated or severe violations may result in permanent account suspension.
                </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold">4. Appeals</h2>
            
            <p className="text-muted-foreground">
            Users can appeal content moderation decisions by contacting  <a className="text-secondary font-bold" href="mailto:hello@glowvibeapp.com">hello@glowvibeapp.com</a>.
            </p>
            <p className="text-muted-foreground">
            We strive to ensure that GlowVibe remains a welcoming space for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}