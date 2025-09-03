
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Users, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Empowering Indian MSMEs Since Day One
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                Your Business Growth Partner
                <span className="text-primary block">for Success</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in">
                Affordable, personalized consulting for micro, small & medium enterprises. 
                From business audits to digital marketing - we understand your needs and drive real growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="btn-hover btn-pulse btn-gradient group"
              >
                Get Free Business Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="btn-hover btn-outline-animated"
              >
                Book Consultation Call
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-2 animate-fade-in">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Expert Business Support</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">MSME Compliance Experts</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Field-Level Practical Support</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Affordable Pricing</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-4 justify-center lg:justify-start">
              <div className="text-center lg:text-left animate-fade-in">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">MSMEs Empowered</p>
              </div>
              <div className="text-center lg:text-left animate-fade-in">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">15+</span>
                </div>
                <p className="text-sm text-muted-foreground">Districts Covered</p>
              </div>
              <div className="text-center lg:text-left animate-fade-in">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground">85%</span>
                </div>
                <p className="text-sm text-muted-foreground">Business Growth Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative float-animation">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/bizthozhan_logo.png" 
                alt="Biz Thozhan - Empowering MSMEs" 
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
