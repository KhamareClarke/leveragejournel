import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Target, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'From Scattered to Systematic: A Goal-Setting Revolution',
  description: 'Transform chaotic ambitions into structured achievement systems that deliver real results. Learn the systematic approach to goal achievement.',
  keywords: ['systematic goal setting', 'goal achievement system', 'productivity transformation', 'structured planning', 'goal organization'],
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "From Scattered to Systematic: A Goal-Setting Revolution",
    "description": "How to transform chaotic ambitions into structured achievement systems that actually deliver results.",
    "author": {
      "@type": "Person",
      "name": "Leverage Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Leverage Journal™",
      "logo": {
        "@type": "ImageObject",
        "url": "https://leveragejournal.com/images/logo.png"
      }
    },
    "datePublished": "2025-01-08T00:00:00Z",
    "dateModified": "2025-01-08T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://leveragejournal.com/blog/scattered-to-systematic"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { name: 'Blog', href: '/blog' },
            { name: 'From Scattered to Systematic', href: '/blog/scattered-to-systematic' }
          ]} />
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>January 8, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Leverage Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6">
              From Scattered to Systematic: A Goal-Setting Revolution
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              How to transform chaotic ambitions into structured achievement systems that actually deliver results.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">The Problem with Traditional Goal Setting</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Most people approach goal setting like throwing spaghetti at a wall—they write down everything they want to achieve and hope something sticks. The result? A scattered mess of competing priorities that leads to overwhelm, procrastination, and ultimately, failure.
            </p>
            
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-400 mb-4">Common Goal-Setting Mistakes</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Setting too many goals at once</li>
                <li>• Lack of clear priorities and focus</li>
                <li>• No systematic tracking or review process</li>
                <li>• Treating symptoms instead of root causes</li>
                <li>• Missing the connection between daily actions and long-term vision</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">The Systematic Approach</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              A systematic approach to goal achievement isn't about perfection—it's about <strong className="text-yellow-400">creating predictable processes that compound over time</strong>. Instead of relying on motivation (which is unreliable), you build systems that work regardless of how you feel.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-lg p-6 text-center">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Clarity</h4>
                <p className="text-gray-300 text-sm">Define exactly what success looks like and why it matters to you.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6 text-center">
                <BarChart3 className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Tracking</h4>
                <p className="text-gray-300 text-sm">Measure progress consistently to stay aligned and make adjustments.</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg p-6 text-center">
                <Zap className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-green-400 mb-3">Action</h4>
                <p className="text-gray-300 text-sm">Break down big goals into daily actions that move you forward.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">The Leverage Framework</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The Leverage Journal™ system is built around five core principles that transform scattered ambitions into systematic achievements:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">1. Goal Hierarchy</h4>
                <p className="text-gray-300">Organize your goals into a clear hierarchy: Vision → Objectives → Key Results → Daily Actions. This creates alignment from your biggest dreams down to your smallest daily habits.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">2. Progress Visualization</h4>
                <p className="text-gray-300">Track your progress visually through charts, graphs, and progress bars. When you can see your advancement, you're more likely to maintain momentum.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">3. Reflection Loops</h4>
                <p className="text-gray-300">Regular reflection sessions help you learn from both successes and setbacks, continuously improving your approach and staying aligned with your values.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">4. AI-Powered Insights</h4>
                <p className="text-gray-300">The companion app analyzes your patterns and provides personalized recommendations to optimize your approach and overcome obstacles.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">5. Systematic Reviews</h4>
                <p className="text-gray-300">Weekly and monthly review sessions ensure you stay on track, celebrate wins, and make necessary adjustments to your strategy.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">Real-World Results</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              When you shift from scattered goal-setting to systematic achievement, the results speak for themselves. Our users report:
            </p>

            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                  <p className="text-gray-300 text-sm">Complete their 90-day goals</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
                  <p className="text-gray-300 text-sm">Faster goal achievement</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                  <p className="text-gray-300 text-sm">Report reduced overwhelm</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">4.9★</div>
                  <p className="text-gray-300 text-sm">Average user satisfaction</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">Your Systematic Transformation Starts Here</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The difference between scattered ambitions and systematic achievement isn't talent, luck, or willpower—it's having the right framework and tools to support your journey.
            </p>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Transform Your Approach?</h3>
              <p className="text-gray-300 mb-4">
                Join over 10,000 achievers who've discovered the power of systematic goal-setting with the Leverage Journal™.
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold">
                  Start Your Systematic Journey
                </Button>
              </Link>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Share this article:</span>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}
