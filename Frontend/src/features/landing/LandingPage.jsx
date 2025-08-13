import React, { useState, useEffect } from 'react';
import { Users, FileText, Download, Calendar, DollarSign, BarChart3, Shield, Star, CheckCircle, ArrowRight, Menu, X, Zap, Clock, Globe, Sparkles, TrendingUp, Award, Target, Rocket, ChevronDown, Play, Brain, CloudLightning as Lightning, Layers, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Client Intelligence",
      description: "Advanced machine learning algorithms analyze client behavior patterns and predict project success rates with 94% accuracy.",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      delay: "0ms"
    },
    {
      icon: Lightning,
      title: "Instant Proposal Engine",
      description: "Generate professional proposals in under 30 seconds using our proprietary AI that learns from 10M+ successful proposals.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      delay: "100ms"
    },
    {
      icon: Download,
      title: "Smart Export Suite",
      description: "Export to 15+ formats with dynamic branding, legal compliance checking, and automated client delivery systems.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      delay: "200ms"
    },
    {
      icon: Layers,
      title: "Project Orchestration",
      description: "Multi-dimensional project management with AI-powered timeline optimization and resource allocation algorithms.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      delay: "300ms"
    },
    {
      icon: DollarSign,
      title: "Revenue Maximizer",
      description: "Intelligent pricing recommendations and automated payment workflows that increase revenue by an average of 43%.",
      gradient: "from-yellow-500 via-amber-500 to-orange-500",
      delay: "400ms"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Real-time business intelligence with machine learning insights that forecast growth opportunities 6 months ahead.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      delay: "500ms"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "Senior UX Architect",
      company: "Design Systems Pro",
      content: "This platform didn't just change my workflow—it revolutionized my entire business model. I've scaled from solo freelancer to leading a team of 12 designers.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      revenue: "+340% revenue growth"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Solutions Architect",
      company: "Neural Networks Ltd",
      content: "The AI-powered insights are phenomenal. I can predict client needs before they even know them. My proposal acceptance rate hit 89% last quarter.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      revenue: "+89% win rate"
    },
    {
      name: "Sophia Williams",
      role: "Brand Strategy Director",
      company: "Creative Collective",
      content: "The predictive analytics helped me identify my most profitable client segments. I now charge 3x my previous rates and have a 6-month waiting list.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      revenue: "+300% rate increase"
    }
  ];

  const stats = [
    { number: "127K+", label: "Elite Freelancers", icon: Users, color: "text-violet-400" },
    { number: "8.2M+", label: "AI-Generated Proposals", icon: FileText, color: "text-amber-400" },
    { number: "$2.8B+", label: "Revenue Processed", icon: DollarSign, color: "text-emerald-400" },
    { number: "99.7%", label: "Uptime Guarantee", icon: Award, color: "text-pink-400" }
  ];

  return (
    <div className="min-h-screen bg-black z-10 text-white overflow-x-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Dynamic Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + Math.sin(scrollY * 0.001) * 10}%`,
            top: `${30 + Math.cos(scrollY * 0.001) * 5}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + Math.cos(scrollY * 0.0015) * 8}%`,
            top: `${60 + Math.sin(scrollY * 0.0015) * 6}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + Math.sin(scrollY * 0.002) * 12}%`,
            bottom: `${20 + Math.cos(scrollY * 0.002) * 8}%`,
            animationDelay: '4s'
          }}
        ></div>

        {/* Mouse Follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full blur-2xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-violet-500/20 shadow-2xl shadow-violet-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 p-2 rounded-xl">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                </div>
                <span className="ml-4 text-2xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FreelancePro
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Features', 'Pricing', 'Success Stories', 'Resources'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-300 hover:text-violet-400 transition-all duration-300 relative group font-medium"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link to={'/signin'} className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 font-medium">
                Sign In
              </Link>
              <button className="relative group bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-2xl font-bold hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-violet-500/20">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {['Features', 'Pricing', 'Success Stories', 'Resources'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block px-3 py-2 text-gray-300 hover:text-violet-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
              <hr className="border-violet-500/20 my-4" />
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-violet-400 transition-colors duration-300 font-medium">Sign In</a>
              <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-3 py-3 rounded-2xl font-bold hover:from-violet-500 hover:to-purple-500 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border border-violet-500/20 mb-8 backdrop-blur-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-violet-300">AI-Powered • Next-Gen • Enterprise-Ready</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
                Dominate Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Freelance Game
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Revolutionary AI-powered platform that transforms ambitious freelancers into 
              <span className="text-violet-400 font-semibold"> industry leaders</span>. 
              Scale faster, earn more, work smarter with 
              <span className="text-purple-400 font-semibold"> predictive intelligence</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="group relative bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl text-xl font-black hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <Rocket className="mr-3 h-7 w-7 group-hover:animate-bounce" />
                  Launch Your Empire
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group bg-white/5 backdrop-blur-xl text-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-white/10 transition-all duration-500 border-2 border-violet-500/30 hover:border-violet-400/60 flex items-center justify-center relative overflow-hidden">
                <Play className="mr-3 h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-violet-400/30 transition-all duration-500 group-hover:bg-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <IconComponent className={`h-10 w-10 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                      <div className={`text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-3`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm font-semibold tracking-wide uppercase">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/20 mb-8 backdrop-blur-xl">
              <Target className="h-5 w-5 text-amber-400 mr-3" />
              <span className="text-sm font-semibold text-amber-300">Revolutionary Features</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Freelance Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Cutting-edge AI technology meets intuitive design. Built for freelancers who demand excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="bg-white/5 backdrop-blur-xl p-10 rounded-4xl border border-white/10 hover:border-white/20 transition-all duration-700 group-hover:bg-white/10 h-full relative overflow-hidden transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className={`bg-gradient-to-r ${feature.gradient} p-5 rounded-3xl inline-block mb-8 group-hover:scale-110 transition-transform duration-500 relative shadow-2xl`}>
                      <IconComponent className="h-10 w-10 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-6 group-hover:text-violet-300 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 font-light text-lg">
                      {feature.description}
                    </p>
                    
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="h-6 w-6 text-violet-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="success-stories" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 mb-8 backdrop-blur-xl">
              <Award className="h-5 w-5 text-emerald-400 mr-3" />
              <span className="text-sm font-semibold text-emerald-300">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Elite Freelancers
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Choose Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Real results from real professionals who've transformed their careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-4xl border border-white/10 hover:border-white/20 transition-all duration-700 group-hover:bg-white/10 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-10 text-lg leading-relaxed italic group-hover:text-white transition-colors duration-500 font-light">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl mr-4 border-2 border-violet-400/30 group-hover:border-violet-400 transition-colors duration-500"
                      />
                      <div>
                        <p className="font-black text-white text-lg group-hover:text-violet-300 transition-colors duration-500">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-violet-400 text-sm font-bold">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-black text-lg">{testimonial.revenue}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 border border-pink-500/20 mb-8 backdrop-blur-xl">
              <DollarSign className="h-5 w-5 text-pink-400 mr-3" />
              <span className="text-sm font-semibold text-pink-300">Investment Plans</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Invest in Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
                Empire's Future
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Choose the plan that matches your ambition level
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/month",
                description: "For ambitious beginners",
                features: [
                  "Up to 25 clients",
                  "50 AI proposals/month",
                  "Basic analytics",
                  "Email support",
                  "Mobile app access",
                  "Standard templates"
                ],
                recommended: false,
                gradient: "from-gray-600 to-gray-700",
                borderGradient: "from-gray-500/50 to-gray-600/50"
              },
              {
                name: "Professional",
                price: "$149",
                period: "/month",
                description: "For serious professionals",
                features: [
                  "Unlimited clients",
                  "Unlimited AI proposals",
                  "Advanced AI features",
                  "Priority support",
                  "Custom branding",
                  "Predictive analytics",
                  "Team collaboration",
                  "API access",
                  "White-label options"
                ],
                recommended: true,
                gradient: "from-violet-600 to-purple-600",
                borderGradient: "from-violet-500/50 to-purple-500/50"
              },
              {
                name: "Enterprise",
                price: "$399",
                period: "/month",
                description: "For industry leaders",
                features: [
                  "Everything in Professional",
                  "Custom AI training",
                  "Dedicated success manager",
                  "Custom integrations",
                  "SLA guarantee",
                  "Advanced security",
                  "Multi-team management"
                ],
                recommended: false,
                gradient: "from-amber-600 to-orange-600",
                borderGradient: "from-amber-500/50 to-orange-500/50"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative group ${plan.recommended ? 'scale-105' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-black shadow-2xl shadow-violet-500/50">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className={`bg-white/5 backdrop-blur-xl p-10 rounded-4xl border-2 border-gradient-to-r ${plan.borderGradient} hover:border-white/20 transition-all duration-700 group-hover:bg-white/10 h-full relative overflow-hidden`}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <h3 className="text-3xl font-black text-white mb-3">{plan.name}</h3>
                    <p className="text-gray-400 mb-8 font-light">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-10">
                      <span className={`text-6xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-3 text-xl font-light">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-5 mb-10 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-500 font-light">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-5 px-8 rounded-3xl font-black text-lg transition-all duration-500 transform hover:scale-105 ${
                      plan.recommended 
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-500 hover:to-purple-500 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50' 
                        : 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 hover:border-white/40'
                    }`}>
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Ready to Dominate
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Industry?
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed font-light">
              Join the elite community of freelancers who've already transformed their careers into 
              <span className="text-violet-400 font-semibold"> thriving empires</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="group relative bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white px-16 py-8 rounded-4xl text-2xl font-black hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="mr-4 h-8 w-8 group-hover:animate-spin" />
                  Start Free 14-Day Trial
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group bg-white/10 backdrop-blur-xl text-white px-16 py-8 rounded-4xl text-2xl font-black hover:bg-white/20 transition-all duration-500 border-2 border-white/20 hover:border-violet-400/50 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10">Schedule Demo Call</span>
                <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
            
            <p className="text-gray-400 mt-10 text-xl font-light">
              No credit card required • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-xl border-t border-violet-500/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur-lg opacity-50"></div>
                  <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-xl">
                    <Briefcase className="h-10 w-10 text-white" />
                  </div>
                </div>
                <span className="ml-4 text-3xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FreelancePro
                </span>
              </div>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light">
                The ultimate AI-powered platform for elite freelancers who refuse to settle for ordinary results. 
                Transform your career into a thriving empire.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-500 group backdrop-blur-xl"
                  >
                    <Globe className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Templates", "Integrations", "API", "Mobile App"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press", "Partners", "Contact"]
              },
              {
                title: "Resources",
                links: ["Help Center", "Documentation", "Community", "Webinars", "Status", "Security"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-black text-white mb-8 text-xl">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-violet-400 transition-all duration-300 hover:translate-x-1 transform inline-block font-light text-lg"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-violet-500/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-6 md:mb-0 font-light text-lg">
              &copy; 2025 FreelancePro. All rights reserved. Built for the ambitious.
            </p>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-violet-400 transition-colors duration-300 font-light">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition-colors duration-300 font-light">Terms of Service</a>
              <a href="#" className="hover:text-violet-400 transition-colors duration-300 font-light">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;