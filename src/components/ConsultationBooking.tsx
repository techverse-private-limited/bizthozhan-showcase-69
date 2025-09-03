
import { useState } from "react";
import { Calendar, Clock, User, Building2, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface BookingFormData {
  name: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  date: Date | undefined;
  timeSlot: string;
  businessDescription: string;
}

const ConsultationBooking = ({ triggerButton }: { triggerButton?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    date: undefined,
    timeSlot: '',
    businessDescription: ''
  });

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM", 
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM"
  ];

  const handleInputChange = (field: keyof BookingFormData, value: string | Date) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("🚀 Form submission started");
    console.log("Form data:", formData);
    
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.companyName || !formData.date || !formData.timeSlot) {
      console.log("❌ Validation failed - missing required fields");
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const dayName = formData.date ? format(formData.date, 'EEEE') : '';
      const dateFormatted = formData.date ? format(formData.date, 'PPP') : '';
      
      const emailData = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        companyName: formData.companyName,
        date: `${dateFormatted} (${dayName})`,
        timeSlot: formData.timeSlot,
        businessDescription: formData.businessDescription,
        submittedAt: new Date().toLocaleString()
      };

      console.log("📧 About to call edge function with data:", emailData);
      console.log("📡 Using supabase client:", !!supabase);
      
      // Test if supabase client is working
      console.log("🔧 Testing supabase connection...");
      
      const { data, error } = await supabase.functions.invoke('send-consultation-email', {
        body: emailData
      });

      console.log("📨 Edge function response received");
      console.log("✅ Response data:", data);
      console.log("❌ Response error:", error);

      if (error) {
        console.error("🔥 Edge function error details:", error);
        throw new Error(`Edge function error: ${error.message || JSON.stringify(error)}`);
      }

      if (!data || !data.success) {
        console.error("💥 Unexpected response from edge function:", data);
        throw new Error(data?.error || "Failed to send consultation request");
      }

      console.log("🎉 Email sent successfully:", data);
      toast.success("Consultation scheduled successfully! We'll contact you within 24 hours to confirm your appointment.");
      
      // Reset form and close modal
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        date: undefined,
        timeSlot: '',
        businessDescription: ''
      });
      setIsOpen(false);
      
    } catch (error: any) {
      console.error("💣 Error submitting consultation booking:", error);
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
      toast.error(`Failed to schedule consultation: ${error.message || 'Please try again or contact us directly.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultTrigger = (
    <Button size="lg" className="btn-hover btn-gradient btn-pulse">
      Schedule Free Consultation Call
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Schedule Your Free Consultation
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Book a personalized consultation session with our business experts
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <User className="inline h-4 w-4 mr-1" />
                Full Name *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Phone className="inline h-4 w-4 mr-1" />
                Phone Number *
              </label>
              <Input
                required
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="+91 9876543210"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Mail className="inline h-4 w-4 mr-1" />
                Email Address *
              </label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Building2 className="inline h-4 w-4 mr-1" />
                Company Name *
              </label>
              <Input
                required
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Preferred Date *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.date && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => handleInputChange('date', date as Date)}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Preferred Time *
              </label>
              <select
                required
                value={formData.timeSlot}
                onChange={(e) => handleInputChange('timeSlot', e.target.value)}
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="">Select time slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <MessageSquare className="inline h-4 w-4 mr-1" />
              Business Description (Optional)
            </label>
            <Textarea
              value={formData.businessDescription}
              onChange={(e) => handleInputChange('businessDescription', e.target.value)}
              placeholder="Tell us about your business, current challenges, or what you'd like to discuss..."
              className="min-h-24"
            />
          </div>

          <div className="space-y-4">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              By scheduling this consultation, you agree to receive communications from Biz Thozhan. 
              We'll contact you within 24 hours to confirm your appointment.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationBooking;
