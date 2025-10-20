import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Leverage Journal™ - shipping, features, pricing, and how the 90-day system works.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What makes Leverage Journal™ different from other planners?",
      answer: "Leverage Journal™ combines psychology-backed planning frameworks with AI-powered insights. Unlike traditional planners that focus on tasks, we focus on systematic achievement through 90-day cycles, real-time app integration, and proven behavioral science principles."
    },
    {
      question: "How does the journal sync with the app?",
      answer: "You can photograph your journal pages using the app, which uses AI to extract and analyze your handwritten entries. The app then provides insights, tracks progress, and creates visualizations based on your written reflections and goals."
    },
    {
      question: "What's included in the £19.99 price?",
      answer: "You get the premium hardcover journal (90-day system), lifetime access to the companion app, all digital features including AI insights, progress tracking, and future updates. Free worldwide shipping is included."
    },
    {
      question: "How long does shipping take?",
      answer: "We ship worldwide within 2-3 weeks of your order. You'll receive tracking information once your journal is dispatched. Digital app access is immediate upon purchase."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day risk-free guarantee. If you're not completely satisfied with your Leverage Journal™ system, contact us for a full refund within 30 days of purchase."
    },
    {
      question: "Can I use the system without the app?",
      answer: "Absolutely! The physical journal is designed to be complete on its own. The app enhances the experience with digital insights and tracking, but all core frameworks and methodologies work perfectly with just the journal."
    },
    {
      question: "What happens after 90 days?",
      answer: "After completing your first 90-day cycle, you can start a new cycle with advanced frameworks, review your progress, and scale your achievements. The app maintains all your historical data for long-term tracking."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes! The system is designed for both beginners and experienced goal-setters. We provide clear guidance, step-by-step frameworks, and progressive complexity that grows with your experience."
    },
    {
      question: "What devices does the app support?",
      answer: "The Leverage Journal™ app is available for iOS and Android devices. We also offer a web version for desktop access. All versions sync seamlessly across devices."
    },
    {
      question: "Can I gift this to someone?",
      answer: "Absolutely! Leverage Journal™ makes an excellent gift for ambitious friends, family members, or colleagues. You can purchase and ship directly to their address."
    },
    {
      question: "Do you offer bulk discounts for teams?",
      answer: "Yes, we offer special pricing for teams and organizations. Contact us directly for bulk orders of 10+ journals to discuss custom pricing and team features."
    },
    {
      question: "What if I lose my journal?",
      answer: "If you've been using the app to sync your entries, all your data is safely backed up in the cloud. You can order a replacement journal and continue where you left off. We also offer digital-only access if needed."
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about the Leverage Journal™ system, shipping, and how to get started.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-lg px-6 data-[state=open]:border-yellow-500/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-yellow-300 py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-8 py-3">
                <span className="flex items-center space-x-2">
                  <span>Contact Support</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3">
                Pre-Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
