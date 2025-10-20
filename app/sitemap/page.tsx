import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap of Leverage Journal™ website. Find all pages, resources, and content organized for easy navigation.',
  robots: {
    index: true,
    follow: true,
  },
};

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { href: '/', label: 'Home', description: 'Main landing page and product overview' },
      { href: '/about', label: 'About Us', description: 'Our story, mission, and team' },
      { href: '/how-it-works', label: 'How It Works', description: 'Complete guide to the 90-day system' },
      { href: '/features', label: 'Features', description: 'Complete feature breakdown and benefits' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog', description: 'Latest articles on productivity and goal achievement' },
      { href: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
      { href: '/contact', label: 'Contact', description: 'Get in touch with our team' },
    ]
  },
  {
    title: 'Support',
    links: [
      { href: '/support', label: 'Support Center', description: 'Help articles and documentation' },
      { href: '/shipping', label: 'Shipping Info', description: 'Shipping policies and delivery information' },
      { href: '/returns', label: 'Returns', description: 'Return and refund policies' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy', description: 'How we handle your personal information' },
      { href: '/terms', label: 'Terms of Service', description: 'Terms and conditions of use' },
      { href: '/sitemap', label: 'Sitemap', description: 'This page - complete site navigation' },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-600/20 via-black to-black border-b border-yellow-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete navigation guide to all pages and resources on Leverage Journal™
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {sitemapSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-yellow-400 border-b border-yellow-500/30 pb-3">
                {section.title}
              </h2>
              
              <div className="grid gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors">
                            {link.label}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow-400 transition-colors flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-300 mb-3">
              XML Sitemap for Search Engines
            </h3>
            <p className="text-gray-300 mb-4">
              For search engines and automated crawlers, our machine-readable sitemap is available at:
            </p>
            <Link
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors font-mono text-sm"
            >
              <span>https://leveragejournal.com/sitemap.xml</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/30"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
