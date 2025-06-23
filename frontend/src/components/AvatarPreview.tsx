import { useState } from 'react';
import { Shirt, Palette, Users, Zap } from 'lucide-react';

const AvatarPreview = () => {
  const [activeTab, setActiveTab] = useState<string>('try-on');

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
          <span className="px-3 py-1 rounded-full bg-blue-400/10 text-blue-500 text-xs font-medium inline-block mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Virtual Try-On Experience
          </h2>
          <p className="text-lg text-foreground/70">
            A seamless process from creating your avatar to visualizing clothes in stunning detail
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border/50">
          {/* Tabs */}
          <div className="flex border-b border-border/50">
            <button 
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'try-on' ? 'text-primary border-b-2 border-primary' : 'text-foreground/60 hover:text-foreground/80'}`}
              onClick={() => setActiveTab('try-on')}
            >
              <Shirt size={18} />
              Try On Clothes
            </button>
            <button 
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'customize' ? 'text-primary border-b-2 border-primary' : 'text-foreground/60 hover:text-foreground/80'}`}
              onClick={() => setActiveTab('customize')}
            >
              <Palette size={18} />
              Customize Appearance
            </button>
            <button 
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'share' ? 'text-primary border-b-2 border-primary' : 'text-foreground/60 hover:text-foreground/80'}`}
              onClick={() => setActiveTab('share')}
            >
              <Users size={18} />
              Share & Compare
            </button>
            <button 
              className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 ${activeTab === 'integrate' ? 'text-primary border-b-2 border-primary' : 'text-foreground/60 hover:text-foreground/80'}`}
              onClick={() => setActiveTab('integrate')}
            >
              <Zap size={18} />
              Shop Integration
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Preview Image */}
            <div className="p-8 flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl filter blur-md"></div>
                <img 
                  src="/assets/avatar-placeholder.png" 
                  alt="Avatar Preview"
                  className="relative z-10 rounded-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                    <Shirt size={14} />
                  </div>
                  <div className="text-xs">
                    <p className="font-medium">Summer Dress - Red</p>
                    <p className="text-foreground/70">Size: M • Brand: StyleCo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 flex flex-col justify-center">
              {activeTab === 'try-on' && (
                <div className="space-y-4 slideRight">
                  <h3 className="text-2xl font-bold mb-4">Try On Any Garment Virtually</h3>
                  <p className="text-foreground/70 mb-6">
                    Browse thousands of clothing items and see them on your avatar instantly. Our advanced algorithm simulates fabric physics, showing exactly how clothes will drape and fit on your body.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-xs font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Select Item</h4>
                        <p className="text-sm text-foreground/70">Choose any clothing item from our extensive collection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-xs font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">See It On Your Avatar</h4>
                        <p className="text-sm text-foreground/70">Instantly visualize how it fits your body shape</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-xs font-medium">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Adjust & Customize</h4>
                        <p className="text-sm text-foreground/70">Change colors, sizes, and styles in real-time</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'customize' && (
                <div className="space-y-4 slideRight">
                  <h3 className="text-2xl font-bold mb-4">Customize Your Digital Avatar</h3>
                  <p className="text-foreground/70 mb-6">
                    Create an accurate representation of yourself by customizing body measurements, skin tone, hairstyle, and more. The more accurate your avatar, the better your virtual try-on experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-accent/50 border border-border/50">
                      <h4 className="font-medium">Body Shape</h4>
                      <p className="text-sm text-foreground/70">Adjust measurements to match your proportions</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/50 border border-border/50">
                      <h4 className="font-medium">Physical Features</h4>
                      <p className="text-sm text-foreground/70">Customize hair, skin tone, and more</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/50 border border-border/50">
                      <h4 className="font-medium">3D Scanning</h4>
                      <p className="text-sm text-foreground/70">Upload photos for even more accuracy</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/50 border border-border/50">
                      <h4 className="font-medium">Save Multiple Profiles</h4>
                      <p className="text-sm text-foreground/70">Create avatars for family members</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'share' && (
                <div className="space-y-4 slideRight">
                  <h3 className="text-2xl font-bold mb-4">Share & Get Feedback</h3>
                  <p className="text-foreground/70 mb-6">
                    Share your virtual outfits with friends and family to get their opinions before making a purchase. Compare different styles side by side to make the best decision.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Users size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Social Sharing</h4>
                        <p className="text-sm text-foreground/70">Get instant feedback from your trusted circle</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                        <Shirt size={20} className="text-pink-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Side-by-Side Comparison</h4>
                        <p className="text-sm text-foreground/70">Compare different styles, colors and sizes</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'integrate' && (
                <div className="space-y-4 slideRight">
                  <h3 className="text-2xl font-bold mb-4">Seamless Shopping Integration</h3>
                  <p className="text-foreground/70 mb-6">
                    Once you've found the perfect item, purchase it directly through our integrated shopping platform. We partner with hundreds of retailers to provide a seamless experience.
                  </p>
                  <div className="bg-gradient-to-r from-accent to-blue-50 p-6 rounded-xl border border-primary/10">
                    <h4 className="font-medium mb-2 text-primary">Our Retail Partners</h4>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="h-12 rounded-md bg-white/70 flex items-center justify-center text-xs font-medium text-foreground/60">Brand 1</div>
                      <div className="h-12 rounded-md bg-white/70 flex items-center justify-center text-xs font-medium text-foreground/60">Brand 2</div>
                      <div className="h-12 rounded-md bg-white/70 flex items-center justify-center text-xs font-medium text-foreground/60">Brand 3</div>
                      <div className="h-12 rounded-md bg-white/70 flex items-center justify-center text-xs font-medium text-foreground/60">Brand 4</div>
                    </div>
                    <p className="text-xs text-foreground/60 mt-3 text-center">And 200+ more retailers</p>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <a 
                  href="#try-now" 
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                >
                  Try The Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarPreview;
