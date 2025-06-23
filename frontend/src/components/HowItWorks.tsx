import { Shirt, Search, ShoppingCart, CreditCard, Package, Camera } from "lucide-react";
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const HowItWorks = () => {
  const { isDarkMode } = useTheme();
  
  return <section id="how-it-works" className="bg-muted py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            See What You Fit - In Action
          </h2>
          <p className="text-lg text-foreground/70">
            Our intuitive process makes it easy to find the perfect fit for your body and style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
          {/* Step 1 */}
          <div className={`${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-md p-6 relative flex flex-col items-center text-center group hover:shadow-lg transition-shadow ${isDarkMode ? 'border border-border' : ''}`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <span className="font-bold">1</span>
            </div>
            <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mb-5 mt-3 group-hover:bg-primary/30 transition-colors`}>
              <Search className="text-primary" size={30} />
            </div>
            <h3 className="font-bold text-lg mb-2">Browse Collections</h3>
            <p className="text-foreground/70 text-sm">
              Explore our extensive catalog of clothes from top brands and designers
            </p>
          </div>
          
          {/* Step 2 - Updated to Live Camera */}
          <div className={`${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-md p-6 relative flex flex-col items-center text-center group hover:shadow-lg transition-shadow ${isDarkMode ? 'border border-border' : ''}`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <span className="font-bold">2</span>
            </div>
            <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mb-5 mt-3 group-hover:bg-primary/30 transition-colors`}>
              <Camera className="text-primary" size={30} />
            </div>
            <h3 className="font-bold text-lg mb-2">Use Live Camera</h3>
            <p className="text-foreground/70 text-sm">
              Launch our live camera to instantly create your digital twin for a perfect virtual fitting
            </p>
          </div>
          
          {/* Step 3 */}
          <div className={`${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-md p-6 relative flex flex-col items-center text-center group hover:shadow-lg transition-shadow ${isDarkMode ? 'border border-border' : ''}`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <span className="font-bold">3</span>
            </div>
            <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mb-5 mt-3 group-hover:bg-primary/30 transition-colors`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 7v7a2 2 0 0 0 2 2h16" />
                <path d="M18 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M18 18H9.8" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Virtual Try-On</h3>
            <p className="text-foreground/70 text-sm">
              See what you fit with our AI-powered visualization technology
            </p>
          </div>
          
          {/* Step 4 */}
          <div className={`${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-md p-6 relative flex flex-col items-center text-center group hover:shadow-lg transition-shadow ${isDarkMode ? 'border border-border' : ''}`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <span className="font-bold">4</span>
            </div>
            <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mb-5 mt-3 group-hover:bg-primary/30 transition-colors`}>
              <ShoppingCart className="text-primary" size={30} />
            </div>
            <h3 className="font-bold text-lg mb-2">Add to Cart</h3>
            <p className="text-foreground/70 text-sm">
              Choose your perfect items with confidence and add them to your cart
            </p>
          </div>
          
          {/* Step 5 */}
          <div className={`${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-md p-6 relative flex flex-col items-center text-center group hover:shadow-lg transition-shadow ${isDarkMode ? 'border border-border' : ''}`}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
              <span className="font-bold">5</span>
            </div>
            <div className={`w-16 h-16 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mb-5 mt-3 group-hover:bg-primary/30 transition-colors`}>
              <CreditCard className="text-primary" size={30} />
            </div>
            <h3 className="font-bold text-lg mb-2">Easy Checkout</h3>
            <p className="text-foreground/70 text-sm">
              Complete your purchase with our secure and simple checkout process
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Ready to experience the perfect fit?</h3>
          <Link to="/projects" className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">Try SWYF Now</Link>
        </div>
      </div>
    </section>;
};
export default HowItWorks;
