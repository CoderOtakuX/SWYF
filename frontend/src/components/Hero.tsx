import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-32 overflow-hidden">
      {/* Content layer with backdrop filter for better readability over Spline background */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 fadeIn">
              See What You <span className="text-gradient">Fit</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 slideUp animation-delay-100">
              Experience the future of online shopping with our virtual try-on technology. 
              Find your perfect fit without leaving home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slideUp animation-delay-200">
              <Button 
                asChild 
                className={`bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-lg ${isDarkMode ? 'shadow-lg shadow-primary/20' : ''}`}
              >
                <Link to="#try-now">
                  Try Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className={`px-6 py-3 rounded-full bg-background/80 backdrop-blur-sm border-accent text-lg ${isDarkMode ? 'border-accent/50 hover:border-accent/80' : ''}`}
              >
                <Link to="/business-model">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative blur elements positioned for centered layout */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
