import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, AlertTriangle, BookOpen, Play, Download, 
  CheckCircle2, ExternalLink, Users, Globe, Lock,
  Smartphone, CreditCard, Wifi, Eye, FileText, Phone
} from 'lucide-react';

function Awareness() {
  const [activeTab, setActiveTab] = useState('cyber-safety');

  const cyberSafetyTips = [
    {
      icon: Lock,
      title: 'Strong Passwords',
      description: 'Use complex passwords with uppercase, lowercase, numbers, and symbols. Never reuse passwords across accounts.',
      tips: [
        'Minimum 12 characters',
        'Include special characters',
        'Use a password manager',
        'Enable two-factor authentication'
      ]
    },
    {
      icon: Wifi,
      title: 'Secure Networks',
      description: 'Be cautious when using public Wi-Fi networks. They can be easily compromised by cybercriminals.',
      tips: [
        'Avoid public Wi-Fi for banking',
        'Use VPN when possible',
        'Verify network names',
        'Turn off auto-connect'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Protect your mobile devices with the same vigilance as your computer. Mobile devices are prime targets.',
      tips: [
        'Keep apps updated',
        'Use app store only',
        'Enable device encryption',
        'Install security software'
      ]
    },
    {
      icon: CreditCard,
      title: 'Online Transactions',
      description: 'Secure your financial information when making online purchases or banking transactions.',
      tips: [
        'Check for HTTPS',
        'Use credit cards over debit',
        'Monitor statements regularly',
        'Avoid saving payment info'
      ]
    },
    {
      icon: Eye,
      title: 'Phishing Awareness',
      description: 'Learn to identify and avoid phishing attempts that try to steal your personal information.',
      tips: [
        'Check sender email addresses',
        'Look for spelling errors',
        'Never click suspicious links',
        'Verify requests directly'
      ]
    },
    {
      icon: FileText,
      title: 'Data Backup',
      description: 'Regularly backup your important data to protect against ransomware and hardware failures.',
      tips: [
        'Use cloud storage',
        'Keep multiple backups',
        'Test restore process',
        'Encrypt sensitive backups'
      ]
    }
  ];

  const threatTypes = [
    {
      name: 'Malware',
      description: 'Malicious software designed to damage or gain unauthorized access to systems.',
      examples: ['Viruses', 'Trojans', 'Ransomware', 'Spyware'],
      prevention: ['Install antivirus software', 'Keep systems updated', 'Avoid suspicious downloads', 'Use email filters']
    },
    {
      name: 'Phishing',
      description: 'Fraudulent attempts to obtain sensitive information by disguising as trustworthy entities.',
      examples: ['Fake emails', 'SMS scams', 'Social media messages', 'Phone calls'],
      prevention: ['Verify sender identity', 'Check URLs carefully', 'Never share credentials', 'Report suspicious messages']
    },
    {
      name: 'Social Engineering',
      description: 'Psychological manipulation to trick people into revealing confidential information.',
      examples: ['Pretexting', 'Baiting', 'Quid pro quo', 'Tailgating'],
      prevention: ['Verify requests', 'Be skeptical', 'Follow security policies', 'Report incidents']
    },
    {
      name: 'Identity Theft',
      description: 'Fraudulent use of someone else\'s personal information for financial gain.',
      examples: ['Credit card fraud', 'Bank account takeover', 'Tax fraud', 'Medical identity theft'],
      prevention: ['Monitor credit reports', 'Shred documents', 'Use strong passwords', 'Enable fraud alerts']
    }
  ];

  const resources = [
    {
      title: 'Cyber Security Guidelines',
      type: 'PDF Guide',
      description: 'Comprehensive guide to protecting yourself online',
      icon: FileText,
      download: true
    },
    {
      title: 'Phishing Detection Training',
      type: 'Interactive Module',
      description: 'Learn to identify and avoid phishing attempts',
      icon: BookOpen,
      interactive: true
    },
    {
      title: 'Mobile Security Best Practices',
      type: 'Video Tutorial',
      description: 'Step-by-step mobile device security setup',
      icon: Play,
      video: true
    },
    {
      title: 'Incident Reporting Guide',
      type: 'PDF Guide',
      description: 'How to report cybercrimes and security incidents',
      icon: FileText,
      download: true
    }
  ];

  const stats = [
    { label: 'Cyber Attacks Daily', value: '2,200+', color: 'text-accentred-400' },
    { label: 'Data Breaches in 2024', value: '1,200+', color: 'text-amber-400' },
    { label: 'Financial Loss (PKR)', value: '50B+', color: 'text-accentgreen-400' },
    { label: 'Users Protected', value: '10M+', color: 'text-teal-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-darknavy-900 via-deepblue-900 to-darknavy-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Cyber <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Awareness</span>
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Stay informed about cyber threats and learn how to protect yourself, your family, and your business from digital dangers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-2 border border-white/20 mb-8"
        >
          <div className="flex space-x-2">
            {[
              { id: 'cyber-safety', label: 'Cyber Safety Tips', icon: Shield },
              { id: 'threats', label: 'Common Threats', icon: AlertTriangle },
              { id: 'resources', label: 'Learning Resources', icon: BookOpen }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-2xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {activeTab === 'cyber-safety' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cyberSafetyTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                    </div>
                    <p className="text-white/80 mb-4">{tip.description}</p>
                    <div className="space-y-2">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <div key={tipIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-accentgreen-400 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{tipItem}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {activeTab === 'threats' && (
            <div className="space-y-8">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                        <AlertTriangle className="h-8 w-8 text-accentred-400 mr-3" />
                        {threat.name}
                      </h3>
                      <p className="text-white/80">{threat.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Common Examples</h4>
                      <div className="space-y-2">
                        {threat.examples.map((example, exIndex) => (
                          <div key={exIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accentred-400 rounded-full"></div>
                            <span className="text-white/70">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Prevention Tips</h4>
                      <div className="space-y-2">
                        {threat.prevention.map((prevention, prevIndex) => (
                          <div key={prevIndex} className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-accentgreen-400 flex-shrink-0" />
                            <span className="text-white/70 text-sm">{prevention}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                          <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded-lg text-xs font-semibold">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-white/80 mb-4">{resource.description}</p>
                        <div className="flex space-x-3">
                          {resource.download && (
                            <motion.button
                              className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Download className="h-4 w-4" />
                              <span>Download</span>
                            </motion.button>
                          )}
                          {resource.interactive && (
                            <motion.button
                              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-accentred-500 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-accentred-600 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Play className="h-4 w-4" />
                              <span>Start</span>
                            </motion.button>
                          )}
                          {resource.video && (
                            <motion.button
                              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-violet-600 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Play className="h-4 w-4" />
                              <span>Watch</span>
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-accentred-500/20 to-amber-500/20 backdrop-blur-md rounded-3xl p-8 border border-accentred-500/30"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-accentred-400 mr-3" />
              Need Immediate Help?
            </h2>
            <p className="text-white/80 mb-6">
              If you're experiencing a cybercrime incident right now, contact our emergency helpline
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-accentred-400" />
                <span className="text-white font-mono text-2xl font-bold">1991</span>
                <span className="text-white/70">FIA Cybercrime</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-accentred-400" />
                <span className="text-white font-mono text-2xl font-bold">15</span>
                <span className="text-white/70">Police Emergency</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Awareness;

