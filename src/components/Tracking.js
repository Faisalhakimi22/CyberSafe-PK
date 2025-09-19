import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Clock, CheckCircle2, AlertCircle, FileText,
  Phone, Mail, MapPin, Calendar, User, Shield
} from 'lucide-react';

function Tracking() {
  const [complaintId, setComplaintId] = useState('');
  const [caseData, setCaseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const statusStages = [
    { id: 1, name: 'Submitted', icon: FileText, color: 'text-amber-400' },
    { id: 2, name: 'In Review', icon: Clock, color: 'text-blue-400' },
    { id: 3, name: 'Forwarded', icon: AlertCircle, color: 'text-purple-400' },
    { id: 4, name: 'Resolved', icon: CheckCircle2, color: 'text-accentgreen-400' }
  ];

  const mockCaseData = {
    id: 'CS-2024-ABC123',
    status: 'In Review',
    currentStage: 2,
    submittedDate: '2024-01-15',
    lastUpdate: '2024-01-16',
    complainant: {
      name: 'Ahmad Ali',
      cnic: '12345-1234567-1',
      phone: '+92 300 1234567',
      email: 'ahmad.ali@email.com'
    },
    complaint: {
      type: 'Online Fraud',
      description: 'Received fraudulent SMS claiming to be from bank asking for OTP code. Lost Rs. 50,000 from account.',
      location: 'Karachi, Sindh',
      evidence: ['screenshot1.png', 'sms_log.txt']
    },
    timeline: [
      {
        date: '2024-01-15',
        time: '14:30',
        status: 'Submitted',
        description: 'Complaint received and assigned case ID',
        officer: 'Inspector Muhammad Hassan'
      },
      {
        date: '2024-01-16',
        time: '09:15',
        status: 'In Review',
        description: 'Case assigned to cybercrime investigation unit',
        officer: 'Sub-Inspector Fatima Khan'
      },
      {
        date: '2024-01-16',
        time: '16:45',
        status: 'Evidence Analysis',
        description: 'Digital evidence under forensic analysis',
        officer: 'Forensic Expert Dr. Ali Raza'
      }
    ],
    assignedOfficer: {
      name: 'Sub-Inspector Fatima Khan',
      phone: '+92 21 1234567',
      email: 'fatima.khan@fia.gov.pk',
      department: 'FIA Cybercrime Unit'
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!complaintId.trim()) {
      setError('Please enter a complaint ID');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock search - in real app, this would be an API call
    if (complaintId.toUpperCase().includes('CS-2024')) {
      setCaseData(mockCaseData);
    } else {
      setError('Complaint ID not found. Please check and try again.');
    }
    
    setIsLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted': return 'text-amber-400';
      case 'In Review': return 'text-blue-400';
      case 'Forwarded': return 'text-purple-400';
      case 'Resolved': return 'text-accentgreen-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Submitted': return 'bg-amber-500/20 border-amber-500/30';
      case 'In Review': return 'bg-blue-500/20 border-blue-500/30';
      case 'Forwarded': return 'bg-purple-500/20 border-purple-500/30';
      case 'Resolved': return 'bg-accentgreen-500/20 border-accentgreen-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-darknavy-900 via-deepblue-900 to-darknavy-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Track Your <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Case</span>
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Monitor the progress of your cybercrime complaint with real-time updates and status tracking.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8"
        >
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={complaintId}
                  onChange={(e) => setComplaintId(e.target.value)}
                  placeholder="Enter your Complaint ID (e.g., CS-2024-ABC123)"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-lg"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white font-bold py-4 px-8 rounded-xl hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span>Track</span>
                  </>
                )}
              </motion.button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accentred-400 mt-4 text-center"
              >
                {error}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Case Details */}
        {caseData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Case Header */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Case {caseData.id}</h2>
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getStatusBg(caseData.status)} border`}>
                    <span className={`font-semibold ${getStatusColor(caseData.status)}`}>
                      {caseData.status}
                    </span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-white/70">Submitted: {caseData.submittedDate}</p>
                  <p className="text-white/70">Last Update: {caseData.lastUpdate}</p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Case Progress</h3>
                <div className="flex items-center space-x-4 overflow-x-auto pb-4">
                  {statusStages.map((stage, index) => {
                    const isActive = caseData.currentStage >= stage.id;
                    const isCurrent = caseData.currentStage === stage.id;
                    const Icon = stage.icon;
                    
                    return (
                      <div key={stage.id} className="flex items-center">
                        <div className={`flex flex-col items-center space-y-2 min-w-0 ${index < statusStages.length - 1 ? 'mr-8' : ''}`}>
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                            isActive 
                              ? 'bg-gradient-to-br from-teal-500 to-accentgreen-500 border-teal-400' 
                              : 'bg-white/10 border-white/20'
                          }`}>
                            <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-white/50'}`} />
                          </div>
                          <span className={`text-sm font-medium text-center ${isActive ? 'text-white' : 'text-white/50'}`}>
                            {stage.name}
                          </span>
                          {isCurrent && (
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        {index < statusStages.length - 1 && (
                          <div className={`w-8 h-0.5 ${isActive ? 'bg-teal-400' : 'bg-white/20'}`}></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Case Details */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-teal-400 mr-2" />
                    Complaint Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/70">Type:</span>
                      <span className="text-white ml-2 font-semibold">{caseData.complaint.type}</span>
                    </div>
                    <div>
                      <span className="text-white/70">Location:</span>
                      <span className="text-white ml-2 font-semibold">{caseData.complaint.location}</span>
                    </div>
                    <div>
                      <span className="text-white/70">Description:</span>
                      <p className="text-white mt-1">{caseData.complaint.description}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <User className="h-6 w-6 text-teal-400 mr-2" />
                    Complainant Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-white/50" />
                      <span className="text-white">{caseData.complainant.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-white/50" />
                      <span className="text-white">{caseData.complainant.cnic}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-white/50" />
                      <span className="text-white">{caseData.complainant.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-white/50" />
                      <span className="text-white">{caseData.complainant.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline & Contact */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-teal-400 mr-2" />
                    Case Timeline
                  </h3>
                  <div className="space-y-4">
                    {caseData.timeline.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex space-x-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-3 h-3 bg-teal-400 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-white font-semibold">{event.status}</span>
                            <span className="text-white/50 text-sm">{event.date} at {event.time}</span>
                          </div>
                          <p className="text-white/80 text-sm mb-1">{event.description}</p>
                          <p className="text-white/60 text-xs">Officer: {event.officer}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-500/20 to-accentgreen-500/20 backdrop-blur-md rounded-3xl p-6 border border-teal-500/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-teal-400 mr-2" />
                    Assigned Officer
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/70">Name:</span>
                      <span className="text-white ml-2 font-semibold">{caseData.assignedOfficer.name}</span>
                    </div>
                    <div>
                      <span className="text-white/70">Department:</span>
                      <span className="text-white ml-2 font-semibold">{caseData.assignedOfficer.department}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-white/50" />
                      <span className="text-white">{caseData.assignedOfficer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-white/50" />
                      <span className="text-white">{caseData.assignedOfficer.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Demo Instructions */}
        {!caseData && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">Demo Instructions</h3>
            <p className="text-white/70 mb-4">
              To see the tracking interface in action, enter any complaint ID that contains "CS-2024"
            </p>
            <p className="text-white/50 text-sm">
              Example: CS-2024-ABC123, CS-2024-DEMO, CS-2024-TEST
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Tracking;



