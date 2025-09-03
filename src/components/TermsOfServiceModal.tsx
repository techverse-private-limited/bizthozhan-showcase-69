
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Biz Thozhan – Terms & Conditions
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-muted-foreground mb-6">
            Effective Date: August 10, 2025
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              These Terms & Conditions govern the provision of services by Biz Thozhan ("we," "our," or "us") to our clients ("you" or "your"). By engaging our services, you agree to these terms.
            </p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Client Responsibilities
              </h2>
              <p className="text-muted-foreground mb-3">
                To ensure we deliver effectively, clients must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information.</li>
                <li>Respond promptly to queries and requests for clarification.</li>
                <li>Make timely payments as per agreed terms.</li>
                <li>Cooperate in the implementation of recommendations.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Fees and Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fees will be agreed upon in writing before work begins.</li>
                <li>Payments are due as per the invoice date.</li>
                <li>Late payments may result in suspension of services or additional charges.</li>
                <li>All fees are non-refundable unless otherwise stated in the service agreement.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Confidentiality
              </h2>
              <p className="text-muted-foreground">
                We respect your privacy. All business information shared with Biz Thozhan will be kept confidential and used solely for the purpose of delivering our services, unless disclosure is required by law.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Any materials, strategies, or reports created by Biz Thozhan remain our intellectual property unless otherwise agreed in writing.</li>
                <li>Clients may use these deliverables for their business purposes only and may not resell or distribute them without prior consent.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Biz Thozhan provides advice and recommendations based on professional expertise and available information.</li>
                <li>We are not responsible for losses, damages, or business performance outcomes resulting from the implementation of our recommendations.</li>
                <li>Our liability, if any, will be limited to the amount paid for the specific service in question.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Cancellation & Termination
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Either party may terminate a project with written notice.</li>
                <li>If a project is canceled after work has begun, the client will be billed for work completed up to the date of termination.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We may update these Terms & Conditions from time to time. The updated version will be effective from the date it is published on our website or communicated to clients.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms & Conditions are governed by the laws of India. Any disputes shall be resolved in the courts of Tenkasi, Tamil Nadu.
              </p>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
