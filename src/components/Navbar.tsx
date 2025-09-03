
import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.link/i313mk', '_blank');
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/bizthozhanlogo_1.png" 
                alt="Biz Thozhan Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-foreground">BIZ THOZHAN</span>
                <p className="text-xs text-muted-foreground">The business doctor</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${
                  activeSection === 'home' 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors ${
                  activeSection === 'about' 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-colors ${
                  activeSection === 'services' 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </button>
              <Button onClick={() => scrollToSection('contact')} size="sm">
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button - Hidden since we have bottom nav */}
            <div className="md:hidden">
              {/* Just the logo area, no menu button needed */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="px-4 py-2">
          <div className="flex items-center justify-around max-w-md mx-auto">
            {/* Home */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex flex-col items-center space-y-1 px-3 py-2 transition-colors text-muted-foreground hover:text-primary"
            >
              <div className={`rounded-full p-2 transition-colors ${
                activeSection === 'home' ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                <Home size={20} />
              </div>
              <span className={`text-xs font-medium ${
                activeSection === 'home' ? 'text-primary' : ''
              }`}>Home</span>
            </button>

            {/* About */}
            <button 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center space-y-1 px-3 py-2 transition-colors text-muted-foreground hover:text-primary"
            >
              <div className={`rounded-full p-2 transition-colors ${
                activeSection === 'about' ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                <User size={20} />
              </div>
              <span className={`text-xs font-medium ${
                activeSection === 'about' ? 'text-primary' : ''
              }`}>About</span>
            </button>

            {/* WhatsApp - Center */}
            <button 
              onClick={handleWhatsAppClick}
              className="flex flex-col items-center space-y-1 px-3 py-2 text-foreground hover:text-foreground/90 transition-colors"
            >
              <div className="bg-green-500 rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-foreground">WhatsApp</span>
            </button>

            {/* Services */}
            <button 
              onClick={() => scrollToSection('services')}
              className="flex flex-col items-center space-y-1 px-3 py-2 transition-colors text-muted-foreground hover:text-primary"
            >
              <div className={`rounded-full p-2 transition-colors ${
                activeSection === 'services' ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                <Briefcase size={20} />
              </div>
              <span className={`text-xs font-medium ${
                activeSection === 'services' ? 'text-primary' : ''
              }`}>Services</span>
            </button>

            {/* Contact */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex flex-col items-center space-y-1 px-3 py-2 transition-colors text-muted-foreground hover:text-primary"
            >
              <div className={`rounded-full p-2 transition-colors ${
                activeSection === 'contact' ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                <Phone size={20} />
              </div>
              <span className={`text-xs font-medium ${
                activeSection === 'contact' ? 'text-primary' : ''
              }`}>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
