import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Clock, BookOpen, Share2, Heart, ThumbsUp,
  User, Calendar, Tag, Download, Print, Eye,
  CheckCircle, AlertTriangle, Lightbulb, Star
} from 'lucide-react';

function ArticlePage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [readingTime, setReadingTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const articles = {
    1: {
      id: 1,
      title: "Understanding Digital Trauma: First Steps to Recovery",
      category: "Trauma Recovery",
      difficulty: "Beginner",
      readTime: "8 min read",
      publishDate: "March 15, 2024",
      author: "Dr. Sarah Ahmad, Clinical Psychologist",
      tags: ["Digital Trauma", "Recovery", "Mental Health", "First Steps"],
      excerpt: "Learn how cybercrime affects mental health and discover initial coping strategies.",
      content: {
        introduction: "Experiencing cybercrime can be deeply traumatic, leaving victims feeling violated, helpless, and anxious about their digital safety. Digital trauma is a real and valid form of psychological injury that deserves proper attention and care.",
        
        sections: [
          {
            title: "What is Digital Trauma?",
            content: "Digital trauma refers to the psychological and emotional distress experienced as a result of online victimization. This can include identity theft, cyberstalking, online harassment, financial fraud, or privacy violations. The impact is often underestimated, but research shows it can be just as severe as physical crimes.",
            keyPoints: [
              "Digital crimes create real psychological wounds",
              "Symptoms may include anxiety, depression, and hypervigilance",
              "Trust in technology and online interactions becomes compromised",
              "Sleep patterns and daily routines may be disrupted"
            ]
          },
          {
            title: "Common Symptoms of Digital Trauma",
            content: "Recognizing the signs of digital trauma is the first step toward healing. Symptoms can manifest both immediately and over time.",
            keyPoints: [
              "Persistent worry about online safety and privacy",
              "Avoidance of digital platforms or excessive checking of accounts",
              "Difficulty concentrating or making decisions",
              "Physical symptoms like headaches, fatigue, or stomach issues",
              "Feelings of shame, self-blame, or embarrassment",
              "Hypervigilance about online activities"
            ]
          },
          {
            title: "Immediate Steps for Recovery",
            content: "Taking action immediately after a digital crime can help minimize trauma and begin the healing process.",
            keyPoints: [
              "Document everything: screenshots, emails, messages",
              "Report the incident to authorities and platforms",
              "Change passwords and secure your accounts",
              "Reach out to trusted friends, family, or professionals",
              "Practice self-care and be patient with yourself",
              "Consider limiting social media exposure temporarily"
            ]
          },
          {
            title: "Building Digital Resilience",
            content: "Recovery involves not just healing from trauma but building strength for the future.",
            keyPoints: [
              "Learn about digital security and privacy tools",
              "Develop healthy boundaries with technology",
              "Create support networks both online and offline",
              "Practice mindfulness and stress management techniques",
              "Consider professional counseling or therapy",
              "Engage in activities that rebuild confidence and control"
            ]
          }
        ],
        
        conclusion: "Recovery from digital trauma is possible with the right support, knowledge, and self-care practices. Remember that healing is not linear, and it's okay to have difficult days. Seeking professional help is a sign of strength, not weakness.",
        
        resources: [
          "National Cybercrime Hotline: 1991",
          "Mental Health Crisis Line: 1166",
          "Online Safety Resources: cybersafepk.gov.pk/resources",
          "Professional Counseling Directory: cybersafepk.gov.pk/therapy"
        ]
      }
    },
    
    2: {
      id: 2,
      title: "Rebuilding Trust After Online Fraud",
      category: "Trust Issues",
      difficulty: "Intermediate",
      readTime: "12 min read",
      publishDate: "March 10, 2024",
      author: "Dr. Ahmed Hassan, Behavioral Therapist",
      tags: ["Trust", "Online Fraud", "Financial Security", "Recovery"],
      excerpt: "Practical steps to regain confidence in digital interactions and financial security.",
      content: {
        introduction: "Online fraud doesn't just steal money—it steals trust. Victims often struggle with feelings of betrayal and find it difficult to engage with digital services again. This guide provides practical steps to rebuild trust while maintaining necessary security.",
        
        sections: [
          {
            title: "Understanding the Impact of Financial Fraud",
            content: "Financial fraud affects more than your bank account. It undermines your sense of safety and can create lasting anxiety about money management and online transactions.",
            keyPoints: [
              "Loss of financial security creates ongoing stress",
              "Trust in institutions and technology becomes compromised",
              "Decision-making about financial matters becomes difficult",
              "Social relationships may be affected by shame or embarrassment"
            ]
          },
          {
            title: "Immediate Financial Recovery Steps",
            content: "Taking control of your financial situation is crucial for both practical and psychological recovery.",
            keyPoints: [
              "Contact your bank and credit card companies immediately",
              "File reports with NCCIA Cybercrime Wing and local police",
              "Monitor credit reports and set up fraud alerts",
              "Document all losses and communications",
              "Consider credit freezing if identity was compromised",
              "Keep detailed records of all recovery efforts"
            ]
          },
          {
            title: "Psychological Strategies for Rebuilding Trust",
            content: "Trust can be rebuilt gradually through intentional actions and cognitive strategies.",
            keyPoints: [
              "Start with small, low-risk online transactions",
              "Use secure, familiar websites and services initially",
              "Practice positive self-talk about your ability to stay safe",
              "Set realistic expectations for your comfort level",
              "Celebrate small victories in regaining digital confidence",
              "Consider therapy to process trauma and develop coping skills"
            ]
          },
          {
            title: "Digital Security Best Practices",
            content: "Knowledge and preparation are powerful tools for rebuilding confidence.",
            keyPoints: [
              "Use strong, unique passwords and two-factor authentication",
              "Regularly monitor accounts and statements",
              "Learn to identify phishing attempts and scams",
              "Use secure payment methods and trusted platforms",
              "Keep software and security systems updated",
              "Educate yourself about new fraud techniques"
            ]
          },
          {
            title: "Building a Support Network",
            content: "Recovery is easier with support from others who understand your experience.",
            keyPoints: [
              "Connect with other fraud survivors through support groups",
              "Maintain open communication with trusted family and friends",
              "Work with financial advisors who understand fraud trauma",
              "Join online communities focused on financial security",
              "Consider professional counseling specialized in financial trauma"
            ]
          }
        ],
        
        conclusion: "Rebuilding trust after online fraud is a gradual process that requires patience with yourself. Focus on small steps, celebrate progress, and remember that becoming more cautious doesn't mean living in fear. With time and the right support, you can regain confidence in digital interactions while maintaining appropriate security measures.",
        
        resources: [
          "NCCIA Cybercrime Wing: 1991",
          "State Bank of Pakistan Fraud Hotline: 111-727-273",
          "Consumer Rights Protection: 1055",
          "Financial Planning Resources: cybersafepk.gov.pk/financial-security"
        ]
      }
    },

    3: {
      id: 3,
      title: "Managing Anxiety from Identity Theft",
      category: "Anxiety Management",
      difficulty: "Beginner",
      readTime: "10 min read",
      publishDate: "March 8, 2024",
      author: "Dr. Fatima Khan, Anxiety Specialist",
      tags: ["Identity Theft", "Anxiety", "Coping Strategies", "Mental Health"],
      excerpt: "Techniques to cope with the stress and uncertainty following identity compromise.",
      content: {
        introduction: "Identity theft creates a unique form of anxiety characterized by feelings of vulnerability, loss of control, and fear of future harm. This guide provides evidence-based techniques to manage these challenging emotions while taking practical steps toward recovery.",
        
        sections: [
          {
            title: "Understanding Identity Theft Anxiety",
            content: "The anxiety following identity theft is complex and multifaceted, often involving both immediate fears and long-term concerns about safety and privacy.",
            keyPoints: [
              "Fear of unknown damage or future attacks",
              "Feeling exposed and vulnerable in digital spaces",
              "Hypervigilance about personal information security",
              "Anxiety about financial stability and credit damage",
              "Worry about family members' safety and privacy",
              "Difficulty trusting digital services and institutions"
            ]
          },
          {
            title: "Immediate Anxiety Management Techniques",
            content: "When anxiety peaks, these techniques can provide immediate relief and help you regain emotional control.",
            keyPoints: [
              "Practice deep breathing exercises (4-7-8 technique)",
              "Use grounding techniques: name 5 things you see, 4 you hear, 3 you touch",
              "Engage in progressive muscle relaxation",
              "Use mindfulness apps or guided meditations",
              "Take breaks from identity recovery tasks when overwhelmed",
              "Maintain regular sleep and eating schedules"
            ]
          },
          {
            title: "Cognitive Strategies for Long-term Management",
            content: "Changing thought patterns can reduce anxiety and improve your ability to cope with uncertainty.",
            keyPoints: [
              "Challenge catastrophic thinking with realistic assessments",
              "Focus on what you can control rather than what you cannot",
              "Practice self-compassion—this was not your fault",
              "Set realistic timelines for recovery and resolution",
              "Celebrate small victories in the recovery process",
              "Develop mantras or affirmations for difficult moments"
            ]
          },
          {
            title: "Creating Structure and Routine",
            content: "Structure helps reduce anxiety by providing predictability and a sense of control.",
            keyPoints: [
              "Create daily routines that include self-care activities",
              "Set specific times for identity recovery tasks",
              "Limit time spent on anxiety-provoking activities (like checking accounts)",
              "Include pleasant activities and hobbies in your schedule",
              "Maintain social connections and regular communication",
              "Establish boundaries around identity theft discussions"
            ]
          },
          {
            title: "When to Seek Professional Help",
            content: "Professional support can be invaluable in managing identity theft anxiety effectively.",
            keyPoints: [
              "Anxiety interferes with daily activities or relationships",
              "Sleep patterns are significantly disrupted for more than two weeks",
              "You experience panic attacks or severe physical symptoms",
              "Depression or hopelessness accompanies the anxiety",
              "Substance use increases as a coping mechanism",
              "Family or friends express concern about your well-being"
            ]
          }
        ],
        
        conclusion: "Managing anxiety after identity theft requires both emotional and practical approaches. Remember that anxiety is a normal response to violation and uncertainty. With proper techniques, support, and time, you can regain emotional stability while protecting your identity going forward.",
        
        resources: [
          "Mental Health Helpline: 1166",
          "Anxiety Support Groups: cybersafepk.gov.pk/support-groups",
          "Identity Theft Recovery Guide: cybersafepk.gov.pk/identity-theft",
          "Professional Counselors Directory: cybersafepk.gov.pk/therapy"
        ]
      }
    },

    4: {
      id: 4,
      title: "Daily Mindfulness for Cybercrime Survivors",
      category: "Mindfulness",
      difficulty: "Beginner", 
      readTime: "6 min read",
      publishDate: "March 5, 2024",
      author: "Dr. Aisha Malik, Mindfulness Therapist",
      tags: ["Mindfulness", "Stress Management", "Daily Practice", "Recovery"],
      excerpt: "Simple meditation and breathing exercises to manage stress and anxiety.",
      content: {
        introduction: "Mindfulness practice can be particularly healing for cybercrime survivors, helping to regulate emotions, reduce anxiety, and rebuild a sense of safety and control. This guide provides simple, accessible techniques you can practice daily.",
        
        sections: [
          {
            title: "Why Mindfulness Helps Trauma Recovery",
            content: "Mindfulness practices help calm the nervous system and reduce the hypervigilance common after cybercrime victimization.",
            keyPoints: [
              "Reduces stress hormones and calms the nervous system",
              "Helps distinguish between real and perceived threats",
              "Improves emotional regulation and reduces reactivity",
              "Increases present-moment awareness and reduces rumination",
              "Builds resilience and coping capacity over time"
            ]
          },
          {
            title: "Basic Breathing Exercises",
            content: "Breathing techniques are the foundation of mindfulness practice and can be used anywhere.",
            keyPoints: [
              "4-7-8 Breathing: Inhale for 4, hold for 7, exhale for 8 counts",
              "Box Breathing: Inhale, hold, exhale, hold - each for 4 counts",
              "Belly Breathing: Focus on deep abdominal breaths",
              "Coherent Breathing: 5-second inhales and exhales",
              "Practice 5-10 minutes daily, increasing gradually"
            ]
          },
          {
            title: "Daily Mindfulness Routines",
            content: "Incorporating mindfulness into daily activities creates ongoing stress relief and emotional stability.",
            keyPoints: [
              "Morning intention setting (5 minutes upon waking)",
              "Mindful technology use - pause before checking devices",
              "Body scan meditation during lunch breaks",
              "Mindful walking, even for just 2-3 minutes",
              "Evening gratitude practice before sleep",
              "Mindful eating during at least one meal per day"
            ]
          },
          {
            title: "Dealing with Difficult Emotions",
            content: "Mindfulness teaches us to observe emotions without being overwhelmed by them.",
            keyPoints: [
              "Name emotions as they arise: 'I notice anxiety'",
              "Use RAIN technique: Recognize, Allow, Investigate, Natural awareness",
              "Practice loving-kindness meditation for self-compassion",
              "Observe thoughts without judgment or immediate reaction",
              "Use phrases like 'This too shall pass' during difficult moments"
            ]
          },
          {
            title: "Building Your Practice",
            content: "Start small and build consistency rather than trying to do too much at once.",
            keyPoints: [
              "Begin with 5-minute sessions and gradually increase",
              "Use guided meditation apps for structure and support",
              "Practice at the same time each day to build habit",
              "Be patient and kind with yourself during the learning process",
              "Join online or local mindfulness groups for support",
              "Track your practice and notice improvements over time"
            ]
          }
        ],
        
        conclusion: "Mindfulness is a powerful tool for healing from cybercrime trauma. Regular practice can help you develop emotional resilience, reduce anxiety, and create a greater sense of inner peace and safety. Remember, mindfulness is called a practice because it takes time to develop—be patient and compassionate with yourself.",
        
        resources: [
          "Free Mindfulness Apps: Insight Timer, Headspace basics",
          "Local Meditation Groups: cybersafepk.gov.pk/mindfulness",
          "Online Guided Meditations: YouTube 'Mindfulness for Trauma'",
          "Books: 'Trauma-Sensitive Mindfulness' by David Treleaven"
        ]
      }
    },

    5: {
      id: 5,
      title: "Building Digital Resilience",
      category: "Resilience",
      difficulty: "Advanced",
      readTime: "15 min read",
      publishDate: "March 1, 2024",
      author: "Dr. Omar Shah, Cyber Psychology Specialist",
      tags: ["Digital Resilience", "Recovery", "Empowerment", "Long-term Healing"],
      excerpt: "Strengthen your mental defenses against online threats and harassment.",
      content: {
        introduction: "Digital resilience is your ability to prepare for, cope with, and recover from cyber threats and online adversity. It's about building psychological strength that allows you to engage with technology confidently while maintaining your well-being and security.",
        
        sections: [
          {
            title: "Understanding Digital Resilience",
            content: "Digital resilience combines cybersecurity awareness with psychological resilience, creating a comprehensive approach to online safety.",
            keyPoints: [
              "Combines technical security knowledge with emotional coping skills",
              "Involves proactive planning and reactive recovery abilities",
              "Includes the capacity to adapt to new digital threats",
              "Encompasses both individual and community resilience",
              "Requires ongoing learning and skill development"
            ]
          },
          {
            title: "The Four Pillars of Digital Resilience",
            content: "Building resilience requires attention to multiple interconnected areas of development.",
            keyPoints: [
              "Technical Security: Understanding tools, settings, and best practices",
              "Emotional Regulation: Managing stress, anxiety, and trauma responses",
              "Social Support: Building networks of trust and assistance",
              "Adaptive Thinking: Developing flexible, problem-solving mindsets"
            ]
          },
          {
            title: "Developing Technical Resilience",
            content: "Technical knowledge empowers you to protect yourself and respond effectively to threats.",
            keyPoints: [
              "Learn about privacy settings across all platforms you use",
              "Understand encryption, secure communications, and backup systems",
              "Stay informed about current scams and attack methods",
              "Develop incident response plans for various scenarios",
              "Create and maintain secure digital habits and routines",
              "Regular security audits of accounts and devices"
            ]
          },
          {
            title: "Building Emotional Resilience",
            content: "Emotional resilience helps you maintain psychological well-being during and after cyber incidents.",
            keyPoints: [
              "Develop healthy coping mechanisms for stress and anxiety",
              "Practice self-compassion and avoid self-blame",
              "Build confidence through knowledge and preparation",
              "Maintain perspective on risks versus benefits of technology",
              "Process past trauma to prevent it from controlling future actions",
              "Cultivate a growth mindset about learning and adapting"
            ]
          },
          {
            title: "Creating Community Resilience",
            content: "Individual resilience is strengthened by community connections and mutual support.",
            keyPoints: [
              "Share knowledge and resources with family, friends, and colleagues",
              "Participate in or create digital safety education programs",
              "Support others who have experienced cyber victimization",
              "Advocate for better cybersecurity policies and practices",
              "Build networks of trusted individuals for advice and support",
              "Contribute to a culture of digital responsibility and care"
            ]
          },
          {
            title: "Maintaining Long-term Resilience",
            content: "Digital resilience requires ongoing attention and adaptation as technology and threats evolve.",
            keyPoints: [
              "Regularly update skills and knowledge about new technologies",
              "Maintain physical and mental health as foundation for resilience",
              "Balance caution with appropriate risk-taking for life goals",
              "Continue learning from experiences, both positive and negative",
              "Seek professional development opportunities in digital literacy",
              "Maintain connections with resilience-building communities"
            ]
          }
        ],
        
        conclusion: "Building digital resilience is an ongoing journey, not a destination. It requires patience, practice, and self-compassion. Remember that resilience isn't about avoiding all problems—it's about developing the strength and skills to handle whatever challenges arise with confidence and grace.",
        
        resources: [
          "Digital Resilience Assessment Tool: cybersafepk.gov.pk/resilience-test",
          "Community Workshops: cybersafepk.gov.pk/workshops",
          "Professional Development Courses: cybersafepk.gov.pk/courses",
          "Peer Support Networks: cybersafepk.gov.pk/community"
        ]
      }
    },

    6: {
      id: 6,
      title: "Sleep Recovery After Cyber Incidents",
      category: "Sleep Health",
      difficulty: "Intermediate",
      readTime: "9 min read",
      publishDate: "February 28, 2024", 
      author: "Dr. Zara Ali, Sleep Medicine Specialist",
      tags: ["Sleep Health", "Recovery", "Trauma", "Wellness"],
      excerpt: "Restore healthy sleep patterns disrupted by cybercrime stress.",
      content: {
        introduction: "Sleep disturbances are common after cyber incidents, with victims often experiencing insomnia, nightmares, or restless sleep. Quality sleep is essential for emotional recovery and cognitive function. This guide provides practical strategies to restore healthy sleep patterns.",
        
        sections: [
          {
            title: "How Cyber Trauma Affects Sleep",
            content: "Understanding the connection between digital trauma and sleep problems is the first step toward recovery.",
            keyPoints: [
              "Hypervigilance keeps the nervous system in alert mode",
              "Anxiety and worry create racing thoughts that prevent relaxation",
              "Fear of further attacks can cause sleep avoidance",
              "Rumination about the incident disrupts natural sleep cycles",
              "Stress hormones remain elevated, interfering with sleep chemistry"
            ]
          },
          {
            title: "Creating a Sleep-Friendly Environment",
            content: "Your sleep environment should promote safety, comfort, and relaxation.",
            keyPoints: [
              "Keep devices out of the bedroom or use airplane mode",
              "Ensure room is cool, dark, and quiet",
              "Use blackout curtains and consider white noise machines",
              "Make the bedroom a screen-free zone 1 hour before bed",
              "Consider security measures that help you feel safe at night",
              "Use comfortable bedding and pillows that promote relaxation"
            ]
          },
          {
            title: "Developing Healthy Sleep Routines",
            content: "Consistent routines signal to your body and mind that it's time to rest and recover.",
            keyPoints: [
              "Go to bed and wake up at consistent times, even on weekends",
              "Create a relaxing bedtime routine starting 30-60 minutes before sleep",
              "Avoid caffeine 6 hours before bedtime",
              "Limit alcohol consumption, especially in the evening",
              "Get natural sunlight exposure during the day",
              "Exercise regularly, but not close to bedtime"
            ]
          },
          {
            title: "Managing Pre-Sleep Anxiety",
            content: "Specific techniques can help calm an anxious mind before sleep.",
            keyPoints: [
              "Practice progressive muscle relaxation or gentle yoga",
              "Use guided sleep meditations or calming podcasts",
              "Write worries in a journal to 'put them away' for the night",
              "Practice gratitude by listing three positive things from the day",
              "Use breathing exercises like 4-7-8 or coherent breathing",
              "Visualize peaceful, safe scenarios or places"
            ]
          },
          {
            title: "Dealing with Sleep Disruptions",
            content: "When sleep is disrupted, specific strategies can help you return to rest more quickly.",
            keyPoints: [
              "If awake for more than 20 minutes, get up and do a quiet activity",
              "Avoid looking at clocks, which can increase anxiety",
              "Practice mindfulness rather than trying to force sleep",
              "Use gentle self-talk: 'My body knows how to rest'",
              "Consider keeping a sleep diary to identify patterns",
              "Avoid 'sleep effort' - the harder you try, the more difficult it becomes"
            ]
          },
          {
            title: "When to Seek Professional Help",
            content: "Sometimes professional intervention is necessary for sleep recovery.",
            keyPoints: [
              "Insomnia persists for more than 3-4 weeks",
              "Sleep problems significantly impact daily functioning",
              "You experience frequent nightmares related to the cyber incident",
              "Sleep aids become necessary for any sleep",
              "Daytime fatigue affects work, relationships, or safety",
              "Sleep anxiety becomes overwhelming or all-consuming"
            ]
          }
        ],
        
        conclusion: "Sleep recovery after cyber trauma takes time and patience. Focus on creating conditions that support natural sleep rather than forcing it. Remember that temporary sleep disruptions are normal after traumatic events, and with proper care and attention, healthy sleep patterns can be restored.",
        
        resources: [
          "Sleep Hygiene Checklist: cybersafepk.gov.pk/sleep-guide",
          "Free Sleep Apps: Insight Timer, Calm (sleep stories)",
          "Sleep Medicine Specialists: cybersafepk.gov.pk/sleep-doctors",
          "Trauma-Informed Sleep Support: cybersafepk.gov.pk/trauma-sleep"
        ]
      }
    }
  };

  useEffect(() => {
    const foundArticle = articles[parseInt(articleId)];
    if (foundArticle) {
      setArticle(foundArticle);
      setReadingTime(parseInt(foundArticle.readTime));
    } else {
      navigate('/therapy-support');
    }
  }, [articleId, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrolled / maxHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800 flex items-center justify-center">
      <div className="text-white text-xl">Loading article...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepblue-900 to-deepblue-800">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-deepblue-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 to-accentgreen-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
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

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
              article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
              'bg-red-500/20 text-red-300'
            }`}>
              {article.difficulty}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="grid md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-teal-400" />
              <div>
                <div className="text-white font-medium">Author</div>
                <div className="text-white/70 text-sm">{article.author}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-teal-400" />
              <div>
                <div className="text-white font-medium">Published</div>
                <div className="text-white/70 text-sm">{article.publishDate}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-teal-400" />
              <div>
                <div className="text-white font-medium">Reading Time</div>
                <div className="text-white/70 text-sm">{article.readTime}</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {article.tags.map((tag, index) => (
              <span key={index} className="flex items-center space-x-1 text-white/60 text-sm">
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-teal-400/20 mb-8"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-white/90 text-lg leading-relaxed">
              {article.content.introduction}
            </p>
          </div>

          {/* Sections */}
          {article.content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-accentgreen-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                {section.title}
              </h2>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {section.content}
              </p>

              <div className="bg-white/5 rounded-lg p-6 border border-teal-400/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-400 mr-2" />
                  Key Points:
                </h3>
                <ul className="space-y-3">
                  {section.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Heart className="h-6 w-6 text-teal-400 mr-3" />
              Conclusion
            </h2>
            <div className="bg-gradient-to-r from-teal-500/20 to-accentgreen-500/20 rounded-lg p-6 border border-teal-400/20">
              <p className="text-white/90 text-lg leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lightbulb className="h-6 w-6 text-teal-400 mr-3" />
              Additional Resources
            </h2>
            <div className="bg-white/5 rounded-lg p-6 border border-teal-400/10">
              <ul className="space-y-3">
                {article.content.resources.map((resource, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            <Share2 className="h-5 w-5" />
            <span>Share Article</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            <Download className="h-5 w-5" />
            <span>Save as PDF</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            <ThumbsUp className="h-5 w-5" />
            <span>Helpful</span>
          </button>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(articles)
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/therapy-support/article/${relatedArticle.id}`}
                  className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:bg-white/15 hover:border-teal-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                      {relatedArticle.category}
                    </span>
                    <span className="text-xs text-white/60">{relatedArticle.readTime}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-100 transition-colors duration-300">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-white/70 text-sm">{relatedArticle.excerpt}</p>
                </Link>
              ))
            }
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ArticlePage;