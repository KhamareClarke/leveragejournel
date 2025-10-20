import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Leverage Journal™ Terms of Service - Terms and conditions for using our products and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400">Last updated: January 12, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>By purchasing or using Leverage Journal™ products and services, you agree to be bound by these Terms of Service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">2. Products and Services</h2>
              <div className="text-gray-300 space-y-4">
                <p>Leverage Journal™ provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Physical productivity journals</li>
                  <li>Digital companion application</li>
                  <li>Goal-setting frameworks and methodologies</li>
                  <li>Progress tracking and analytics</li>
                  <li>Customer support services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">3. Pricing and Payment</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are listed in British Pounds (£) unless otherwise stated</li>
                  <li>Payment is required at the time of purchase</li>
                  <li>We accept major credit cards and digital payment methods</li>
                  <li>Prices may change without notice for future purchases</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">4. Shipping and Delivery</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We ship worldwide within 2-3 weeks of order confirmation</li>
                  <li>Shipping costs are included in the purchase price</li>
                  <li>Risk of loss transfers to you upon delivery</li>
                  <li>Digital access is provided immediately upon purchase</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">5. Returns and Refunds</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>30-day money-back guarantee from date of purchase</li>
                  <li>Products must be returned in original condition</li>
                  <li>Digital access will be revoked upon refund processing</li>
                  <li>Return shipping costs are the responsibility of the customer</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">6. Intellectual Property</h2>
              <div className="text-gray-300 space-y-4">
                <p>All content, frameworks, and methodologies are proprietary to Leverage Journal™ and protected by copyright and other intellectual property laws.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">7. Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>Leverage Journal™ shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">8. Contact Information</h2>
              <div className="text-gray-300">
                <p>For questions about these Terms of Service, contact us at:</p>
                <p className="mt-2">
                  Email: legal@leveragejournal.com<br />
                  Address: Leverage Journal™, London, UK
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
