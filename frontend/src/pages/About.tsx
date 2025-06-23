import { Users, Heart, Award, Sparkles, ChevronRight, Globe, Lightbulb, RefreshCw, Shield, Rocket } from 'lucide-react';
import Layout from '@/components/Layout';
const About = () => {
  const teamMembers = [{
    name: "Alexandra Chen",
    role: "Founder & CEO",
    bio: "With 15+ years in fashion retail and a background in computer vision, Alexandra founded swyf to solve the persistent challenges of online clothes shopping.",
    image: "/placeholder.svg"
  }, {
    name: "Michael Thompson",
    role: "CTO",
    bio: "Previously led AR/VR initiatives at top tech companies, Michael brings expertise in computer vision and machine learning to perfect our virtual try-on technology.",
    image: "/placeholder.svg"
  }, {
    name: "Sophia Rodriguez",
    role: "Head of Design",
    bio: "Former fashion designer turned UX specialist, Sophia ensures swyf delivers both style and seamless user experience.",
    image: "/placeholder.svg"
  }, {
    name: "David Kim",
    role: "VP of Partnerships",
    bio: "With extensive experience in retail business development, David leads our retailer integration strategy and partnership growth.",
    image: "/placeholder.svg"
  }, {
    name: "Priya Patel",
    role: "Lead Data Scientist",
    bio: "AI researcher specializing in computer vision algorithms that power swyf's accurate body mapping and garment visualization.",
    image: "/placeholder.svg"
  }, {
    name: "James Wilson",
    role: "Head of Customer Success",
    bio: "Dedicated to ensuring both shoppers and retail partners get maximum value from the swyf platform.",
    image: "/placeholder.svg"
  }];
  return <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">Swyf</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Learn about our mission to revolutionize the online shopping experience through cutting-edge AI and AR technology.
            </p>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="fadeIn">
              <h2 className="text-3xl font-display font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/70 mb-6">At Swyf, our mission is to empower shoppers with the confidence to find their perfect fit online. We leverage advanced AI and AR technology to create a seamless and personalized virtual try-on experience.</p>
              <ul className="list-none space-y-3">
                <li className="flex items-center">
                  <Globe size={20} className="text-primary mr-3" />
                  <span className="text-foreground/80">Revolutionizing online fashion retail</span>
                </li>
                <li className="flex items-center">
                  <Lightbulb size={20} className="text-primary mr-3" />
                  <span className="text-foreground/80">Innovating with AI and augmented reality</span>
                </li>
                <li className="flex items-center">
                  <Heart size={20} className="text-primary mr-3" />
                  <span className="text-foreground/80">Enhancing customer satisfaction and confidence</span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-3xl overflow-hidden fadeIn animation-delay-200">
              <img src="https://images.unsplash.com/photo-1517348464220-66371243b896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="Our Mission" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-blue-400/10 text-blue-500 text-xs font-medium inline-block mb-4">
              Core Values
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-foreground/70">
              Our core values guide every decision we make, ensuring we stay true to our mission and deliver exceptional value to our users and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Innovation */}
            <div className="glass-card rounded-2xl p-6 text-center fadeIn">
              <RefreshCw size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-foreground/70">
                We constantly push the boundaries of what's possible, exploring new technologies and approaches to improve the online shopping experience.
              </p>
            </div>
            
            {/* Customer Focus */}
            <div className="glass-card rounded-2xl p-6 text-center fadeIn animation-delay-100">
              <Users size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-foreground/70">
                We prioritize our customers' needs and strive to exceed their expectations with every interaction.
              </p>
            </div>
            
            {/* Integrity */}
            <div className="glass-card rounded-2xl p-6 text-center fadeIn animation-delay-200">
              <Shield size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-foreground/70">
                We operate with the highest ethical standards, ensuring transparency, honesty, and fairness in all our dealings.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-purple-400/10 text-purple-500 text-xs font-medium inline-block mb-4">
              Meet the Team
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Leadership
            </h2>
            <p className="text-lg text-foreground/70">
              Passionate individuals dedicated to transforming the future of online fashion retail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <div key={index} className="glass-card rounded-2xl p-6 fadeIn">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-foreground/70 mb-3">{member.role}</p>
                <p className="text-sm text-foreground/70">{member.bio}</p>
              </div>)}
          </div>
        </section>
        
        {/* Achievements Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-500 text-xs font-medium inline-block mb-4">
              Achievements
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Milestones
            </h2>
            <p className="text-lg text-foreground/70">
              Key achievements that highlight our journey and impact on the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Award 1 */}
            <div className="glass-card rounded-2xl p-6 text-center fadeIn">
              <Award size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation Award</h3>
              <p className="text-foreground/70">
                Recognized for our groundbreaking virtual try-on technology.
              </p>
            </div>
            
            {/* Statistic 2 */}
            <div className="glass-card rounded-2xl p-6 text-center fadeIn animation-delay-100">
              <Sparkles size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">92% Accuracy</h3>
              <p className="text-foreground/70">
                User satisfaction rate with the accuracy of our virtual try-on experience.
              </p>
            </div>
            
            {/* Achievement 3 */}
            <div className="glass-card rounded-2xl p-6 text-center fadeIn animation-delay-200">
              <Rocket size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">100+ Retail Partners</h3>
              <p className="text-foreground/70">
                Integrated with leading fashion retailers worldwide.
              </p>
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
                Ready to revolutionize your online shopping experience?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Join us on our mission to transform the future of fashion retail.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                  Get Started
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a href="#" className="px-6 py-3 rounded-full bg-white border border-border text-foreground font-medium hover:bg-accent/50 transition-all flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default About;