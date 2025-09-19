import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart, BookOpen, Users, Phone, Video, MessageCircle,
  Calendar, Clock, Shield, AlertTriangle, CheckCircle2,
  User, Star, ArrowRight, Download, PlayCircle,
  Headphones, Mail, MapPin, ExternalLink, Globe,
  Lock, UserCheck, Award, Lightbulb
} from 'lucide-react';

function TherapySupport() {
  const [activeTab, setActiveTab] = useState('articles');
  const [selectedCrisisType, setSelectedCrisisType] = useState('general');
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [articleCategory, setArticleCategory] = useState('trauma');
  const [bookingData, setBookingData] = useState({
    sessionType: '',
    date: '',
    time: '',
    description: ''
  });
  const [bookingErrors, setBookingErrors] = useState({});
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  // Sample data for articles
  const articles = {
    trauma: [
      {
        id: 1,
        title: "Understanding Digital Trauma: First Steps to Recovery",
        excerpt: "Learn how cybercrime affects mental health and discover initial coping strategies.",
        readTime: "8 min read",
        category: "Trauma Recovery",
        difficulty: "Beginner"
      },
      {
        id: 2,
        title: "Rebuilding Trust After Online Fraud",
        excerpt: "Practical steps to regain confidence in digital interactions and financial security.",
        readTime: "12 min read",
        category: "Trust Issues",
        difficulty: "Intermediate"
      },
      {
        id: 3,
        title: "Managing Anxiety from Identity Theft",
        excerpt: "Techniques to cope with the stress and uncertainty following identity compromise.",
        readTime: "10 min read",
        category: "Anxiety Management",
        difficulty: "Beginner"
      }
    ],
    coping: [
      {
        id: 4,
        title: "Daily Mindfulness for Cybercrime Survivors",
        excerpt: "Simple meditation and breathing exercises to manage stress and anxiety.",
        readTime: "6 min read",
        category: "Mindfulness",
        difficulty: "Beginner"
      },
      {
        id: 5,
        title: "Building Digital Resilience",
        excerpt: "Strengthen your mental defenses against online threats and harassment.",
        readTime: "15 min read",
        category: "Resilience",
        difficulty: "Advanced"
      },
      {
        id: 6,
        title: "Sleep Recovery After Cyber Incidents",
        excerpt: "Restore healthy sleep patterns disrupted by cybercrime stress.",
        readTime: "9 min read",
        category: "Sleep Health",
        difficulty: "Intermediate"
      }
    ]
  };

  // Sample counselors data
  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Ahmad",
      specialization: "Trauma & PTSD",
      experience: "8 years",
      rating: 4.9,
      languages: ["Urdu", "English"],
      availability: "Available Today",
      image: "/api/placeholder/120/120",
      credentials: ["Licensed Clinical Psychologist", "Trauma Specialist"]
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      specialization: "Anxiety & Depression",
      experience: "12 years",
      rating: 4.8,
      languages: ["Urdu", "English", "Punjabi"],
      availability: "Next Available: Tomorrow",
      image: "/api/placeholder/120/120",
      credentials: ["PhD Psychology", "CBT Certified"]
    },
    {
      id: 3,
      name: "Dr. Fatima Khan",
      specialization: "Family & Relationships",
      experience: "6 years",
      rating: 4.7,
      languages: ["Urdu", "English"],
      availability: "Available Today",
      image: "/api/placeholder/120/120",
      credentials: ["Marriage & Family Therapist", "Couples Counseling"]
    }
  ];

  // Crisis hotlines data
  const crisisHotlines = {
    general: [
      {
        name: "National Cybercrime Emergency",
        number: "1991",
        description: "24/7 immediate cybercrime assistance",
        type: "Emergency",
        availability: "24/7"
      },
      {
        name: "Mental Health Crisis Line",
        number: "1166",
        description: "Immediate psychological support",
        type: "Mental Health",
        availability: "24/7"
      }
    ],
    specific: [
      {
        name: "Women's Digital Safety Helpline",
        number: "0800-12345",
        description: "Specialized support for women victims",
        type: "Specialized",
        availability: "9 AM - 9 PM"
      },
      {
        name: "Youth Cyber Support",
        number: "0300-123456",
        description: "Support for victims under 25",
        type: "Youth",
        availability: "2 PM - 10 PM"
      },
      {
        name: "Business Cyber Emergency",
        number: "021-1234567",
        description: "Corporate cybercrime assistance",
        type: "Business",
        availability: "Business Hours"
      }
    ]
  };

  const validateBookingForm = () => {
    const errors = {};
    
    if (!bookingData.sessionType) {
      errors.sessionType = 'Please select a session type';
    }
    
    if (!bookingData.date) {
      errors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(bookingData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        errors.date = 'Please select a future date';
      }
    }
    
    if (!bookingData.time) {
      errors.time = 'Please select a time';
    }
    
    setBookingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
    if (bookingErrors[field]) {
      setBookingErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleConfirmBooking = () => {
    if (validateBookingForm()) {
      setIsBookingConfirmed(true);
      setBookingStep(3);
    }
  };

  const handleNewBooking = () => {
    setBookingStep(1);
    setSelectedCounselor(null);
    setBookingData({
      sessionType: '',
      date: '',
      time: '',
      description: ''
    });
    setBookingErrors({});
    setIsBookingConfirmed(false);
  };

  const renderArticlesSection = () => (
    <div className="space-y-8">
      {/* Article Categories */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setArticleCategory('trauma')}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            articleCategory === 'trauma'
              ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
        >
          Trauma Recovery
        </button>
        <button
          onClick={() => setArticleCategory('coping')}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            articleCategory === 'coping'
              ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
        >
          Coping Strategies
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(articleCategory === 'trauma' ? articles.trauma : articles.coping).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-white/60">{article.readTime}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-teal-100 transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded ${
                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {article.difficulty}
              </span>
              
              <Link to={`/therapy-support/article/${article.id}`} className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300">
                <span className="text-sm">Read More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderCounselorBooking = () => (
    <div className="space-y-8">
      {bookingStep === 1 && (
        <>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Choose Your Counselor</h3>
            <p className="text-white/70">All sessions are confidential and conducted by certified professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counselors.map((counselor, index) => (
              <motion.div
                key={counselor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                  selectedCounselor?.id === counselor.id
                    ? 'border-teal-400 bg-white/20 shadow-lg shadow-teal-500/20'
                    : 'border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40'
                }`}
                onClick={() => setSelectedCounselor(counselor)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{counselor.name}</h4>
                    <p className="text-teal-300 text-sm">{counselor.specialization}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Experience:</span>
                    <span className="text-white">{counselor.experience}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white">{counselor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Languages:</span>
                    <span className="text-white">{counselor.languages.join(', ')}</span>
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-white/70">Availability: </span>
                    <span className={`${
                      counselor.availability.includes('Today') ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {counselor.availability}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {counselor.credentials.map((credential, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs">
                      <CheckCircle2 className="h-3 w-3 text-teal-400" />
                      <span className="text-white/70">{credential}</span>
                    </div>
                  ))}
                </div>

                {selectedCounselor?.id === counselor.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 p-3 bg-teal-500/20 rounded-lg border border-teal-400/30"
                  >
                    <p className="text-teal-200 text-sm font-medium">Selected</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {selectedCounselor && (
            <div className="text-center">
              <button
                onClick={() => setBookingStep(2)}
                className="bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Continue to Booking
              </button>
            </div>
          )}
        </>
      )}

      {bookingStep === 2 && (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Book Your Session</h3>
            <p className="text-white/70">Choose your preferred session type and schedule</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20">
            <div className="flex items-center space-x-4 mb-6 p-4 bg-teal-500/20 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{selectedCounselor.name}</h4>
                <p className="text-teal-300 text-sm">{selectedCounselor.specialization}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Session Type</h5>
                <div className="grid grid-cols-3 gap-4">
                  <div 
                    onClick={() => handleBookingInputChange('sessionType', 'chat')}
                    className={`rounded-lg p-4 text-center border transition-colors duration-300 cursor-pointer ${
                      bookingData.sessionType === 'chat'
                        ? 'bg-teal-500/20 border-teal-400'
                        : 'bg-white/10 border-teal-400/20 hover:border-teal-400/40'
                    }`}
                  >
                    <MessageCircle className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Chat</div>
                    <div className="text-white/70 text-sm">Text-based</div>
                  </div>
                  <div 
                    onClick={() => handleBookingInputChange('sessionType', 'voice')}
                    className={`rounded-lg p-4 text-center border transition-colors duration-300 cursor-pointer ${
                      bookingData.sessionType === 'voice'
                        ? 'bg-teal-500/20 border-teal-400'
                        : 'bg-white/10 border-teal-400/20 hover:border-teal-400/40'
                    }`}
                  >
                    <Phone className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Voice</div>
                    <div className="text-white/70 text-sm">Audio call</div>
                  </div>
                  <div 
                    onClick={() => handleBookingInputChange('sessionType', 'video')}
                    className={`rounded-lg p-4 text-center border transition-colors duration-300 cursor-pointer ${
                      bookingData.sessionType === 'video'
                        ? 'bg-teal-500/20 border-teal-400'
                        : 'bg-white/10 border-teal-400/20 hover:border-teal-400/40'
                    }`}
                  >
                    <Video className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                    <div className="text-white font-medium">Video</div>
                    <div className="text-white/70 text-sm">Face-to-face</div>
                  </div>
                </div>
                {bookingErrors.sessionType && (
                  <p className="text-red-400 text-sm mt-2">{bookingErrors.sessionType}</p>
                )}
              </div>

              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Preferred Date & Time</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => handleBookingInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white ${
                        bookingErrors.date ? 'border-red-400' : 'border-white/20'
                      }`}
                    />
                    {bookingErrors.date && (
                      <p className="text-red-400 text-sm mt-1">{bookingErrors.date}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Time</label>
                    <select 
                      value={bookingData.time}
                      onChange={(e) => handleBookingInputChange('time', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white ${
                        bookingErrors.time ? 'border-red-400' : 'border-white/20'
                      }`}
                    >
                      <option value="">Select Time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                    {bookingErrors.time && (
                      <p className="text-red-400 text-sm mt-1">{bookingErrors.time}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Brief Description (Optional)</h5>
                <textarea
                  rows="4"
                  value={bookingData.description}
                  onChange={(e) => handleBookingInputChange('description', e.target.value)}
                  placeholder="Let your counselor know what you'd like to discuss..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-white/50"
                ></textarea>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setBookingStep(1)}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Back
                </button>
                <button 
                  onClick={handleConfirmBooking}
                  className="flex-1 bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {bookingStep === 3 && (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h3>
            <p className="text-white/70">Your therapy session has been successfully booked</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 mb-8">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Calendar className="h-5 w-5 text-teal-400 mr-2" />
              Session Details
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-teal-500/20 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white">{selectedCounselor.name}</h5>
                  <p className="text-teal-300 text-sm">{selectedCounselor.specialization}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-1">Session Type</div>
                  <div className="text-white font-medium capitalize">{bookingData.sessionType}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-1">Date & Time</div>
                  <div className="text-white font-medium">
                    {new Date(bookingData.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="text-teal-300 text-sm">{bookingData.time}</div>
                </div>
              </div>
              
              {bookingData.description && (
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white/70 text-sm mb-2">Session Notes</div>
                  <div className="text-white">{bookingData.description}</div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/20 to-accentgreen-500/20 rounded-xl p-6 border border-teal-400/20 mb-8">
            <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 text-teal-400 mr-2" />
              Important Information
            </h5>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>You will receive session details and connection link via secure message</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Please join the session 5 minutes early to ensure smooth connection</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>All sessions are confidential and conducted in secure environment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>You can reschedule or cancel up to 24 hours before the session</span>
              </li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <button 
              onClick={handleNewBooking}
              className="bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Another Session
            </button>
            <div>
              <Link 
                to="/therapy-support" 
                className="text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
              >
                Return to Therapy & Support
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCrisisHotlines = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full mb-6">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-semibold">Emergency Support Available 24/7</span>
        </div>
      </div>

      {/* Crisis Type Selection */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setSelectedCrisisType('general')}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            selectedCrisisType === 'general'
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
        >
          General Emergency
        </button>
        <button
          onClick={() => setSelectedCrisisType('specific')}
          className={`px-6 py-3 rounded-full transition-all duration-300 ${
            selectedCrisisType === 'specific'
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
          }`}
        >
          Specialized Support
        </button>
      </div>

      {/* Hotlines Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {crisisHotlines[selectedCrisisType].map((hotline, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-red-400/20 hover:bg-white/15 hover:border-red-400/40 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{hotline.name}</h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  hotline.type === 'Emergency' ? 'bg-red-500/20 text-red-300' :
                  hotline.type === 'Mental Health' ? 'bg-purple-500/20 text-purple-300' :
                  hotline.type === 'Specialized' ? 'bg-orange-500/20 text-orange-300' :
                  hotline.type === 'Youth' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-teal-500/20 text-teal-300'
                }`}>
                  {hotline.type}
                </span>
              </div>
            </div>

            <p className="text-white/80 mb-4">{hotline.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold text-red-400">{hotline.number}</div>
              <div className="text-sm text-white/60">
                <Clock className="h-4 w-4 inline mr-1" />
                {hotline.availability}
              </div>
            </div>

            <a 
              href={`tel:${hotline.number}`}
              className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              <Phone className="h-5 w-5 inline mr-2" />
              Call Now
            </a>
          </motion.div>
        ))}
      </div>

      {/* Additional Emergency Information */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20">
        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Shield className="h-6 w-6 text-teal-400 mr-2" />
          Emergency Guidelines
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-white mb-3">When to Call Emergency Lines:</h5>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Immediate threat to personal safety</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Active cyberstalking or harassment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Financial fraud in progress</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Suicidal thoughts or self-harm</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">What to Have Ready:</h5>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Details of the incident</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Screenshots or evidence</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Account information if compromised</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Your anonymous ID if reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPeerCommunity = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Peer Support Community</h3>
        <p className="text-white/70 max-w-2xl mx-auto">
          Connect with others who have experienced similar challenges. Share experiences, offer support, and learn from each other in a safe, moderated environment.
        </p>
      </div>

      {/* Community Guidelines */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Shield className="h-5 w-5 text-teal-400 mr-2" />
          Community Guidelines
        </h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">Maintain anonymity and privacy</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">Be respectful and supportive</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/80">No sharing of personal details</span>
          </div>
        </div>
      </div>

      {/* Forum Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/therapy-support/community/recovery-stories">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Recovery Stories</h4>
            <p className="text-white/70 text-sm mb-4">Share your journey and inspire others</p>
            <div className="flex items-center text-sm text-white/60">
              <Users className="h-4 w-4 mr-1" />
              <span>142 members</span>
            </div>
          </motion.div>
        </Link>

        <Link to="/therapy-support/community/support-groups">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Support Groups</h4>
            <p className="text-white/70 text-sm mb-4">Find your support network</p>
            <div className="flex items-center text-sm text-white/60">
              <Users className="h-4 w-4 mr-1" />
              <span>89 members</span>
            </div>
          </motion.div>
        </Link>

        <Link to="/therapy-support/community/tips-advice">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Tips & Advice</h4>
            <p className="text-white/70 text-sm mb-4">Practical advice from survivors</p>
            <div className="flex items-center text-sm text-white/60">
              <Users className="h-4 w-4 mr-1" />
              <span>256 members</span>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Join Community Button */}
      <div className="text-center">
        <Link to="/therapy-support/community" className="inline-block bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
          <Users className="h-5 w-5 inline mr-2" />
          Join Community
        </Link>
      </div>

      {/* Moderation Notice */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/10 text-center">
        <Lock className="h-8 w-8 text-teal-400 mx-auto mb-3" />
        <p className="text-white/70 text-sm">
          All discussions are monitored by certified moderators to ensure a safe and supportive environment.
          Your anonymity is protected at all times.
        </p>
      </div>
    </div>
  );

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
              <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Therapy & Support</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Care for victims beyond reporting. Access professional counseling, self-help resources, crisis support, and peer community.
            </p>
            
            {/* Quick Access Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-white/70 text-sm">Crisis Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
                <div className="text-white/70 text-sm">Help Articles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
                <div className="text-white/70 text-sm">Certified Counselors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-white/70 text-sm">Anonymous</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'articles'
                ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span>Articles & Self-Help</span>
          </button>
          
          <button
            onClick={() => setActiveTab('counselor')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'counselor'
                ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <UserCheck className="h-5 w-5" />
            <span>Book Counselor</span>
          </button>
          
          <button
            onClick={() => setActiveTab('crisis')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'crisis'
                ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <Phone className="h-5 w-5" />
            <span>Crisis Hotlines</span>
          </button>
          
          <button
            onClick={() => setActiveTab('community')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'community'
                ? 'bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Peer Community</span>
          </button>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'articles' && renderArticlesSection()}
          {activeTab === 'counselor' && renderCounselorBooking()}
          {activeTab === 'crisis' && renderCrisisHotlines()}
          {activeTab === 'community' && renderPeerCommunity()}
        </motion.div>
      </div>

      {/* Additional Resources Section */}
      <div className="bg-deepblue-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Additional Resources</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              More ways to get help and stay informed about cybersecurity and mental health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300"
            >
              <Download className="h-12 w-12 text-teal-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">Mental Health Apps</h4>
              <p className="text-white/70 text-sm mb-4">
                Recommended mobile apps for meditation, anxiety management, and mood tracking
              </p>
              <Link to="/therapy-support/resources/apps" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 flex items-center space-x-2">
                <span>Download Guide</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300"
            >
              <PlayCircle className="h-12 w-12 text-teal-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">Video Workshops</h4>
              <p className="text-white/70 text-sm mb-4">
                On-demand video sessions on coping strategies and digital wellness
              </p>
              <Link to="/therapy-support/resources/workshops" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 flex items-center space-x-2">
                <span>Watch Now</span>
                <PlayCircle className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300"
            >
              <Mail className="h-12 w-12 text-teal-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
              <p className="text-white/70 text-sm mb-4">
                Weekly tips for digital safety and mental wellness delivered to your inbox
              </p>
              <Link to="/therapy-support/resources/newsletter" className="text-teal-400 hover:text-teal-300 transition-colors duration-300 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherapySupport;