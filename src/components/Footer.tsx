import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/bizthozhanlogo_1.png" 
                  alt="Biz Thozhan Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <span className="text-xl font-bold">BIZ THOZHAN</span>
                  <p className="text-xs text-primary-foreground/80">MSME Business Consulting</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Empowering Indian MSMEs with culturally grounded, affordable business consulting 
                in Tamil and English.
              </p>
              <p className="text-primary-foreground/60 text-xs">
                Your trusted business growth partner
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <p>+91 8870677255</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <p>bizthozhan@gmail.com</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon - Sat: 9 AM - 7 PM</p>
                    <p className="text-xs">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-primary-foreground/60 text-center md:text-left">
                <p>
                  © 2025 Biz Thozhan. All rights reserved. | Your trusted business growth partner
                </p>
                <p className="mt-1">
                  Powered by{" "}
                  <a 
                    href="https://techverseinfotechprivatelimited.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors underline"
                  >
                    Techverse Infotech Private Limited
                  </a>
                </p>
              </div>
              <div className="flex space-x-6 text-sm text-primary-foreground/60">
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setIsTermsModalOpen(true)}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
