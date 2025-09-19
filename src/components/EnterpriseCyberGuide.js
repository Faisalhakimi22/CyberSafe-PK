import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Building, 
  Network, 
  Lock, 
  AlertTriangle, 
  Server, 
  Cloud,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Phone,
  ExternalLink,
  Users,
  Database
} from 'lucide-react';

function EnterpriseCyberGuide() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const threats = [
    {
      id: 'advanced-persistent-threats',
      title: 'Advanced Persistent Threats (APT)',
      subtitle: "Long-term targeted attacks on our organization.",
      icon: <Network className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-600 to-teal-600',
      content: {
        description: "APT attacks are sophisticated, long-term cyberattacks where intruders gain access to networks and remain undetected for extended periods to steal sensitive data.",
        immediateActions: [
          "Activate enterprise incident response team immediately",
          "Isolate affected systems while preserving forensic evidence",
          "Report to CyberSafe PK enterprise emergency hotline (+92-XXX-XXXXXXX)",
          "Conduct immediate threat hunting using CyberSafe PK APT detection tools",
          "Review and analyze network logs for indicators of compromise",
          "Notify board of directors and key stakeholders",
          "Engage CyberSafe PK's forensic investigation partners"
        ],
        prevention: [
          "Implement CyberSafe PK's enterprise threat intelligence feeds",
          "Deploy advanced endpoint detection and response (EDR) solutions",
          "Use CyberSafe PK's network segmentation best practices",
          "Conduct regular penetration testing through CyberSafe PK partners",
          "Implement zero-trust architecture following CyberSafe PK guidelines",
          "Train security teams using CyberSafe PK's APT awareness modules",
          "Deploy deception technology recommended by CyberSafe PK"
        ],
        support: "Contact CyberSafe PK's enterprise incident response team and access our network of certified forensic investigators and APT specialists."
      }
    },
    {
      id: 'data-breach',
      title: 'Large-Scale Data Breach',
      subtitle: "Unauthorized access to customer or business data.",
      icon: <Database className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-600 to-deepblue-600',
      content: {
        description: "Data breaches involve unauthorized access to sensitive information including customer data, financial records, and proprietary business information.",
        immediateActions: [
          "Contain the breach immediately to prevent further data exposure",
          "Report to CyberSafe PK enterprise hotline within 1 hour",
          "Document all compromised systems and data types",
          "Notify legal counsel and compliance teams",
          "Prepare customer and regulatory notifications using CyberSafe PK templates",
          "Preserve all evidence for forensic investigation",
          "Activate data breach response plan or use CyberSafe PK's template"
        ],
        prevention: [
          "Implement data loss prevention (DLP) using CyberSafe PK recommended solutions",
          "Use CyberSafe PK's data classification and protection frameworks",
          "Deploy database activity monitoring tools",
          "Implement strong access controls and privileged access management",
          "Regular vulnerability assessments through CyberSafe PK partners",
          "Employee training on data handling using CyberSafe PK modules",
          "Encrypt sensitive data using CyberSafe PK approved encryption standards"
        ],
        support: "Access CyberSafe PK's data breach response specialists, legal compliance guidance, and customer communication templates."
      }
    },
    {
      id: 'supply-chain-attack',
      title: 'Supply Chain Compromise',
      subtitle: "Attack through third-party vendors or software.",
      icon: <Building className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-700 to-teal-500',
      content: {
        description: "Supply chain attacks target less-secure elements in the supply chain to gain access to the primary target organization through trusted relationships.",
        immediateActions: [
          "Immediately assess all third-party connections and software",
          "Report the supply chain compromise to CyberSafe PK enterprise team",
          "Isolate affected systems and vendor connections",
          "Contact all potentially affected vendors and customers",
          "Review and validate all software updates and patches",
          "Conduct emergency security assessment of entire supply chain",
          "Document all vendor relationships and access levels"
        ],
        prevention: [
          "Implement CyberSafe PK's vendor security assessment framework",
          "Use CyberSafe PK's supply chain risk management guidelines",
          "Regular security audits of all third-party vendors",
          "Deploy software composition analysis tools",
          "Implement secure software development lifecycle practices",
          "Use CyberSafe PK's vendor security rating system",
          "Regular supply chain security training for procurement teams"
        ],
        support: "Contact CyberSafe PK's supply chain security experts and access our vendor assessment and monitoring services."
      }
    },
    {
      id: 'insider-threats',
      title: 'Insider Threat Incidents',
      subtitle: "Security risks from employees or contractors.",
      icon: <Users className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-700 to-deepblue-700',
      content: {
        description: "Insider threats involve current or former employees, contractors, or business associates who have authorized access and use it maliciously.",
        immediateActions: [
          "Immediately revoke access for suspected insider threat",
          "Report to CyberSafe PK enterprise security team",
          "Preserve all digital evidence and audit logs",
          "Conduct immediate review of the insider's access history",
          "Notify legal and HR departments",
          "Review and secure all sensitive data the insider accessed",
          "Implement additional monitoring for similar access patterns"
        ],
        prevention: [
          "Use CyberSafe PK's insider threat detection and monitoring tools",
          "Implement user behavior analytics (UBA) solutions",
          "Regular access reviews and privilege management",
          "Employee background checks and security clearance processes",
          "Use CyberSafe PK's insider threat awareness training programs",
          "Implement data loss prevention focused on insider risks",
          "Create positive security culture using CyberSafe PK guidelines"
        ],
        support: "Access CyberSafe PK's insider threat specialists, investigation services, and employee security awareness programs."
      }
    },
    {
      id: 'cloud-security-incidents',
      title: 'Cloud Security Breach',
      subtitle: "Security incidents in cloud infrastructure.",
      icon: <Cloud className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-deepblue-600 to-deepblue-700',
      content: {
        description: "Cloud security incidents involve unauthorized access, data exposure, or service disruption in cloud computing environments and services.",
        immediateActions: [
          "Immediately secure cloud access and review all configurations",
          "Report cloud security incident to CyberSafe PK cloud security team",
          "Review cloud access logs and user activities",
          "Contact cloud service provider's security team",
          "Assess scope of data exposure in cloud environments",
          "Implement additional cloud security controls",
          "Document all cloud resources and their security status"
        ],
        prevention: [
          "Use CyberSafe PK's cloud security assessment and monitoring tools",
          "Implement cloud security posture management (CSPM)",
          "Regular cloud configuration audits using CyberSafe PK checklists",
          "Use CyberSafe PK's cloud security training for IT teams",
          "Implement identity and access management for cloud resources",
          "Deploy cloud workload protection platforms",
          "Regular penetration testing of cloud infrastructure"
        ],
        support: "Contact CyberSafe PK's cloud security experts and access our cloud security assessment and monitoring services."
      }
    },
    {
      id: 'business-disruption',
      title: 'Business Continuity Threat',
      subtitle: "Attacks that disrupt critical business operations.",
      icon: <Server className="h-6 w-6" />,
      color: 'bg-gradient-to-br from-teal-500 to-deepblue-600',
      content: {
        description: "Business continuity threats are cyberattacks designed to disrupt critical business operations, causing financial loss and reputational damage.",
        immediateActions: [
          "Activate business continuity plan immediately",
          "Report business disruption to CyberSafe PK enterprise emergency line",
          "Assess impact on critical business processes",
          "Communicate with customers and stakeholders using CyberSafe PK templates",
          "Switch to backup systems and alternate processes",
          "Coordinate with emergency response teams",
          "Document all impacts for insurance and recovery purposes"
        ],
        prevention: [
          "Develop robust business continuity plans using CyberSafe PK templates",
          "Regular business continuity testing and drills",
          "Use CyberSafe PK's business impact analysis frameworks",
          "Implement redundant systems and backup processes",
          "Deploy disaster recovery solutions recommended by CyberSafe PK",
          "Regular risk assessments of critical business processes",
          "Train staff on business continuity procedures"
        ],
        support: "Access CyberSafe PK's business continuity experts, disaster recovery services, and business impact assessment tools."
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
              Comprehensive cyber incident response for medium to large enterprises
            </h1>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
              Advanced cybersecurity guidance for organizations facing sophisticated threats and complex security incidents. Access enterprise-grade response procedures and resources.
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
          <h2 className="text-3xl font-bold text-white mb-4">Enterprise Security Incident Response</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Select a threat category below to access specialized response procedures, prevention strategies, and enterprise-grade support resources.
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
                        Immediate Response Actions
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
                        Prevention & Mitigation
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
                      <h4 className="text-xl font-semibold text-teal-300 mb-3">Enterprise Support</h4>
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
            Enterprise Emergency Response
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-bold text-white mb-3 text-xl">CyberSafe PK Enterprise Hotline</h3>
              <p className="text-white/70 mb-4">24/7 Enterprise Incident Response</p>
              <p className="text-3xl font-bold text-red-300">+92-XXX-XXXXXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-bold text-white mb-3 text-xl">Enterprise Portal</h3>
              <p className="text-white/70 mb-4">Advanced incident reporting and management</p>
              <Link to="/complaints" className="text-teal-400 hover:text-teal-300 flex items-center font-semibold text-lg transition-colors duration-300">
                Access Portal <ExternalLink className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default EnterpriseCyberGuide;