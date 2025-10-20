import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'The Psychology Behind 90-Day Goal Cycles',
  description: 'Discover why 90 days is the optimal timeframe for meaningful achievement and how to structure your goals for maximum impact using psychological principles.',
  keywords: ['90-day goals', 'goal psychology', 'achievement cycles', 'productivity psychology', 'goal setting science'],
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Psychology Behind 90-Day Goal Cycles",
    "description": "Why 90 days is the optimal timeframe for meaningful achievement and how to structure your goals for maximum impact.",
    "author": {
      "@type": "Person",
      "name": "Khamare Clarke"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Leverage Journal™",
      "logo": {
        "@type": "ImageObject",
        "url": "https://leveragejournal.com/images/logo.png"
      }
    },
    "datePublished": "2025-01-10T00:00:00Z",
    "dateModified": "2025-01-10T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://leveragejournal.com/blog/psychology-90-day-cycles"
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
            { name: 'The Psychology Behind 90-Day Goal Cycles', href: '/blog/psychology-90-day-cycles' }
          ]} />
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>January 10, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Khamare Clarke</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-6">
              The Psychology Behind 90-Day Goal Cycles
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Why 90 days is the optimal timeframe for meaningful achievement and how to structure your goals for maximum impact using psychological principles.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">The Science of Temporal Landmarks</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Research in behavioral psychology reveals that humans naturally organize their lives around temporal landmarks—specific dates that feel like fresh starts. New Year's Day, birthdays, and Mondays all serve as psychological "reset buttons" that motivate us to pursue new goals.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              But here's what most people don't realize: <strong className="text-yellow-400">90 days creates the perfect balance between urgency and achievability</strong>. It's long enough to accomplish meaningful change, yet short enough to maintain focus and momentum.
            </p>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">Why 90 Days Works</h2>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-yellow-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">The Goldilocks Zone of Goal Setting</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Too Short (30 days):</strong> Not enough time for meaningful habit formation or complex goal achievement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Just Right (90 days):</strong> Sufficient time for habit formation while maintaining urgency and focus</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Too Long (365 days):</strong> Goals feel distant, motivation wanes, and focus becomes scattered</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">The Neuroscience of Habit Formation</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Dr. Ann Graybiel's research at MIT shows that it takes approximately 66 days for a new behavior to become automatic. This means that within a 90-day cycle, you have enough time to not only establish new habits but also to reinforce them until they become second nature.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The Leverage Journal™ system leverages this by breaking your 90-day journey into three distinct phases:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Days 1-30: Foundation</h4>
                <p className="text-gray-300 text-sm">Establish new behaviors, overcome initial resistance, and build momentum.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Days 31-60: Acceleration</h4>
                <p className="text-gray-300 text-sm">Optimize your approach, overcome obstacles, and maintain consistent progress.</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Days 61-90: Mastery</h4>
                <p className="text-gray-300 text-sm">Solidify habits, achieve your goals, and prepare for the next level.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-yellow-400 mt-12 mb-6">Implementing the 90-Day System</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The key to success lies in proper goal structuring. Instead of setting vague aspirations like "get healthier," the 90-day system encourages specific, measurable objectives that can be tracked and adjusted.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              This is where the Leverage Journal™ becomes invaluable. By combining handwritten reflection with AI-powered insights, you create a feedback loop that keeps you aligned with your goals while adapting to real-world challenges.
            </p>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ready to Start Your 90-Day Journey?</h3>
              <p className="text-gray-300 mb-4">
                The Leverage Journal™ system is designed around these psychological principles, helping you turn scattered ambitions into systematic achievements.
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold">
                  Get Your Leverage Journal™
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
