import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText, Upload, Shield, AlertTriangle, CheckCircle2,
  Phone, User, MapPin, Calendar, Clock, Send, ArrowRight,
  Info, Users, Lock, Eye, Database, Smartphone, X, Image,
  Video, FileIcon, Link, MessageSquare, KeyRound, Trash2,
  HelpCircle, ExternalLink
} from 'lucide-react';

function Complaints() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    // Section 1 - Report Information
    alias: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: '',
    orgEmail: '',
    reporterRole: '',
    reportPurpose: '',
    internalReference: '',
    agenciesNotified: [],
    dataBreach: '',
    externalITSupport: '',
    
    // Section 2 - User/Organization Details
    reportingAs: '',
    ageGroup: '',
    gender: '',
    organizationName: '',
    sector: '',
    organizationSize: '',
    location: '',
    confidentialityPreference: '',
    
    // Section 3 - Incident Basics
    incidentTypes: [],
    incidentStartDate: '',
    howItStarted: '',
    briefDescription: '',
    
    // Section 4 - Incident Impact
    affectedItems: [],
    impactLevel: '',
    financialLoss: '',
    victimType: '',
    
    // Section 5 - Attack Identifiers
    attackerDetails: [],
    suspiciousPhones: '',
    fraudulentEmails: '',
    suspiciousUrls: '',
    socialMediaProfiles: '',
    otherDetails: '',
    
    // Section 6 - Evidence Upload
    evidenceFiles: [],
    evidenceUrls: [],
    evidenceQuestions: {
      whenCaptured: '',
      whereObtained: '',
      howObtained: '',
      sourceReliability: '',
      additionalContext: ''
    },
    encryptedNotes: '',
    encryptionPassword: '',
    useEncryption: false,
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'agenciesNotified' || name === 'incidentTypes' || name === 'affectedItems' || name === 'attackerDetails') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 100 * 1024 * 1024; // 100MB per file
    const validFiles = [];
    const invalidFiles = [];

    files.forEach(file => {
      if (file.size > maxSize) {
        invalidFiles.push(`${file.name} (too large)`);
      } else {
        validFiles.push({
          id: Date.now() + Math.random(),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          uploadTime: new Date().toISOString(),
          verified: false,
          verificationStatus: 'pending'
        });
      }
    });

    if (invalidFiles.length > 0) {
      alert(`The following files are too large (max 100MB each):\n${invalidFiles.join(', ')}`);
    }

    setFormData(prev => ({
      ...prev,
      evidenceFiles: [...prev.evidenceFiles, ...validFiles]
    }));

    // Reset input
    e.target.value = '';
  };

  const removeFile = (fileId) => {
    setFormData(prev => ({
      ...prev,
      evidenceFiles: prev.evidenceFiles.filter(f => f.id !== fileId)
    }));
  };

  const addUrl = () => {
    const url = prompt('Enter URL or link to evidence:');
    if (url && url.trim()) {
      const urlEntry = {
        id: Date.now() + Math.random(),
        url: url.trim(),
        type: 'url',
        addedTime: new Date().toISOString(),
        description: ''
      };
      
      setFormData(prev => ({
        ...prev,
        evidenceUrls: [...prev.evidenceUrls, urlEntry]
      }));
    }
  };

  const removeUrl = (urlId) => {
    setFormData(prev => ({
      ...prev,
      evidenceUrls: prev.evidenceUrls.filter(u => u.id !== urlId)
    }));
  };

  const updateEvidenceQuestion = (question, value) => {
    setFormData(prev => ({
      ...prev,
      evidenceQuestions: {
        ...prev.evidenceQuestions,
        [question]: value
      }
    }));
  };

  const toggleEncryption = () => {
    setFormData(prev => ({
      ...prev,
      useEncryption: !prev.useEncryption,
      encryptionPassword: prev.useEncryption ? '' : prev.encryptionPassword
    }));
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) return Image;
    if (fileType.startsWith('video/')) return Video;
    if (fileType.includes('pdf')) return FileText;
    return FileIcon;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateCurrentSection = () => {
    switch (currentSection) {
      case 1:
        return formData.alias.trim() && 
               formData.reporterRole && 
               formData.reportPurpose && 
               formData.dataBreach && 
               formData.externalITSupport;
      case 2:
        return formData.reportingAs && 
               formData.location && 
               formData.confidentialityPreference;
      case 3:
        return formData.incidentTypes.length > 0 && 
               formData.incidentStartDate && 
               formData.howItStarted && 
               formData.briefDescription.trim();
      case 4:
        return formData.affectedItems.length > 0 && 
               formData.impactLevel;
      case 5:
        return true; // Section 5 has no required fields
      case 6:
        return true; // Section 6 has no required fields
      default:
        return false;
    }
  };

  const getValidationErrors = () => {
    const errors = [];
    switch (currentSection) {
      case 1:
        if (!formData.alias.trim()) errors.push('Alias / Unique ID');
        if (!formData.reporterRole) errors.push('Reporter Role');
        if (!formData.reportPurpose) errors.push('Purpose of Report');
        if (!formData.dataBreach) errors.push('Data Breach Question');
        if (!formData.externalITSupport) errors.push('External IT Support Question');
        break;
      case 2:
        if (!formData.reportingAs) errors.push('Reporting As');
        if (!formData.location) errors.push('General Location');
        if (!formData.confidentialityPreference) errors.push('Confidentiality Preference');
        break;
      case 3:
        if (formData.incidentTypes.length === 0) errors.push('Incident Type (select at least one)');
        if (!formData.incidentStartDate) errors.push('Incident Start Date');
        if (!formData.howItStarted) errors.push('How it Started');
        if (!formData.briefDescription.trim()) errors.push('Brief Description');
        break;
      case 4:
        if (formData.affectedItems.length === 0) errors.push('What was Affected (select at least one)');
        if (!formData.impactLevel) errors.push('Impact Level');
        break;
    }
    return errors;
  };

  const nextSection = () => {
    if (validateCurrentSection()) {
      if (currentSection < 6) {
        setCurrentSection(currentSection + 1);
      }
    } else {
      const errors = getValidationErrors();
      alert(`Please complete the following required fields:\n\n• ${errors.join('\n• ')}`);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const getSectionTitle = (section) => {
    const titles = {
      1: "Section 1 – Report Information",
      2: "Section 2 – User / Organisation Details",
      3: "Section 3 – Incident Basics",
      4: "Section 4 – Incident Impact",
      5: "Section 5 – Attack Identifiers",
      6: "Section 6 – Evidence Upload"
    };
    return titles[section];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  // Show introduction page first
  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-darknavy-900 via-deepblue-900 to-darknavy-800 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Report a <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Cyber Incident</span>
            </h1>
            <p className="text-white/80 text-xl max-w-4xl mx-auto leading-relaxed">
              All submissions are valuable and help us work with the NCCIA and trusted partners to protect victims of cybercrime in Pakistan.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* When to Report */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="h-8 w-8 text-teal-400 mr-3" />
                  When to Report
                </h2>
                <p className="text-white/80 mb-6">
                  Please complete this form whether you are:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">Alerting CyberSafe Pakistan for information only, or</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">Requesting support and technical assistance.</span>
                  </div>
                </div>
              </motion.div>

              {/* What to Report */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-teal-400 mr-3" />
                  You Should Report If the Incident Affects
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold">Personal data of individuals</h3>
                      <p className="text-white/70">Women, youth, employees, customers, clients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="h-6 w-6 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold">The organisation's systems</h3>
                      <p className="text-white/70">Hardware, software, accounts, or networks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Smartphone className="h-6 w-6 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold">Your online presence</h3>
                      <p className="text-white/70">Social media, email, bank account, or e-commerce platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="h-6 w-6 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold">Sensitive information</h3>
                      <p className="text-white/70">IDs, financial data, personal photos, or videos</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Submission Process */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-teal-400 mr-3" />
                  Submitting a Report
                </h2>
                <p className="text-white/80 mb-6">
                  Reporting a cyber incident consists of six short sections and takes ~10–15 minutes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-teal-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Report Details</h3>
                      <p className="text-white/70">Type of incident, date, urgency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-teal-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">User / Organisation Details</h3>
                      <p className="text-white/70">(Optional) Alias or organisation name</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-teal-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Incident Basics</h3>
                      <p className="text-white/70">How it started (suspicious link, hacked account, fake profile, etc.)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-teal-400 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Incident Impact</h3>
                      <p className="text-white/70">What was affected (data, accounts, financial loss, reputation)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-teal-400 text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Attack Identifiers</h3>
                      <p className="text-white/70">Any suspicious files, links, phone numbers, usernames, or accounts involved</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-teal-400 text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Evidence Upload</h3>
                      <p className="text-white/70">Screenshots, images, videos, or documents. (Automatically checked with AI for tampering or fake content.)</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Protection */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Eye className="h-8 w-8 text-teal-400 mr-3" />
                  How We Handle Your Information
                </h2>
                <div className="space-y-4 text-white/80">
                  <p>Your information is protected and stored securely with strict access control.</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accentgreen-400 mt-1 flex-shrink-0" />
                      <span>We may share reports with our law enforcement partners (NCCIA Cybercrime Wing) to support investigations.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accentgreen-400 mt-1 flex-shrink-0" />
                      <span>We may share anonymised statistics with NGOs and policymakers to improve awareness and protection.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accentgreen-400 mt-1 flex-shrink-0" />
                      <span>Your data will never be shared with regulators, employers, or the public without your consent.</span>
                    </div>
                  </div>
                  <div className="bg-accentred-500/20 p-4 rounded-xl border border-accentred-400/30 mt-6">
                    <p className="text-white/90">
                      <strong>Note:</strong> This report is not a legal filing — you may still need to report to NCCIA directly if required under law.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Before You Start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Info className="h-8 w-8 text-teal-400 mr-3" />
              Before You Start
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">To report a cyber incident, you'll need:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">Contact details (alias, email, or phone – optional for anonymous reporting)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">Details of the incident (how it began, what was targeted, what was lost/affected)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accentgreen-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">Any evidence (screenshots, files, account links)</span>
                  </div>
                </div>
              </div>
              <div className="bg-accentred-500/20 p-6 rounded-xl border border-accentred-400/30">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-accentred-400 mr-2" />
                  Important Security Notice
                </h3>
                <p className="text-white/90">
                  Do not submit this form from a compromised account or device. If you suspect your device is hacked, use a safe device/network to file the report.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Start Reporting Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowIntro(false)}
              className="bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white font-bold py-4 px-12 rounded-xl hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300 text-xl flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Reporting</span>
              <ArrowRight className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-darknavy-900 via-deepblue-900 to-darknavy-800 p-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-gradient-to-br from-accentgreen-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle2 className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-white mb-4">Cyber Incident Report Submitted Successfully!</h1>
            <p className="text-white/80 text-lg mb-8">
              Your cyber incident report has been received and assigned case ID: <span className="font-mono bg-white/20 px-3 py-1 rounded-lg">CSP-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
            </p>
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <p className="text-teal-300 font-semibold">✓ Form completed with all 6 sections</p>
              <p className="text-white/80 text-sm">Your comprehensive report provides law enforcement with detailed information to investigate your case effectively.</p>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-teal-400" />
                  <span>Initial review within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-teal-400" />
                  <span>Investigation by NCCIA cybercrime unit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400" />
                  <span>Updates via SMS and email</span>
                </div>
              </div>
            </div>
            
            <motion.button
              onClick={() => {
                setSubmitted(false);
                setShowIntro(true);
              }}
              className="bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white font-bold py-3 px-8 rounded-xl hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Another Complaint
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

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
            Report <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Cybercrime</span>
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Help us fight cybercrime by reporting incidents. Your report helps protect others and brings criminals to justice.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4, 5, 6].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentSection 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-white/20 text-white/60'
                }`}>
                  {step}
                </div>
                {step < 6 && <div className={`w-8 h-0.5 ${
                  step < currentSection ? 'bg-teal-500' : 'bg-white/20'
                }`} />}
              </div>
            ))}
          </div>
          <p className="text-center text-white/80 mt-4">
            Estimated time: 10–15 minutes • All reports remain anonymous unless you choose otherwise
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FileText className="h-8 w-8 text-teal-400 mr-3" />
              CyberSafe Pakistan – Report a Cyber Incident Form
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-300 mb-2">
                {getSectionTitle(currentSection)}
              </h3>
              <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-accentgreen-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentSection / 6) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1 - Report Information */}
              {currentSection === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Alias / Unique ID *
                      </label>
                      <input
                        type="text"
                        name="alias"
                        value={formData.alias}
                        onChange={handleInputChange}
                        placeholder="Required if reporting anonymously"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+92 300 1234567 (optional)"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Optional"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Optional"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Reporter Role *
                    </label>
                    <select
                      name="reporterRole"
                      value={formData.reporterRole}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      required
                    >
                      <option value="" className="bg-darknavy-800">Select your role</option>
                      <option value="victim-individual" className="bg-darknavy-800">I am the victim (individual case)</option>
                      <option value="work-for-organization" className="bg-darknavy-800">I work for the affected organisation</option>
                      <option value="assisting-victim" className="bg-darknavy-800">I represent someone assisting the victim</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Purpose of Report *
                    </label>
                    <select
                      name="reportPurpose"
                      value={formData.reportPurpose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      required
                    >
                      <option value="" className="bg-darknavy-800">Select purpose</option>
                      <option value="information-only" className="bg-darknavy-800">Information only</option>
                        <option value="request-assistance" className="bg-darknavy-800">Request CyberSafe Pakistan / NCCIA assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Other Agencies Notified
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['NCCIA Cybercrime Wing', 'Police (local)', 'PTA (Pakistan Telecommunication Authority)', 'NGO/Helpline (e.g., Digital Rights Foundation)', 'Employer / University'].map((agency) => (
                        <label key={agency} className="flex items-center space-x-3 text-white/90">
                          <input
                            type="checkbox"
                            name="agenciesNotified"
                            value={agency}
                            checked={formData.agenciesNotified.includes(agency)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-teal-500 bg-white/10 border-white/30 rounded focus:ring-teal-400 focus:ring-2"
                          />
                          <span className="text-sm">{agency}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Has your organisation/account experienced a data breach? *
                      </label>
                      <select
                        name="dataBreach"
                        value={formData.dataBreach}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-darknavy-800">Select option</option>
                        <option value="yes" className="bg-darknavy-800">Yes</option>
                        <option value="no" className="bg-darknavy-800">No</option>
                        <option value="not-sure" className="bg-darknavy-800">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        External IT/Support used? *
                      </label>
                      <select
                        name="externalITSupport"
                        value={formData.externalITSupport}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-darknavy-800">Select option</option>
                        <option value="yes" className="bg-darknavy-800">Yes</option>
                        <option value="no" className="bg-darknavy-800">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 2 - User/Organization Details */}
              {currentSection === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Reporting As *
                    </label>
                    <select
                      name="reportingAs"
                      value={formData.reportingAs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      required
                    >
                      <option value="" className="bg-darknavy-800">Select type</option>
                      <option value="individual" className="bg-darknavy-800">Individual</option>
                      <option value="organisation" className="bg-darknavy-800">Organisation</option>
                      <option value="on-behalf" className="bg-darknavy-800">On behalf of someone else</option>
                    </select>
                  </div>

                  {formData.reportingAs === 'individual' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Age Group
                        </label>
                        <select
                          name="ageGroup"
                          value={formData.ageGroup}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        >
                          <option value="" className="bg-darknavy-800">Select age group</option>
                          <option value="under-18" className="bg-darknavy-800">Under 18</option>
                          <option value="18-30" className="bg-darknavy-800">18–30</option>
                          <option value="31-50" className="bg-darknavy-800">31–50</option>
                          <option value="50-plus" className="bg-darknavy-800">50+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        >
                          <option value="" className="bg-darknavy-800">Select gender</option>
                          <option value="female" className="bg-darknavy-800">Female</option>
                          <option value="male" className="bg-darknavy-800">Male</option>
                          <option value="prefer-not-to-say" className="bg-darknavy-800">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {formData.reportingAs === 'organisation' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Organisation Name
                        </label>
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleInputChange}
                          placeholder="Optional"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            Sector
                          </label>
                          <select
                            name="sector"
                            value={formData.sector}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                          >
                            <option value="" className="bg-darknavy-800">Select sector</option>
                            <option value="banking" className="bg-darknavy-800">Banking</option>
                            <option value="telecom" className="bg-darknavy-800">Telecom</option>
                            <option value="education" className="bg-darknavy-800">Education</option>
                            <option value="ecommerce" className="bg-darknavy-800">E-commerce</option>
                            <option value="ngo" className="bg-darknavy-800">NGO</option>
                            <option value="government" className="bg-darknavy-800">Government</option>
                            <option value="other" className="bg-darknavy-800">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            Size
                          </label>
                          <select
                            name="organizationSize"
                            value={formData.organizationSize}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                          >
                            <option value="" className="bg-darknavy-800">Select size</option>
                            <option value="small" className="bg-darknavy-800">Small</option>
                            <option value="medium" className="bg-darknavy-800">Medium</option>
                            <option value="large" className="bg-darknavy-800">Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        General Location *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-darknavy-800">Select location</option>
                        <option value="punjab" className="bg-darknavy-800">Punjab</option>
                        <option value="sindh" className="bg-darknavy-800">Sindh</option>
                        <option value="kpk" className="bg-darknavy-800">KPK</option>
                        <option value="balochistan" className="bg-darknavy-800">Balochistan</option>
                        <option value="gilgit-baltistan" className="bg-darknavy-800">Gilgit Baltistan</option>
                        <option value="ajk" className="bg-darknavy-800">AJK</option>
                        <option value="islamabad" className="bg-darknavy-800">Islamabad</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Confidentiality Preference *
                      </label>
                      <select
                        name="confidentialityPreference"
                        value={formData.confidentialityPreference}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-darknavy-800">Select preference</option>
                        <option value="anonymous" className="bg-darknavy-800">Keep me anonymous</option>
                        <option value="alias-only" className="bg-darknavy-800">Share alias only with NCCIA</option>
                        <option value="allow-followup" className="bg-darknavy-800">Allow follow-up (via contact details provided)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 3 - Incident Basics */}
              {currentSection === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Incident Type * (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['Online Harassment / Blackmail', 'Financial Fraud / Scam', 'Account Hack / Identity Theft', 'Fake Profiles / Impersonation', 'Data Breach / Leak', 'Malware / Ransomware'].map((type) => (
                        <label key={type} className="flex items-center space-x-3 text-white/90">
                          <input
                            type="checkbox"
                            name="incidentTypes"
                            value={type}
                            checked={formData.incidentTypes.includes(type)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-teal-500 bg-white/10 border-white/30 rounded focus:ring-teal-400 focus:ring-2"
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Incident Start Date *
                      </label>
                      <input
                        type="date"
                        name="incidentStartDate"
                        value={formData.incidentStartDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        How did it start? *
                      </label>
                      <select
                        name="howItStarted"
                        value={formData.howItStarted}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-darknavy-800">Select how it started</option>
                        <option value="suspicious-link" className="bg-darknavy-800">Suspicious link</option>
                        <option value="fake-social-media" className="bg-darknavy-800">Fake social media account</option>
                        <option value="compromised-email" className="bg-darknavy-800">Compromised email</option>
                        <option value="fraudulent-call-sms" className="bg-darknavy-800">Fraudulent call/SMS</option>
                        <option value="other" className="bg-darknavy-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Brief Description *
                    </label>
                    <textarea
                      name="briefDescription"
                      value={formData.briefDescription}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder='Example: "My Instagram was hacked, blackmail threats sent."'
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Section 4 - Incident Impact */}
              {currentSection === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      What was affected? * (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['Social Media Account', 'Email Account', 'Bank / Mobile Wallet', 'Personal Device (phone, laptop)', 'Organisation Systems'].map((item) => (
                        <label key={item} className="flex items-center space-x-3 text-white/90">
                          <input
                            type="checkbox"
                            name="affectedItems"
                            value={item}
                            checked={formData.affectedItems.includes(item)}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-teal-500 bg-white/10 border-white/30 rounded focus:ring-teal-400 focus:ring-2"
                          />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Impact Level *
                      </label>
                      <select
                        name="impactLevel"
                        value={formData.impactLevel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        required
                      >
                        <option value="" className="bg-darknavy-800">Select impact level</option>
                        <option value="minor" className="bg-darknavy-800">Minor inconvenience</option>
                        <option value="moderate" className="bg-darknavy-800">Moderate (data lost, but recoverable)</option>
                        <option value="severe" className="bg-darknavy-800">Severe (financial loss, identity theft, blackmail)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Victim Type
                      </label>
                      <select
                        name="victimType"
                        value={formData.victimType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      >
                        <option value="" className="bg-darknavy-800">Select victim type</option>
                        <option value="individual" className="bg-darknavy-800">Individual</option>
                        <option value="organisation" className="bg-darknavy-800">Organisation</option>
                        <option value="both" className="bg-darknavy-800">Both</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Estimated Financial / Data Loss
                    </label>
                    <input
                      type="text"
                      name="financialLoss"
                      value={formData.financialLoss}
                      onChange={handleInputChange}
                      placeholder="Optional - estimate amount or describe data loss"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Section 5 - Attack Identifiers */}
              {currentSection === 5 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Do you have any details about the attacker or method?
                    </label>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/80 mb-2">Suspicious Phone Number(s)</label>
                        <input
                          type="text"
                          name="suspiciousPhones"
                          value={formData.suspiciousPhones}
                          onChange={handleInputChange}
                          placeholder="Enter phone numbers (separated by commas)"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Fraudulent Email(s)</label>
                        <input
                          type="text"
                          name="fraudulentEmails"
                          value={formData.fraudulentEmails}
                          onChange={handleInputChange}
                          placeholder="Enter email addresses (separated by commas)"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Website / URL(s)</label>
                        <input
                          type="text"
                          name="suspiciousUrls"
                          value={formData.suspiciousUrls}
                          onChange={handleInputChange}
                          placeholder="Enter suspicious websites or URLs"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Social Media Profile(s)</label>
                        <input
                          type="text"
                          name="socialMediaProfiles"
                          value={formData.socialMediaProfiles}
                          onChange={handleInputChange}
                          placeholder="Enter suspicious social media profiles or usernames"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2">Other Details</label>
                        <textarea
                          name="otherDetails"
                          value={formData.otherDetails}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Any other relevant information about the attacker or attack method"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 6 - Evidence Upload */}
              {currentSection === 6 && (
                <div className="space-y-8">
                  {/* File Upload Section */}
                  <div>
                    <label className="block text-white font-semibold mb-4 text-xl">
                      📂 Upload Evidence Files
                    </label>
                    
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-teal-400 transition-colors mb-4">
                      <Upload className="h-16 w-16 text-white/50 mx-auto mb-4" />
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="evidence-upload"
                        accept="image/*,video/*,.pdf,.doc,.docx,.txt,.zip,.rar,audio/*"
                        multiple
                      />
                      <label
                        htmlFor="evidence-upload"
                        className="cursor-pointer text-white/70 hover:text-white transition-colors block mb-4"
                      >
                        <span className="text-lg font-semibold">Click to upload evidence files</span>
                        <br />
                        <span className="text-sm">Images, videos, PDFs, documents, audio files (max 100MB each)</span>
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {formData.evidenceFiles.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-white/90 font-medium">Uploaded Files ({formData.evidenceFiles.length}):</h4>
                        {formData.evidenceFiles.map((fileItem) => {
                          const FileIconComponent = getFileIcon(fileItem.type);
                          return (
                            <div key={fileItem.id} className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                  <FileIconComponent className="h-5 w-5 text-teal-400" />
                                </div>
                                <div>
                                  <p className="text-white font-medium text-sm">{fileItem.name}</p>
                                  <p className="text-white/60 text-xs">{formatFileSize(fileItem.size)} • {fileItem.type}</p>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-yellow-300 text-xs">AI Verification Pending</span>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFile(fileItem.id)}
                                className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/20 transition-colors"
                                title="Remove file"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* URL/Links Section */}
                  <div>
                    <label className="block text-white font-semibold mb-4 text-xl">
                      🔗 Evidence Links & URLs
                    </label>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-white/80 text-sm">Add links to social media posts, websites, or online evidence</p>
                        <motion.button
                          type="button"
                          onClick={addUrl}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 text-sm"
                        >
                          <Link className="h-4 w-4" />
                          <span>Add URL</span>
                        </motion.button>
                      </div>

                      {formData.evidenceUrls.length > 0 && (
                        <div className="space-y-3">
                          {formData.evidenceUrls.map((urlItem) => (
                            <div key={urlItem.id} className="bg-white/10 rounded-lg p-3 flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <ExternalLink className="h-4 w-4 text-teal-400" />
                                  <a 
                                    href={urlItem.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-teal-300 text-sm hover:underline break-all"
                                  >
                                    {urlItem.url}
                                  </a>
                                </div>
                                <input
                                  type="text"
                                  placeholder="Add description for this link..."
                                  value={urlItem.description}
                                  onChange={(e) => {
                                    setFormData(prev => ({
                                      ...prev,
                                      evidenceUrls: prev.evidenceUrls.map(u => 
                                        u.id === urlItem.id ? { ...u, description: e.target.value } : u
                                      )
                                    }));
                                  }}
                                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-xs placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                              </div>
                              <button
                                onClick={() => removeUrl(urlItem.id)}
                                className="text-red-400 hover:text-red-300 p-1 rounded-lg hover:bg-red-500/20 transition-colors ml-2"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Evidence Context Questions */}
                  <div>
                    <label className="block text-white font-semibold mb-4 text-xl">
                      ❓ Evidence Context Questions
                    </label>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-6">
                      <p className="text-white/80 text-sm mb-4">
                        Help us understand your evidence better by answering these questions:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/80 mb-2 text-sm">
                            <HelpCircle className="h-4 w-4 inline mr-1" />
                            When was this evidence captured/obtained?
                          </label>
                          <input
                            type="text"
                            value={formData.evidenceQuestions.whenCaptured}
                            onChange={(e) => updateEvidenceQuestion('whenCaptured', e.target.value)}
                            placeholder="e.g., 'Yesterday evening', 'Last Tuesday', '2 weeks ago'"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white/80 mb-2 text-sm">
                            <HelpCircle className="h-4 w-4 inline mr-1" />
                            Where did you obtain this evidence?
                          </label>
                          <input
                            type="text"
                            value={formData.evidenceQuestions.whereObtained}
                            onChange={(e) => updateEvidenceQuestion('whereObtained', e.target.value)}
                            placeholder="e.g., 'My phone', 'Email screenshot', 'Social media'"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white/80 mb-2 text-sm">
                            <HelpCircle className="h-4 w-4 inline mr-1" />
                            How did you obtain this evidence?
                          </label>
                          <input
                            type="text"
                            value={formData.evidenceQuestions.howObtained}
                            onChange={(e) => updateEvidenceQuestion('howObtained', e.target.value)}
                            placeholder="e.g., 'Screenshot', 'Photo of screen', 'Downloaded'"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white/80 mb-2 text-sm">
                            <HelpCircle className="h-4 w-4 inline mr-1" />
                            How reliable is this evidence source?
                          </label>
                          <select
                            value={formData.evidenceQuestions.sourceReliability}
                            onChange={(e) => updateEvidenceQuestion('sourceReliability', e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                          >
                            <option value="" className="bg-darknavy-800">Select reliability</option>
                            <option value="very-reliable" className="bg-darknavy-800">Very Reliable (Direct evidence)</option>
                            <option value="reliable" className="bg-darknavy-800">Reliable (From trusted source)</option>
                            <option value="somewhat-reliable" className="bg-darknavy-800">Somewhat Reliable (Second-hand)</option>
                            <option value="uncertain" className="bg-darknavy-800">Uncertain</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-white/80 mb-2 text-sm">
                          <HelpCircle className="h-4 w-4 inline mr-1" />
                          Additional context about this evidence
                        </label>
                        <textarea
                          value={formData.evidenceQuestions.additionalContext}
                          onChange={(e) => updateEvidenceQuestion('additionalContext', e.target.value)}
                          rows={3}
                          placeholder="Any additional information that helps explain or contextualize this evidence..."
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Encrypted Notes Section */}
                  <div>
                    <label className="block text-white font-semibold mb-4 text-xl">
                      🔒 Encrypted Private Notes
                    </label>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl p-6 border border-purple-400/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-purple-300 font-medium mb-1">Secure Encrypted Notes</h4>
                          <p className="text-white/80 text-sm">Add sensitive information that will be encrypted with your password</p>
                        </div>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.useEncryption}
                            onChange={toggleEncryption}
                            className="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-400 focus:ring-offset-0 bg-white/20 border-white/30"
                          />
                          <span className="text-white font-medium">Enable Encryption</span>
                        </label>
                      </div>
                      
                      {formData.useEncryption && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-purple-200 mb-2 text-sm">
                              <KeyRound className="h-4 w-4 inline mr-1" />
                              Set Encryption Password
                            </label>
                            <input
                              type="password"
                              value={formData.encryptionPassword}
                              onChange={(e) => setFormData(prev => ({ ...prev, encryptionPassword: e.target.value }))}
                              placeholder="Enter a strong password to encrypt your notes"
                              className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <p className="text-purple-200 text-xs mt-1">
                              ⚠️ Remember this password - it cannot be recovered
                            </p>
                          </div>
                          
                          <div>
                            <label className="block text-purple-200 mb-2 text-sm">
                              <MessageSquare className="h-4 w-4 inline mr-1" />
                              Encrypted Notes
                            </label>
                            <textarea
                              value={formData.encryptedNotes}
                              onChange={(e) => setFormData(prev => ({ ...prev, encryptedNotes: e.target.value }))}
                              rows={4}
                              placeholder="Enter sensitive information here. This will be encrypted with your password and can only be decrypted by you or authorized investigators..."
                              className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                            />
                          </div>
                        </motion.div>
                      )}
                      
                      <div className="bg-purple-500/10 rounded-lg p-3 mt-4">
                        <p className="text-purple-200 text-xs">
                          🛡️ <strong>Security Notice:</strong> Encrypted notes use AES-256 encryption. Only you and authorized investigators with your password can decrypt this information.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Regular Notes Section */}
                  <div>
                    <label className="block text-white font-semibold mb-4 text-xl">
                      📝 Additional Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any additional information that might help with the investigation (this will not be encrypted)..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Final Notes */}
                  <div className="bg-teal-500/20 p-6 rounded-xl border border-teal-400/30">
                    <h4 className="text-lg font-semibold text-teal-300 mb-3">Security & Legal Notes</h4>
                    <div className="space-y-2 text-white/90 text-sm">
                      <p>🔐 All evidence files are encrypted and stored securely with blockchain chain-of-custody</p>
                      <p>🤖 AI verification checks for deepfakes, tampering, and metadata authenticity</p>
                      <p>⚖️ Digital signatures ensure your evidence can be used in legal proceedings</p>
                      <p>🔒 Anonymous submissions accepted - contact info helps but isn't required</p>
                      <p className="text-red-300 font-semibold">🚨 For urgent/life-threatening incidents → dial NCCIA Cybercrime Helpline (1991)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Validation Status Indicator */}
              {!validateCurrentSection() && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <span className="text-red-300 font-semibold">Required Fields Missing</span>
                  </div>
                  <div className="text-white/80 text-sm">
                    Please complete the following fields to continue:
                  </div>
                  <ul className="text-red-300 text-sm mt-2 space-y-1">
                    {getValidationErrors().map((error, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                        <span>{error}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <motion.button
                  type="button"
                  onClick={prevSection}
                  disabled={currentSection === 1}
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Previous
                </motion.button>
                
                {currentSection < 6 ? (
                  <motion.button
                    type="button"
                    onClick={nextSection}
                    disabled={!validateCurrentSection()}
                    className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                      validateCurrentSection() 
                        ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white hover:from-teal-600 hover:to-accentgreen-600'
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                    }`}
                    whileHover={{ scale: validateCurrentSection() ? 1.02 : 1 }}
                    whileTap={{ scale: validateCurrentSection() ? 0.98 : 1 }}
                  >
                    Next Section
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Report</span>
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Complaints;



