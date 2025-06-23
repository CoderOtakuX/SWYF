import { CreditCard, BarChart, ShoppingBag, Store, ChevronRight, CheckCircle, Briefcase, Building, Globe, DollarSign, Smartphone, Users, Database, CreditCard as CreditCardIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import { useTheme } from "@/contexts/ThemeContext";

const BusinessModel = () => {
  const { isDarkMode } = useTheme();

  return <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Our Revenue Model
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              How <span className="text-gradient">Swyf</span> Creates Value
            </h1>
            <p className="text-lg text-foreground/80">A comprehensive overview of our B2C and B2B revenue streams, demonstrating how Swyf builds a sustainable business while revolutionizing fashion retail.</p>
          </div>
        </section>
        
        {/* Business Model Overview */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* B2B Model */}
            <div className="glass-card rounded-2xl p-8 fadeIn">
              <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center mb-6">
                <Building size={24} className="text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold mb-6">B2B (Business-to-Business)</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">B2B Licensing</h3>
                    <p className="text-foreground/70 text-sm">
                      We offer licensing options for brands and online retailers to integrate our AI-powered virtual try-on technology directly into their own platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CreditCard size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Subscription Plans</h3>
                    <p className="text-foreground/70 text-sm">
                      Retailers can choose from tiered monthly or yearly subscription plans to use our online and app-based try-on features, with packages designed for businesses of all sizes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Integration Fees</h3>
                    <p className="text-foreground/70 text-sm">
                      We charge for setting up our retail virtual mirror solutions and connecting them with existing store systems in physical locations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Database size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Data Insights</h3>
                    <p className="text-foreground/70 text-sm">
                      We sell anonymized and aggregated data insights on shopper preferences and behaviors to fashion brands and market research firms.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Enterprise solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Retail integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Data-driven insights</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* B2C Model */}
            <div className="glass-card rounded-2xl p-8 fadeIn animation-delay-100">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
                <Users size={24} className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold mb-6">B2C (Business-to-Consumer)</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Smartphone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Try Now Option & Marketplace</h3>
                    <p className="text-foreground/70 text-sm">
                      We offer a direct "Try Now" option for consumers on our platform and plan to launch our own fashion marketplace for direct customer interaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Freemium Model</h3>
                    <p className="text-foreground/70 text-sm">
                      Basic features are available to consumers at no cost, while premium features require paid upgrades.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CreditCardIcon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Premium Consumer Features</h3>
                    <p className="text-foreground/70 text-sm">
                      We offer premium features such as unlimited virtual closet storage for individual consumers who want enhanced functionality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <ShoppingBag size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Enhanced Shopping Experience</h3>
                    <p className="text-foreground/70 text-sm">
                      We improve the shopping experience for individual customers by providing accurate fit and style recommendations, reducing returns and increasing satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Direct consumer access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Tiered pricing model</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Premium upgrades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Revenue Streams */}
          <div className="glass-card rounded-2xl p-8 mb-16 fadeIn">
            <h2 className="text-2xl font-bold mb-6">Additional Revenue Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 ${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-sm ${isDarkMode ? 'border border-border' : ''}`}>
                <h3 className="font-bold mb-3">API Access for Developers</h3>
                <p className="text-foreground/70 text-sm">
                  Third-party developers can access our API to build complementary apps and services that extend the Swyf ecosystem.
                </p>
              </div>
              
              <div className={`p-6 ${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-sm ${isDarkMode ? 'border border-border' : ''}`}>
                <h3 className="font-bold mb-3">Marketplace Commission</h3>
                <p className="text-foreground/70 text-sm">
                  Our fashion marketplace will generate revenue through commission on sales facilitated through our platform.
                </p>
              </div>
              
              <div className={`p-6 ${isDarkMode ? 'bg-card' : 'bg-white'} rounded-xl shadow-sm ${isDarkMode ? 'border border-border' : ''}`}>
                <h3 className="font-bold mb-3">Blockchain Integration</h3>
                <p className="text-foreground/70 text-sm">
                  Enhanced security for transactions and personal data through our blockchain technology creates additional value propositions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="text-center max-w-3xl mx-auto mb-12 fadeIn">
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Impact on Partner Success
            </h2>
            <p className="text-lg text-foreground/70 mb-8">When our partners succeed, we succeed. Here's how Swyf is transforming retail metrics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fadeIn">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">38%</div>
              <h3 className="font-bold mb-3">Reduction in Returns</h3>
              <p className="text-foreground/70 text-sm">
                Our partners see a significant decrease in return rates due to more accurate sizing and visualization.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">27%</div>
              <h3 className="font-bold mb-3">Increase in Conversion</h3>
              <p className="text-foreground/70 text-sm">
                Customers who use virtual try-on are significantly more likely to complete their purchase.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">42%</div>
              <h3 className="font-bold mb-3">Higher Cart Value</h3>
              <p className="text-foreground/70 text-sm">
                The confidence from virtual try-on leads to larger average order values for our retail partners.
              </p>
            </div>
          </div>
        </section>
        
        {/* Partner CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Ready to transform your retail business?
                </h2>
                <p className="text-lg text-foreground/70 mb-6">Join hundreds of successful retailers who have partnered with Swyf to reduce returns, increase conversions, and delight customers.</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Quick implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>ROI within months</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Dedicated support team</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                    Partner With Us
                    <ChevronRight size={18} className="ml-1" />
                  </a>
                  <a href="#" className={`px-6 py-3 rounded-full ${isDarkMode ? 'bg-accent text-accent-foreground' : 'bg-white text-foreground'} border border-border font-medium hover:bg-accent/70 transition-all flex items-center justify-center`}>
                    Request Demo
                  </a>
                </div>
              </div>
              
              <div className={`md:w-1/3 h-64 ${isDarkMode ? 'bg-muted' : 'bg-slate-200'} rounded-xl flex items-center justify-center text-slate-400`}>
                Partner Graphic
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default BusinessModel;