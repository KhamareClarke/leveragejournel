import type { Metadata } from 'next';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Leverage Journal™ team. Support, partnerships, and general inquiries welcome.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about Leverage Journal™? We're here to help you on your journey to systematic achievement.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email Support',
                description: 'Get help with orders, features, or general questions',
                contact: 'support@leveragejournal.com',
                action: 'Send Email'
              },
              {
                icon: MessageSquare,
                title: 'Live Chat',
                description: 'Chat with our team in real-time',
                contact: 'Available 9AM-6PM GMT',
                action: 'Start Chat'
              },
              {
                icon: Clock,
                title: 'Response Time',
                description: 'We respond to all inquiries within',
                contact: '24 hours',
                action: 'Learn More'
              },
              {
                icon: MapPin,
                title: 'Location',
                description: 'Based in the United Kingdom',
                contact: 'London, UK',
                action: 'View Map'
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
                    <p className="text-yellow-400 font-medium">{method.contact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Send us a message</h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you have questions about features, need support, or want to explore partnerships, we'd love to hear from you.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Product Support</option>
                    <option>Order Issue</option>
                    <option>Partnership</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-3">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: "How long does shipping take?",
                      answer: "We ship worldwide within 2-3 weeks. You'll receive tracking information once dispatched."
                    },
                    {
                      question: "Can I get a refund?",
                      answer: "Yes! We offer a 30-day money-back guarantee if you're not satisfied."
                    },
                    {
                      question: "Do you offer bulk discounts?",
                      answer: "Yes, we have special pricing for teams and organizations. Contact us for details."
                    },
                    {
                      question: "Is the app included?",
                      answer: "Yes! Lifetime access to the companion app is included with every journal purchase."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Need immediate help?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Check out our comprehensive FAQ section for instant answers to common questions.
                </p>
                <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
