
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Biz Thozhan – Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: August 10, 2025
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Biz Thozhan ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with us, whether through our website, email, phone, or in person.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email address, phone number, business details, billing address.</li>
                <li><strong>Business Information:</strong> Company details, financial information, business plans, and related documents shared for consulting purposes.</li>
                <li><strong>Usage Data:</strong> Information on how you use our website and services (IP address, browser type, pages visited).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and improve our consulting services.</li>
                <li>Communicate with you regarding your project or inquiry.</li>
                <li>Send you updates, reports, and marketing materials (with your consent).</li>
                <li>Maintain internal records and comply with legal obligations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Sharing Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell or rent your personal information. We may share your data only:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With trusted service providers assisting in delivering our services.</li>
                <li>If required by law, regulation, or legal process.</li>
                <li>To protect our legal rights or prevent fraud.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of data transmission or storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and request a copy of your personal data.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Cookies and Website Tracking
              </h2>
              <p className="text-muted-foreground">
                Our website may use cookies to improve user experience and analyze traffic. You can disable cookies in your browser settings, but some features may not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain personal and business information only as long as necessary to provide services and comply with legal obligations.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
