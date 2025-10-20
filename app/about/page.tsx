import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Leverage Journal™ - our mission to transform how achievers approach goal-setting through psychology-backed planning and AI-powered insights.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'About Us', href: '/about' }]} />
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
              About Leverage Journal™
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform how achievers approach goal-setting through psychology-backed planning and AI-powered insights.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-yellow-400">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Leverage Journal™ was born from a simple observation: most goal-setting systems fail because they treat symptoms, not causes. Traditional planners focus on tasks and deadlines, but ignore the psychology of achievement.
                </p>
                <p>
                  After years of research in behavioral psychology and AI, we created a system that bridges the gap between intention and execution. The Leverage Journal™ isn't just a planner—it's a complete ecosystem for systematic achievement.
                </p>
                <p>
                  Our 90-day framework combines the tactile experience of handwritten reflection with the intelligence of real-time progress tracking, creating a powerful synergy that transforms scattered ambitions into measurable results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
                <div className="text-gray-300">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To empower achievers with tools that turn ambition into leverage through systematic, psychology-backed planning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Systematic Achievement',
                description: 'Replace scattered goal-setting with proven frameworks that deliver measurable results in 90-day cycles.'
              },
              {
                icon: Users,
                title: 'Community of Achievers',
                description: 'Connect ambitious individuals who understand that success requires both vision and systematic execution.'
              },
              {
                icon: Award,
                title: 'Continuous Innovation',
                description: 'Constantly evolve our system based on user feedback, behavioral research, and technological advancement.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-yellow-500/30 rounded-lg p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <span className="text-2xl font-bold text-yellow-400">KC</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Khamare Clarke</h3>
                <p className="text-yellow-400 text-sm">Founder & Creator</p>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  "With an MSc in AI & Computer Science, I've dedicated my career to building tools that turn ambition into leverage. The Leverage Journal™ represents years of research into the psychology of achievement and the power of systematic thinking."
                </p>
                <p className="text-gray-400 text-sm">
                  Khamare combines deep technical expertise with practical understanding of human behavior to create systems that actually work in the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Approach to Achievement?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of achievers who've discovered the power of systematic goal-setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-8 py-3">
                <span className="flex items-center space-x-2">
                  <span>Get Your Journal</span>
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
