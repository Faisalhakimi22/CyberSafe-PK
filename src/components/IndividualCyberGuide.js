import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Smartphone, 
  CreditCard, 
  Lock, 
  AlertTriangle, 
  Wifi, 
  MessageSquare,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Phone,
  ExternalLink,
  User,
  Mail
} from 'lucide-react';

function IndividualCyberGuide() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const threats = [
    {
      id: 'online-scams',
      title: 'Online Scams & Fraud',
      subtitle: "I've been targeted by online fraudsters.",
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-600 to-teal-600',
      content: {
        description: "Online scams target individuals through fake websites, emails, or messages designed to steal money, personal information, or both.",
        immediateActions: [
          "Stop all communication with the scammer immediately",
          "Do not send any money or provide additional personal information",
          "Report the scam through CyberSafe PK's individual complaint portal",
          "Document all evidence including screenshots and messages",
          "Check your bank accounts and credit reports for unauthorized activity",
          "Change passwords for any accounts that may be compromised",
          "Block the scammer's phone numbers and email addresses"
        ],
        prevention: [
          "Use CyberSafe PK's scam awareness resources and alerts",
          "Be skeptical of unsolicited offers that seem too good to be true",
          "Verify the identity of people requesting money or information",
          "Use CyberSafe PK's verified website directory for safe shopping",
          "Enable two-factor authentication on important accounts",
          "Regularly review your financial statements",
          "Stay updated with CyberSafe PK's latest scam warnings"
        ],
        support: "Contact CyberSafe PK's individual support helpline and access our scam reporting and recovery assistance services."
      }
    },
    {
      id: 'identity-theft',
      title: 'Identity Theft',
      subtitle: "Someone is using my personal information fraudulently.",
      icon: <User className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-600 to-deepblue-600',
      content: {
        description: "Identity theft occurs when someone illegally obtains and uses your personal information without permission for fraudulent purposes.",
        immediateActions: [
          "Report identity theft to CyberSafe PK immediately (+92-XXX-XXXXXXX)",
          "Contact your bank and credit card companies to freeze accounts",
          "File a complaint with local police and get a copy of the report",
          "Place fraud alerts on your credit reports",
          "Monitor all financial accounts for unauthorized transactions",
          "Change passwords and PINs for all important accounts",
          "Keep detailed records of all fraudulent activity"
        ],
        prevention: [
          "Use CyberSafe PK's identity protection monitoring services",
          "Protect personal documents and shred sensitive papers",
          "Be cautious about sharing personal information online",
          "Use strong, unique passwords with CyberSafe PK recommended managers",
          "Regularly check your credit reports through CyberSafe PK partners",
          "Enable account alerts and notifications",
          "Use CyberSafe PK's identity theft prevention guidelines"
        ],
        support: "Access CyberSafe PK's identity theft recovery specialists and step-by-step recovery assistance programs."
      }
    },
    {
      id: 'social-media-threats',
      title: 'Social Media Security Issues',
      subtitle: "Problems with my social media accounts or privacy.",
      icon: <Wifi className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-700 to-teal-500',
      content: {
        description: "Social media threats include account takeovers, privacy breaches, cyberbullying, fake profiles, and malicious content targeting individuals.",
        immediateActions: [
          "Change passwords for all affected social media accounts",
          "Report the incident to CyberSafe PK's social media threat team",
          "Review and adjust privacy settings on all social platforms",
          "Remove any suspicious posts or content from your accounts",
          "Report fake profiles or impersonation to the platform",
          "Document evidence of harassment or malicious activity",
          "Inform friends and family about potential fake accounts"
        ],
        prevention: [
          "Use CyberSafe PK's social media security guidelines",
          "Regularly review and update privacy settings",
          "Be cautious about what personal information you share",
          "Use strong authentication methods provided by platforms",
          "Be selective about friend requests and connections",
          "Avoid clicking on suspicious links in messages",
          "Participate in CyberSafe PK's digital literacy programs"
        ],
        support: "Contact CyberSafe PK's social media security team and access our digital privacy and safety resources."
      }
    },
    {
      id: 'mobile-security',
      title: 'Mobile Device Security',
      subtitle: "My smartphone or tablet has been compromised.",
      icon: <Smartphone className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-700 to-deepblue-700',
      content: {
        description: "Mobile security threats include malicious apps, phone scams, SIM swapping, and unauthorized access to personal data on mobile devices.",
        immediateActions: [
          "Disconnect your device from internet and networks",
          "Report mobile security incident to CyberSafe PK (+92-XXX-XXXXXXX)",
          "Check for and remove any suspicious apps",
          "Change passwords for accounts accessed on the device",
          "Contact your mobile service provider about SIM security",
          "Run security scans using CyberSafe PK recommended apps",
          "Back up important data before taking further action"
        ],
        prevention: [
          "Install only apps from official app stores or CyberSafe PK verified sources",
          "Use CyberSafe PK's mobile security best practices guide",
          "Enable screen locks, encryption, and remote wipe features",
          "Keep your mobile operating system and apps updated",
          "Be cautious about public Wi-Fi and charging stations",
          "Use CyberSafe PK recommended mobile security apps",
          "Regularly review app permissions and installed applications"
        ],
        support: "Access CyberSafe PK's mobile security specialists and device protection services."
      }
    },
    {
      id: 'online-harassment',
      title: 'Cyberbullying & Online Harassment',
      subtitle: "I'm experiencing online harassment or bullying.",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-600 to-deepblue-700',
      content: {
        description: "Online harassment includes cyberbullying, stalking, threats, doxxing, and other forms of digital abuse that can cause emotional distress.",
        immediateActions: [
          "Do not respond or engage with the harasser",
          "Report cyberbullying to CyberSafe PK's harassment response team",
          "Document all harassment with screenshots and saved messages",
          "Block the harasser on all platforms and communications",
          "Report harassment to the relevant social media platforms",
          "Inform trusted friends, family, or authorities if threats escalate",
          "Consider temporarily limiting your online presence"
        ],
        prevention: [
          "Use CyberSafe PK's online safety and digital wellness resources",
          "Maintain strong privacy settings on all social platforms",
          "Be mindful about what personal information you share online",
          "Build a support network of trusted online and offline contacts",
          "Learn to recognize and avoid engaging with trolls",
          "Use CyberSafe PK's digital resilience training programs",
          "Practice good digital citizenship and respectful online behavior"
        ],
        support: "Contact CyberSafe PK's cyberbullying support specialists and access our emotional support and legal guidance resources."
      }
    },
    {
      id: 'financial-fraud',
      title: 'Online Banking & Payment Fraud',
      subtitle: "Fraudulent transactions on my accounts.",
      icon: <CreditCard className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-500 to-deepblue-600',
      content: {
        description: "Financial fraud includes unauthorized transactions, fake payment requests, credit card fraud, and banking scams targeting personal finances.",
        immediateActions: [
          "Contact your bank and financial institutions immediately",
          "Report financial fraud to CyberSafe PK's financial crime unit",
          "Freeze or cancel affected cards and accounts",
          "Monitor all financial accounts for additional unauthorized activity",
          "File disputes for fraudulent charges with your bank",
          "Change online banking passwords and security questions",
          "Keep records of all fraudulent transactions and communications"
        ],
        prevention: [
          "Use CyberSafe PK's safe online banking guidelines",
          "Only use secure, verified websites for financial transactions",
          "Enable account alerts and transaction notifications",
          "Use strong authentication methods for banking apps",
          "Regularly monitor bank and credit card statements",
          "Be cautious about sharing financial information online",
          "Use CyberSafe PK's financial security awareness resources"
        ],
        support: "Access CyberSafe PK's financial fraud recovery specialists and connect with banking security experts."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800">
      {/* Header */}
      <div className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-teal-300 mb-8 transition-colors duration-300">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Personal protection against online scams and cyber attacks
            </h1>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
              Comprehensive cybersecurity guidance for individuals to stay safe online, protect personal information, and respond to digital threats effectively.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Personal Cybersecurity Support</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Select a threat type below to get personalized guidance on protecting yourself, responding to incidents, and staying safe online.
          </p>
        </motion.div>

        {/* Threat Categories */}
        <div className="space-y-6">
          {threats.map((threat, index) => (
            <motion.div
              key={threat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-teal-400/30 overflow-hidden hover:bg-white/15 hover:border-teal-400/50 transition-all duration-300"
            >
              {/* Threat Header */}
              <button
                onClick={() => toggleSection(threat.id)}
                className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${threat.color} p-3 rounded-lg text-white shadow-lg`}>
                      {threat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{threat.title}</h3>
                      <p className="text-white/70">{threat.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-teal-400">
                    {expandedSection === threat.id ? 
                      <ChevronUp className="h-6 w-6" /> : 
                      <ChevronDown className="h-6 w-6" />
                    }
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedSection === threat.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-teal-400/30"
                >
                  <div className="p-6 space-y-8">
                    {/* Description */}
                    <div>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {threat.content.description}
                      </p>
                    </div>

                    {/* Immediate Actions */}
                    <div>
                      <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                        <AlertTriangle className="h-6 w-6 mr-3" />
                        What to Do Right Now
                      </h4>
                      <ul className="space-y-3">
                        {threat.content.immediateActions.map((action, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                            <span className="text-white/90 leading-relaxed">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prevention */}
                    <div>
                      <h4 className="text-xl font-semibold text-teal-400 mb-4 flex items-center">
                        <Shield className="h-6 w-6 mr-3" />
                        How to Stay Protected
                      </h4>
                      <ul className="space-y-3">
                        {threat.content.prevention.map((measure, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                            <span className="text-white/90 leading-relaxed">{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support */}
                    <div className="bg-teal-500/20 backdrop-blur-sm p-6 rounded-xl border border-teal-400/30">
                      <h4 className="text-xl font-semibold text-teal-300 mb-3">Get Personal Support</h4>
                      <p className="text-white/90 leading-relaxed">{threat.content.support}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-8 mt-16 border border-red-400/30"
        >
          <h2 className="text-3xl font-bold text-red-300 mb-8 flex items-center">
            <Phone className="h-8 w-8 mr-4" />
            Personal Cybersecurity Help
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-bold text-white mb-3 text-xl">CyberSafe PK Personal Helpline</h3>
              <p className="text-white/70 mb-4">24/7 Personal Cybersecurity Support</p>
              <p className="text-3xl font-bold text-red-300">+92-XXX-XXXXXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-bold text-white mb-3 text-xl">Personal Safety Portal</h3>
              <p className="text-white/70 mb-4">Report incidents and get personalized help</p>
              <Link to="/complaints" className="text-teal-400 hover:text-teal-300 flex items-center font-semibold text-lg transition-colors duration-300">
                Get Help Now <ExternalLink className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default IndividualCyberGuide;