import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Users, Heart, Lightbulb, MessageCircle, ThumbsUp,
  Reply, Clock, Shield, AlertTriangle, CheckCircle2, Star,
  Search, Filter, Plus, Flag, MoreHorizontal, Eye, Award,
  User, Calendar, Tag, Lock, Globe
} from 'lucide-react';

function CommunityForum() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState('recent');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = {
    'recovery-stories': {
      id: 'recovery-stories',
      name: 'Recovery Stories',
      description: 'Share your journey and inspire others',
      icon: Heart,
      color: 'from-purple-500 to-purple-600',
      members: 142,
      posts: 89
    },
    'support-groups': {
      id: 'support-groups',
      name: 'Support Groups',
      description: 'Find your support network',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      members: 89,
      posts: 156
    },
    'tips-advice': {
      id: 'tips-advice',
      name: 'Tips & Advice',
      description: 'Practical advice from survivors',
      icon: Lightbulb,
      color: 'from-green-500 to-green-600',
      members: 256,
      posts: 203
    }
  };

  const posts = {
    'recovery-stories': [
      {
        id: 1,
        title: "How I Overcame Identity Theft - 6 Months Later",
        content: "Six months ago, I discovered my identity had been stolen and thousands of dollars were taken from my accounts. I want to share my recovery journey to help others going through similar experiences...",
        author: "Anonymous User #CSP-2024-001",
        timestamp: "2 hours ago",
        likes: 24,
        replies: 8,
        tags: ["Identity Theft", "Recovery", "Financial"],
        isPopular: true,
        excerpt: "My step-by-step recovery process and lessons learned"
      },
      {
        id: 2,
        title: "From Victim to Advocate: My Cyberstalking Recovery",
        content: "After months of cyberstalking that affected my work, relationships, and mental health, I finally found my way to healing. Here's what helped me most...",
        author: "Anonymous User #CSP-2024-015",
        timestamp: "1 day ago",
        likes: 18,
        replies: 12,
        tags: ["Cyberstalking", "Mental Health", "Advocacy"],
        excerpt: "How I turned my trauma into purpose and strength"
      },
      {
        id: 3,
        title: "Rebuilding Trust in Technology After Fraud",
        content: "Online fraud shattered my trust in digital services. It took time, but I've learned to engage with technology safely again. Here's my journey...",
        author: "Anonymous User #CSP-2024-032",
        timestamp: "3 days ago",
        likes: 31,
        replies: 15,
        tags: ["Online Fraud", "Trust", "Digital Safety"],
        isPopular: true,
        excerpt: "Practical steps to regain confidence in digital interactions"
      }
    ],
    'support-groups': [
      {
        id: 4,
        title: "Weekly Check-in: How is Everyone Doing?",
        content: "Let's use this space to check in with each other. Share how you're feeling, any challenges you're facing, or victories you want to celebrate...",
        author: "Anonymous User #CSP-2024-008",
        timestamp: "4 hours ago",
        likes: 15,
        replies: 23,
        tags: ["Check-in", "Support", "Community"],
        isPinned: true,
        excerpt: "Weekly community support and connection"
      },
      {
        id: 5,
        title: "Looking for Others Who've Experienced Romance Scams",
        content: "I'm dealing with the aftermath of a romance scam and feeling very isolated. Is anyone else here who has been through something similar?",
        author: "Anonymous User #CSP-2024-045",
        timestamp: "6 hours ago",
        likes: 8,
        replies: 11,
        tags: ["Romance Scams", "Support", "Connection"],
        excerpt: "Seeking connection with others who understand"
      },
      {
        id: 6,
        title: "Support Group for Business Owners Hit by Cyberattacks",
        content: "My small business was targeted in a ransomware attack last month. Looking to connect with other business owners who have faced similar challenges...",
        author: "Anonymous User #CSP-2024-021",
        timestamp: "1 day ago",
        likes: 12,
        replies: 7,
        tags: ["Business", "Ransomware", "Recovery"],
        excerpt: "Business-specific support and recovery strategies"
      }
    ],
    'tips-advice': [
      {
        id: 7,
        title: "Essential Apps for Digital Safety and Mental Health",
        content: "After my cyber incident, I discovered several apps that have been crucial for both my digital security and mental wellness. Here's my curated list...",
        author: "Anonymous User #CSP-2024-012",
        timestamp: "5 hours ago",
        likes: 42,
        replies: 18,
        tags: ["Apps", "Digital Safety", "Mental Health"],
        isPopular: true,
        excerpt: "Verified apps for security and wellness"
      },
      {
        id: 8,
        title: "How to Document Evidence Properly (From Someone Who Learned the Hard Way)",
        content: "I made several mistakes when documenting my cybercrime evidence initially. Here's what I wish I had known from the start...",
        author: "Anonymous User #CSP-2024-027",
        timestamp: "8 hours ago",
        likes: 38,
        replies: 14,
        tags: ["Documentation", "Evidence", "Legal"],
        isPopular: true,
        excerpt: "Step-by-step evidence collection guide"
      },
      {
        id: 9,
        title: "Managing Anxiety: Techniques That Actually Work",
        content: "I've tried many anxiety management techniques since my cyber incident. Here are the ones that have made the biggest difference in my daily life...",
        author: "Anonymous User #CSP-2024-033",
        timestamp: "12 hours ago",
        likes: 29,
        replies: 21,
        tags: ["Anxiety", "Coping", "Mental Health"],
        excerpt: "Practical anxiety management from real experience"
      }
    ]
  };

  const currentCategory = category ? categories[category] : null;
  const currentPosts = category ? (posts[category] || []) : [];

  const filteredPosts = currentPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (selectedSort) {
      case 'popular':
        return b.likes - a.likes;
      case 'replies':
        return b.replies - a.replies;
      case 'recent':
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  if (!category) {
    // Category selection view
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
              <span className="bg-gradient-to-r from-teal-400 to-accentgreen-400 bg-clip-text text-transparent">Peer Community Forum</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect with others who understand your experience. Share stories, find support, and learn from fellow survivors.
            </p>
          </motion.div>

          {/* Community Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 mb-12"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="h-5 w-5 text-teal-400 mr-2" />
              Community Guidelines
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Maintain anonymity and privacy at all times</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Be respectful, supportive, and kind to all members</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">No sharing of personal identifying information</span>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(categories).map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link
                    to={`/therapy-support/community/${cat.id}`}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${cat.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-100 transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{cat.members} members</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{cat.posts} posts</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (!currentCategory) {
    navigate('/therapy-support/community');
    return null;
  }

  // Category forum view
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
            to="/therapy-support/community"
            className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Community</span>
          </Link>
        </motion.div>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${currentCategory.color} rounded-xl flex items-center justify-center`}>
              <currentCategory.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {currentCategory.name}
              </h1>
              <p className="text-white/70">{currentCategory.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-white/60">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{currentCategory.members} members</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>{currentCategory.posts} posts</span>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts, topics, or tags..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-white/50"
              />
            </div>
            <div className="flex space-x-4">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="replies">Most Replies</option>
              </select>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                <Plus className="h-5 w-5" />
                <span>New Post</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Posts */}
        <div className="space-y-6">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/15 hover:border-teal-400/40 cursor-pointer ${
                post.isPinned ? 'border-yellow-400/30 bg-yellow-500/5' : 'border-teal-400/20'
              }`}
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {post.isPinned && (
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                        Pinned
                      </span>
                    )}
                    {post.isPopular && (
                      <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 hover:text-teal-100 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <button className="text-white/60 hover:text-white/80 transition-colors duration-300">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-white/60">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.timestamp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Reply className="h-4 w-4" />
                    <span>{post.replies}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-white/60 text-lg">
              {searchTerm ? 'No posts found matching your search.' : 'No posts yet in this category.'}
            </div>
            <button className="mt-4 bg-gradient-to-r from-teal-500 to-accentgreen-500 hover:from-teal-600 hover:to-accentgreen-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Be the first to post!
            </button>
          </div>
        )}

        {/* Moderation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/10 text-center mt-12"
        >
          <Lock className="h-8 w-8 text-teal-400 mx-auto mb-3" />
          <p className="text-white/70 text-sm">
            All discussions are monitored by certified moderators to ensure a safe and supportive environment.
            Your anonymity is protected at all times.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default CommunityForum;