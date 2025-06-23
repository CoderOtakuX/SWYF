import { Zap, Shirt, Heart, Sparkles, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
const Features = () => {
  return <section id="features" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
            Key Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Choose Swyf?</h2>
          <p className="text-lg text-foreground/70">
            Our virtual try-on experience provides unmatched benefits, helping you shop with confidence and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slideUp">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Zap size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Accurate Fit, Fewer Returns</h3>
            <p className="text-foreground/70">
              Our AI-powered sizing recommendations ensure you get the perfect fit every time, dramatically reducing returns.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slideUp animation-delay-100">
            <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center mb-6">
              <Shirt size={24} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Virtual Try-On</h3>
            <p className="text-foreground/70">
              See outfits on your digital avatar in real-time before purchasing, ensuring you'll love how they look.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slideUp animation-delay-200">
            <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center mb-6">
              <Leaf size={24} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Eco-Friendly Shopping</h3>
            <p className="text-foreground/70">
              Lower return rates mean less shipping waste and a smaller carbon footprint for your fashion purchases.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slideUp animation-delay-300">
            <div className="w-12 h-12 rounded-full bg-pink-400/10 flex items-center justify-center mb-6">
              <Heart size={24} className="text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Online & In-Store Integration</h3>
            <p className="text-foreground/70">
              Experience our technology anywhere with seamless integration across web, mobile app, and in-store mirrors.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slideUp animation-delay-400">
            <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
              <Sparkles size={24} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Color Analysis & Suggestions</h3>
            <p className="text-foreground/70">
              Our AI analyzes your skin tone and suggests colors and styles that perfectly complement your unique features.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 slideUp animation-delay-500">
            <div className="w-12 h-12 rounded-full bg-orange-400/10 flex items-center justify-center mb-6">
              <Shield size={24} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy & Security</h3>
            <p className="text-foreground/70">
              On-device processing ensures your personal data stays private while you enjoy our advanced try-on experience.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/features" className="inline-flex items-center text-primary font-medium hover:underline">
            Learn more about our features
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>;
};
export default Features;