
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ClipboardCheck, 
  TrendingUp, 
  Smartphone, 
  Settings, 
  DollarSign, 
  FileCheck,
  Palette,
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import ConsultationBooking from "./ConsultationBooking";

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Business Audits & Assessment",
      description: "Comprehensive evaluation of your business operations, finances, and growth potential.",
      features: ["Financial Health Check", "Operational Analysis", "Market Position Review", "Growth Opportunities"]
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Customized business strategies aligned with local market conditions and your goals.",
      features: ["Business Plan Development", "Market Entry Strategy", "Competitive Analysis", "Growth Roadmap"]
    },
    {
      icon: Smartphone,
      title: "Digital Marketing Setup",
      description: "Complete digital presence setup with comprehensive content strategies.",
      features: ["Social Media Setup", "Website Development", "Google My Business", "Content Strategy"]
    },
    {
      icon: Settings,
      title: "Operations Optimization",
      description: "Streamline your business processes for maximum efficiency and cost reduction.",
      features: ["Process Mapping", "Workflow Optimization", "Quality Control", "Cost Reduction"]
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Expert financial guidance including budgeting, cash flow, and funding support.",
      features: ["Cash Flow Analysis", "Budget Planning", "Investment Guidance", "Loan Applications"]
    },
    {
      icon: FileCheck,
      title: "Legal & MSME Compliance",
      description: "Complete compliance support for MSME registration, GST, and legal requirements.",
      features: ["MSME Registration", "GST Filing", "License Applications", "Legal Documentation"]
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Professional branding services that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Positioning"]
    },
    {
      icon: GraduationCap,
      title: "Training Workshops",
      description: "Skill development workshops for entrepreneurs and teams.",
      features: ["Business Skills Training", "Digital Marketing", "Financial Literacy", "Leadership Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Watermark Background Image */}
      <div 
        className="absolute inset-0 opacity-15 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: 'url(https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/our_services.png)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive business solutions designed specifically for Indian MSMEs, 
            delivered with cultural understanding and practical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <ArrowRight className="h-3 w-3 text-primary mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-foreground">Need a Custom Package?</h3>
          <p className="text-muted-foreground">We are having an option to discuss about their business based on their convenience. Just fill the form, we will contact you on your preference</p>
          <ConsultationBooking 
            triggerButton={
              <Button size="lg" className="btn-hover btn-gradient btn-pulse">
                Schedule the Meeting Based on Your Convenience
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
