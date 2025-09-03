
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Clock,
  Send,
  MessageSquare,
  Languages,
  Linkedin,
  Twitter
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // Form will be submitted to FormSubmit.co automatically
    // The loading state will be reset when the page redirects or reloads
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Watermark Background Image */}
      <div 
        className="absolute inset-0 opacity-15 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: 'url(https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/get_in_touch.png)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve 
            your goals with our culturally grounded, affordable consulting services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Let's Connect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">bizthozhan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 88706 77255</p>
                    <p className="text-xs text-muted-foreground">WhatsApp Available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Linkedin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/biz-thozhan-the-business-docter-b9679b379?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ38AYSUPTFOZgFWLh%2BuOMA%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      @bizthozhan
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Twitter className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Twitter</p>
                    <a 
                      href="https://x.com/bizthozhan?s=21" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      @bizthozhan
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Languages className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Languages</p>
                    <p className="text-sm text-muted-foreground">
                      Tamil | English | Hindi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: Consultation by Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Business Transformation Journey</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and get a free consultation within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formsubmit.co/bizthozhan@gmail.com" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* FormSubmit.co configuration fields */}
                  <input type="hidden" name="_subject" value="New Business Consultation Request from Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={`${window.location.origin}?message=success`} />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                        City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="e.g., Coimbatore, Salem, Chennai"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Select your business type</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail/Trading</option>
                        <option value="services">Services</option>
                        <option value="food">Food & Beverages</option>
                        <option value="textile">Textile</option>
                        <option value="technology">Technology</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="tamil">Tamil</option>
                        <option value="english">English</option>
                        <option value="both">Both Tamil & English</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell us about your business *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Describe your business, current challenges, and what kind of support you're looking for..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Get Free Consultation"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from Biz Thozhan. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
