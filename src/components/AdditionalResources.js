import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Download, PlayCircle, Mail, ArrowRight, ExternalLink,
  Smartphone, Star, Shield, Heart, Brain, CheckCircle2, Clock,
  Users, Award, Globe, AlertTriangle, Lightbulb, Eye, Book
} from 'lucide-react';

function AdditionalResources() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  const mentalHealthApps = [
    {
      id: 1,
      name: "Headspace",
      category: "Mindfulness & Meditation",
      rating: 4.8,
      downloads: "50M+",
      price: "Free/Premium",
      description: "Guided meditation and mindfulness for stress relief and anxiety management.",
      features: ["Guided meditations", "Sleep stories", "Anxiety relief", "Daily mindfulness"],
      securityRating: "Excellent",
      trauma: true,
      pakistani: false,
      verified: true
    },
    {
      id: 2,
      name: "Calm",
      category: "Sleep & Relaxation",
      rating: 4.7,
      downloads: "100M+", 
      price: "Free/Premium",
      description: "Sleep stories, meditation, and relaxation techniques for better mental health.",
      features: ["Sleep stories", "Meditation programs", "Nature sounds", "Breathing exercises"],
      securityRating: "Excellent",
      trauma: true,
      pakistani: false,
      verified: true
    },
    {
      id: 3,
      name: "MindShift",
      category: "Anxiety Management",
      rating: 4.6,
      downloads: "1M+",
      price: "Free",
      description: "Evidence-based anxiety management tools and coping strategies.",
      features: ["Anxiety tracking", "Coping strategies", "Relaxation tools", "Progress monitoring"],
      securityRating: "Good",
      trauma: true,
      pakistani: false,
      verified: true
    },
    {
      id: 4,
      name: "Sehat Kahani",
      category: "Mental Health Support (Pakistan)",
      rating: 4.4,
      downloads: "100K+",
      price: "Paid Consultations",
      description: "Pakistani mental health platform offering consultations with local psychologists.",
      features: ["Local therapists", "Urdu support", "Video consultations", "Affordable rates"],
      securityRating: "Good",
      trauma: true,
      pakistani: true,
      verified: true
    },
    {
      id: 5,
      name: "Daylio",
      category: "Mood Tracking",
      rating: 4.5,
      downloads: "10M+",
      price: "Free/Premium",
      description: "Mood tracking and analysis to help understand emotional patterns.",
      features: ["Mood tracking", "Statistics", "Goal setting", "Export data"],
      securityRating: "Good",
      trauma: true,
      pakistani: false,
      verified: true
    },
    {
      id: 6,
      name: "PTSD Coach",
      category: "Trauma Support",
      rating: 4.3,
      downloads: "500K+",
      price: "Free",
      description: "Self-help tool for managing symptoms of PTSD and trauma recovery.",
      features: ["Symptom tracking", "Coping skills", "Support finder", "Educational content"],
      securityRating: "Excellent",
      trauma: true,
      pakistani: false,
      verified: true
    }
  ];

  const videoWorkshops = [
    {
      id: 1,
      title: "Digital Trauma Recovery: A Complete Guide",
      duration: "45 minutes",
      instructor: "Dr. Sarah Ahmad, Clinical Psychologist",
      views: 12400,
      rating: 4.9,
      level: "Beginner",
      topics: ["Understanding digital trauma", "Recovery strategies", "Building resilience"],
      description: "Comprehensive workshop on understanding and recovering from digital trauma, with practical exercises.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 2,
      title: "Anxiety Management After Cybercrime",
      duration: "35 minutes",
      instructor: "Dr. Ahmed Hassan, Anxiety Specialist",
      views: 8750,
      rating: 4.8,
      level: "Intermediate",
      topics: ["Anxiety triggers", "Coping techniques", "Long-term management"],
      description: "Learn evidence-based techniques to manage anxiety following cyber incidents.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 3,
      title: "Rebuilding Trust in Digital Spaces",
      duration: "30 minutes",
      instructor: "Dr. Fatima Khan, Behavioral Therapist",
      views: 6320,
      rating: 4.7,
      level: "Beginner",
      topics: ["Trust issues", "Gradual exposure", "Safe practices"],
      description: "Step-by-step approach to rebuilding confidence in digital interactions.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 4,
      title: "Sleep Recovery for Trauma Survivors",
      duration: "28 minutes",
      instructor: "Dr. Zara Ali, Sleep Specialist",
      views: 5890,
      rating: 4.6,
      level: "Beginner",
      topics: ["Sleep hygiene", "Trauma and sleep", "Recovery techniques"],
      description: "Practical strategies to restore healthy sleep patterns after traumatic experiences.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 5,
      title: "Mindfulness for Cybercrime Survivors",
      duration: "40 minutes",
      instructor: "Dr. Aisha Malik, Mindfulness Expert",
      views: 9150,
      rating: 4.8,
      level: "Beginner",
      topics: ["Mindfulness basics", "Daily practices", "Trauma-informed approach"],
      description: "Learn mindfulness techniques specifically adapted for cybercrime survivors.",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 6,
      title: "Building Digital Resilience Workshop",
      duration: "55 minutes",
      instructor: "Dr. Omar Shah, Cyber Psychology Expert",
      views: 4670,
      rating: 4.9,
      level: "Advanced",
      topics: ["Resilience building", "Preventive strategies", "Long-term recovery"],
      description: "Advanced workshop on building comprehensive digital resilience and recovery.",
      thumbnail: "/api/placeholder/400/225"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  if (!type) {
    // Main resources overview
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
              to="/therapy-support"
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Therapy & Support</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Additional Resources</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover more tools and resources to support your mental health and digital wellness journey
            </p>
          </motion.div>

          {/* Resource Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/therapy-support/resources/apps"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors duration-300">
                  Mental Health Apps
                </h3>
                <p className="text-white/70 mb-6">
                  Curated list of verified apps for meditation, anxiety management, and mood tracking
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>6 Verified Apps</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>Security Rated</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-400 font-medium">Explore Apps</span>
                  <ArrowRight className="h-5 w-5 text-teal-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/therapy-support/resources/workshops"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <PlayCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors duration-300">
                  Video Workshops
                </h3>
                <p className="text-white/70 mb-6">
                  Expert-led video sessions on trauma recovery, anxiety management, and digital wellness
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <PlayCircle className="h-4 w-4" />
                    <span>6 Workshops</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>30-55 min each</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-400 font-medium">Watch Now</span>
                  <ArrowRight className="h-5 w-5 text-teal-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/therapy-support/resources/newsletter"
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors duration-300">
                  Wellness Newsletter
                </h3>
                <p className="text-white/70 mb-6">
                  Weekly insights on digital safety, mental wellness, and recovery resources
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>2,400+ Subscribers</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-400 font-medium">Subscribe</span>
                  <ArrowRight className="h-5 w-5 text-teal-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Mental Health Apps Page
  if (type === 'apps') {
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
              to="/therapy-support/resources"
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Resources</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mental Health Apps
            </h1>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
              Carefully vetted mobile applications for meditation, anxiety management, mood tracking, and trauma recovery support.
            </p>
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-teal-500/20 to-accentgreen-500/20 rounded-xl p-6 border border-teal-400/20 mb-12"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-teal-400" />
              <h3 className="text-lg font-semibold text-white">Security & Privacy Verified</h3>
            </div>
            <p className="text-white/80">
              All recommended apps have been evaluated for data privacy, security practices, and trauma-informed design.
              Always review app permissions and privacy policies before downloading.
            </p>
          </motion.div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {mentalHealthApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      {app.name}
                      {app.pakistani && (
                        <span className="ml-2 bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                          Pakistani
                        </span>
                      )}
                      {app.verified && (
                        <CheckCircle2 className="ml-2 h-5 w-5 text-teal-400" />
                      )}
                    </h3>
                    <p className="text-teal-300 text-sm mb-2">{app.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{app.rating}</span>
                    </div>
                    <div className="text-white/60 text-sm">{app.downloads}</div>
                  </div>
                </div>

                <p className="text-white/80 mb-4">{app.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, i) => (
                      <span key={i} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-white/60">Price: </span>
                    <span className="text-white">{app.price}</span>
                  </div>
                  <div>
                    <span className="text-white/60">Security: </span>
                    <span className={`${
                      app.securityRating === 'Excellent' ? 'text-green-400' : 
                      app.securityRating === 'Good' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {app.securityRating}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Guide</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Video Workshops Page  
  if (type === 'workshops') {
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
              to="/therapy-support/resources"
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Resources</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Video Workshops
            </h1>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
              Expert-led video sessions designed specifically for cybercrime survivors, covering trauma recovery, anxiety management, and building digital resilience.
            </p>
          </motion.div>

          {/* Workshops Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-teal-500/20 to-accentgreen-500/20 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {workshop.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-black/70 px-2 py-1 rounded">
                      <Eye className="h-4 w-4 text-white" />
                      <span className="text-white text-sm">{workshop.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/70 px-2 py-1 rounded">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{workshop.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      workshop.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      workshop.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {workshop.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300">
                    {workshop.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4">
                    {workshop.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-white/60 text-sm mb-2">Instructor:</div>
                    <div className="text-teal-300 text-sm font-medium">{workshop.instructor}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-white/60 text-sm mb-2">Topics Covered:</div>
                    <div className="flex flex-wrap gap-1">
                      {workshop.topics.map((topic, i) => (
                        <span key={i} className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Watch Workshop</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Newsletter Page
  if (type === 'newsletter') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/therapy-support/resources"
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Resources</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wellness Newsletter
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Stay informed with weekly insights on digital safety, mental wellness, and recovery resources
            </p>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 mb-12"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join 2,400+ Subscribers</h3>
              <p className="text-white/70">
                Get weekly tips, resources, and support delivered to your inbox
              </p>
            </div>

            {subscribeStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-400/30 rounded-lg p-6 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Successfully Subscribed!</h4>
                <p className="text-white/70">
                  Thank you for joining our community. You'll receive your first newsletter within the next week.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Newsletter Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 text-teal-400 mr-2" />
                What You'll Get
              </h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Weekly digital safety tips and updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Mental wellness strategies and exercises</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>New resources and tool recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Recovery success stories and inspiration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Shield className="h-5 w-5 text-teal-400 mr-2" />
                Privacy Promise
              </h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Your email is never shared or sold</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Unsubscribe anytime with one click</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Secure, encrypted email delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>GDPR and privacy compliant</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Sample Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20"
          >
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Book className="h-5 w-5 text-teal-400 mr-2" />
              Sample Newsletter Content
            </h4>
            
            <div className="bg-white/5 rounded-lg p-6 border border-teal-400/10">
              <h5 className="text-lg font-bold text-white mb-4">CyberSafe Weekly - Issue #47</h5>
              
              <div className="space-y-4 text-white/80">
                <div>
                  <h6 className="font-semibold text-teal-300 mb-2">📱 This Week's Digital Safety Tip</h6>
                  <p className="text-sm">How to recognize and avoid Romance Scam red flags - 5 warning signs that could save you thousands...</p>
                </div>
                
                <div>
                  <h6 className="font-semibold text-teal-300 mb-2">🧠 Mental Wellness Focus</h6>
                  <p className="text-sm">Managing Anxiety Spikes: A 5-minute breathing technique for overwhelming moments...</p>
                </div>
                
                <div>
                  <h6 className="font-semibold text-teal-300 mb-2">⭐ Survivor Spotlight</h6>
                  <p className="text-sm">"How I rebuilt my confidence after identity theft" - An anonymous journey of recovery...</p>
                </div>
                
                <div>
                  <h6 className="font-semibold text-teal-300 mb-2">🔧 New Resource</h6>
                  <p className="text-sm">Introducing our Password Manager Setup Guide - Simple security that actually works...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return null;
}

export default AdditionalResources;