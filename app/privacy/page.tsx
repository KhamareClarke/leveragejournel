import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Leverage Journal™ Privacy Policy - How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last updated: January 12, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-4">
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal information (name, email address, shipping address)</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                  <li>Journal entries and goal data (when you choose to sync with our app)</li>
                  <li>Usage data and analytics to improve our services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send you important updates about your order or account</li>
                  <li>Improve our products and services</li>
                  <li>Provide personalized insights and recommendations (with your consent)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">3. Data Security</h2>
              <div className="text-gray-300 space-y-4">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All data is encrypted in transit and at rest</li>
                  <li>We use industry-standard security protocols</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal data on a need-to-know basis</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">4. Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-4">5. Contact Us</h2>
              <div className="text-gray-300">
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2">
                  Email: privacy@leveragejournal.com<br />
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
