import type { Metadata } from 'next';
import { RefreshCw, Shield, Clock, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Returns & Refunds',
  description: 'Leverage Journal™ returns policy - 30-day money-back guarantee and return process information.',
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Returns & Refunds
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            30-day money-back guarantee. We're confident you'll love your Leverage Journal™, but if not, we'll make it right.
          </p>
        </div>
      </section>

      {/* Guarantee Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: '30-Day Guarantee',
                description: 'Full refund within 30 days of purchase'
              },
              {
                icon: RefreshCw,
                title: 'Easy Returns',
                description: 'Simple return process with email support'
              },
              {
                icon: Clock,
                title: 'Quick Processing',
                description: 'Refunds processed within 5-7 business days'
              },
              {
                icon: Mail,
                title: 'Full Support',
                description: 'Dedicated support team to help with returns'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 p-6 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Return Process */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">How to Return</h2>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Contact Support',
                      description: 'Email us at returns@leveragejournal.com within 30 days'
                    },
                    {
                      step: '2', 
                      title: 'Receive Instructions',
                      description: 'We\'ll send you return instructions and a prepaid label'
                    },
                    {
                      step: '3',
                      title: 'Pack & Ship',
                      description: 'Pack your journal in original condition and ship it back'
                    },
                    {
                      step: '4',
                      title: 'Get Refund',
                      description: 'Receive full refund within 5-7 business days'
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Ready to Start a Return?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Contact our support team and we'll guide you through the process.
                </p>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold">
                  Start Return Process
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Return Conditions</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Eligible for Return</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Journal in original condition</li>
                      <li>• Returned within 30 days</li>
                      <li>• Original packaging preferred</li>
                      <li>• Proof of purchase required</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Digital Access</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• App access will be revoked</li>
                      <li>• Data export available before return</li>
                      <li>• Digital frameworks included in refund</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Refund Timeline</h2>
                <div className="space-y-3">
                  {[
                    { timeframe: 'Day 1', action: 'Return request submitted' },
                    { timeframe: 'Day 2-3', action: 'Return instructions sent' },
                    { timeframe: 'Day 5-10', action: 'Item received and inspected' },
                    { timeframe: 'Day 12-17', action: 'Refund processed to original payment method' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">{item.action}</span>
                      <span className="text-yellow-400 font-medium text-sm">{item.timeframe}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Return FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What if I've used the journal?",
                answer: "Light use is acceptable. We understand you need to try the system. Heavy use or damage may affect eligibility."
              },
              {
                question: "Can I return just the digital access?",
                answer: "No, returns include both physical journal and digital access as they're sold as a complete system."
              },
              {
                question: "Who pays for return shipping?",
                answer: "We provide a prepaid return label for your convenience. No additional shipping costs to you."
              },
              {
                question: "What if I lost my journal?",
                answer: "Unfortunately, lost items cannot be refunded. We recommend using tracked shipping methods."
              },
              {
                question: "Can I exchange for a different product?",
                answer: "We currently offer refunds only. You can repurchase if you'd like a different product in the future."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
