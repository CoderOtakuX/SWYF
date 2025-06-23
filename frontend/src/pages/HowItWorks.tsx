import { 
  Upload, Camera, Palette, Shirt, ShoppingCart, 
  ChevronRight, HelpCircle, CheckCircle 
} from 'lucide-react';
import Layout from '@/components/Layout';
import { useTheme } from '@/contexts/ThemeContext';

const HowItWorks = () => {
  const { isDarkMode } = useTheme();

  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Step-by-Step Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              How <span className="text-gradient">SWYF</span> Works
            </h1>
            <p className="text-lg text-foreground/80">
              Experience the future of fashion shopping with our AI-powered virtual try-on technology that makes finding the perfect outfit easier than ever.
            </p>
          </div>
        </section>
        
        {/* Step-by-Step Guide */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-20">
            {/* Step 1 */}
            <div className="glass-card rounded-2xl p-8 lg:col-span-3 fadeIn">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Upload a Selfie</h2>
                  <p className="text-foreground/80">
                    Simply upload a selfie or use your camera to let our AI scan your body proportions and skin tone for the most accurate virtual try-on experience.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Takes only seconds</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Works with any camera</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Secure on-device processing</span>
                </div>
              </div>
              
              <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                Selfie Upload Interface
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:col-span-2 flex flex-col justify-center items-center fadeIn animation-delay-100">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Upload size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Secure Image Processing</h3>
              <p className="text-foreground/70 text-center mb-4">
                Your selfie is processed on-device for privacy. We never store your photos without permission.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="glass-card rounded-2xl p-8 lg:col-span-2 flex flex-col justify-center items-center fadeIn">
              <div className="w-24 h-24 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
                <Palette size={40} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">AI Analysis & Suggestions</h3>
              <p className="text-foreground/70 text-center mb-4">
                Our advanced AI studies your skin tone, body shape, and proportions to create personalized recommendations.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:col-span-3 fadeIn animation-delay-100">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">AI Suggestions</h2>
                  <p className="text-foreground/80">
                    Receive personalized outfit and color recommendations that complement your unique features, curated by our sophisticated AI algorithm.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Color palette matching</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Style preference learning</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Seasonal trend adaptation</span>
                </div>
              </div>
              
              <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                AI Recommendation Interface
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="glass-card rounded-2xl p-8 lg:col-span-3 fadeIn">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Select Your Outfit</h2>
                  <p className="text-foreground/80">
                    Browse through a curated selection of outfits that match your style preferences and body type, with personalized recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Personalized catalog</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Multi-retailer options</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Size-appropriate filtering</span>
                </div>
              </div>
              
              <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                Product Selection Interface
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:col-span-2 flex flex-col justify-center items-center fadeIn animation-delay-100">
              <div className="w-24 h-24 rounded-full bg-pink-400/10 flex items-center justify-center mb-6">
                <Shirt size={40} className="text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Endless Style Options</h3>
              <p className="text-foreground/70 text-center mb-4">
                Access thousands of products from popular retailers, all matched to your personal style profile.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="glass-card rounded-2xl p-8 lg:col-span-2 flex flex-col justify-center items-center fadeIn">
              <div className="w-24 h-24 rounded-full bg-purple-400/10 flex items-center justify-center mb-6">
                <Camera size={40} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Real-time AR Technology</h3>
              <p className="text-foreground/70 text-center mb-4">
                Our augmented reality engine renders clothing with accurate sizing, patterns, and textures in real-time.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:col-span-3 fadeIn animation-delay-100">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">AR Try-On & Adjustments</h2>
                  <p className="text-foreground/80">
                    See selected clothing on your body in real-time with our AR overlay. Adjust fit preferences and explore different sizes without physically changing clothes.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>360° viewing angles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Real-time size adjustments</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Fabric texture simulation</span>
                </div>
              </div>
              
              <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                AR Try-On Interface
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="glass-card rounded-2xl p-8 lg:col-span-3 fadeIn">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Purchase & Checkout</h2>
                  <p className="text-foreground/80">
                    Complete your purchase with our secure checkout system. Track your order and enjoy the confidence of knowing your new clothes will fit perfectly.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Multiple payment options</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Order tracking & history</span>
                </div>
              </div>
              
              <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                Checkout Interface
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:col-span-2 flex flex-col justify-center items-center fadeIn animation-delay-100">
              <div className="w-24 h-24 rounded-full bg-green-400/10 flex items-center justify-center mb-6">
                <ShoppingCart size={40} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Seamless Shopping</h3>
              <p className="text-foreground/70 text-center mb-4">
                Purchase directly through our platform or be redirected to retailer checkout for a seamless shopping experience.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 ${isDarkMode ? 'bg-card' : 'bg-white'} rounded-3xl shadow-sm ${isDarkMode ? 'border border-border' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Common Questions About SWYF
            </h2>
            <p className="text-lg text-foreground/70">
              Find answers to the most common questions about our virtual try-on technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 fadeIn">
            <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
              <div className="flex items-start">
                <HelpCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">How accurate is the virtual try-on?</h3>
                  <p className="text-foreground/70 text-sm">
                    Our AI-powered virtual try-on accurately represents how clothing will look and fit on your body. While no virtual solution is perfect, our users report 92% satisfaction with the accuracy, and our technology continuously improves with each use.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
              <div className="flex items-start">
                <HelpCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">Is my personal data secure?</h3>
                  <p className="text-foreground/70 text-sm">
                    Absolutely. We prioritize your privacy with on-device processing for sensitive data. Your measurements and biometric data never leave your device. We only store the minimum necessary information to provide our service, and you can delete your data at any time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
              <div className="flex items-start">
                <HelpCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">Which retailers are compatible with SWYF?</h3>
                  <p className="text-foreground/70 text-sm">
                    SWYF works with hundreds of partner retailers, from major brands to boutique stores. Our list of partners is constantly growing. You can check our app for the current list of supported retailers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
              <div className="flex items-start">
                <HelpCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">How long does it take to create my avatar?</h3>
                  <p className="text-foreground/70 text-sm">
                    Creating your initial avatar takes just 30 seconds with a good selfie. The more information you provide (like height and preferences), the more accurate your virtual try-on experience will be.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
              <div className="flex items-start">
                <HelpCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">Can I use SWYF on both mobile and desktop?</h3>
                  <p className="text-foreground/70 text-sm">
                    Yes! SWYF is fully optimized for both mobile and desktop experiences. Our responsive design ensures you get a great experience whether you're shopping on your phone, tablet, or computer.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
              <div className="flex items-start">
                <HelpCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-3">How do retailers integrate with SWYF?</h3>
                  <p className="text-foreground/70 text-sm">
                    We offer flexible integration options for retailers, from simple API connections to full white-label solutions. Our team works closely with each partner to ensure a seamless implementation that matches their brand experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Ready to experience the future of shopping?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Try our revolutionary virtual fitting room technology and see the difference for yourself.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center"
                >
                  Try It Now
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a 
                  href="#" 
                  className={`px-6 py-3 rounded-full ${isDarkMode ? 'bg-accent text-accent-foreground' : 'bg-white text-foreground'} border border-border font-medium hover:bg-accent/70 transition-all flex items-center justify-center`}
                >
                  See It In Action
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;
