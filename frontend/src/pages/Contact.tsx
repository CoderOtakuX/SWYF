import { MapPin, Phone, Mail, MessageSquare, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { useTheme } from "@/contexts/ThemeContext";

const ContactInfo = ({
  icon: Icon,
  title,
  content
}) => <div className="flex items-start">
    <div className="mr-3 mt-1">
      <Icon size={16} className="text-primary" />
    </div>
    <div>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-sm text-foreground/70">{content}</p>
    </div>
  </div>;

const FAQ = ({
  question,
  answer
}) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`${isDarkMode ? 'bg-background border border-border' : 'glass-card'} rounded-xl p-6`}>
      <h3 className="font-bold mb-2">{question}</h3>
      <p className="text-sm text-foreground/70">{answer}</p>
    </div>
  );
};

const Contact = () => {
  const { isDarkMode } = useTheme();
  
  return <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
        
        {/* Main Contact Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-foreground/80">Have questions or want to learn more about Swyf? We're here to help you revolutionize your shopping experience.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-3 glass-card rounded-2xl p-8 fadeIn">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <input type="text" id="firstName" className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${isDarkMode ? 'bg-muted' : 'bg-white'}`} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <input type="text" id="lastName" className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${isDarkMode ? 'bg-muted' : 'bg-white'}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input type="email" id="email" className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${isDarkMode ? 'bg-muted' : 'bg-white'}`} />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <select id="subject" className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${isDarkMode ? 'bg-muted' : 'bg-white'}`}>
                    <option value="">Choose an option</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="demo">Request a Demo</option>
                    <option value="press">Press Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={5} className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${isDarkMode ? 'bg-muted' : 'bg-white'}`} placeholder="Tell us how we can help you..."></textarea>
                </div>
                
                <div className="flex items-start">
                  <input type="checkbox" id="privacy" className="mt-1 mr-3" />
                  <label htmlFor="privacy" className="text-sm text-foreground/70">
                    I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a> and consent to being contacted by swyf regarding my inquiry.
                  </label>
                </div>
                
                <button type="submit" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                  Send Message
                  <ArrowRight size={18} className="ml-1" />
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 fadeIn">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <ContactInfo icon={MapPin} title="Our Headquarters" content="Sector 61, Noida, Uttar Pradesh, India" />
                  
                  <ContactInfo icon={Phone} title="Phone Number" content="+91 8588077790" />
                  
                  <ContactInfo icon={Mail} title="Email Address" content="swyam7@gmail.com" />
                  
                  <ContactInfo icon={Clock} title="Business Hours" content="Monday - Friday: 9am - 6pm IST" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Help Center
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70">Find quick answers to common questions about Swyf</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 fadeIn">
            <FAQ question="How accurate is the virtual try-on technology?" answer="Our AI-powered virtual try-on accurately represents how clothing will look and fit on your body. While no virtual solution is perfect, our users report 92% satisfaction with the accuracy, and our technology continuously improves with each use." />
            
            <FAQ question="Is my personal data secure?" answer="Absolutely. We prioritize your privacy with on-device processing for sensitive data. Your measurements and biometric data never leave your device. We only store the minimum necessary information to provide our service, and you can delete your data at any time." />
            
            <FAQ question="Which retailers are compatible with swyf?" answer="swyf works with hundreds of partner retailers, from major brands to boutique stores. Our list of partners is constantly growing. You can check our app for the current list of supported retailers." />
            
            <FAQ question="How long does it take to create my avatar?" answer="Creating your initial avatar takes just 30 seconds with a good selfie. The more information you provide (like height and preferences), the more accurate your virtual try-on experience will be." />
            
            <FAQ question="Can I use swyf on both mobile and desktop?" answer="Yes! swyf is fully optimized for both mobile and desktop experiences. Our responsive design ensures you get a great experience whether you're shopping on your phone, tablet, or computer." />
            
            <FAQ question="How do retailers integrate with swyf?" answer="We offer flexible integration options for retailers, from simple API connections to full white-label solutions. Our team works closely with each partner to ensure a seamless implementation that matches their brand experience." />
          </div>
          
          <div className="text-center fadeIn">
            <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
              Visit our complete Help Center
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </section>
        
        {/* Office Locations */}
        <section className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 ${isDarkMode ? 'bg-card' : 'bg-white'} rounded-3xl shadow-sm ${isDarkMode ? 'border border-border' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Our Location
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Visit Our Office
            </h2>
            <p className="text-lg text-foreground/70">Come meet us at our headquarters in Noida</p>
          </div>
          
          <div className="max-w-2xl mx-auto fadeIn">
            <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className={`h-48 ${isDarkMode ? 'bg-muted' : 'bg-slate-200'} relative`}>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  Map Image Placeholder
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Noida</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Sector 61<br />
                  Noida, Uttar Pradesh<br />
                  India
                </p>
                <div className="flex items-center text-sm text-foreground/60">
                  <Phone size={14} className="mr-1" />
                  +91 8588077790
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
                Ready to Transform Your Shopping Experience?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Join thousands of satisfied users who have revolutionized the way they shop for clothes online.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={18} className="text-primary" />
                  <span>Quick setup process</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={18} className="text-primary" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle size={18} className="text-primary" />
                  <span>Free 14-day trial</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                  Create Your Avatar
                  <ArrowRight size={18} className="ml-1" />
                </a>
                <a href="#" className={`px-6 py-3 rounded-full ${isDarkMode ? 'bg-accent text-accent-foreground' : 'bg-white text-foreground'} border border-border font-medium hover:bg-accent/70 transition-all flex items-center justify-center`}>
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Contact;