import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Mail, ArrowRight, MapPin, Phone, Mail as MailIcon, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ContactInfo = ({
  icon: Icon,
  title,
  content
}) => <div className="flex items-start mb-4">
    <div className="mr-3 mt-1">
      <Icon size={16} className="text-primary" />
    </div>
    <div>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-sm text-foreground/70">{content}</p>
    </div>
  </div>;

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className="bg-accent/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-foreground">SWYF</span>
                <span className="text-sm italic text-foreground/70">See What You Fit</span>
              </div>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Revolutionizing fashion retail with AI-powered virtual try-on technology that reduces returns and enhances the shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-muted hover:bg-primary/20' : 'bg-foreground/5 hover:bg-primary/10'} flex items-center justify-center hover:text-primary transition-colors`}>
                <Twitter size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-muted hover:bg-primary/20' : 'bg-foreground/5 hover:bg-primary/10'} flex items-center justify-center hover:text-primary transition-colors`}>
                <Facebook size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-muted hover:bg-primary/20' : 'bg-foreground/5 hover:bg-primary/10'} flex items-center justify-center hover:text-primary transition-colors`}>
                <Instagram size={18} />
              </a>
              <a href="#" className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-muted hover:bg-primary/20' : 'bg-foreground/5 hover:bg-primary/10'} flex items-center justify-center hover:text-primary transition-colors`}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>
                <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/business-model" className="hover:text-primary transition-colors">Business Model</Link>
              </li>
              <li>
                <Link to="/blockchain-features" className="hover:text-primary transition-colors">Blockchain</Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-primary transition-colors">Rewards</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">Try On</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ContactInfo 
              icon={MapPin}
              title="Our Headquarters"
              content="Sector 61, Noida, Uttar Pradesh, India"
            />
            <ContactInfo 
              icon={Phone}
              title="Phone Number"
              content="+91 8588077790"
            />
            <ContactInfo 
              icon={MailIcon}
              title="Email Address"
              content="swyam7@gmail.com"
            />
            <ContactInfo 
              icon={Clock}
              title="Business Hours"
              content="Monday - Friday: 9am - 6pm IST"
            />
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-foreground/70 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and innovations.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className={`px-4 py-2 rounded-l-full border border-border focus:outline-none focus:ring-1 focus:ring-primary w-full ${isDarkMode ? 'bg-muted' : 'bg-white'}`}
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-full hover:bg-primary/90 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SWYF - See What You Fit. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
