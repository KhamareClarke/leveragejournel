'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Target, TrendingUp, Calendar, BarChart3, Zap, ChevronRight, Star, Trophy, Play, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      quote: "It's like having a coach, therapist, and strategist in one.",
      author: "Sarah M.",
      role: "Entrepreneur",
    },
    {
      quote: "My productivity doubled in 30 days.",
      author: "James P.",
      role: "Creative Director",
    },
    {
      quote: "I finally follow through. This system works.",
      author: "Maya T.",
      role: "Founder",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 119, 6, 0.06), transparent 80%)`,
        }}
      />

      {/* Enhanced Professional Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-2xl border-b border-yellow-600/40 shadow-2xl shadow-yellow-600/20'
            : 'bg-black/10 backdrop-blur-md'
        }`}
      >
        {/* Enhanced Announcement Bar with Countdown */}
        <div className="bg-gradient-to-r from-yellow-600/30 via-yellow-500/20 to-yellow-600/30 border-b border-yellow-500/30">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
              {/* Left Section - Limited Edition Badge */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-200 font-medium tracking-wide">LIMITED EDITION</span>
                </div>
                <div className="hidden md:flex items-center space-x-1 text-yellow-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Offer ends in: <span className="font-bold">23:59:59</span></span>
                </div>
              </div>

              {/* Right Section - Stock & Shipping */}
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-gray-300">Only <span className="text-yellow-400 font-bold">127</span>/500 left</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-300 font-medium">FREE Worldwide Shipping</span>
                </div>
              </div>
            </div>

            {/* Mobile Countdown */}
            <div className="md:hidden mt-2 text-center">
              <div className="inline-flex items-center space-x-1 text-yellow-300 text-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Ends in: <span className="font-bold">23:59:59</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl shadow-yellow-600/50 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-elegant font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Leverage Journal™
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] text-gray-500 font-light tracking-wider">
                    PLAN • DO • ACHIEVE
                  </span>
                  <div className="hidden sm:flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <a href="#features" className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                  Features
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#how-it-works" className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                  How It Works
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#testimonials" className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                  Reviews
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="/faq" className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                  FAQ
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
              
              {/* Enhanced Pricing Badge */}
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-1.5 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 border border-yellow-500/40 rounded-full px-3 py-1.5 text-sm">
                  <span className="text-yellow-300 font-bold">£19.99</span>
                  <span className="text-gray-400 text-[11px] line-through">£39.99</span>
                  <div className="w-px h-3 bg-yellow-500/30"></div>
                  <span className="text-yellow-300 text-[11px] font-medium">50% OFF</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="hidden md:flex text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
              <Button className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold shadow-2xl shadow-yellow-600/40 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/60 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center space-x-2">
                  <span>Pre-Order Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Indicator & Progress Bar */}
        <div className="lg:hidden px-4 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex justify-center flex-1">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-60"></div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-xs">Menu</span>
            </Button>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600/20">
          <div 
            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 transition-all duration-300"
            style={{ width: scrolled ? '20%' : '0%' }}
          ></div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cinematic-hero">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/15 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/12 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 hero-shimmer"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,119,6,0.02)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/8 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-center lg:text-left animate-fade-up">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-yellow-100 text-xs font-medium tracking-wide">TRUSTED BY 10,000+ GOAL ACHIEVERS</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-elegant font-bold leading-[0.9] tracking-tight">
                  <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                    LEVERAGE
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent -mt-2 drop-shadow-lg">
                    JOURNAL™
                  </span>
                </h1>
                <div className="space-y-1">
                  <p className="text-xl text-yellow-100 font-light tracking-widest uppercase">LIMITED EDITION</p>
                  <p className="text-2xl text-yellow-200 font-medium">90-DAY SYSTEM</p>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mt-2"></div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="max-w-xl">
                <p className="text-lg text-gray-100 leading-relaxed">
                  The <span className="text-yellow-300 font-medium">only system</span> that combines psychology-backed planning with real-time app sync to turn your <span className="text-yellow-300 font-medium">ambitions into achievements</span>.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {[
                  { value: '10K+', label: 'Goals Achieved' },
                  { value: '94%', label: 'Success Rate' },
                  { value: '4.9★', label: 'User Rated' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform digit-pulse">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-10 py-6 shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 btn-premium-glow animate-optimized group w-full sm:w-auto justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      PRE-ORDER NOW - £19.99
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  </Button>
                </div>

                {/* Premium Badge */}
                <div className="inline-flex items-center justify-center sm:justify-start w-full">
                  <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-full px-4 py-2 text-sm text-yellow-200 font-medium flex items-center space-x-2">
                    <span>PREMIUM EDITION</span>
                    <span className="text-yellow-400 font-bold digit-pulse">£19.99</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  {[
                    { icon: <CheckCircle className="w-4 h-4 text-green-400" />, text: 'Includes Mobile App' },
                    { icon: <CheckCircle className="w-4 h-4 text-green-400" />, text: '30-Day Guarantee' },
                    { icon: <CheckCircle className="w-4 h-4 text-green-400" />, text: 'Ships in 2-3 Weeks' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-300">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Urgency Indicator */}
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2.5 text-sm text-yellow-200 font-medium animate-pulse-slow">
                  <Clock className="w-4 h-4" />
                  <span>LIMITED TIME: <span className="digit-pulse">50%</span> OFF - ENDING SOON</span>
                </div>
              </div>

            </div>

            {/* Enhanced Product Showcase */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/25 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/15 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-600/15 rounded-full blur-3xl"></div>
              
              <div className="relative animate-float-slow">
                <div className="flex items-center space-x-6">
                  {/* Enhanced Physical Journal Mockup */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/40 to-transparent rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative w-80 h-[500px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-black rounded-3xl shadow-2xl border border-yellow-600/60 overflow-hidden group-hover:scale-105 transition-all duration-500">
                      {/* Product Image Placeholder */}
                      <img 
                        src="/images/leverage-journal-product.jpg" 
                        alt="Leverage Journal 90-Day Productivity Planner Book and App - Premium black and gold journal with structured goal-setting system"
                        className="absolute inset-0 w-full h-full object-cover opacity-0"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Journal Cover Design */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Gold Foil Effects */}
                      <div className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-70"></div>
                      <div className="absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                      
                      {/* Center Logo Design */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl"></div>
                            <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                              <BookOpen className="w-12 h-12 text-black" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-3xl font-serif font-bold text-yellow-400 tracking-wider">LEVERAGE</h3>
                            <h4 className="text-xl font-serif text-yellow-500/90 tracking-widest">JOURNAL™</h4>
                            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                            <p className="text-xs text-gray-400 tracking-[0.3em] font-light">FIRST EDITION</p>
                            <p className="text-xs text-yellow-600 font-semibold">90-DAY SYSTEM</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Design Elements */}
                      <div className="absolute bottom-8 left-8 right-8 space-y-4">
                        <div className="space-y-2">
                          <div className="h-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full w-4/5"></div>
                          <div className="h-1 bg-yellow-600/50 rounded-full w-3/5"></div>
                          <div className="h-1 bg-yellow-600/30 rounded-full w-2/5"></div>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-yellow-600/20">
                          <span className="text-xs text-gray-500 tracking-wider">PREMIUM EDITION</span>
                          <span className="text-sm text-yellow-500 font-bold">£19.99</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced App Mockup */}
                  <div className="relative group animate-float-delayed">
                    <div className="w-52 h-[420px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-black rounded-[2.5rem] shadow-2xl border border-yellow-600/50 p-2 group-hover:scale-105 transition-all duration-500">
                      {/* App Screenshot Placeholder */}
                      <img 
                        src="/images/leverage-app-dashboard.jpg" 
                        alt="Goal Tracker Dashboard Preview – Leverage Journal App showing daily progress, goal completion rates, and achievement tracking interface"
                        className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] opacity-0"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Phone Screen */}
                      <div className="w-full h-full bg-black rounded-[2rem] p-4 relative overflow-hidden">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-xs text-gray-400 font-medium">9:41</div>
                          <div className="flex items-center space-x-1">
                            <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                            <div className="text-xs text-gray-400">100%</div>
                          </div>
                        </div>
                        
                        {/* App Header */}
                        <div className="text-center mb-8">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <BookOpen className="w-4 h-4 text-black" />
                          </div>
                          <h4 className="text-yellow-400 font-bold text-base">Leverage Journal</h4>
                          <p className="text-gray-500 text-xs">Today's Progress</p>
                        </div>
                        
                        {/* Enhanced Progress Cards */}
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-yellow-600/30 to-yellow-500/20 rounded-xl p-4 border border-yellow-500/30">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-yellow-400 text-sm font-semibold">Daily Goals</span>
                              <span className="text-yellow-400 text-sm font-bold">8/10</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full w-4/5"></div>
                            </div>
                            <p className="text-xs text-gray-400">Great progress today!</p>
                          </div>
                          
                          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                            <div className="flex justify-between items-center mb-3">
                              <span className="text-gray-300 text-sm font-medium">Habits</span>
                              <span className="text-gray-300 text-sm">6/8</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gray-500 h-2 rounded-full w-3/4"></div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-300 text-sm font-medium">Current Rank</span>
                              <Trophy className="w-4 h-4 text-yellow-500" />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-yellow-400 text-lg font-bold">Level 7</span>
                              <span className="text-xs text-gray-400">Achiever</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced Sync Indicator */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full py-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-xs font-medium">Synced with Journal</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Why It Works Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-600/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-24 space-y-8 animate-fade-up">
            {/* Problem Statement Badge */}
            <div className="inline-flex items-center space-x-3 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-200 text-sm font-semibold">The #1 Problem with Goal Setting</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-elegant font-bold text-white leading-tight tracking-tight">
              Why the Leverage Journal <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Works</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-2xl sm:text-3xl text-red-400 font-light max-w-4xl mx-auto leading-relaxed">
                Most people plan without execution. <span className="text-white font-semibold">This is where they fail.</span>
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto"></div>
              <p className="text-xl sm:text-2xl text-white max-w-5xl mx-auto leading-relaxed font-light">
                The Leverage Journal bridges that gap — merging <span className="text-yellow-400 font-semibold">structure, psychology, and data</span> so your progress compounds daily.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">87%</div>
                <div className="text-sm text-gray-400">Fail Without System</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">94%</div>
                <div className="text-sm text-gray-400">Succeed With Structure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">3x</div>
                <div className="text-sm text-gray-400">Faster Results</div>
              </div>
            </div>
          </div>

          {/* Enhanced 3-Step Process */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: Target,
                  number: '01',
                  title: 'Plan',
                  subtitle: 'Vision to Strategy',
                  description: 'Define your long-term vision and map your next 90 days with psychology-backed frameworks.',
                  features: ['90-Day Vision Mapping', 'Identity-Based Goals', 'Quarterly Milestones'],
                  color: 'from-amber-500 to-yellow-600',
                  delay: '0ms',
                },
                {
                  icon: Zap,
                  number: '02', 
                  title: 'Do',
                  subtitle: 'Action to Habit',
                  description: 'Track progress daily with structured pages and real-time app sync for accountability.',
                  features: ['Daily Action Tracking', 'Habit Scorecard', 'App Sync Reminders'],
                  color: 'from-yellow-500 to-amber-600',
                  delay: '100ms',
                },
                {
                  icon: TrendingUp,
                  number: '03',
                  title: 'Achieve',
                  subtitle: 'Progress to Results',
                  description: 'See measurable progress as habits and systems align with data-driven insights.',
                  features: ['Progress Analytics', 'System Optimization', 'Milestone Celebrations'],
                  color: 'from-yellow-600 to-yellow-700',
                  delay: '200ms',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="relative bg-gradient-to-br from-neutral-900/95 via-neutral-800/60 to-black/95 border border-yellow-600/25 hover:border-yellow-400/60 p-8 space-y-6 hover:scale-[1.02] transition-all duration-500 group overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-yellow-400/25"
                  style={{ animationDelay: item.delay }}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 via-yellow-600/5 to-yellow-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-600/15 to-transparent rounded-full blur-3xl group-hover:from-yellow-500/25 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl font-bold text-yellow-600/20 group-hover:text-yellow-600/40 transition-colors duration-300">
                        {item.number}
                      </div>
                      <div className={`w-18 h-18 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-2xl shadow-black/50 group-hover:scale-110 group-hover:shadow-yellow-400/40 transition-all duration-300 border border-yellow-400/20 group-hover:border-yellow-300/40`}>
                        <item.icon className="w-9 h-9 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-3xl font-elegant font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-lg text-yellow-400 font-semibold tracking-wide">
                          {item.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Feature List */}
                      <div className="space-y-3 pt-4 border-t border-gray-700/50 group-hover:border-yellow-600/30 transition-colors duration-300">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/item">
                            <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Connection Arrow */}
                    {index < 2 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-yellow-600/50" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 space-y-6">
            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-200 font-semibold">Proven System • 10,000+ Success Stories</span>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <span className="flex items-center space-x-2">
                <span>Start Your 90-Day Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced From Vision to Victory Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/8 via-transparent to-yellow-600/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/10 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Visual Showcase */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative h-[650px] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/25 via-transparent to-black"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,119,6,0.05)_50%,transparent_75%)] bg-[length:40px_40px]"></div>

                {/* Central Focus Area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-600/30 blur-3xl animate-pulse-slow"></div>
                    <div className="relative w-48 h-48 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-500/40">
                      <BookOpen className="w-24 h-24 text-yellow-400" />
                    </div>
                  </div>
                </div>

                {/* Progress Visualization */}
                <div className="absolute bottom-16 left-12 right-12 space-y-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/30">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 font-semibold">90-Day Progress</span>
                        <span className="text-white font-bold">Day 67</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full w-3/4 shadow-lg shadow-yellow-600/50"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-green-400 font-bold text-lg">89%</div>
                          <div className="text-xs text-gray-400">Goals Hit</div>
                        </div>
                        <div>
                          <div className="text-yellow-400 font-bold text-lg">Level 8</div>
                          <div className="text-xs text-gray-400">Current Rank</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-bold text-lg">23</div>
                          <div className="text-xs text-gray-400">Days Left</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-500/40 animate-float-slow">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                
                <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/40 animate-float-delayed">
                  <TrendingUp className="w-7 h-7 text-blue-400" />
                </div>
                
                <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/40">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="space-y-10 animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600/20 to-emerald-500/10 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <Trophy className="w-5 h-5 text-green-400" />
                <span className="text-green-200 text-sm font-semibold">Proven Success Framework</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-elegant font-bold text-white leading-tight tracking-tight">
                  From Vision to <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Victory</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-light">
                  Designed for <span className="text-yellow-400 font-semibold">creators, entrepreneurs, and achievers</span> who want more than motivation — they want <span className="text-yellow-400 font-semibold">measurable momentum</span>.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Psychology-backed goal setting that actually works" },
                  { icon: CheckCircle, text: "Real-time progress tracking with app integration" },
                  { icon: CheckCircle, text: "90-day cycles for sustainable long-term growth" },
                  { icon: CheckCircle, text: "Rank-based system that keeps you motivated" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <benefit.icon className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center p-4 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-xl border border-yellow-600/20">
                  <div className="text-3xl font-bold text-yellow-400">90 Days</div>
                  <div className="text-sm text-gray-400">To Transform Your Life</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-600/10 to-transparent rounded-xl border border-green-600/20">
                  <div className="text-3xl font-bold text-green-400">10 Levels</div>
                  <div className="text-sm text-gray-400">Leverage Ladder System</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="flex items-center space-x-2">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/60 hover:bg-white hover:text-black text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                >
                  <span className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sync With Ambition Section */}
      <section id="features" className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-600/8 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/5 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-24 space-y-8 animate-fade-up">
            {/* Feature Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-purple-500/10 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-blue-200 text-sm font-semibold">Revolutionary Integration</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              The Journal That Syncs With Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Ambition</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Where <span className="text-yellow-400 font-semibold">handwritten intention</span> meets <span className="text-yellow-400 font-semibold">digital intelligence</span>. 
              Experience the perfect fusion of analog reflection and real-time insights.
            </p>
          </div>

          {/* Enhanced Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {[
              { 
                icon: Target, 
                title: 'Goal Tracker', 
                description: 'Track micro and macro goals with intelligent categorization and progress visualization.',
                color: 'from-red-500 to-red-600',
                bgColor: 'from-red-600/20 to-red-500/10',
                borderColor: 'border-red-500/30',
                features: ['Smart Goal Categories', 'Progress Visualization', 'Milestone Tracking']
              },
              { 
                icon: BarChart3, 
                title: 'Progress Dashboard', 
                description: 'Visualize your growth with beautiful charts, trends, and actionable insights.',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'from-blue-600/20 to-blue-500/10',
                borderColor: 'border-blue-500/30',
                features: ['Visual Analytics', 'Trend Analysis', 'Performance Metrics']
              },
              { 
                icon: Calendar, 
                title: 'Daily Prompts', 
                description: 'AI-powered prompts that adapt to your progress and guide deeper reflection.',
                color: 'from-green-500 to-green-600',
                bgColor: 'from-green-600/20 to-green-500/10',
                borderColor: 'border-green-500/30',
                features: ['AI-Powered Questions', 'Adaptive Prompts', 'Reflection Guidance']
              },
              { 
                icon: Zap, 
                title: 'Sync With App', 
                description: 'Seamless real-time sync between your handwritten entries and digital insights.',
                color: 'from-yellow-500 to-yellow-600',
                bgColor: 'from-yellow-600/20 to-yellow-500/10',
                borderColor: 'border-yellow-500/30',
                features: ['Real-Time Sync', 'Cross-Platform Access', 'Instant Updates']
              },
              { 
                icon: Trophy, 
                title: 'Leverage Ladder', 
                description: 'Gamified progression system with 10 levels to keep you motivated and engaged.',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'from-purple-600/20 to-purple-500/10',
                borderColor: 'border-purple-500/30',
                features: ['10 Achievement Levels', 'Milestone Rewards', 'Progress Gamification']
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 p-6 space-y-4 transition-all duration-500 group overflow-hidden hover:scale-105 shadow-2xl hover:shadow-yellow-500/20 fade-in-up fade-in-up-delay-${index + 1} animate-optimized`}
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-500`}></div>

                <div className="relative space-y-3">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Feature List */}
                  <div className="space-y-1.5">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Lines */}
                {index < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-yellow-600/50 to-transparent"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Integration Showcase */}
          <div id="how-it-works" className="relative mb-20">
            <div className="bg-gradient-to-br from-neutral-900/80 to-black border border-yellow-600/40 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-bold text-white">
                      The Perfect Integration
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Write in your journal, and watch as your insights come alive in the app. 
                      Every entry, every goal, every reflection is instantly synchronized and analyzed.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-xl border border-yellow-600/20">
                      <div className="text-2xl font-bold text-yellow-400">Real-Time</div>
                      <div className="text-sm text-gray-400">Instant Sync</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl border border-blue-600/20">
                      <div className="text-2xl font-bold text-blue-400">AI-Powered</div>
                      <div className="text-sm text-gray-400">Smart Insights</div>
                    </div>
                  </div>
                </div>
                
                {/* Visual */}
                <div className="relative">
                  <div className="flex items-center justify-center space-x-8">
                    {/* Journal Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-yellow-500/40">
                      <BookOpen className="w-12 h-12 text-yellow-400" />
                    </div>
                    
                    {/* Sync Animation */}
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    
                    {/* App Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/40">
                      <Zap className="w-12 h-12 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-400">Seamless synchronization between journal and app</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authority Voice Section */}
          <div className="relative mb-20">
            <div className="bg-gradient-to-br from-yellow-500/5 to-yellow-600/10 border border-yellow-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-yellow-400">KC</span>
                </div>
                <blockquote className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed italic">
                  "Created by Khamare Clarke — MSc in AI & Computer Science, dedicated to building tools that turn ambition into leverage."
                </blockquote>
                <div className="text-sm text-yellow-300 font-medium">
                  Founder & Creator
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600/20 to-emerald-500/10 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Play className="w-5 h-5 text-green-400" />
              <span className="text-green-200 font-semibold">See It In Action</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <span className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold text-lg px-8 py-6 shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:scale-105 group"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Features</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="relative py-32 bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-600/8 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,119,6,0.02)_50%,transparent_75%)] bg-[length:80px_80px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-20 space-y-8 animate-fade-up">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600/20 to-emerald-500/10 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div className="w-px h-4 bg-green-500/30"></div>
              <span className="text-green-200 text-sm font-semibold">4.9/5 from 10,000+ Users</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              What Early Users <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Say</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real stories from entrepreneurs, creators, and achievers who transformed their lives in 90 days.
            </p>
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative bg-gradient-to-br from-neutral-900/90 to-black border-yellow-600/40 p-8 space-y-6 backdrop-blur-sm hover:border-yellow-500/60 transition-all duration-500 group overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-600/10 rounded-full blur-2xl group-hover:bg-yellow-600/20 transition-all duration-500"></div>
                
                <div className="relative space-y-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 bg-yellow-600/10 px-3 py-1 rounded-full">
                      Verified User
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl font-serif text-white italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-yellow-600/20">
                    <Avatar className="w-14 h-14 border-2 border-yellow-600/40">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-bold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-white">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-yellow-400 font-semibold">Day 90</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '10,000+', label: 'Active Users', icon: Users },
              { number: '94%', label: 'Success Rate', icon: TrendingUp },
              { number: '4.9/5', label: 'Average Rating', icon: Star },
              { number: '90 Days', label: 'To Transform', icon: Calendar }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-neutral-900/60 to-black border border-yellow-600/30 rounded-2xl backdrop-blur-sm group hover:border-yellow-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white">
              Real Results. Real Achievers.
            </h2>
          </div>

          {/* Featured Success Story */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-gray-900/90 to-black/80 border border-yellow-500/30 p-8 backdrop-blur-sm shadow-2xl">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">Featured Success Story</span>
                  </div>
                  
                  <blockquote className="text-2xl font-serif text-white leading-relaxed">
                    <span className="text-yellow-400 text-4xl leading-none">"</span>
                    I went from scattered goals to a systematic approach that actually works. 
                    The Leverage Journal didn't just organize my thoughts—it transformed my entire life trajectory.
                    <span className="text-yellow-400 text-4xl leading-none">"</span>
                  </blockquote>
                  
                  <div className="flex items-center space-x-4 border-t border-yellow-500/20 pt-6">
                    <Avatar className="w-16 h-16 border-2 border-yellow-500/40">
                      <AvatarFallback className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-bold text-xl">
                        MK
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xl font-bold text-white">Michael Kim</p>
                      <p className="text-yellow-400 text-sm font-semibold">Tech Startup Founder</p>
                      <p className="text-gray-300 text-xs">Completed 3 cycles • Level 10 Achiever</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-4 bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 border border-yellow-500/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-yellow-400">300%</div>
                  <div className="text-sm text-gray-200 font-medium">Revenue Growth</div>
                  <div className="text-xs text-gray-400">In 90 Days</div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-200 font-semibold">Join 10,000+ Success Stories</span>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <span className="flex items-center space-x-2">
                <span>Start Your Success Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="relative py-40 bg-gradient-to-br from-yellow-600/40 via-yellow-500/25 to-black overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/40 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,119,6,0.08)_50%,transparent_75%)] bg-[length:100px_100px] animate-pulse"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/25 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/25 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-3 bg-red-500/20 border border-red-500/40 rounded-full px-6 py-3 backdrop-blur-sm animate-pulse">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-red-200 font-semibold text-sm">Limited Time Offer • 50% OFF Ends Soon!</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-white leading-tight animate-fade-up">
              <span className="block">Own the Journal.</span>
              <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Master Your Time.</span>
              <span className="block">Build Leverage.</span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mx-auto"></div>
          </div>

          {/* Enhanced Value Proposition */}
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl text-yellow-100 font-light max-w-4xl mx-auto leading-relaxed">
              Limited first-edition print run available now. 
              <span className="text-white font-semibold">Join 10,000+ achievers</span> who transformed their lives in 90 days.
            </p>
            
            {/* Social Proof Mini Stats */}
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">94%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                <div className="text-xs text-gray-400">User Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">90</div>
                <div className="text-xs text-gray-400">Day System</div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-6">
            <p className="text-lg text-yellow-200 font-semibold">Offer expires in:</p>
            <div className="flex justify-center space-x-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-600/30 to-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-yellow-400">{item.value.toString().padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col items-center space-y-4">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-2xl px-16 py-10 shadow-2xl shadow-yellow-600/60 transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/80 group overflow-hidden btn-premium-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center space-x-3">
                    <span>Pre-Order Now £19.99</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                {/* Social Validation Line */}
                <p className="text-yellow-200 text-lg font-medium">
                  Join over 10,000 achievers using the 90-Day Leverage System.
                </p>
                
                {/* Guarantee Reminder */}
                <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-200 text-sm font-medium">30-Day Risk-Free. Transform or your money back.</span>
                </div>
                
                {/* Trust Badges */}
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>Secure Payment:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-5 bg-gradient-to-r from-gray-800 to-gray-900 rounded text-white text-xs flex items-center justify-center font-bold">🍎</div>
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Input
                  placeholder="Enter your email for updates"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-gray-300 text-lg px-6 py-10 min-w-[320px] focus:border-yellow-500/50 transition-colors"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 hover:bg-white hover:text-black text-white text-lg px-10 py-10 transition-all duration-300 hover:scale-105 backdrop-blur-sm whitespace-nowrap"
                >
                  Get Updates
                </Button>
              </div>
            </div>
            
            {/* Alternative Demo Button */}
            <Button
              size="lg"
              variant="ghost"
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 text-lg px-8 py-4 transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch 60-Second Demo</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Enhanced Scarcity & Trust */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="inline-flex items-center space-x-3 bg-red-500/15 border border-red-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-200 font-semibold text-sm">Only 500 units available - Limited time offer ends soon!</span>
              </div>
              
              <div className="inline-flex items-center space-x-3 bg-green-500/15 border border-green-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-200 font-semibold text-sm">30-Day Money Back Guarantee</span>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free worldwide shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Lifetime app access included</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Ships in 2-3 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Footer */}
      <footer className="relative bg-gradient-to-b from-black via-neutral-950 to-black border-t border-yellow-600/30 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-600/5 to-transparent"></div>
        
        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                      <BookOpen className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <span className="text-3xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                      Leverage Journal™
                    </span>
                    <p className="text-sm text-gray-400 mt-1">Plan • Do • Achieve • Refine</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed max-w-md">
                  The only goal-setting system that combines psychology-backed planning with real-time app sync. 
                  Transform your vision into structured systems in 90 days.
                </p>
                
                {/* Social Proof */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">4.9/5 from 10,000+ users</span>
                  </div>
                </div>
                
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
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
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
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
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

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">Follow us:</span>
                  <div className="flex space-x-3">
                    {[
                      { name: 'Twitter', icon: '𝕏' },
                      { name: 'Instagram', icon: '📷' },
                      { name: 'LinkedIn', icon: '💼' },
                      { name: 'YouTube', icon: '📺' }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="w-8 h-8 bg-neutral-800 hover:bg-yellow-600 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all duration-300 text-sm"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Strip */}
          <div className="bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 border-t border-yellow-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-200 font-semibold text-sm">Ready to transform your life in 90 days?</span>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-6 py-2 text-sm"
                >
                  Pre-Order Now £19.99
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
