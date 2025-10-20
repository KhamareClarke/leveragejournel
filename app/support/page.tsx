import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, Book, Truck, RefreshCw, Mail, Phone, Clock, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Support Center',
  description: 'Leverage Journal™ Support Center - Get help with orders, features, shipping, and more.',
};

export default function SupportPage() {
  const supportCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn how to use your Leverage Journal™ system',
      topics: ['First-time setup', 'Goal-setting frameworks', 'App installation', 'Basic features'],
      link: '/support/getting-started'
    },
    {
      icon: Truck,
      title: 'Orders & Shipping',
      description: 'Track orders, shipping info, and delivery questions',
      topics: ['Order tracking', 'Shipping times', 'Address changes', 'Delivery issues'],
      link: '/shipping'
    },
    {
      icon: RefreshCw,
      title: 'Returns & Refunds',
      description: '30-day guarantee and return process',
      topics: ['Return process', 'Refund timeline', 'Product condition', 'Digital access'],
      link: '/returns'
    },
    {
      icon: MessageSquare,
      title: 'Technical Support',
      description: 'App issues, sync problems, and technical help',
      topics: ['App troubleshooting', 'Sync issues', 'Account problems', 'Data recovery'],
      link: '/support/technical'
    }
  ];

  const quickHelp = [
    {
      question: "How do I track my order?",
      answer: "Check your email for tracking information sent when your order ships."
    },
    {
      question: "Can I change my shipping address?",
      answer: "Contact us immediately if your order hasn't shipped yet."
    },
    {
      question: "How do I sync my journal with the app?",
      answer: "Use the camera feature in the app to photograph your journal pages."
    },
    {
      question: "What's included with my purchase?",
      answer: "Physical journal, lifetime app access, and all digital frameworks."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Get help with your Leverage Journal™ system. Our support team is here to ensure your success.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email Support',
                description: 'Get detailed help via email',
                contact: 'support@leveragejournal.com',
                response: '24 hours',
                action: 'Send Email'
              },
              {
                icon: MessageSquare,
                title: 'Live Chat',
                description: 'Chat with our team in real-time',
                contact: 'Available 9AM-6PM GMT',
                response: 'Instant',
                action: 'Start Chat'
              },
              {
                icon: Phone,
                title: 'Priority Support',
                description: 'Premium customers get priority',
                contact: 'Included with purchase',
                response: '12 hours',
                action: 'Learn More'
              }
            ].map((method, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 p-6 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto">
                    <method.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                    <p className="text-sm text-gray-400">{method.description}</p>
                    <p className="text-yellow-400 font-medium text-sm">{method.contact}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>Response: {method.response}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black text-sm">
                    {method.action}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Browse Help Topics</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find answers organized by category or contact our support team directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={category.link}>
                    <Button variant="ghost" className="w-full text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 mt-4">
                      View Articles
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Quick Answers</h2>
            <p className="text-gray-300">Common questions and instant solutions</p>
          </div>
          
          <div className="space-y-4">
            {quickHelp.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-300 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/faq">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-8 py-3">
                View All FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
