import React, { useState } from 'react';
import { 
  Target, 
  Trophy, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Play,
  MessageCircle,
  Clock,
  Award,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      name: "Advanced Aimbot",
      description: "Highly customizable aim assistance with smoothing and hit chance controls",
      icon: Target,
      color: "from-red-600 to-red-700"
    },
    {
      name: "ESP & Wallhack",
      description: "See enemies through walls and obstacles with comprehensive positional data",
      icon: Shield,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Radar Enhancement",
      description: "Expanded radar system for complete map awareness and enemy tracking",
      icon: TrendingUp,
      color: "from-green-600 to-green-700"
    },
    {
      name: "Cosmetic Changers",
      description: "Customize skins, knives, and gloves without purchasing them legitimately",
      icon: Award,
      color: "from-purple-600 to-purple-700"
    },
    {
      name: "Anti-Aim System",
      description: "Advanced movement and hitbox manipulation to evade detection",
      icon: Zap,
      color: "from-orange-600 to-orange-700"
    },
    {
      name: "HvH Optimization",
      description: "Specialized features designed for Hack vs Hack competitive environments",
      icon: Users,
      color: "from-indigo-600 to-indigo-700"
    }
  ];

  const packages = [
    {
      name: "Standard Access",
      price: "€24",
      duration: "Monthly Subscription",
      features: [
        "Full access to all features",
        "Advanced aimbot customization",
        "ESP and wallhack systems",
        "Radar enhancement",
        "Cosmetic changers",
        "Anti-aim protection",
        "Regular updates"
      ],
      popular: false,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Holiday Special",
      price: "€19",
      duration: "Limited Time Offer",
      features: [
        "All standard features included",
        "Reduced pricing during holidays",
        "Invite wave access",
        "Priority support",
        "Exclusive HvH features",
        "Advanced customization options",
        "Invite-only community access"
      ],
      popular: true,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Elite Membership",
      price: "Invite Only",
      duration: "Exclusive Access",
      features: [
        "Premium HvH optimization",
        "Custom feature development",
        "Direct developer support",
        "Exclusive community access",
        "Advanced anti-detection",
        "Priority updates",
        "VIP status"
      ],
      popular: false,
      color: "from-purple-600 to-purple-700"
    }
  ];

  const faqs = [
    {
      question: "What is HvH (Hack vs Hack)?",
      answer: "HvH is a competitive mode where players actively use cheat software against one another. Fatality.win is specifically designed for this niche, offering advanced features tailored for cheat-versus-cheat environments in CS2."
    },
    {
      question: "How do I get access to Fatality.win?",
      answer: "Access is invite-only and highly restricted. New users are typically only accepted during holiday periods (Easter, Christmas) and only with active subscriptions. This exclusivity helps maintain our elite status and minimize detection risks."
    },
    {
      question: "What are the pricing options?",
      answer: "Standard access costs €24 per month during normal periods. During major holidays, we offer reduced pricing of €19. Elite membership is available by invitation only for experienced HvH players."
    },
    {
      question: "Is Fatality.win safe to use?",
      answer: "While we implement advanced anti-detection measures, users should be aware that using cheat software carries risks including permanent bans. Fatality.win is designed for experienced players who understand these risks."
    },
    {
      question: "What makes Fatality.win different?",
      answer: "Our software is specifically optimized for HvH environments with advanced features like customizable aimbots, comprehensive ESP systems, and specialized anti-aim protection designed for competitive cheat-versus-cheat scenarios."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">Fatality.win</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-red-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-red-400 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors">
                Get Access
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
              Elite CS2 HvH
              <span className="block text-red-400">Cheat Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fatality.win is the premier cheat software designed specifically for Hack vs Hack (HvH) 
              competitive environments in Counter-Strike 2. Advanced features, exclusive access, and unmatched performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Get Invite Access</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center space-x-2 hover:bg-slate-800/50">
                <Shield className="h-5 w-5" />
                <span>View Features</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">Invite Only</div>
                <div className="text-slate-400">Exclusive Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">€24</div>
                <div className="text-slate-400">Monthly Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">HvH</div>
                <div className="text-slate-400">Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced HvH Features</h2>
            <p className="text-xl text-slate-400">Specialized tools designed for competitive cheat-versus-cheat environments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-red-500/50 transition-all hover:transform hover:scale-105">
                <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Exclusive HvH Features</h2>
            <p className="text-xl text-slate-400">Advanced tools designed for competitive cheat-versus-cheat environments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-red-500/50 transition-all hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                  <div className="text-red-400 font-semibold mb-1">Advanced</div>
                  <div className="text-slate-400 text-sm mb-3">HvH Optimized</div>
                  <div className="text-slate-300 mb-4">{feature.description}</div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span>Protected</span>
                    </div>
                    <div className="text-slate-400">Anti-Detection</div>
                  </div>
                  
                  <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Exclusive Access Plans</h2>
            <p className="text-xl text-slate-400">Invite-only membership with competitive pricing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-slate-800/80 backdrop-blur-sm rounded-xl border transition-all hover:transform hover:scale-105 ${pkg.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-700 hover:border-orange-500/50'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-slate-400 ml-2">{pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${pkg.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                      : 'border border-slate-600 hover:border-orange-500 hover:bg-orange-500/10'
                    }`}
                    onClick={() => setSelectedPackage(pkg.name)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Experiences */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">User Experiences</h2>
            <p className="text-xl text-slate-400">Feedback from our exclusive HvH community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "The aimbot customization is incredible. Perfect for HvH matches with natural-looking assistance."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold">
                  H
                </div>
                <div>
                  <div className="font-semibold">HvH Player</div>
                  <div className="text-sm text-slate-400">Active Member</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "ESP and radar features give me complete map awareness. Essential for competitive HvH."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold">
                  C
                </div>
                <div>
                  <div className="font-semibold">CS2 Competitor</div>
                  <div className="text-sm text-slate-400">Elite Member</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "Anti-aim system is top-tier. Makes me unpredictable in HvH scenarios. Worth every euro."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold">
                  P
                </div>
                <div>
                  <div className="font-semibold">Pro HvH Player</div>
                  <div className="text-sm text-slate-400">VIP Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400">Everything you need to know about Fatality.win</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Elite HvH?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Join the exclusive community of HvH players using Fatality.win. 
            Get access to the most advanced CS2 cheat software available.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Request Invite Access</span>
              <Zap className="h-5 w-5" />
            </button>
            <button className="border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center space-x-2 hover:bg-slate-800/50">
              <MessageCircle className="h-5 w-5" />
              <span>Join Community</span>
            </button>
          </div>
          
          <div className="mt-8 text-sm text-slate-500">
            <p>🔒 Invite-only access • ⚡ Advanced HvH features • 🛡️ Anti-detection protection</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Target className="h-6 w-6 text-red-500" />
                <span className="text-lg font-bold">Fatality.win</span>
              </div>
              <p className="text-slate-400 text-sm">
                Elite CS2 HvH cheat software designed for competitive cheat-versus-cheat environments.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Advanced Aimbot</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ESP & Wallhack</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Radar Enhancement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Anti-Aim System</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Invite System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Access</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Invite-only access</p>
                <p>€24/month standard</p>
                <p>€19/month holidays</p>
                <p>Elite membership available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Fatality.win. All rights reserved. | Use at your own risk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;