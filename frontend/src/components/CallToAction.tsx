import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const CallToAction = () => {
  const { isDarkMode } = useTheme();

  return <section id="try-now" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300/10 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="glass-morphism rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Transform Your Shopping Experience?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Join thousands of satisfied users who have revolutionized the way they shop for clothes online.
              </p>
              
              
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/projects" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                  Try SWYF Now
                </Link>
                <Link to="/projects" className={`px-8 py-3 rounded-full ${isDarkMode ? 'bg-accent text-accent-foreground' : 'bg-white text-foreground'} font-medium hover:bg-accent/70 transition-all border border-border/60 flex items-center justify-center`}>
                  View Demo
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5k+</div>
                <div className="text-sm text-foreground/70">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-foreground/70">Retail Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10k+</div>
                <div className="text-sm text-foreground/70">Clothing Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-foreground/70">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CallToAction;
