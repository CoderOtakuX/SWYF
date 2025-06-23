import { Shield, Cpu, Palette, Store, Globe, Lock, Leaf, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements with animated gradient */}
        <motion.div 
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </motion.div>
        
        {/* Introduction with animated text */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Innovative Technology
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Experience Shopping <span className="text-gradient">Reimagined</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              SWYF enhances fashion shopping with cutting-edge AI and AR technology, creating a seamless, personalized experience that reduces returns and increases satisfaction.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.Link 
                to="/projects" 
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Now
                <ChevronRight size={16} className="ml-1 inline-block" />
              </motion.Link>
              <motion.a 
                href="#learn-more" 
                className="px-6 py-3 rounded-full bg-white/10 text-foreground font-medium hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Feature List with staggered animations */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {[
              {
                icon: Cpu,
                color: 'purple',
                title: 'AI-Powered Personalization',
                description: 'Our AI analyzes your style preferences and body measurements to create a custom profile, offering smart outfit suggestions tailored specifically to you.',
                features: [
                  'Personalized style recommendations',
                  'Adaptive learning from your preferences',
                  'Outfit coordination suggestions'
                ]
              },
              {
                icon: Shield,
                color: 'blue',
                title: 'Real-Time AR Try-On',
                description: 'See clothing items on your body in real-time with our advanced augmented reality technology that accurately sizes and positions garments.',
                features: [
                  'Real-time visualization of clothes',
                  'Accurate size representation',
                  'Multiple angle viewing options'
                ]
              },
              // ... Add other features here
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-12 h-12 rounded-full bg-${feature.color}-400/10 flex items-center justify-center mb-6`}>
                  <feature.icon size={24} className={`text-${feature.color}-500`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 mb-4">{feature.description}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {feature.features.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    >
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA Section with animations */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
          <motion.div 
            className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 
                className="text-2xl md:text-3xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to experience the future of shopping?
              </motion.h2>
              <motion.p 
                className="text-lg text-foreground/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Try our revolutionary virtual fitting room technology and see the difference for yourself.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.Link 
                  to="/projects" 
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try It Now
                  <ChevronRight size={18} className="ml-1" />
                </motion.Link>
                <motion.a 
                  href="#demo" 
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-foreground font-medium hover:bg-white/20 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See It In Action
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
