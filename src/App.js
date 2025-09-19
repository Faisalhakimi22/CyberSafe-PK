import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Upload, Brain, Users, Trophy, Home, Shield, Eye,
  Zap, BookOpen, Award, CheckCircle2, AlertTriangle,
  Microscope, Globe, Camera, FileText, Search, Heart, Lightbulb,
  Phone, Mail, MapPin, X, Clock
} from 'lucide-react';
import UploadTest from './components/UploadTest';
import Quiz from './components/Quiz';
import ForensicLab from './components/ForensicLab';
import ForensicsDemo from './components/ForensicsDemo';
import LearningHub from './components/LearningHub';
import SocialFeed from './components/SocialFeed';
import Leaderboard from './components/Leaderboard';
import SimpleVideoTest from './components/SimpleVideoTest';
import Complaints from './components/Complaints';
import Tracking from './components/Tracking';
import Awareness from './components/Awareness';
import SmallBusinessCyberGuide from './components/SmallBusinessCyberGuide';
import IndividualCyberGuide from './components/IndividualCyberGuide';
import EnterpriseCyberGuide from './components/EnterpriseCyberGuide';
import About from './components/About';
import TherapySupport from './components/TherapySupport';
import ArticlePage from './components/ArticlePage';
import CommunityForum from './components/CommunityForum';
import AdditionalResources from './components/AdditionalResources';
import NewsInsights from './components/NewsInsights';
import './index.css';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');


  const handleUsernameSubmit = (name) => {
    setUsername(name);
    localStorage.setItem('username', name);
  };




  if (!username) {
    return <UsernamePrompt onSubmit={handleUsernameSubmit} />;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-[180px]">
          <Routes>
            <Route path="/" element={<HomePage username={username} />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/track" element={<Tracking />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/upload" element={<UploadTest />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/forensic-lab" element={<ForensicLab />} />
            <Route path="/resources" element={<LearningHub />} />
            <Route path="/feed" element={<SocialFeed />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/cyber-resilience/small-business" element={<SmallBusinessCyberGuide />} />
            <Route path="/cyber-resilience/enterprise" element={<EnterpriseCyberGuide />} />
            <Route path="/cyber-resilience/individual" element={<IndividualCyberGuide />} />
            <Route path="/therapy-support" element={<TherapySupport />} />
            <Route path="/therapy-support/article/:articleId" element={<ArticlePage />} />
            <Route path="/therapy-support/community" element={<CommunityForum />} />
            <Route path="/therapy-support/community/:category" element={<CommunityForum />} />
            <Route path="/therapy-support/resources" element={<AdditionalResources />} />
            <Route path="/therapy-support/resources/:type" element={<AdditionalResources />} />
            <Route path="/news-insights" element={<NewsInsights />} />
            <Route path="/news-insights/:category" element={<NewsInsights />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function UsernamePrompt({ onSubmit }) {
  const [loginMode, setLoginMode] = useState('new'); // 'new', 'existing', 'guest'
  const [aliasId, setAliasId] = useState('');
  const [generatedId, setGeneratedId] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isGeneratingId, setIsGeneratingId] = useState(false);

  // Generate anonymous ID function
  const generateAnonymousId = () => {
    setIsGeneratingId(true);
    // Simulate ID generation delay
    setTimeout(() => {
      const prefix = 'CSP';
      const timestamp = Date.now().toString(36);
      const random = Math.random().toString(36).substr(2, 6);
      const newId = `${prefix}-${timestamp}-${random}`.toUpperCase();
      setGeneratedId(newId);
      setAliasId(newId);
      setIsGeneratingId(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aliasId.trim()) {
      // Simulate JWT token generation
      const userData = {
        aliasId: aliasId.trim(),
        loginType: loginMode,
        timestamp: Date.now(),
        features: loginMode === 'guest' ? ['evidence-check'] : ['full-access']
      };
      
      // Store minimal user data
      localStorage.setItem('cyberSafeAuth', JSON.stringify(userData));
      onSubmit(aliasId.trim());
    }
  };

  const handleGuestAccess = () => {
    const guestData = {
      aliasId: 'GUEST-' + Date.now().toString(36).toUpperCase(),
      loginType: 'guest',
      timestamp: Date.now(),
      features: ['evidence-check']
    };
    
    localStorage.setItem('cyberSafeAuth', JSON.stringify(guestData));
    onSubmit('GUEST-USER');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800 flex">
      {/* Left Side - Professional Branding */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-accentgreen-400/20 rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-accentgreen-400/20 to-teal-400/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-xl">
          {/* Professional Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-12"
          >
            <div className="mr-4">
              <img 
                src="\CyberSafePk _Logo_3.png" 
                alt="CyberSafe PK Logo" 
                className="h-40 w-40 object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                CyberSafe PK
              </h1>
              <p className="text-sm text-teal-200 font-medium">Cybercrime Protection Platform</p>
            </div>
          </motion.div>

          {/* Professional Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Anonymous Access &
              <span className="block text-teal-300">Privacy Protection</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Secure, anonymous access to Pakistan's premier cybercrime protection platform. No real names required - your privacy is our priority.
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 gap-4 mb-12"
          >
            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-teal-400/20">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Anonymous Reporting</h3>
                <p className="text-sm text-white/70">Secure and confidential reporting with identity protection</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-teal-400/20">
              <div className="w-12 h-12 bg-gradient-to-br from-accentgreen-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Verification</h3>
                <p className="text-sm text-white/70">Advanced evidence authentication and validation</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-teal-400/20">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-accentgreen-400 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Privacy Protection</h3>
                <p className="text-sm text-white/70">End-to-end encryption and minimal data collection</p>
              </div>
            </div>
          </motion.div>

          {/* Professional Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center space-x-6 text-sm text-white/60"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-accentgreen-400" />
              <span>Anonymous</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-teal-400" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-teal-300" />
              <span>Secure</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Anonymous Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-deepblue-900 to-teal-800 relative">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-16 right-16 w-20 h-20 bg-teal-400/10 rounded-3xl"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 3, delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-20 left-16 w-16 h-16 bg-accentgreen-400/20 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md relative z-10"
        >
          {/* Form Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <img 
                src="\CyberSafePk _Logo_3.png" 
                alt="CyberSafe PK Logo" 
                className="h-36 w-36 object-contain mx-auto"
              />
            </motion.div>

            <h2 className="text-3xl font-bold text-white mb-3">Anonymous Profile Access</h2>
            <p className="text-white/70 leading-relaxed">
              Secure, private access to CyberSafe Pakistan. No real names required - your privacy is our priority.
            </p>
          </div>

          {/* Login Mode Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="grid grid-cols-3 gap-2 p-1 bg-white/10 rounded-xl backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setLoginMode('new')}
                className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  loginMode === 'new' 
                    ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                New Profile
              </button>
              <button
                type="button"
                onClick={() => setLoginMode('existing')}
                className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  loginMode === 'existing' 
                    ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setLoginMode('guest')}
                className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  loginMode === 'guest' 
                    ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Guest
              </button>
            </div>
          </motion.div>

          {/* Anonymous Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* New Profile Mode */}
            {loginMode === 'new' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-3">
                    Create Anonymous ID
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={aliasId}
                      onChange={(e) => setAliasId(e.target.value)}
                      className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 text-white placeholder-white/50 backdrop-blur-sm"
                      placeholder="Enter your anonymous ID or generate one..."
                      required
                    />
                    <motion.button
                      type="button"
                      onClick={generateAnonymousId}
                      disabled={isGeneratingId}
                      className="w-full bg-white/10 border border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      whileHover={{ scale: isGeneratingId ? 1 : 1.02 }}
                      whileTap={{ scale: isGeneratingId ? 1 : 0.98 }}
                    >
                      {isGeneratingId ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Generating...</span>
                        </>
                      ) : (
                        <span>Generate Anonymous ID</span>
                      )}
                    </motion.button>
                  </div>
                  <p className="text-white/60 text-xs mt-2">
                    • Your ID will be encrypted and stored securely. No personal information required.
                  </p>
                </div>
              </div>
            )}

            {/* Existing Profile Mode */}
            {loginMode === 'existing' && (
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-3">
                  Enter Your Anonymous ID
                </label>
                <input
                  type="text"
                  value={aliasId}
                  onChange={(e) => setAliasId(e.target.value)}
                  className="w-full px-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 text-white placeholder-white/50 backdrop-blur-sm"
                  placeholder="CSP-XXXXXXXXX-XXXXXX"
                  required
                />
                <p className="text-white/60 text-xs mt-2">
                  • Enter the anonymous ID you created previously
                </p>
              </div>
            )}

            {/* Guest Mode */}
            {loginMode === 'guest' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Guest Access</h3>
                <p className="text-white/70 text-sm mb-4">
                  Continue as guest with limited features:
                </p>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400" />
                    <span>AI Evidence Verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-400" />
                    <span>Educational Resources</span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-50">
                    <X className="h-4 w-4 text-red-400" />
                    <span>Case Reporting & Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-50">
                    <X className="h-4 w-4 text-red-400" />
                    <span>Full Platform Features</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button for New/Existing */}
            {loginMode !== 'guest' && (
              <motion.button
                type="submit"
                disabled={!aliasId.trim()}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 ${
                  aliasId.trim()
                    ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white hover:from-teal-600 hover:to-accentgreen-600'
                    : 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                }`}
                whileHover={{ scale: aliasId.trim() ? 1.02 : 1 }}
                whileTap={{ scale: aliasId.trim() ? 0.98 : 1 }}
              >
                {loginMode === 'new' ? 'Create Anonymous Profile' : 'Access Platform'}
              </motion.button>
            )}

            {/* Guest Access Button */}
            {loginMode === 'guest' && (
              <motion.button
                type="button"
                onClick={handleGuestAccess}
                className="w-full bg-gradient-to-r from-accentgreen-600 to-teal-600 text-white font-bold py-4 px-6 rounded-xl hover:from-accentgreen-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
Continue as Guest
              </motion.button>
            )}
          </motion.form>

          {/* Privacy Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 pt-6 border-t border-white/20"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-electric-400">Anonymous</div>
                <div className="text-xs text-white/60">Identity</div>
              </div>
              <div>
                <div className="text-lg font-bold text-neon-400">Encrypted</div>
                <div className="text-xs text-white/60">Data</div>
              </div>
              <div>
                <div className="text-lg font-bold text-violet-400">Secure</div>
                <div className="text-xs text-white/60">Access</div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-white/60 text-xs">
                Secure JWT-based authentication • Minimal data storage • Privacy-first design
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-deepblue-900/95 backdrop-blur-md shadow-lg'
      : 'bg-deepblue-900'
      }`}>
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between" style={{ minHeight: '180px', padding: '10px 0' }}>
          {/* Logo Section - Positioned more to the left */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300 relative"
            >
              {/* Logo with integrated lock icon in 'O' */}
              <div className="flex items-center space-x-1">
                <img 
                  src="\CyberSafePk _Logo_3.png" 
                  alt="CyberSafe PK Logo" 
                  className="object-contain"
                  style={{ height: '140px', width: '140px' }}
                />
                <div className="text-white ml-2">
                  <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
                    CYBERSAFE PK
                  </div>
                  <div className="text-xs font-medium text-teal-200 tracking-wider uppercase mt-1">
                    Cybercrime Protection Platform
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Navigation Links - More space allocated */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-end mr-4">
            <NavLink to="/" text="Home" isActive={location.pathname === '/'} />
            <NavLink to="/upload" text="Scan & Verify" isActive={location.pathname === '/upload'} />
            <NavLink to="/complaints" text="Report Complaint" isActive={location.pathname === '/complaints'} />
            <NavLink to="/track" text="Track Case" isActive={location.pathname === '/track'} />
            <NavLink to="/therapy-support" text="Therapy & Support" isActive={location.pathname.startsWith('/therapy-support')} />
            <NavLink to="/news-insights" text="News & Insights" isActive={location.pathname.startsWith('/news-insights')} />
            <NavLink to="/about" text="About Us" isActive={location.pathname === '/about'} />
            <NavLink to="/resources" text="Learning Hub" isActive={location.pathname === '/resources'} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-white hover:text-teal-300 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, text, isActive = false }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-all duration-300 hover:text-teal-300 relative ${
        isActive 
          ? 'text-white border-b-2 border-teal-400 pb-1' 
          : 'text-white/80'
      }`}
    >
      {text}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
}

function HomePage({ username }) {
  return (
    <>
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden" style={{
        backgroundImage: 'url(/images/Gemini_Generated_Image_vemn1nvemn1nvemn.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        imageRendering: 'high-quality',
        WebkitImageRendering: 'high-quality',
        MozImageRendering: 'high-quality',
        msImageRendering: 'high-quality',
        filter: 'contrast(1.1) saturate(1.05) brightness(1.02)'
      }}>
      </div>

      {/* Your Shield Against Digital Threats Section */}
      <div className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                Your Shield Against Digital Threats
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/80 text-lg mb-8"
              >
                Anonymous Reporting, AI-Verified Evidence, Victim Support, case tracking
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  to="/complaints"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                >
                  Start Now
                </Link>
              </motion.div>
            </div>
            
            {/* Right Side - Action Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Link to="/upload">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm border border-teal-400/30 rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Scan & Verify</h3>
                </motion.div>
              </Link>
              
              <Link to="/complaints">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm border border-teal-400/30 rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">File a Complaint</h3>
                </motion.div>
              </Link>
              
              <Link to="/resources">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm border border-teal-400/30 rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Learn & Be Safe</h3>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Resilience Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mr-4">
                Cyber resilience
              </h2>
              <div className="text-teal-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              Resources for organisations and individuals to help them recover from a cyber attack, and improve their cyber resilience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Small Organizations */}
            <Link to="/cyber-resilience/small-business">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <div className="p-4">
                  <img 
                    src="/images/1Gemini_Generated_Image_ln6dcjln6dcjln6d.png" 
                    alt="Small business cybersecurity guidance"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    Advice for sole traders and small organisations to respond to cyber attacks
                  </h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 2 - Medium to Large Organizations */}
            <Link to="/cyber-resilience/enterprise">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <div className="p-4">
                  <img 
                    src="/images/2Gemini_Generated_Image_z4vdgiz4vdgiz4vd.png" 
                    alt="Enterprise cybersecurity strategy"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    Advice for medium to large organisations to help respond to a cyber incident
                  </h3>
                </div>
              </motion.div>
            </Link>

            {/* Card 3 - Individuals */}
            <Link to="/cyber-resilience/individual">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <div className="p-4">
                  <img 
                    src="/images/3Gemini_Generated_Image_77zvgp77zvgp77zv.png" 
                    alt="Personal cybersecurity protection"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    Advice for individuals to respond to an online scam or cyber attack
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Content Section */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 border border-teal-200 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-64 h-64 border border-blue-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-teal-100 to-blue-100 rounded-3xl transform -rotate-12"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Modern Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">
                Latest Insights
              </span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-teal-800 bg-clip-text text-transparent mb-4">
              Security Intelligence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Stay ahead of threats with cutting-edge research, expert analysis, and actionable cybersecurity guidance
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Article - Takes 2/3 width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/40 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white/90">
                {/* Featured Image Area */}
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img 
                    src="/images/esmGemini_Generated_Image_86n5ad86n5ad86n5.png" 
                    alt="External Attack Surface Management Cybersecurity Illustration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-teal-800 text-xs font-bold px-4 py-2 rounded-full border border-teal-200/50 shadow-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                      FEATURED GUIDE
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-teal-700 uppercase tracking-wide">Security Framework</span>
                    </div>
                    <div className="text-slate-400">•</div>
                    <span className="text-sm text-slate-500 font-medium">December 2024</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    External Attack Surface Management (EASM) Implementation Guide
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Navigate the complex landscape of external attack surface management with our comprehensive buyer's guide. Learn essential evaluation criteria, implementation strategies, and security capabilities that align with your organization's risk profile.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>8 min read</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Eye className="h-4 w-4" />
                        <span>2.4k views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Read Guide</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar - Blog Posts */}
            <div className="lg:col-span-4 space-y-6">
              {/* EASM Blog Post */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl border border-white/40 overflow-hidden transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:bg-white/90"
              >
                {/* Compact Header */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src="/images/availbleGemini_Generated_Image_rbkx8qrbkx8qrbkx.png" 
                    alt="EASM Buyer's Guide Cybersecurity Illustration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 bg-white/95 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200/50 shadow-md">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      BLOG
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-2">
                    EASM Buyer's Guide: Making Informed Security Decisions
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Discover key considerations for selecting external attack surface management solutions that provide comprehensive visibility and risk assessment capabilities.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Dec 18, 2024</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>1.2k</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cyber Resilience Blog Post */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl border border-white/40 overflow-hidden transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:bg-white/90"
              >
                {/* Compact Header */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src="/images/3rdGemini_Generated_Image_asom5rasom5rasom.png" 
                    alt="Cyber Resilience Defense Strategy Illustration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 bg-white/95 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200/50 shadow-md">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      INSIGHT
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-2">
                    Cyber Resilience: Beyond Defense to Recovery Excellence
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    Explore why building robust recovery capabilities and incident response frameworks is as critical as implementing preventive security measures in today's threat landscape.
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Dec 16, 2024</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>856</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold">Stay Informed</h5>
                    <p className="text-xs text-white/80">Weekly security updates</p>
                  </div>
                </div>
                <p className="text-sm text-white/90 mb-4 leading-relaxed">
                  Subscribe to our newsletter for the latest cybersecurity insights, threat intelligence, and expert analysis.
                </p>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105">
                  Subscribe Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Overview Section */}
      <div className="bg-gradient-to-br from-deepblue-800 to-deepblue-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Platform Overview
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive cybersecurity platform designed to protect Pakistani citizens from digital threats
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Report Anonymously Card */}
            <Link to="/complaints">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-teal-400/30 rounded-xl p-6 hover:from-white/20 hover:to-white/10 hover:border-teal-400/50 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                    <Shield className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Report Anonymously</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Submit incidents with complete anonymity and full identity protection. Your privacy is our priority.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-400/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400/30 rounded-full"></div>
                  </div>
                  <div className="text-teal-400 group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
            
            {/* Track & Get Help Card */}
            <Link to="/track">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-teal-400/30 rounded-xl p-6 hover:from-white/20 hover:to-white/10 hover:border-teal-400/50 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                    <Search className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Track & Get Help</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Monitor case progress in real-time and connect with support agencies. Stay informed throughout the process.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-400/30 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-400/50 rounded-full"></div>
                  </div>
                  <div className="text-teal-400 group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
            
            {/* Learn & Be Safe Card */}
            <Link to="/learning-hub">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-teal-400/30 rounded-xl p-6 hover:from-white/20 hover:to-white/10 hover:border-teal-400/50 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                    <BookOpen className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Learn & Be Safe</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Access comprehensive resources and courses for digital safety. Knowledge is your best defense.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-400/30 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-teal-400 group-hover:translate-x-1 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
          
          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20">
              <div className="text-4xl font-bold text-teal-400 mb-2">NEW</div>
              <div className="text-white/70">Platform Launch</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20">
              <div className="text-4xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-white/70">System Available</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20">
              <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
              <div className="text-white/70">Anonymous Reporting</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20">
              <div className="text-4xl font-bold text-teal-400 mb-2">BETA</div>
              <div className="text-white/70">Testing Phase</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact & Support Section */}
      <div className="bg-deepblue-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Emergency Support</h3>
              <p className="text-white/70 text-lg mb-8">
                Get immediate assistance for cybercrime incidents. Our support team is available 24/7 to help protect you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Emergency Hotline</div>
                    <div className="text-teal-300 text-lg font-bold">1991</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-white/70">support@cybersafepk.gov.pk</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-semibold">NCCIA Cybercrime Wing</div>
                    <div className="text-white/70">Islamabad, Pakistan</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Quick Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20"
            >
              <h4 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h4>
              <p className="text-white/70 mb-8">
                Report cybercrime incidents immediately and get the support you need.
              </p>
              <div className="space-y-4">
                <Link to="/complaints" className="block w-full">
                  <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Report Now
                  </button>
                </Link>
                <Link to="/track" className="block w-full">
                  <button className="w-full bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                    Get Support
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer - Partners & Legal */}
      <div className="bg-deepblue-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Partner Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h4 className="text-xl font-semibold text-white mb-8">Trusted Partners & Agencies</h4>
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-colors duration-300">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-teal-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">NCCIA</div>
                  <div className="text-white/60 text-sm">National Cyber Crime Investigation Agency</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-colors duration-300">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-teal-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">PTA</div>
                  <div className="text-white/60 text-sm">Pakistan Telecommunication Authority</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-colors duration-300">
                <div className="text-center">
                  <Award className="h-12 w-12 text-teal-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">NIC</div>
                  <div className="text-white/60 text-sm">National Information Center</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-colors duration-300">
                <div className="text-center">
                  <Users className="h-12 w-12 text-teal-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">NGO Partners</div>
                  <div className="text-white/60 text-sm">Civil Society Organizations</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <div className="text-white/60 text-sm">
                © 2025 CyberSafe PK. All rights reserved.
              </div>
              <div className="flex justify-center space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-white/60 hover:text-teal-400 transition-colors duration-300">Contact</a>
              </div>
              <div className="text-white/60 text-sm md:text-right">
                Secured by Government of Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Footer is now integrated into the main homepage sections above

export default App;
