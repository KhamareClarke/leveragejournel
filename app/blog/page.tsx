import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles on productivity, goal achievement, and systematic success from the Leverage Journal™ team.',
};

export default function BlogPage() {
  const posts = [
    {
      title: "The Psychology Behind 90-Day Goal Cycles",
      excerpt: "Why 90 days is the optimal timeframe for meaningful achievement and how to structure your goals for maximum impact.",
      author: "Khamare Clarke",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Psychology",
      slug: "psychology-90-day-cycles",
      published: true
    },
    {
      title: "From Scattered to Systematic: A Goal-Setting Revolution",
      excerpt: "How to transform chaotic ambitions into structured achievement systems that actually deliver results.",
      author: "Leverage Team",
      date: "January 8, 2025", 
      readTime: "7 min read",
      category: "Productivity",
      slug: "scattered-to-systematic",
      published: true
    },
    {
      title: "The Science of Handwritten Reflection",
      excerpt: "Research-backed benefits of handwriting for memory, creativity, and goal achievement in the digital age.",
      author: "Dr. Sarah Chen",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Research",
      slug: "handwritten-reflection-science"
    },
    {
      title: "Building Leverage: How Small Actions Create Big Results",
      excerpt: "The compound effect of systematic daily actions and how to identify your highest-leverage activities.",
      author: "Khamare Clarke",
      date: "January 3, 2025",
      readTime: "8 min read",
      category: "Strategy",
      slug: "building-leverage"
    },
    {
      title: "AI-Powered Insights: The Future of Personal Development",
      excerpt: "How artificial intelligence can enhance self-reflection and accelerate personal growth without replacing human intuition.",
      author: "Tech Team",
      date: "December 30, 2024",
      readTime: "4 min read",
      category: "Technology",
      slug: "ai-powered-insights"
    },
    {
      title: "Case Study: From Startup Chaos to Systematic Success",
      excerpt: "How one entrepreneur used the Leverage Journal™ system to scale their business from idea to six figures in 90 days.",
      author: "Success Stories",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Case Study",
      slug: "startup-chaos-to-success"
    }
  ];

  const categories = ["All", "Psychology", "Productivity", "Research", "Strategy", "Technology", "Case Study"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-600/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Insights on productivity, goal achievement, and systematic success from our team of experts and researchers.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-yellow-500 text-black hover:bg-yellow-400" 
                  : "border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group">
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-yellow-400 font-medium px-2 py-1 bg-yellow-500/10 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-yellow-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {post.published ? (
                    <Link href={`/blog/${post.slug}`} className="block">
                      <Button variant="ghost" className="w-full text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 group">
                        <span className="flex items-center space-x-2">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="ghost" className="w-full text-gray-500 cursor-not-allowed" disabled>
                      <span className="flex items-center space-x-2">
                        <span>Coming Soon</span>
                      </span>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on productivity and goal achievement delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:outline-none"
            />
            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
