import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, BarChart3, Calendar, Zap, Trophy, BookOpen, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all Leverage Journal™ features: Goal Tracker, Progress Dashboard, Daily Prompts, App Sync, and the Leverage Ladder achievement system.',
};

export default function FeaturesPage() {
  const features = [
    {
      icon: Target,
      title: 'Goal Tracker',
      description: 'Track micro and macro goals with intelligent categorization and progress visualization.',
      color: 'from-red-500 to-red-600',
      features: [
        'Smart Goal Categories',
        'Progress Visualization', 
        'Milestone Tracking',
        'Priority Matrix',
        'Deadline Management'
      ]
    },
    {
      icon: BarChart3,
      title: 'Progress Dashboard',
      description: 'Visualize your growth with beautiful charts, trends, and actionable insights.',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Visual Analytics',
        'Trend Analysis',
        'Performance Metrics',
        'Weekly Reports',
        'Achievement Graphs'
      ]
    },
    {
      icon: Calendar,
      title: 'Daily Prompts',
      description: 'AI-powered prompts that adapt to your progress and guide deeper reflection.',
      color: 'from-green-500 to-green-600',
      features: [
        'AI-Powered Questions',
        'Adaptive Prompts',
        'Reflection Guidance',
        'Mood Tracking',
        'Learning Insights'
      ]
    },
    {
      icon: Zap,
      title: 'Sync With App',
      description: 'Seamless real-time sync between your handwritten entries and digital insights.',
      color: 'from-yellow-500 to-yellow-600',
      features: [
        'Real-Time Sync',
        'Cross-Platform Access',
        'Instant Updates',
        'Cloud Backup',
        'Offline Mode'
      ]
    },
    {
      icon: Trophy,
      title: 'Leverage Ladder',
      description: 'Gamified progression system with 10 levels to keep you motivated and engaged.',
      color: 'from-purple-500 to-purple-600',
      features: [
        '10 Achievement Levels',
        'Milestone Rewards',
        'Progress Gamification',
        'Badge System',
        'Leaderboards'
      ]
    }
  ];

  const journalFeatures = [
    'Premium hardcover design',
    '90-day structured layout',
    'Daily reflection pages',
    'Weekly review sections',
    'Monthly planning spreads',
    'Goal-setting frameworks',
    'Progress tracking grids',
    'Habit formation guides'
  ];

  const appFeatures = [
    'Real-time progress tracking',
    'AI-powered insights',
    'Photo journal sync',
    'Achievement notifications',
    'Data visualization',
    'Export capabilities',
    'Community features',
    'Backup & sync'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the complete ecosystem of tools designed to transform your goals into systematic achievements.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Core Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Five powerful tools working together to create your complete achievement system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 p-6 space-y-4 transition-all duration-500 group overflow-hidden hover:scale-105 shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journal vs App Features */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Complete Ecosystem</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The perfect fusion of analog reflection and digital intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Physical Journal */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-yellow-500/30 p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Physical Journal</h3>
                  <p className="text-gray-400 mt-2">Handwritten reflection and planning</p>
                </div>
                
                <div className="space-y-3">
                  {journalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Digital App */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/30 p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Digital App</h3>
                  <p className="text-gray-400 mt-2">AI-powered insights and tracking</p>
                </div>
                
                <div className="space-y-3">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Proven Results</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real metrics from real users who've transformed their approach to achievement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '94%', label: 'Success Rate', description: 'Users achieve their 90-day goals' },
              { number: '10K+', label: 'Goals Achieved', description: 'Completed through our system' },
              { number: '4.9', label: 'User Rating', description: 'Average app store rating', icon: '★' },
              { number: '90', label: 'Day Cycles', description: 'Optimal achievement timeframe' }
            ].map((metric, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-4xl font-bold text-yellow-400 flex items-center justify-center">
                  {metric.number}{metric.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-white">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Experience All Features Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the complete Leverage Journal™ system and start your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-8 py-3">
                <span className="flex items-center space-x-2">
                  <span>Pre-Order Now £19.99</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
