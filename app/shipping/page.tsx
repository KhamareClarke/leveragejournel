import type { Metadata } from 'next';
import { Truck, Globe, Clock, Package } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shipping Info',
  description: 'Leverage Journal™ shipping information - delivery times, costs, and worldwide shipping details.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Shipping Information
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable worldwide shipping for your Leverage Journal™. Free shipping included with every order.
          </p>
        </div>
      </section>

      {/* Shipping Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Globe,
                title: 'Worldwide Shipping',
                description: 'We ship to over 180 countries worldwide'
              },
              {
                icon: Truck,
                title: 'Free Shipping',
                description: 'No additional shipping costs - included in price'
              },
              {
                icon: Clock,
                title: '2-3 Week Delivery',
                description: 'Standard delivery time from order confirmation'
              },
              {
                icon: Package,
                title: 'Secure Packaging',
                description: 'Premium protective packaging for safe delivery'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 p-6 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Delivery Times</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Standard Delivery</h3>
                    <p className="text-gray-300 text-sm mb-2">2-3 weeks from order confirmation</p>
                    <p className="text-gray-400 text-xs">Available worldwide • Tracking included</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Digital Access</h3>
                    <p className="text-gray-300 text-sm mb-2">Immediate access upon purchase</p>
                    <p className="text-gray-400 text-xs">Companion app • Digital frameworks • Instant download</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">What's Included</h2>
                <div className="space-y-3">
                  {[
                    'Premium hardcover Leverage Journal™',
                    'Lifetime access to companion app',
                    'Digital goal-setting frameworks',
                    'Progress tracking templates',
                    'Secure protective packaging',
                    'Order tracking information',
                    'Customer support access'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Regional Information</h2>
                <div className="space-y-4">
                  {[
                    { region: 'United Kingdom', time: '1-2 weeks', note: 'Domestic shipping' },
                    { region: 'Europe', time: '2-3 weeks', note: 'EU and non-EU countries' },
                    { region: 'North America', time: '2-3 weeks', note: 'USA, Canada, Mexico' },
                    { region: 'Rest of World', time: '2-4 weeks', note: 'All other countries' }
                  ].map((region, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-semibold">{region.region}</h3>
                          <p className="text-gray-400 text-sm">{region.note}</p>
                        </div>
                        <span className="text-yellow-400 font-medium text-sm">{region.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Order Tracking</h3>
                <p className="text-gray-300 text-sm mb-4">
                  You'll receive a tracking number via email once your journal ships. Track your order status in real-time.
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <p>• Order confirmation: Immediate</p>
                  <p>• Processing: 1-2 business days</p>
                  <p>• Shipping notification: When dispatched</p>
                  <p>• Delivery: 2-3 weeks from shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Shipping FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Is shipping really free?",
                answer: "Yes! Shipping costs are included in the £19.99 price. No additional fees or hidden costs."
              },
              {
                question: "Can I change my shipping address?",
                answer: "Contact us immediately if you need to change your address. We can update it if your order hasn't shipped yet."
              },
              {
                question: "What if my journal is damaged during shipping?",
                answer: "We'll replace any damaged items at no cost. Contact support with photos of the damage."
              },
              {
                question: "Do you ship to P.O. boxes?",
                answer: "Yes, we ship to P.O. boxes and military addresses worldwide."
              },
              {
                question: "Can I track my international order?",
                answer: "Yes, all orders include tracking. International tracking may have limited updates in transit."
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
