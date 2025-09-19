import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Shield, CheckCircle, Brain, Upload, FileImage, FileVideo, FileAudio,
  AlertTriangle, AlertCircle, Eye, Microscope, Clock, Camera, Link, Globe,
  Zap, Link2, FileText, Award, Info, MapPin, Calendar, X, Play, Star,
  ExternalLink, ChevronDown, ChevronUp, Cpu, TrendingUp,
  Activity, Layers, Database, Network, Gauge
} from 'lucide-react';

const ScanAndVerify = () => {
  const [activeTab, setActiveTab] = useState('deepfake-detection');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [scanResults, setScanResults] = useState(null);
  const [urlToScan, setUrlToScan] = useState('');
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Scanning tools available
  const scanningTools = [
    {
      id: 'deepfake-detection',
      name: 'Deepfake Detection',
      icon: Eye,
      description: 'Detect AI-generated faces and manipulated videos using advanced neural networks',
      color: 'from-teal-500 to-accentgreen-500',
      acceptedTypes: 'image/*, video/*'
    },
    {
      id: 'image-forensics',
      name: 'Image Forensics',
      icon: Microscope,
      description: 'Analyze image metadata, detect tampering, and verify authenticity',
      color: 'from-violet-500 to-purple-500',
      acceptedTypes: 'image/*'
    },
    {
      id: 'audio-analysis',
      name: 'Audio Analysis',
      icon: FileAudio,
      description: 'Detect voice cloning, audio deepfakes, and synthetic speech',
      color: 'from-blue-500 to-cyan-500',
      acceptedTypes: 'audio/*'
    },
    {
      id: 'url-scanner',
      name: 'URL Scanner',
      icon: Link,
      description: 'Scan URLs for phishing, malware, and suspicious content',
      color: 'from-orange-500 to-red-500',
      acceptedTypes: 'url'
    }
  ];

  const handleFileUpload = (event, toolId) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile({
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        toolId
      });
      startAnalysis(toolId, file);
    }
  };

  const startAnalysis = async (toolId, file = null) => {
    setIsLoading(true);
    setAnalysisProgress(0);
    setScanResults(null);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    // Simulate API call
    setTimeout(() => {
      clearInterval(progressInterval);
      setAnalysisProgress(100);
      
      // Generate mock results based on tool type
      const mockResults = generateMockResults(toolId, file);
      setScanResults(mockResults);
      setIsLoading(false);
    }, 3000);
  };

  const generateMockResults = (toolId, file) => {
    switch (toolId) {
      case 'deepfake-detection':
        return {
          toolName: 'Deepfake Detection',
          confidence: Math.random() > 0.5 ? 0.92 : 0.15,
          isAuthentic: Math.random() > 0.5,
          details: {
            'Face Detection': 'Multiple faces detected',
            'Temporal Consistency': 'Normal frame transitions',
            'Compression Artifacts': 'Standard compression detected',
            'AI Signatures': Math.random() > 0.5 ? 'No AI patterns found' : 'AI generation patterns detected'
          }
        };
      case 'image-forensics':
        return {
          toolName: 'Image Forensics',
          confidence: 0.88,
          isAuthentic: true,
          details: {
            'EXIF Data': 'Original metadata intact',
            'Error Level Analysis': 'Consistent compression levels',
            'Copy-Move Detection': 'No duplicated regions found',
            'Noise Analysis': 'Natural sensor noise pattern'
          }
        };
      case 'audio-analysis':
        return {
          toolName: 'Audio Analysis',
          confidence: 0.94,
          isAuthentic: Math.random() > 0.3,
          details: {
            'Voice Biometrics': 'Natural voice characteristics',
            'Spectral Analysis': 'Human speech patterns detected',
            'Temporal Features': 'Normal speech timing',
            'AI Detection': 'No synthetic speech indicators'
          }
        };
      case 'url-scanner':
        return {
          toolName: 'URL Scanner',
          confidence: 0.96,
          isAuthentic: true,
          details: {
            'Domain Reputation': 'Clean domain history',
            'SSL Certificate': 'Valid and trusted',
            'Content Analysis': 'No malicious content detected',
            'Phishing Indicators': 'No phishing patterns found'
          }
        };
      default:
        return null;
    }
  };

  const currentTool = scanningTools.find(tool => tool.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Scan & <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Verify</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Advanced AI-powered tools to detect deepfakes, verify media authenticity, and scan for digital threats. 
              Protect yourself from misinformation and cyber deception.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>AI-Powered Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>Secure & Private</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Tool Selection Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Your Analysis Tool</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scanningTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.button
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    activeTab === tool.id
                      ? 'bg-white/20 border-teal-400/50 shadow-xl shadow-teal-500/20'
                      : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-teal-400/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-white/70 text-sm">{tool.description}</p>
                  {activeTab === tool.id && (
                    <div className="mt-4 flex items-center text-teal-400 text-sm font-medium">
                      <Star className="h-4 w-4 mr-2" />
                      Active Tool
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Analysis Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-teal-400/20"
        >
          <div className="text-center mb-8">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentTool?.color} flex items-center justify-center mx-auto mb-4`}>
              {currentTool && <currentTool.icon className="h-8 w-8 text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{currentTool?.name}</h3>
            <p className="text-white/80">{currentTool?.description}</p>
          </div>

          {/* Upload/Input Section */}
          {activeTab !== 'url-scanner' ? (
            <div className="mb-8">
              <div className="border-2 border-dashed border-white/30 rounded-2xl p-12 text-center hover:border-teal-400/50 transition-colors">
                <input
                  type="file"
                  accept={currentTool?.acceptedTypes}
                  onChange={(e) => handleFileUpload(e, activeTab)}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-16 w-16 text-white/50 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-white mb-2">
                    Upload {activeTab.includes('image') ? 'Image' : activeTab.includes('audio') ? 'Audio' : 'Media'} File
                  </p>
                  <p className="text-white/70">
                    Drag and drop or click to browse files
                  </p>
                  <p className="text-teal-400 text-sm mt-2">
                    Supported: {currentTool?.acceptedTypes.replace('*', 'All formats')}
                  </p>
                </label>
              </div>

              {uploadedFile && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 bg-white/10 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{uploadedFile.name}</p>
                      <p className="text-white/60 text-sm">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="text-red-400 hover:text-red-300 p-2"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="mb-8">
              <div className="relative">
                <input
                  type="url"
                  value={urlToScan}
                  onChange={(e) => setUrlToScan(e.target.value)}
                  placeholder="Enter URL to scan (e.g., https://example.com)"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => startAnalysis('url-scanner')}
                  disabled={!urlToScan || isLoading}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300"
                >
                  {isLoading ? 'Scanning...' : 'Scan URL'}
                </motion.button>
              </div>
            </div>
          )}

          {/* Analysis Progress */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium">Analyzing content...</span>
                  <span className="text-teal-400 font-bold">{analysisProgress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-teal-500 to-accentgreen-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${analysisProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
                  <div className="text-white/70">
                    <Clock className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Processing</div>
                  </div>
                  <div className="text-white/70">
                    <Brain className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">AI Analysis</div>
                  </div>
                  <div className="text-white/70">
                    <Shield className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Security Check</div>
                  </div>
                  <div className="text-white/70">
                    <CheckCircle className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs">Verification</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Section */}
          {scanResults && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Overall Result */}
              <div className={`rounded-2xl p-6 border-2 ${
                scanResults.isAuthentic 
                  ? 'bg-green-500/20 border-green-400/50 text-green-100'
                  : 'bg-red-500/20 border-red-400/50 text-red-100'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Analysis Complete</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {(scanResults.confidence * 100).toFixed(1)}%
                    </div>
                    <div className="text-sm opacity-80">Confidence</div>
                  </div>
                </div>
                <p className="text-lg font-medium">
                  {scanResults.isAuthentic 
                    ? '✅ Content appears authentic' 
                    : '⚠️ Potential manipulation detected'
                  }
                </p>
              </div>

              {/* Detailed Analysis */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Detailed Analysis</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(scanResults.details).map(([key, value], index) => (
                    <div key={key} className="bg-white/10 rounded-xl p-4">
                      <div className="font-semibold text-teal-400 mb-2">{key}</div>
                      <div className="text-white/80 text-sm">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setScanResults(null);
                    setUploadedFile(null);
                    setUrlToScan('');
                    setAnalysisProgress(0);
                  }}
                  className="px-6 py-3 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-all duration-300"
                >
                  Analyze Another File
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white rounded-xl font-medium hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300"
                >
                  Download Report
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Use Our Scanning Tools?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-accentgreen-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Detection</h3>
              <p className="text-white/80">
                Advanced machine learning algorithms trained on millions of samples to detect even the most sophisticated manipulations.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy Protected</h3>
              <p className="text-white/80">
                Your uploaded content is processed securely and deleted immediately after analysis. No data is stored or shared.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Results</h3>
              <p className="text-white/80">
                Get instant analysis results with detailed reports and confidence scores to help you make informed decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScanAndVerify;