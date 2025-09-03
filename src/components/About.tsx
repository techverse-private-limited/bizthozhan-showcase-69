
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Culturally Rooted",
      description: "We understand your local business culture and speak your language - Tamil and English."
    },
    {
      icon: MapPin,
      title: "Field-Level Support",
      description: "Practical, on-ground assistance that goes beyond theoretical consulting."
    },
    {
      icon: Users,
      title: "MSME Focused",
      description: "Specialized expertise in micro, small, and medium enterprise challenges and opportunities."
    },
    {
      icon: Award,
      title: "Affordable Excellence",
      description: "Premium consulting services at prices that won't strain your business budget."
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Our Founder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet Sheik Mohamed Bakrudeen, the visionary behind Biz Thozhan's success in 
            empowering Indian MSMEs with strategic business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                Sheik Mohamed Bakrudeen
              </h3>
              <p className="text-lg text-muted-foreground font-medium">
                The Business Doctor
              </p>
              <a 
                href="https://www.linkedin.com/in/sheik-mohamed-b-b066b9255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-muted-foreground font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Founder of Biz Thozhan
              </a>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The business Thozhan - A passionate business consultant with expertise in helping MSMEs grow through 
              comprehensive strategies, branding, re-branding, digital marketing, financial 
              growth planning, and business development services.
            </p>
            <div className="space-y-3">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Education</h4>
                <p className="text-foreground">PGDM / Global MBA</p>
                <p className="text-muted-foreground">Finance and Marketing</p>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Mission</h4>
                <p className="text-muted-foreground">
                  "Empowering MSMEs with culturally grounded business solutions that drive 
                  sustainable growth and success in the Indian market."
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Vision</h4>
                <p className="text-muted-foreground">
                  "To become the most trusted growth partner for MSMEs by offering strategic, affordable, and 
                  impactful consulting services tailored to the Indian business landscape."
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/sheik_broo.png" 
              alt="Sheik Mohamed Bakrudeen - Founder of Biz Thozhan" 
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-6">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
