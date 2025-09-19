import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, TrendingUp, AlertTriangle, Scale, BookOpen, Calendar,
  Eye, ThumbsUp, Share2, Clock, Tag, User, ExternalLink, Search,
  Filter, ChevronRight, Award, Shield, Globe, FileText, Users,
  BarChart3, AlertCircle, CheckCircle, Star, MessageCircle
} from 'lucide-react';

function NewsInsights() {
  const { category, articleId } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    trends: {
      id: 'trends',
      name: 'Cybercrime Trends',
      description: 'Latest trends and statistics in cybercrime',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      count: 12
    },
    alerts: {
      id: 'alerts',
      name: 'Scam Alerts',
      description: 'New and emerging scam warnings',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      count: 8
    },
    policy: {
      id: 'policy',
      name: 'Laws & Policies',
      description: 'Legal updates and policy changes',
      icon: Scale,
      color: 'from-purple-500 to-purple-600',
      count: 6
    },
    cases: {
      id: 'cases',
      name: 'Case Studies',
      description: 'Success stories and awareness campaigns',
      icon: Award,
      color: 'from-green-500 to-green-600',
      count: 10
    },
    blog: {
      id: 'blog',
      name: 'Expert Blog',
      description: 'Expert opinions and analysis',
      icon: BookOpen,
      color: 'from-teal-500 to-teal-600',
      count: 15
    }
  };

  const trendsData = [
    {
      id: 1,
      title: "Pakistan Reports 65% Increase in Digital Banking Fraud Cases in 2024",
      excerpt: "State Bank of Pakistan releases alarming statistics showing surge in mobile banking and digital payment fraud targeting Pakistani consumers.",
      content: "The State Bank of Pakistan's latest cybersecurity report reveals a dramatic 65% increase in digital banking fraud cases during the first three quarters of 2024, with losses exceeding PKR 2.8 billion...",
      date: "December 15, 2024",
      readTime: "4 min read",
      views: 15420,
      category: "Banking Fraud",
      trending: true,
      tags: ["Banking", "Mobile Fraud", "Statistics", "SBP"],
      author: "Cybersecurity Research Team",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "AI-Powered Romance Scams Target Pakistani Youth: New Research Findings",
      excerpt: "FIA Cybercrime Wing reports sophisticated AI-generated profiles are increasingly used to target young Pakistanis on social media platforms.",
      content: "Recent investigations by the Federal Investigation Agency's Cybercrime Wing have uncovered a disturbing trend of artificial intelligence-powered romance scams specifically targeting Pakistani youth aged 18-35...",
      date: "December 12, 2024",
      readTime: "6 min read",
      views: 12860,
      category: "Romance Scams",
      trending: true,
      tags: ["AI Scams", "Youth", "Social Media", "FIA"],
      author: "Dr. Ahmed Hassan, Cyber Psychology Expert",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Cryptocurrency Investment Scams Rise 340% in Pakistan During 2024",
      excerpt: "Pakistan Telecommunication Authority warns of massive increase in cryptocurrency-related investment fraud schemes targeting Pakistani investors.",
      content: "The Pakistan Telecommunication Authority (PTA) in collaboration with FIA has documented a staggering 340% increase in cryptocurrency investment scams, with reported losses reaching PKR 1.2 billion in 2024...",
      date: "December 10, 2024",
      readTime: "5 min read",
      views: 9850,
      category: "Investment Fraud",
      trending: false,
      tags: ["Cryptocurrency", "Investment", "PTA", "Financial Fraud"],
      author: "Financial Crime Analysis Unit",
      image: "/api/placeholder/600/300"
    }
  ];

  const alertsData = [
    {
      id: 4,
      title: "🚨 URGENT: New 'Pakistan Post' SMS Scam Targeting Citizens Nationwide",
      excerpt: "Fraudulent SMS messages claiming to be from Pakistan Post are asking for personal information and payment for 'undelivered packages'.",
      content: "Citizens across Pakistan are receiving fraudulent SMS messages claiming to be from Pakistan Post, asking recipients to click links and provide personal information for supposedly undelivered packages...",
      date: "December 18, 2024",
      readTime: "2 min read",
      views: 28420,
      category: "SMS Scams",
      severity: "High",
      urgent: true,
      tags: ["SMS Scam", "Pakistan Post", "Identity Theft", "Urgent"],
      author: "FIA Cybercrime Alert System",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "⚠️ Fake Job Offer Scams Using Real Company Names Increase 200%",
      excerpt: "Scammers are impersonating legitimate Pakistani companies to offer fake remote work opportunities, requesting upfront fees.",
      content: "The FIA Cybercrime Wing has issued warnings about a significant increase in fake job offer scams where fraudsters impersonate well-known Pakistani companies...",
      date: "December 16, 2024",
      readTime: "3 min read",
      views: 18750,
      category: "Employment Scams",
      severity: "Medium",
      urgent: false,
      tags: ["Job Scams", "Remote Work", "Company Impersonation"],
      author: "Employment Fraud Prevention Unit",
      image: "/api/placeholder/600/300"
    }
  ];

  const policyData = [
    {
      id: 6,
      title: "Pakistan's New Cybercrime Act 2024: Key Changes for Digital Rights",
      excerpt: "National Assembly passes amendments to Prevention of Electronic Crimes Act, introducing stronger penalties and improved victim protection.",
      content: "The National Assembly of Pakistan has passed significant amendments to the Prevention of Electronic Crimes Act (PECA) 2016, now known as PECA 2024...",
      date: "December 14, 2024",
      readTime: "8 min read",
      views: 22100,
      category: "Legislation",
      tags: ["PECA 2024", "Digital Rights", "Cybersecurity Law", "National Assembly"],
      author: "Legal Affairs Correspondent",
      image: "/api/placeholder/600/300"
    },
    {
      id: 7,
      title: "SBP Introduces New Digital Payment Security Guidelines for Banks",
      excerpt: "State Bank implements mandatory two-factor authentication and transaction limits to combat rising digital banking fraud.",
      content: "The State Bank of Pakistan has issued comprehensive new guidelines for digital payment security, requiring all banks to implement enhanced security measures...",
      date: "December 8, 2024",
      readTime: "6 min read",
      views: 16890,
      category: "Banking Regulations",
      tags: ["SBP Guidelines", "Digital Banking", "Security Measures"],
      author: "Banking Policy Analysis Team",
      image: "/api/placeholder/600/300"
    }
  ];

  const casesData = [
    {
      id: 8,
      title: "Operation Digital Shield: FIA Recovers PKR 45 Million in Major Fraud Bust",
      excerpt: "Multi-city operation leads to arrest of 12 suspects running sophisticated online investment fraud scheme targeting overseas Pakistanis.",
      content: "The Federal Investigation Agency's Cybercrime Wing successfully concluded 'Operation Digital Shield', a three-month investigation that resulted in the recovery of PKR 45 million...",
      date: "December 13, 2024",
      readTime: "7 min read",
      views: 31250,
      category: "Success Stories",
      impact: "PKR 45M Recovered",
      arrests: 12,
      tags: ["FIA Operation", "Investment Fraud", "Overseas Pakistanis", "Recovery"],
      author: "FIA Cybercrime Wing",
      image: "/api/placeholder/600/300"
    },
    {
      id: 9,
      title: "University Student Saves 200+ Peers from Romance Scam Network",
      excerpt: "CS student's awareness campaign at Lahore University helps identify and prevent widespread romance scam targeting female students.",
      content: "A computer science student at a leading Lahore university has been credited with saving over 200 fellow students from falling victim to a sophisticated romance scam network...",
      date: "December 11, 2024",
      readTime: "5 min read",
      views: 19420,
      category: "Community Heroes",
      impact: "200+ Students Protected",
      tags: ["Student Hero", "Romance Scams", "University", "Prevention"],
      author: "Community Outreach Team",
      image: "/api/placeholder/600/300"
    }
  ];

  const blogData = [
    {
      id: 10,
      title: "The Psychology Behind Pakistani Cybercrime Victims: Why We Fall for Scams",
      excerpt: "Expert analysis of cultural, social, and psychological factors that make Pakistani internet users vulnerable to specific types of cybercrime.",
      content: "Understanding why intelligent, educated Pakistanis fall victim to cybercrime requires examining the intersection of technology, culture, and human psychology...",
      date: "December 17, 2024",
      readTime: "12 min read",
      views: 8940,
      category: "Psychology",
      tags: ["Psychology", "Cultural Factors", "Victim Analysis", "Prevention"],
      author: "Dr. Farah Malik, Cyber Psychology Researcher",
      expertise: "15 years in cybercrime psychology",
      image: "/api/placeholder/600/300"
    },
    {
      id: 11,
      title: "Digital Pakistan 2030: Building Cyber Resilience for the Future",
      excerpt: "Strategic roadmap for Pakistan's cybersecurity infrastructure, examining challenges and opportunities in the next decade.",
      content: "As Pakistan advances toward becoming a fully digital economy by 2030, building robust cybersecurity infrastructure becomes not just important, but critical for national security...",
      date: "December 15, 2024",
      readTime: "15 min read",
      views: 12680,
      category: "Strategy",
      tags: ["Digital Pakistan", "Cybersecurity Strategy", "Future Planning"],
      author: "Prof. Dr. Tariq Rahman, Cybersecurity Policy Expert",
      expertise: "Former advisor to Ministry of IT",
      image: "/api/placeholder/600/300"
    }
  ];

  const allArticles = [...trendsData, ...alertsData, ...policyData, ...casesData, ...blogData];

  const filteredArticles = allArticles.filter(article => {
    const matchesFilter = activeFilter === 'all' || article.category === activeFilter;
    const matchesSearch = !searchTerm || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const recentStats = {
    totalIncidents: "15,240",
    moneyRecovered: "PKR 127M",
    arrestsMade: 89,
    scamsBlocked: "2,340"
  };

  if (!category) {
    // Main News & Insights Overview
    return (
      <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">News & Insights</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay current with the latest cybercrime trends, scam alerts, legal updates, and expert analysis from Pakistan's cybersecurity landscape.
            </p>
          </motion.div>

          {/* Statistics Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
              <div className="text-3xl font-bold text-red-400 mb-2">{recentStats.totalIncidents}</div>
              <div className="text-white/70 text-sm">Incidents Reported (2024)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
              <div className="text-3xl font-bold text-green-400 mb-2">{recentStats.moneyRecovered}</div>
              <div className="text-white/70 text-sm">Money Recovered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{recentStats.arrestsMade}</div>
              <div className="text-white/70 text-sm">Arrests Made</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">{recentStats.scamsBlocked}</div>
              <div className="text-white/70 text-sm">Scams Blocked</div>
            </div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Object.values(categories).map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link
                    to={`/news-insights/${cat.id}`}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-teal-400 text-sm font-medium">{cat.count} Articles</span>
                      <ChevronRight className="h-5 w-5 text-teal-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Latest Updates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allArticles.slice(0, 6).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 bg-gradient-to-br from-teal-500/20 to-accentgreen-500/20">
                    {article.urgent && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        URGENT
                      </div>
                    )}
                    {article.trending && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-white/60">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{article.date}</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Stay Protected</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/complaints" className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
                <Shield className="h-8 w-8 text-red-400" />
                <div>
                  <div className="text-white font-semibold">Report a Scam</div>
                  <div className="text-white/60 text-sm">Help others by reporting</div>
                </div>
              </Link>
              <Link to="/therapy-support" className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
                <Users className="h-8 w-8 text-teal-400" />
                <div>
                  <div className="text-white font-semibold">Get Support</div>
                  <div className="text-white/60 text-sm">Community & counseling</div>
                </div>
              </Link>
              <Link to="/resources" className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-green-400" />
                <div>
                  <div className="text-white font-semibold">Learn More</div>
                  <div className="text-white/60 text-sm">Education & resources</div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Category-specific view would go here
  // For now, redirecting to main page if invalid category
  if (!categories[category]) {
    navigate('/news-insights');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/news-insights"
            className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to News & Insights</span>
          </Link>
        </motion.div>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${categories[category].color} rounded-xl flex items-center justify-center`}>
              {React.createElement(categories[category].icon, { className: "h-8 w-8 text-white" })}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{categories[category].name}</h1>
              <p className="text-white/70 text-lg">{categories[category].description}</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles, topics, or tags..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-white/50"
              />
            </div>
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
            >
              <option value="all">All Categories</option>
              <option value="Banking Fraud">Banking Fraud</option>
              <option value="Romance Scams">Romance Scams</option>
              <option value="Investment Fraud">Investment Fraud</option>
              <option value="SMS Scams">SMS Scams</option>
              <option value="Employment Scams">Employment Scams</option>
            </select>
          </div>
        </motion.div>

        {/* Articles List */}
        <div className="space-y-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-teal-500/20 to-accentgreen-500/20 rounded-lg flex items-center justify-center relative">
                    {article.urgent && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        URGENT
                      </div>
                    )}
                    {article.trending && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </div>
                    )}
                    <FileText className="h-16 w-16 text-white/60" />
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs">
                      {article.category}
                    </span>
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 hover:text-teal-100 transition-colors duration-300 cursor-pointer">
                    {article.title}
                  </h2>
                  
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-1 text-white/60 hover:text-white transition-colors duration-300">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">Like</span>
                      </button>
                      <button className="flex items-center space-x-1 text-white/60 hover:text-white transition-colors duration-300">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-white/60">
                    By {article.author}
                    {article.expertise && <span className="ml-2">• {article.expertise}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-white/60 text-lg mb-4">
              No articles found matching your criteria.
            </div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsInsights;