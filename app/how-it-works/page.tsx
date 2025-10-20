import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Target, BarChart3, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Discover the 90-day Leverage Journal™ system: Plan with psychology-backed frameworks, track with AI insights, and achieve measurable results.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Plan with Purpose',
      description: 'Start each 90-day cycle with our psychology-backed planning framework. Set clear objectives, identify key leverage points, and create actionable roadmaps.',
      icon: Target,
      features: ['Goal Hierarchy Framework', 'Leverage Point Analysis', 'Quarterly Planning Ritual']
    },
    {
      number: '02', 
      title: 'Track with Intelligence',
      description: 'Use the companion app to monitor progress in real-time. AI-powered insights help you stay on track and make data-driven adjustments.',
      icon: BarChart3,
      features: ['Real-time Progress Tracking', 'AI-Powered Insights', 'Performance Analytics']
    },
    {
      number: '03',
      title: 'Reflect and Refine',
      description: 'Daily and weekly reflection sessions help you learn from both successes and setbacks, continuously improving your approach.',
      icon: BookOpen,
      features: ['Daily Reflection Prompts', 'Weekly Review Sessions', 'Learning Integration']
    },
    {
      number: '04',
      title: 'Achieve and Scale',
      description: 'Complete your 90-day cycle with measurable results, then scale your success with advanced frameworks and community support.',
      icon: Zap,
      features: ['Achievement Validation', 'Success Scaling', 'Community Connection']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Leverage Journal™ system transforms scattered ambitions into systematic achievement through our proven 4-step process.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-lg">{step.number}</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-white">{step.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-yellow-500/30 p-8">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto">
                        <step.icon className="w-10 h-10 text-yellow-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">Step {step.number}</h3>
                        <p className="text-yellow-400 font-medium">{step.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 90-Day Cycle */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">The 90-Day Cycle</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our system is built around 90-day cycles—the optimal timeframe for meaningful progress without overwhelming complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Days 1-30',
                subtitle: 'Foundation',
                description: 'Establish your goals, create your systems, and build momentum through consistent daily actions.',
                color: 'from-blue-500/20 to-blue-600/10'
              },
              {
                title: 'Days 31-60', 
                subtitle: 'Acceleration',
                description: 'Optimize your approach based on early results, overcome obstacles, and maintain consistent progress.',
                color: 'from-yellow-500/20 to-yellow-600/10'
              },
              {
                title: 'Days 61-90',
                subtitle: 'Achievement',
                description: 'Push toward your goals, celebrate wins, and prepare for your next level of growth.',
                color: 'from-green-500/20 to-green-600/10'
              }
            ].map((phase, index) => (
              <Card key={index} className={`bg-gradient-to-br ${phase.color} border border-gray-700/50 p-6 text-center space-y-4`}>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <p className="text-yellow-400 font-medium">{phase.subtitle}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-yellow-500/30 rounded-lg p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-serif font-bold text-white">Journal + App Integration</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                The magic happens when handwritten reflection meets digital intelligence. Your journal entries sync with the app, creating a complete picture of your progress and insights.
              </p>
              <div className="flex justify-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-8 h-8 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-400">Physical Journal</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-400">AI Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Start Your 90-Day Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands who've transformed their approach to achievement with the Leverage Journal™ system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-8 py-3">
                <span className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
