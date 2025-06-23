import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary" : "text-foreground/80";
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 ${isScrolled ? `py-4 ${isDarkMode ? "bg-background/80" : "bg-white/80"} backdrop-blur-lg shadow-sm` : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="SWYF Logo" className="h-14 w-22" />
          <div className="flex flex-col">
            
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" className={`text-sm font-medium ${isActive('/features')} hover:text-brand-teal transition-colors`}>
            Features
          </Link>
          <Link to="/how-it-works" className={`text-sm font-medium ${isActive('/how-it-works')} hover:text-brand-green transition-colors`}>
            How It Works
          </Link>
          <Link to="/business-model" className={`text-sm font-medium ${isActive('/business-model')} hover:text-brand-pink transition-colors`}>
            Business Model
          </Link>
          <Link to="/projects" className={`text-sm font-medium ${isActive('/projects')} hover:text-brand-yellow transition-colors`}>
            Projects
          </Link>
          <Link to="/rewards" className={`text-sm font-medium ${isActive('/rewards')} hover:text-brand-orange transition-colors`}>
            Rewards
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/projects" className="px-4 py-2 rounded-full bg-brand-teal text-white text-sm font-medium hover:bg-brand-teal/90 transition-colors">
            Try Free
          </Link>
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className={`absolute top-full left-0 right-0 ${isDarkMode ? "bg-background" : "bg-white"} shadow-lg py-4 px-6 md:hidden`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/features" className={`text-sm font-medium ${isActive('/features')} hover:text-brand-teal transition-colors`}>
              Features
            </Link>
            <Link to="/how-it-works" className={`text-sm font-medium ${isActive('/how-it-works')} hover:text-brand-green transition-colors`}>
              How It Works
            </Link>
            <Link to="/business-model" className={`text-sm font-medium ${isActive('/business-model')} hover:text-brand-pink transition-colors`}>
              Business Model
            </Link>
            <Link to="/projects" className={`text-sm font-medium ${isActive('/projects')} hover:text-brand-yellow transition-colors`}>
              Projects
            </Link>
            <Link to="/rewards" className={`text-sm font-medium ${isActive('/rewards')} hover:text-brand-orange transition-colors`}>
              Rewards
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/projects" className="px-4 py-2 rounded-full bg-brand-teal text-white text-sm font-medium hover:bg-brand-teal/90 transition-colors text-center">
                Try Free
              </Link>
            </div>
          </nav>
        </div>}
    </header>;
};

export default Navbar;
