import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Eye, Users, Heart, BookOpen, Award, CheckCircle2,
  Target, Globe, Lock, Database, ArrowRight, Star, Zap,
  Phone, Mail, MapPin, User, GraduationCap
} from 'lucide-react';

function About() {
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
              About <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">CyberSafe Pakistan</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              A secure, AI-powered platform bridging the gap between citizens and law enforcement in the fight against cybercrime.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Who We Are */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Users className="h-8 w-8 text-teal-400 mr-3" />
                Who We Are
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                CyberSafe Pakistan is a secure, AI-powered platform that bridges the gap between citizens and law enforcement in the fight against cybercrime. We provide victims with an anonymous, safe, and supportive environment to report incidents, verify evidence, track case progress, and access mental health and educational resources.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-accentgreen-500/20 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-2">NEW</div>
                  <div className="text-white/70 text-sm">Platform Launch</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                  <div className="text-white/70 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                  <div className="text-white/70 text-sm">Anonymous Reporting</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-2">AI</div>
                  <div className="text-white/70 text-sm">Powered</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Target className="h-8 w-8 text-teal-400 mr-3" />
              Our Mission
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To empower every Pakistani with the tools, knowledge, and support needed to fight cybercrime, protect digital identities, and build a safer online community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Eye className="h-8 w-8 text-teal-400 mr-3" />
              Our Vision
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              A cyber-resilient Pakistan where victims of online crime feel safe to report, perpetrators are held accountable, and every citizen is educated in digital safety.
            </p>
          </motion.div>
        </div>

        {/* What We Do */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Anonymous Reporting</h3>
              <p className="text-white/80">Victims can submit cybercrime complaints without revealing personal identity.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accentgreen-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Verification</h3>
              <p className="text-white/80">Advanced tools check if evidence is authentic, edited, or AI-generated.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-accentgreen-400 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Case Tracking</h3>
              <p className="text-white/80">Real-time status updates from Received → Under Review → Resolved.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accentgreen-400 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Victim Support</h3>
              <p className="text-white/80">Therapy sessions, self-help resources, and peer-support groups.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-accentgreen-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Awareness & Training</h3>
              <p className="text-white/80">Courses, workshops, and seminars to build cyber hygiene across Pakistan.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accentgreen-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Building</h3>
              <p className="text-white/80">Creating a network of cyber-aware citizens across Pakistan.</p>
            </div>
          </div>
        </motion.section>

        {/* Our Partners */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Law Enforcement
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>FIA Cybercrime Wing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>NCCIA</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                NGOs & Helplines
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>Digital Rights Foundation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>Women & Youth advocacy groups</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-300 mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Institutions
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>NIC Peshawar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                  <span>Universities & cybersecurity experts</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Our Team */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Faisal Hakimi</h3>
              <p className="text-teal-300 mb-4">Co-Founder & Tech Lead</p>
              <p className="text-white/80">Computer Science, Cybersecurity & AI background with expertise in building secure platforms and AI-powered solutions.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accentgreen-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sadiq Mansoor</h3>
              <p className="text-teal-300 mb-4">Co-Founder & Security Expert</p>
              <p className="text-white/80">Cybersecurity specialist with Machine Learning expertise, focusing on threat detection and evidence verification.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/70 italic">
              Advisors include professionals in law, psychology, and digital rights
            </p>
          </div>
        </motion.section>

        {/* Why Trust Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-teal-500/20 to-accentgreen-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Trust Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-accentgreen-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">End-to-End Encryption</h3>
              <p className="text-white/80">Your reports and chats are secure with military-grade encryption.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accentgreen-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Unnecessary Data</h3>
              <p className="text-white/80">We collect only what's essential for your case and protection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-accentgreen-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Chain-of-Custody Logs</h3>
              <p className="text-white/80">Evidence is legally admissible with proper documentation.</p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-teal-400/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make Pakistan Cyber-Safe?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Pakistani citizens in building a safer digital community. Report incidents, learn about cybersecurity, and help protect others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/complaints"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-accentgreen-500 text-white font-bold rounded-xl hover:from-teal-600 hover:to-accentgreen-600 transition-all duration-300"
            >
              Report an Incident
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center px-8 py-4 bg-white/10 border border-teal-400/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Learn More
              <BookOpen className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;