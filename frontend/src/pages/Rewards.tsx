import { 
  Gift, 
  Star, 
  Users, 
  ShoppingBag, 
  Sparkles, 
  BadgePercent, 
  TrendingUp, 
  HelpCircle, 
  ChevronRight,
  ArrowRight,
  Share2,
  Clock,
  Activity,
  Trophy,
  Medal,
  Crown,
  Zap,
  Heart,
  MessageCircle,
  Bookmark,
  Filter,
  Bell
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications } from '@/contexts/NotificationContext';
import NotificationPanel from '@/components/NotificationPanel';
import axios from 'axios';

const Rewards = () => {
  const [rewardProgress, setRewardProgress] = useState(65);
  const [activeTab, setActiveTab] = useState('earn');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);
  const { addNotification } = useNotifications();
  
  // Fetch rewards data from backend
  useEffect(() => {
    const fetchRewardsData = async () => {
      try {
        const response = await axios.get('/api/rewards/status');
        if (response.data.success) {
          const { tokens, level, progress, achievements } = response.data.data;
          setRewardProgress(progress);
          
          // Notify about completed achievements
          achievements.forEach(achievement => {
            if (achievement.progress === achievement.total) {
              addNotification({
                type: 'success',
                title: 'Achievement Unlocked!',
                message: `You've completed "${achievement.title}" and earned ${achievement.reward} tokens!`
              });
            }
          });
        }
      } catch (error) {
        console.error('Error fetching rewards data:', error);
        addNotification({
          type: 'error',
          title: 'Error',
          message: 'Failed to load rewards data. Please try again later.'
        });
      }
    };

    fetchRewardsData();
    
    // Set up polling for real-time updates
    const interval = setInterval(fetchRewardsData, 30000); // Poll every 30 seconds
    
    return () => clearInterval(interval);
  }, [addNotification]);

  // Handle reward actions
  const handleRewardAction = async (action: string) => {
    try {
      const response = await axios.post('/api/rewards/update', { action });
      if (response.data.success) {
        const { tokens, progress } = response.data.data;
        setRewardProgress(progress);
        
        addNotification({
          type: 'success',
          title: 'Tokens Earned',
          message: `You've earned tokens for ${action.replace('_', ' ')}!`
        });
      }
    } catch (error) {
      console.error('Error updating rewards:', error);
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to update rewards. Please try again.'
      });
    }
  };

  const rewards = [
    {
      id: 1,
      title: '15% Off Next Purchase',
      description: 'Unlock at Level 3',
      icon: BadgePercent,
      color: 'green',
      cost: 150,
      status: 'locked',
      category: 'discount'
    },
    {
      id: 2,
      title: 'Exclusive Style Recommendations',
      description: 'Available now',
      icon: Sparkles,
      color: 'blue',
      cost: 0,
      status: 'unlocked',
      category: 'feature'
    },
    {
      id: 3,
      title: 'Premium Features',
      description: 'Unlock at Level 4',
      icon: TrendingUp,
      color: 'purple',
      cost: 300,
      status: 'locked',
      category: 'feature'
    },
    {
      id: 4,
      title: 'Early Access to New Collections',
      description: 'Unlock at Level 5',
      icon: Crown,
      color: 'amber',
      cost: 500,
      status: 'locked',
      category: 'access'
    },
    {
      id: 5,
      title: 'VIP Customer Support',
      description: 'Available now',
      icon: MessageCircle,
      color: 'indigo',
      cost: 0,
      status: 'unlocked',
      category: 'support'
    }
  ];

  const earningMethods = [
    {
      title: 'Try-On Activities',
      description: 'Earn tokens every time you try on clothing items in our virtual fitting room.',
      icon: ShoppingBag,
      color: 'purple',
      reward: '5-10 tokens per try-on',
      link: '#'
    },
    {
      title: 'Referrals',
      description: 'Invite friends to join SWYF and earn tokens when they sign up and make their first try-on.',
      icon: Share2,
      color: 'blue',
      reward: '50 tokens per referral',
      link: '#'
    },
    {
      title: 'Community Participation',
      description: 'Participate in our blockchain governance, vote on proposals, and contribute to platform development.',
      icon: Activity,
      color: 'green',
      reward: '20-100 tokens per activity',
      link: '#'
    }
  ];

  const achievements = [
    {
      title: 'Fashion Explorer',
      description: 'Try on 10 different items',
      progress: 7,
      total: 10,
      icon: ShoppingBag,
      color: 'purple',
      reward: 50
    },
    {
      title: 'Social Butterfly',
      description: 'Share 5 try-on results',
      progress: 3,
      total: 5,
      icon: Share2,
      color: 'blue',
      reward: 30
    },
    {
      title: 'Style Expert',
      description: 'Complete 5 style recommendations',
      progress: 2,
      total: 5,
      icon: Crown,
      color: 'amber',
      reward: 100
    }
  ];

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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-500/10 to-background"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </motion.div>
        
        {/* Introduction with animations */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rewards Program
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Earn While You <span className="text-gradient">Explore</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Our rewards program lets you earn tokens for every interaction with SWYF. Redeem them for exclusive discounts, early access, and special features.
            </p>
          </motion.div>
        </section>
        
        {/* Add the notification bell in the header section */}
        <div className="fixed top-20 right-4 z-40">
          <motion.button
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} className="text-foreground" />
          </motion.button>
        </div>

        {/* Add the NotificationPanel component */}
        <NotificationPanel
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        />
        
        {/* Reward Overview with animations */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-6">
          <motion.div 
            className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/10 rounded-full filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Your Rewards Journey
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Track your progress, earn tokens, and unlock exclusive rewards as you engage with the SWYF platform.
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Level Progress</span>
                    <motion.span 
                      className="text-sm font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={rewardProgress}
                    >
                      {rewardProgress}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-primary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${rewardProgress}%` }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-foreground/50">Level 2</span>
                    <span className="text-xs text-foreground/50">Level 3</span>
                  </div>
                </div>
                
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                    <Star size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">340 SWYF Tokens</h4>
                    <p className="text-sm text-foreground/70">Available to spend</p>
                  </div>
                </motion.div>
                
                <div className="flex space-x-4">
                  <motion.a 
                    href="#earn" 
                    className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Earning More
                    <ChevronRight size={18} className="ml-1" />
                  </motion.a>
                  <motion.a 
                    href="#rewards" 
                    className="px-6 py-3 rounded-full bg-white/10 text-foreground font-medium hover:bg-white/20 transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Rewards
                    <Gift size={18} className="ml-1" />
                  </motion.a>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 gap-4">
                  {rewards.slice(0, 3).map((reward, index) => (
                    <motion.div 
                      key={reward.id} 
                      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-10 h-10 rounded-full bg-${reward.color}-500/10 flex items-center justify-center mr-4`}>
                        <reward.icon size={20} className={`text-${reward.color}-500`} />
                      </div>
                      <div>
                        <h4 className="font-medium">{reward.title}</h4>
                        <p className="text-sm text-foreground/70">{reward.description}</p>
                      </div>
                      <div className="ml-auto">
                        {reward.status === 'unlocked' ? (
                          <span className="px-2 py-1 bg-green-500/10 rounded-md text-xs text-green-500">Unlocked</span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">{reward.cost} tokens</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Tabs Navigation */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-white/5 p-1">
              <button
                onClick={() => setActiveTab('earn')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'earn' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Earn Tokens
              </button>
              <button
                onClick={() => setActiveTab('rewards')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'rewards' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Available Rewards
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'achievements' ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                Achievements
              </button>
            </div>
          </div>
          
          {/* Earn Tokens Tab */}
          {activeTab === 'earn' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {earningMethods.map((method, index) => (
                  <div key={index} className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg fadeIn">
                    <div className={`w-16 h-16 rounded-full bg-${method.color}-500/10 flex items-center justify-center mx-auto mb-6`}>
                      <method.icon size={32} className={`text-${method.color}-500`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                    <p className="text-foreground/70 mb-4">{method.description}</p>
                    <div className="flex items-center justify-center my-4 py-2 px-4 bg-purple-500/5 rounded-lg">
                      <Star size={16} className={`text-${method.color}-500 mr-2`} />
                      <span className="text-xl font-bold text-purple-500">{method.reward}</span>
                    </div>
                    <a href={method.link} className="text-primary hover:text-primary/90 text-sm font-medium inline-flex items-center">
                      Get Started
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Daily Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                      <Clock size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Daily Login</h4>
                      <p className="text-sm text-foreground/70">2 tokens per day</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-green-500/10 rounded-md text-xs text-green-500">Completed</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                      <Share2 size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Social Share</h4>
                      <p className="text-sm text-foreground/70">15 tokens per share</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">0/3 shares</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                      <MessageCircle size={20} className="text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Feedback</h4>
                      <p className="text-sm text-foreground/70">10 tokens per review</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">0/2 reviews</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-white/5 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mr-4">
                      <Bookmark size={20} className="text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Save Items</h4>
                      <p className="text-sm text-foreground/70">5 tokens per save</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">2/5 saves</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Available Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Available Rewards</h3>
                <div className="flex items-center space-x-2">
                  <Filter size={16} className="text-foreground/70" />
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Rewards</option>
                    <option value="discount">Discounts</option>
                    <option value="feature">Features</option>
                    <option value="access">Early Access</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards
                  .filter(reward => selectedFilter === 'all' || reward.category === selectedFilter)
                  .map((reward) => (
                    <div key={reward.id} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                      <div className={`w-12 h-12 rounded-full bg-${reward.color}-500/10 flex items-center justify-center mb-4`}>
                        <reward.icon size={24} className={`text-${reward.color}-500`} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{reward.title}</h4>
                      <p className="text-sm text-foreground/70 mb-4">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        {reward.status === 'unlocked' ? (
                          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all">
                            Claim Reward
                          </button>
                        ) : (
                          <div className="flex items-center">
                            <Star size={16} className="text-amber-500 mr-1" />
                            <span className="text-sm font-medium">{reward.cost} tokens</span>
                          </div>
                        )}
                        <span className={`px-2 py-1 rounded-md text-xs ${
                          reward.status === 'unlocked' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-gray-100/10'
                        }`}>
                          {reward.status === 'unlocked' ? 'Unlocked' : 'Locked'}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Your Achievements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6">
                    <div className={`w-12 h-12 rounded-full bg-${achievement.color}-500/10 flex items-center justify-center mb-4`}>
                      <achievement.icon size={24} className={`text-${achievement.color}-500`} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-foreground/70 mb-4">{achievement.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">{achievement.progress}/{achievement.total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div 
                          className={`bg-${achievement.color}-500 h-2 rounded-full`} 
                          style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={16} className="text-amber-500 mr-1" />
                        <span className="text-sm font-medium">{achievement.reward} tokens</span>
                      </div>
                      {achievement.progress === achievement.total ? (
                        <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md text-xs">Completed</span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">In Progress</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Rewards;