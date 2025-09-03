
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, TrendingUp, Calendar } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Salem Textile Manufacturing Unit",
      category: "MSME Compliance & Growth",
      description: "Complete MSME registration, GST compliance, and digital marketing setup for a family-owned textile business.",
      location: "Salem, Tamil Nadu",
      results: ["₹15L revenue increase", "100% compliance achieved", "30% cost reduction", "Digital presence established"],
      businessType: "Manufacturing",
      clientSize: "25 employees"
    },
    {
      title: "Coimbatore Home-Based Food Business",
      category: "Business Registration & Scaling",
      description: "Helped transform a home kitchen into a registered food business with proper licensing and online presence.",
      location: "Coimbatore, Tamil Nadu",
      results: ["FSSAI license obtained", "200% order increase", "Online delivery setup", "Brand identity created"],
      businessType: "Food & Beverages",
      clientSize: "Family business"
    },
    {
      title: "Madurai Auto Parts Retailer",
      category: "Digital Transformation",
      description: "Complete digital makeover including inventory management, online catalog, and customer relationship system.",
      location: "Madurai, Tamil Nadu",
      results: ["40% inventory efficiency", "WhatsApp business setup", "₹8L additional revenue", "Customer database created"],
      businessType: "Retail",
      clientSize: "12 employees"
    },
    {
      title: "Women Entrepreneurs Collective",
      category: "Training & Development",
      description: "Conducted comprehensive business training workshops for 50+ women entrepreneurs in rural Tamil Nadu.",
      location: "Multiple Districts",
      results: ["50+ businesses trained", "85% implementation rate", "₹25L combined revenue growth", "Ongoing mentorship"],
      businessType: "Training Program",
      clientSize: "50+ participants"
    },
    {
      title: "Tirupur Garment Export Unit",
      category: "Strategic Planning & Compliance",
      description: "Export documentation, quality control systems, and international market entry strategy development.",
      location: "Tirupur, Tamil Nadu",
      results: ["Export license obtained", "EU market entry", "Quality certification", "₹50L export orders"],
      businessType: "Manufacturing & Export",
      clientSize: "75 employees"
    },
    {
      title: "Chennai Tech Startup MSME Setup",
      category: "Startup Consulting",
      description: "End-to-end business setup including MSME registration, funding guidance, and operational framework.",
      location: "Chennai, Tamil Nadu",
      results: ["MSME registration", "₹20L seed funding", "Legal compliance", "Team structure setup"],
      businessType: "Technology",
      clientSize: "8 employees"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses, real growth. See how we've helped MSMEs across Tamil Nadu 
            achieve their business goals with our culturally grounded approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1 text-primary" />
                    <span className="text-muted-foreground">{project.clientSize}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-primary" />
                    <span className="text-muted-foreground">{project.businessType}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.results.map((result, resultIndex) => (
                      <Badge key={resultIndex} variant="outline" className="text-xs justify-center">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-primary/5 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join hundreds of MSMEs who have transformed their businesses with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Free Business Assessment
            </Button>
            <Button variant="outline" size="lg">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
