import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Mail, 
  CreditCard, 
  Lock, 
  AlertTriangle, 
  Smartphone, 
  Wifi,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Phone,
  ExternalLink
} from 'lucide-react';

function SmallBusinessCyberGuide() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const threats = [
    {
      id: 'phishing',
      title: 'Phishing',
      subtitle: "I've received a suspicious message.",
      icon: <Mail className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-600 to-teal-600',
      content: {
        description: "Phishing attacks involve fraudulent messages designed to steal sensitive information like passwords, credit card numbers, or personal data.",
        immediateActions: [
          "Do not click any links or download attachments in suspicious emails",
          "Do not provide personal or business information",
          "Report the phishing attempt through CyberSafe PK complaint portal",
          "Forward the suspicious email to our cybercrime analysis team",
          "Check if others in your organization received similar messages",
          "Document all details including sender information and timestamps"
        ],
        prevention: [
          "Enable email security filters and anti-spam protection",
          "Subscribe to CyberSafe PK threat intelligence alerts",
          "Train employees using CyberSafe PK awareness resources",
          "Implement two-factor authentication on all business accounts",
          "Keep email software updated with latest security patches",
          "Use CyberSafe PK's verified website directory for safe browsing"
        ],
        support: "Contact CyberSafe PK support team and access our cybersecurity training resources through the Learning Hub."
      }
    },
    {
      id: 'payment-fraud',
      title: 'Business Payment Fraud',
      subtitle: "My business has lost money after a scam email.",
      icon: <CreditCard className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-600 to-deepblue-600',
      content: {
        description: "Business email compromise (BEC) scams target companies to fraudulently transfer money or sensitive information through deceptive emails.",
        immediateActions: [
          "Contact your bank immediately to report the fraudulent transaction",
          "File a complaint with local law enforcement",
          "Report the incident to CyberSafe PK Hotline (+92-XXX-XXXXXXX)",
          "Preserve all evidence including emails, transaction records",
          "Change passwords for all compromised accounts",
          "Notify your insurance provider if you have cyber coverage"
        ],
        prevention: [
          "Implement dual approval process for financial transactions",
          "Verify payment requests through separate communication channels",
          "Use CyberSafe PK verified payment platform directory",
          "Train staff using CyberSafe PK's BEC awareness modules",
          "Regularly review and reconcile bank statements",
          "Subscribe to CyberSafe PK fraud alerts for your business sector"
        ],
        support: "Contact CyberSafe PK Hotline, your bank's fraud department, and consider hiring a cybersecurity consultant."
      }
    },
    {
      id: 'hacked-accounts',
      title: 'Hacked Accounts',
      subtitle: "I've lost access to an account or noticed unusual activity.",
      icon: <Lock className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-700 to-teal-500',
      content: {
        description: "Account takeover occurs when cybercriminals gain unauthorized access to your business accounts, potentially compromising sensitive data.",
        immediateActions: [
          "Try to regain control by resetting passwords immediately",
          "Enable two-factor authentication if not already active",
          "Check for unauthorized transactions or data access",
          "Review and revoke suspicious app permissions",
          "Contact the platform's support team for account recovery",
          "Monitor other accounts for signs of compromise"
        ],
        prevention: [
          "Use strong, unique passwords for each business account",
          "Enable two-factor authentication on all accounts",
          "Use CyberSafe PK's account monitoring alerts",
          "Keep software and apps updated with security patches",
          "Use CyberSafe PK recommended password managers",
          "Limit admin access to essential personnel only",
          "Regular security audits through CyberSafe PK assessment tools"
        ],
        support: "Contact the affected platform's security team and use CyberSafe PK's identity monitoring services."
      }
    },
    {
      id: 'ransomware',
      title: 'Ransomware Attack',
      subtitle: "My organisation has experienced a ransomware attack.",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-700 to-deepblue-700',
      content: {
        description: "Ransomware is malicious software that encrypts your files and demands payment for decryption. This is a serious business continuity threat.",
        immediateActions: [
          "Disconnect infected devices from network immediately",
          "Do NOT pay the ransom - CyberSafe PK strongly advises against it",
          "Report to CyberSafe PK emergency hotline immediately (+92-XXX-XXXXXXX)",
          "Use CyberSafe PK's ransomware assessment toolkit",
          "Activate your incident response plan or use CyberSafe PK's template",
          "Notify customers using CyberSafe PK's communication guidelines",
          "Contact your cyber insurance provider and share CyberSafe PK incident report"
        ],
        prevention: [
          "Maintain regular, tested backups using CyberSafe PK approved methods",
          "Keep all software updated using CyberSafe PK vulnerability alerts",
          "Use CyberSafe PK recommended endpoint protection solutions",
          "Train employees using CyberSafe PK's ransomware awareness modules",
          "Implement network segmentation with CyberSafe PK guidelines",
          "Use CyberSafe PK's incident response plan templates"
        ],
        support: "Contact CyberSafe PK emergency response team, access our data recovery partner network, and use our ransomware recovery resources. Never pay ransoms."
      }
    },
    {
      id: 'infected-devices',
      title: 'Infected Devices',
      subtitle: "My device is behaving strangely, it might be infected.",
      icon: <Smartphone className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-600 to-deepblue-700',
      content: {
        description: "Malware infections can compromise your business devices, leading to data theft, system damage, or unauthorized access to your network.",
        immediateActions: [
          "Disconnect the infected device from your network",
          "Run a full system scan with updated antivirus software",
          "Check for unauthorized software or browser extensions",
          "Change passwords for accounts accessed from the device",
          "Monitor other devices on your network for signs of spread",
          "Back up important data from clean devices"
        ],
        prevention: [
          "Install CyberSafe PK recommended antivirus solutions",
          "Only download software from CyberSafe PK verified sources",
          "Use CyberSafe PK patch management alerts and guidelines",
          "Follow CyberSafe PK user account security best practices",
          "Implement application whitelisting using CyberSafe PK guidelines",
          "Use CyberSafe PK's automated device scanning tools"
        ],
        support: "Contact CyberSafe PK technical support team or access our certified cybersecurity partner network for device cleaning and network assessment."
      }
    },
    {
      id: 'dos-attack',
      title: 'Denial of Service (DoS) Attack',
      subtitle: "My business website or network is not responding.",
      icon: <Wifi className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-500 to-deepblue-600',
      content: {
        description: "DoS attacks overwhelm your systems with traffic, making websites or networks unavailable to legitimate users and customers.",
        immediateActions: [
          "Contact your web hosting provider or ISP immediately",
          "Monitor network traffic to identify attack patterns",
          "Implement rate limiting and traffic filtering",
          "Activate DDoS protection services if available",
          "Communicate with customers about service disruptions",
          "Document the attack for law enforcement reporting"
        ],
        prevention: [
          "Use CyberSafe PK recommended CDN services with DDoS protection",
          "Implement CyberSafe PK network monitoring and alerting tools",
          "Configure firewalls using CyberSafe PK security templates",
          "Use CyberSafe PK's service outage response plan templates",
          "Access CyberSafe PK's cloud-based DDoS protection partner network",
          "Maintain redundant systems following CyberSafe PK guidelines"
        ],
        support: "Contact your hosting provider, ISP, and access CyberSafe PK's specialized DDoS mitigation partner network."
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
              Advice for sole traders and small organisations to respond to cyber attacks
            </h1>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
              It is worrying if you are victim of an online scam or cyber attack. Resources and support are available to help you.
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
          <h2 className="text-3xl font-bold text-white mb-4">I need help with . . .</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Select a topic below to find out what action you can take to recover, and where to find support.
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
                        Immediate Actions
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
                        Prevention Measures
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
                      <h4 className="text-xl font-semibold text-teal-300 mb-3">Getting Support</h4>
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
            Emergency Cybercrime Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-bold text-white mb-3 text-xl">CyberSafe PK Hotline</h3>
              <p className="text-white/70 mb-4">24/7 Emergency Cybercrime Support</p>
              <p className="text-3xl font-bold text-red-300">+92-XXX-XXXXXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-bold text-white mb-3 text-xl">CyberSafe PK Portal</h3>
              <p className="text-white/70 mb-4">Online complaint registration</p>
              <Link to="/complaints" className="text-teal-400 hover:text-teal-300 flex items-center font-semibold text-lg transition-colors duration-300">
                File Complaint <ExternalLink className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SmallBusinessCyberGuide;