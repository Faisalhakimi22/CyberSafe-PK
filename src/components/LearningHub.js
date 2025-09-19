import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, BookOpen, Video, ExternalLink, Clock, Users, Award, Lightbulb,
  Target, CheckCircle, ArrowRight, Youtube, Share2, Eye, Brain, Shield,
  AlertTriangle, TrendingUp, Globe, Zap, Headphones, FileText, Mic,
  Camera, Star, Gamepad2, Trophy, Bookmark, MessageSquare, Radio,
  Newspaper, GraduationCap, ChevronRight, Timer, Download, Sparkles,
  Microscope, Pause, Volume2, VolumeX, Maximize, X, Calendar,
  MapPin, UserCheck, Building, Heart, Users2, PhoneCall
} from 'lucide-react';

const LearningHub = () => {
  const [activeTab, setActiveTab] = useState('courses');

  // Comprehensive Online Courses
  const coursesContent = [
    {
      id: 1,
      title: 'Cyber Hygiene Fundamentals',
      description: 'Master the basics of digital security, password management, secure browsing, and device protection.',
      type: 'Comprehensive Course',
      duration: '6 weeks',
      difficulty: 'Beginner',
      modules: 12,
      enrolled: 2847,
      rating: 4.8,
      price: 'Free',
      instructor: 'Dr. Ahmed Hassan',
      institution: 'NUST-Cybersecurity Center',
      features: ['Video Lectures', 'Interactive Quizzes', 'Hands-on Labs', 'Certificate of Completion'],
      icon: Shield,
      color: 'from-teal-500 to-accentgreen-500',
      curriculum: [
        'Introduction to Cybersecurity',
        'Password Security & Management',
        'Safe Browsing Practices',
        'Email Security & Phishing',
        'Mobile Device Security',
        'Wi-Fi & Network Safety',
        'Social Media Privacy',
        'Data Backup & Recovery',
        'Software Updates & Patches',
        'Identity Protection',
        'Incident Response Basics',
        'Final Assessment'
      ]
    },
    {
      id: 2,
      title: 'Fraud Awareness & Prevention',
      description: 'Learn to identify, prevent, and respond to various types of online fraud including financial scams, identity theft, and social engineering.',
      type: 'Specialized Course',
      duration: '4 weeks',
      difficulty: 'Intermediate',
      modules: 8,
      enrolled: 1923,
      rating: 4.9,
      price: 'Free',
      instructor: 'Prof. Fatima Khan',
      institution: 'University of Karachi - Law Department',
      features: ['Case Studies', 'Real Fraud Examples', 'Legal Insights', 'Prevention Toolkit'],
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500',
      curriculum: [
        'Types of Online Fraud',
        'Social Engineering Tactics',
        'Financial Scam Recognition',
        'Identity Theft Prevention',
        'Romance & Dating Scams',
        'Investment & Business Frauds',
        'Legal Remedies in Pakistan',
        'Building Personal Defense Systems'
      ]
    },
    {
      id: 3,
      title: 'Digital Privacy Mastery',
      description: 'Comprehensive course on protecting your digital privacy, managing personal data, and understanding privacy laws in Pakistan.',
      type: 'Advanced Course',
      duration: '5 weeks',
      difficulty: 'Advanced',
      modules: 10,
      enrolled: 1456,
      rating: 4.7,
      price: 'Free',
      instructor: 'Adv. Sara Ahmed',
      institution: 'Privacy Rights Foundation Pakistan',
      features: ['Privacy Tools', 'Legal Framework', 'Practical Exercises', 'Expert Interviews'],
      icon: Eye,
      color: 'from-violet-500 to-purple-500',
      curriculum: [
        'Digital Privacy Fundamentals',
        'Data Collection & Tracking',
        'Privacy Settings Optimization',
        'Secure Communication Tools',
        'Anonymous Browsing Techniques',
        'Data Rights in Pakistan',
        'GDPR vs Pakistani Privacy Laws',
        'Corporate Data Practices',
        'Privacy Impact Assessment',
        'Building a Privacy-First Lifestyle'
      ]
    },
    {
      id: 4,
      title: 'AI & Deepfake Detection',
      description: 'Learn to identify AI-generated content, deepfakes, and manipulated media using technical and visual analysis techniques.',
      type: 'Technical Course',
      duration: '3 weeks',
      difficulty: 'Intermediate',
      modules: 6,
      enrolled: 892,
      rating: 4.6,
      price: 'Free',
      instructor: 'Dr. Rashid Ali',
      institution: 'COMSATS AI Research Lab',
      features: ['Detection Tools', 'Technical Analysis', 'Real Examples', 'Lab Access'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      curriculum: [
        'Introduction to AI-Generated Content',
        'Deepfake Technology Overview',
        'Visual Detection Techniques',
        'Technical Analysis Methods',
        'Using Detection Tools',
        'Building Critical Media Literacy'
      ]
    }
  ];

  // Live Workshops & Webinars
  const workshopsContent = [
    {
      id: 1,
      title: 'Cybersecurity for Small Businesses',
      description: 'Practical workshop on implementing cybersecurity measures for small and medium enterprises in Pakistan.',
      date: '2025-01-25',
      time: '2:00 PM - 4:00 PM PKT',
      duration: '2 hours',
      type: 'Live Workshop',
      instructor: 'Eng. Mohammad Tariq',
      institution: 'PSEB - Pakistan Software Export Board',
      maxParticipants: 100,
      registered: 67,
      price: 'Free',
      platform: 'Zoom',
      topics: [
        'Risk Assessment for SMEs',
        'Cost-Effective Security Solutions',
        'Employee Training Programs',
        'Incident Response Planning',
        'Compliance Requirements'
      ],
      materials: ['Workshop Slides', 'Security Checklist', 'Resource Links', 'Q&A Recording'],
      status: 'Registration Open'
    },
    {
      id: 2,
      title: 'Women in Cybersecurity: Career Paths',
      description: 'Inspiring session for women interested in cybersecurity careers, featuring successful professionals and career guidance.',
      date: '2025-01-30',
      time: '6:00 PM - 7:30 PM PKT',
      duration: '90 minutes',
      type: 'Panel Discussion',
      instructor: 'Panel of Female Experts',
      institution: 'Women in Tech Pakistan',
      maxParticipants: 200,
      registered: 143,
      price: 'Free',
      platform: 'Microsoft Teams',
      topics: [
        'Breaking Gender Barriers',
        'Educational Pathways',
        'Industry Opportunities',
        'Networking & Mentorship',
        'Work-Life Balance'
      ],
      materials: ['Career Guide', 'Resource Directory', 'Mentorship Contacts'],
      status: 'Registration Open'
    },
    {
      id: 3,
      title: 'Youth Digital Safety Bootcamp',
      description: 'Interactive session for students and young professionals on staying safe in the digital world.',
      date: '2025-02-05',
      time: '10:00 AM - 12:00 PM PKT',
      duration: '2 hours',
      type: 'Interactive Bootcamp',
      instructor: 'Team CyberSafe PK',
      institution: 'CyberSafe Pakistan',
      maxParticipants: 150,
      registered: 89,
      price: 'Free',
      platform: 'CyberSafe Platform',
      topics: [
        'Social Media Safety',
        'Online Gaming Security',
        'Digital Footprint Management',
        'Cyberbullying Prevention',
        'Safe Online Learning'
      ],
      materials: ['Youth Safety Guide', 'Interactive Games', 'Parent Resources'],
      status: 'Registration Open'
    },
    {
      id: 4,
      title: 'Legal Aspects of Cybercrime in Pakistan',
      description: 'Expert legal session on cybercrime laws, victim rights, and legal procedures in Pakistan.',
      date: '2025-02-10',
      time: '3:00 PM - 5:00 PM PKT',
      duration: '2 hours',
      type: 'Legal Workshop',
      instructor: 'Justice (R) Ali Akbar',
      institution: 'Pakistan Bar Council',
      maxParticipants: 80,
      registered: 45,
      price: 'Free',
      platform: 'Zoom',
      topics: [
        'Prevention of Electronic Crimes Act (PECA)',
        'Reporting Procedures',
        'Victim Rights & Remedies',
        'Evidence Collection',
        'Court Procedures'
      ],
      materials: ['Legal Guide', 'Law References', 'Case Studies', 'Contact Directory'],
      status: 'Registration Open'
    }
  ];

  // Certification Programs
  const certificationsContent = [
    {
      id: 1,
      title: 'Certified Cyber Guardian',
      description: 'Entry-level certification for individuals who have completed basic cybersecurity awareness training.',
      requirements: ['Complete Cyber Hygiene Fundamentals Course', 'Pass Final Assessment (80%+)', '2 Hours Community Service'],
      badge: 'cyber-guardian',
      level: 'Foundation',
      validFor: '2 years',
      holders: 1247,
      benefits: [
        'Digital Badge for LinkedIn/CV',
        'Certificate of Achievement',
        'Access to Exclusive Resources',
        'Community Recognition'
      ],
      nextLevel: 'Cyber Security Specialist',
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 2,
      title: 'Fraud Prevention Expert',
      description: 'Specialized certification for professionals focusing on fraud detection and prevention.',
      requirements: ['Complete Fraud Awareness Course', 'Case Study Analysis', 'Practical Prevention Plan'],
      badge: 'fraud-expert',
      level: 'Specialist',
      validFor: '3 years',
      holders: 534,
      benefits: [
        'Professional Recognition',
        'Industry Network Access',
        'Continuing Education Credits',
        'Job Placement Assistance'
      ],
      nextLevel: 'Master Fraud Investigator',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Privacy Champion',
      description: 'Advanced certification for privacy advocates and professionals specializing in digital privacy.',
      requirements: ['Digital Privacy Mastery Course', 'Privacy Audit Project', 'Community Workshop Delivery'],
      badge: 'privacy-champion',
      level: 'Advanced',
      validFor: '3 years',
      holders: 289,
      benefits: [
        'Expert Status Recognition',
        'Speaking Opportunities',
        'Policy Consultation Invites',
        'Research Collaboration Access'
      ],
      nextLevel: 'Chief Privacy Officer Track',
      icon: Eye,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 4,
      title: 'AI Content Analyst',
      description: 'Technical certification for professionals skilled in detecting AI-generated and manipulated content.',
      requirements: ['AI & Deepfake Detection Course', 'Technical Proficiency Test', 'Real-world Analysis Project'],
      badge: 'ai-analyst',
      level: 'Technical',
      validFor: '2 years',
      holders: 156,
      benefits: [
        'Technical Expert Badge',
        'Tool Access Privileges',
        'Research Paper Co-authoring',
        'Industry Consulting Opportunities'
      ],
      nextLevel: 'Senior AI Forensics Specialist',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  // Partnership Information
  const partnershipsContent = {
    universities: [
      {
        name: 'National University of Sciences & Technology (NUST)',
        type: 'Premier Engineering University',
        collaboration: 'Cybersecurity Research & Education',
        programs: ['Joint Research Projects', 'Student Internships', 'Faculty Exchange', 'Course Development'],
        contact: 'Dr. Ahmed Hassan, NUST Cybersecurity Center',
        since: '2024',
        logo: '/logos/nust-logo.png'
      },
      {
        name: 'University of Karachi',
        type: 'Leading Public University',
        collaboration: 'Legal & Social Sciences Research',
        programs: ['Legal Framework Studies', 'Social Impact Research', 'Student Projects', 'Public Awareness'],
        contact: 'Prof. Fatima Khan, Law Department',
        since: '2024',
        logo: '/logos/ku-logo.png'
      },
      {
        name: 'COMSATS University',
        type: 'Technology University',
        collaboration: 'AI & Machine Learning Research',
        programs: ['AI Research Labs', 'Technical Training', 'Innovation Projects', 'Thesis Supervision'],
        contact: 'Dr. Rashid Ali, AI Research Lab',
        since: '2024',
        logo: '/logos/comsats-logo.png'
      },
      {
        name: 'Lahore University of Management Sciences (LUMS)',
        type: 'Business & Technology University',
        collaboration: 'Cybersecurity Policy & Management',
        programs: ['Policy Research', 'Executive Training', 'Case Study Development', 'Industry Analysis'],
        contact: 'Dr. Maria Usman, CS Department',
        since: '2024',
        logo: '/logos/lums-logo.png'
      }
    ],
    ngos: [
      {
        name: 'Women in Tech Pakistan',
        type: 'Gender Inclusion NGO',
        collaboration: 'Women Empowerment in Cybersecurity',
        programs: ['Mentorship Programs', 'Skill Development', 'Career Guidance', 'Networking Events'],
        contact: 'Ms. Ayesha Rahman, Executive Director',
        since: '2024',
        impact: '2,500+ women trained',
        logo: '/logos/wit-pakistan.png'
      },
      {
        name: 'Privacy Rights Foundation Pakistan',
        type: 'Digital Rights NGO',
        collaboration: 'Digital Privacy Advocacy',
        programs: ['Privacy Education', 'Legal Support', 'Policy Advocacy', 'Community Outreach'],
        contact: 'Adv. Sara Ahmed, Legal Director',
        since: '2024',
        impact: '50,000+ citizens educated',
        logo: '/logos/prf-pakistan.png'
      },
      {
        name: 'Youth Development Foundation',
        type: 'Youth Empowerment NGO',
        collaboration: 'Digital Literacy for Youth',
        programs: ['School Programs', 'Youth Workshops', 'Digital Citizenship', 'Safe Internet Training'],
        contact: 'Mr. Hassan Ali, Program Director',
        since: '2024',
        impact: '15,000+ students reached',
        logo: '/logos/ydf-pakistan.png'
      },
      {
        name: 'Bytes for All Pakistan',
        type: 'Digital Rights Organization',
        collaboration: 'Information Security & Digital Rights',
        programs: ['Digital Security Training', 'Rights Awareness', 'Community Programs', 'Advocacy Campaigns'],
        contact: 'Mr. Shahzad Ahmad, Executive Director',
        since: '2024',
        impact: '100,000+ people impacted',
        logo: '/logos/b4a-pakistan.png'
      }
    ],
    government: [
      {
        name: 'Pakistan Software Export Board (PSEB)',
        type: 'Government Technology Board',
        collaboration: 'Industry Cybersecurity Standards',
        programs: ['SME Security Training', 'Industry Guidelines', 'Export Compliance', 'Capacity Building'],
        contact: 'Eng. Mohammad Tariq, Security Division',
        since: '2024'
      },
      {
        name: 'Higher Education Commission (HEC)',
        type: 'Education Regulatory Body',
        collaboration: 'Academic Program Development',
        programs: ['Curriculum Development', 'Faculty Training', 'Research Funding', 'Academic Standards'],
        contact: 'Dr. Amina Shah, ICT Division',
        since: '2024'
      }
    ]
  };

  const tabs = [
    { 
      id: 'courses', 
      label: 'Online Courses', 
      icon: BookOpen, 
      color: 'violet',
      description: 'Comprehensive cybersecurity education'
    },
    { 
      id: 'workshops', 
      label: 'Workshops & Webinars', 
      icon: Users, 
      color: 'violet',
      description: 'Live interactive sessions' 
    },
    { 
      id: 'certifications', 
      label: 'Certifications', 
      icon: Award, 
      color: 'violet',
      description: 'Professional badges and certificates'
    },
    { 
      id: 'partnerships', 
      label: 'Partners', 
      icon: Globe, 
      color: 'violet',
      description: 'University & NGO collaborations'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesContent.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10">
                        <IconComponent className="h-6 w-6 text-teal-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-xs font-medium border border-teal-400/20">
                            {course.difficulty}
                          </span>
                          <span className="text-white/60 text-xs flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {course.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Key Topics</h4>
                        <div className="space-y-1">
                          {course.curriculum.slice(0, 2).map((module, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/70 text-xs leading-relaxed">{module}</span>
                            </div>
                          ))}
                          {course.curriculum.length > 2 && (
                            <span className="text-white/50 text-xs italic">+{course.curriculum.length - 2} more topics</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Features</h4>
                        <div className="flex flex-wrap gap-1">
                          {course.features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-teal-500/15 to-accentgreen-500/15 text-teal-300 px-2 py-1 rounded text-xs border border-teal-400/20 backdrop-blur-sm">
                              {feature.split(' ').slice(0, 2).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-3 w-3 ${
                                  star <= Math.floor(course.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-white/30'
                                }`}
                              />
                            ))}
                            <span className="text-white/60 ml-1">{course.rating}</span>
                          </div>
                          <span className="text-white/60">{course.enrolled.toLocaleString()} students</span>
                        </div>
                        <div className="text-teal-300 font-bold text-sm">{course.price}</div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm border border-white/10 hover:border-teal-400/30"
                      >
                        Start Learning
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );

      case 'workshops':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshopsContent.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10">
                      <Users className="h-6 w-6 text-teal-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1">{workshop.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${
                          workshop.status === 'Registration Open' 
                            ? 'bg-green-500/20 text-green-300 border-green-400/20' 
                            : 'bg-orange-500/20 text-orange-300 border-orange-400/20'
                        }`}>
                          {workshop.status}
                        </span>
                        <span className="text-white/60 text-xs flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {workshop.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{workshop.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Key Topics</h4>
                      <div className="space-y-1">
                        {workshop.topics.slice(0, 2).map((topic, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/70 text-xs leading-relaxed">{topic}</span>
                          </div>
                        ))}
                        {workshop.topics.length > 2 && (
                          <span className="text-white/50 text-xs italic">+{workshop.topics.length - 2} more topics</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Materials</h4>
                      <div className="flex flex-wrap gap-1">
                        {workshop.materials.slice(0, 3).map((material, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-teal-500/15 to-accentgreen-500/15 text-teal-300 px-2 py-1 rounded text-xs border border-teal-400/20 backdrop-blur-sm">
                            {material.split(' ').slice(0, 2).join(' ')}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                      <div className="text-xs text-white/60 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3" />
                          <span>{workshop.time} • {workshop.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-3 h-3" />
                          <span>{workshop.registered}/{workshop.maxParticipants} registered</span>
                        </div>
                      </div>
                      <div className="text-teal-300 font-bold text-sm">{workshop.price}</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={workshop.registered >= workshop.maxParticipants}
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm border border-white/10 hover:border-teal-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {workshop.registered >= workshop.maxParticipants ? 'Fully Booked' : 'Register Now'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsContent.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10">
                        <IconComponent className="h-6 w-6 text-teal-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-xs font-medium border border-teal-400/20">
                            {cert.level}
                          </span>
                          <span className="text-white/60 text-xs">
                            {cert.holders.toLocaleString()} certified
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{cert.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Key Requirements</h4>
                        <div className="space-y-1">
                          {cert.requirements.slice(0, 2).map((req, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/70 text-xs leading-relaxed">{req}</span>
                            </div>
                          ))}
                          {cert.requirements.length > 2 && (
                            <span className="text-white/50 text-xs italic">+{cert.requirements.length - 2} more requirements</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Key Benefits</h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.benefits.slice(0, 3).map((benefit, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-teal-500/15 to-accentgreen-500/15 text-teal-300 px-2 py-1 rounded text-xs border border-teal-400/20 backdrop-blur-sm">
                              {benefit.split(' ').slice(0, 3).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                        <div className="text-xs text-white/60">
                          <span>Valid: {cert.validFor}</span>
                        </div>
                        <div className="text-xs text-teal-300">
                          Next: {cert.nextLevel.split(' ').slice(0, 2).join(' ')}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm border border-white/10 hover:border-teal-400/30"
                      >
                        Start Certification
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );

      case 'partnerships':
        return (
          <div className="space-y-12">
            {/* Universities Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Building className="h-8 w-8 text-teal-400 mr-3" />
                University Partners
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnershipsContent.universities.map((university, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10">
                        <Building className="h-6 w-6 text-teal-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{university.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-xs font-medium border border-teal-400/20">
                            University
                          </span>
                          <span className="text-white/60 text-xs">
                            Since {university.since}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{university.collaboration}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Programs</h4>
                        <div className="flex flex-wrap gap-1">
                          {university.programs.slice(0, 4).map((program, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-teal-500/15 to-accentgreen-500/15 text-teal-300 px-2 py-1 rounded text-xs border border-teal-400/20 backdrop-blur-sm">
                              {program.split(' ').slice(0, 2).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-3">
                        <div className="flex items-center space-x-2 text-xs text-white/60">
                          <PhoneCall className="w-3 h-3" />
                          <span className="truncate">{university.contact.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* NGOs Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Heart className="h-8 w-8 text-teal-400 mr-3" />
                NGO Partners
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnershipsContent.ngos.map((ngo, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10">
                        <Heart className="h-6 w-6 text-teal-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{ngo.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium border border-green-400/20">
                            NGO
                          </span>
                          <span className="text-white/60 text-xs">
                            Since {ngo.since}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{ngo.collaboration}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Impact</h4>
                        <p className="text-green-300 text-xs bg-gradient-to-r from-green-500/15 to-teal-500/15 px-2 py-1 rounded border border-green-400/20">{ngo.impact}</p>
                      </div>

                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Programs</h4>
                        <div className="flex flex-wrap gap-1">
                          {ngo.programs.slice(0, 4).map((program, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-teal-500/15 to-accentgreen-500/15 text-teal-300 px-2 py-1 rounded text-xs border border-teal-400/20 backdrop-blur-sm">
                              {program.split(' ').slice(0, 2).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-3">
                        <div className="flex items-center space-x-2 text-xs text-white/60">
                          <PhoneCall className="w-3 h-3" />
                          <span className="truncate">{ngo.contact.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Government Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Users2 className="h-8 w-8 text-teal-400 mr-3" />
                Government Partners
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnershipsContent.government.map((gov, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg flex-shrink-0 border border-white/10">
                        <Users2 className="h-6 w-6 text-teal-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{gov.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-xs font-medium border border-teal-400/20">
                            Government
                          </span>
                          <span className="text-white/60 text-xs">
                            Since {gov.since}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{gov.collaboration}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-teal-300 text-xs font-semibold uppercase tracking-wide mb-2">Programs</h4>
                        <div className="flex flex-wrap gap-1">
                          {gov.programs.slice(0, 4).map((program, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-teal-500/15 to-blue-500/15 text-teal-300 px-2 py-1 rounded text-xs border border-teal-400/20 backdrop-blur-sm">
                              {program.split(' ').slice(0, 2).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-3">
                        <div className="flex items-center space-x-2 text-xs text-white/60">
                          <PhoneCall className="w-3 h-3" />
                          <span className="truncate">{gov.contact.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        );

      default:
        return null;
    }
  };

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
              Learning Hub <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">(Courses & Workshops)</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>Purpose: Prevention through awareness.</strong><br />
              Comprehensive cybersecurity education through expert-led courses, live workshops, 
              professional certifications, and partnerships with leading universities and NGOs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>Free Professional Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>Live Expert Workshops</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>Industry Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-teal-400" />
                <span>University Partnerships</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 border border-white/10 shadow-2xl hover:shadow-teal-500/10 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-20"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default LearningHub;