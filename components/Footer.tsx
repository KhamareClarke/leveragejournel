import Link from 'next/link';
import { BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-neutral-950 to-black border-t border-yellow-600/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-600/5 to-transparent"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
                <div>
                  <span className="text-3xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Leverage Journal™
                  </span>
                  <p className="text-sm text-gray-400 mt-1">Plan • Do • Achieve • Refine</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                The 90-day system that transforms scattered ambitions into systematic achievement through psychology-backed planning and AI-powered insights.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter your email"
                    className="bg-neutral-900/50 border-yellow-600/30 text-white placeholder:text-gray-400 focus:border-yellow-500/50"
                  />
                  <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'How It Works', href: '/how-it-works' },
                  { name: 'Features', href: '/features' },
                  { name: 'Testimonials', href: '#testimonials' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'Blog', href: '/blog' }
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Support</h4>
              <div className="space-y-3">
                {[
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Help Center', href: '/support' },
                  { name: 'Shipping Info', href: '/shipping' },
                  { name: 'Returns', href: '/returns' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Sitemap', href: '/sitemap' }
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Product</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-yellow-400">£19.99</div>
                    <div className="text-sm text-yellow-200">Premium Edition</div>
                    <div className="text-xs text-gray-400">Free worldwide shipping</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {[
                    'Physical Journal + Digital App',
                    '90-Day Achievement System',
                    'AI-Powered Insights',
                    '30-Day Money-Back Guarantee'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-600/20 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-sm">
                  Copyright © 2025 The Leverage Journal™. All rights reserved.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
