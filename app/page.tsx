'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ websites: 0, customers: 0, days: 0 })
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
          
          // Animate counters with easing
          const duration = 2000 // 2 seconds
          const targets = { websites: 237, customers: 185, days: 5 }
          const startTime = Date.now()
          
          const animateCounters = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Cubic easing for smooth animation
            const eased = 1 - Math.pow(1 - progress, 3)
            
            setCounts({
              websites: Math.floor(targets.websites * eased),
              customers: Math.floor(targets.customers * eased),
              days: Number((targets.days * eased).toFixed(1))
            })
            
            if (progress < 1) {
              requestAnimationFrame(animateCounters)
            }
          }
          
          animateCounters()
        }
      },
      { threshold: 0.2 }
    )
    
    const currentRef = statsRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image src="/logos/sheep-free-svgrepo-com.svg" alt="SiteSheep Logo" width={40} height={40} priority />
              <span className="text-xl font-bold text-black">SiteSheep</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#595758] transition-colors">Features</a>
              <a href="#process" className="text-gray-700 hover:text-[#595758] transition-colors">How It Works</a>
              <a href="#contact" className="text-gray-700 hover:text-[#595758] transition-colors">Contact</a>
              <a href="mailto:hello@sitesheep.io" className="relative px-5 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}>
                <span>Get Started</span>
              </a>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#595758] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#595758]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a 
                href="#features" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#595758] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#process" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#595758] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#595758] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="mailto:hello@sitesheep.io" 
                className="block px-5 py-2 mt-2 text-center font-semibold text-white rounded-lg transition-all duration-300" 
                style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20 md:pt-0">
        {/* Animated gradient orbs with brand colors */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full filter blur-[120px] opacity-0 animate-fade-in-float" style={{ background: '#595758', animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full filter blur-[120px] opacity-0 animate-fade-in-float" style={{ background: '#231815', animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 rounded-full filter blur-[120px] opacity-0 animate-fade-in-float" style={{ background: '#595758', animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 leading-tight">
              Website Redesign.
              <span className="block gradient-text leading-relaxed">Days, Not Weeks.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Get a stunning, conversion-optimized website that delivers results. 
              Fast turnaround, professional design, zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@sitesheep.io?subject=Free Homepage Preview Request" className="btn-primary">
                <span>Get Your Free Homepage Preview</span>
              </a>
              <a href="#process" className="btn-secondary">
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              ⚡ Free preview delivered in 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated background orbs - hidden on mobile to prevent white box issue */}
        <div className="hidden md:block absolute top-10 right-20 w-64 h-64 rounded-full filter blur-[100px] opacity-10 animate-float" style={{ background: '#595758' }}></div>
        <div className="hidden md:block absolute bottom-10 left-20 w-64 h-64 rounded-full filter blur-[100px] opacity-10 animate-float" style={{ background: '#231815', animationDelay: '3s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by businesses to deliver <span className="gradient-text">exceptional results</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {counts.websites}+
              </div>
              <div className="text-lg font-semibold text-gray-700">Websites Redesigned</div>
              <div className="text-sm text-gray-500 mt-2">Modern, conversion-focused designs</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {counts.customers}+
              </div>
              <div className="text-lg font-semibold text-gray-700">Happy Customers</div>
              <div className="text-sm text-gray-500 mt-2">Businesses that trust SiteSheep</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {counts.days}
              </div>
              <div className="text-lg font-semibold text-gray-700">Days to Launch</div>
              <div className="text-sm text-gray-500 mt-2">From concept to live website</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why businesses choose <span className="gradient-text">SiteSheep</span>
            </h2>
            <p className="text-xl text-gray-600">Speed is our superpower. Quality is our promise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card min-h-[280px] flex flex-col text-center md:text-left">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0" style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Lightning Fast Delivery</h3>
              <p className="text-gray-600">Complete website redesign in just 5 days. No more waiting months for your new site.</p>
            </div>

            <div className="feature-card min-h-[280px] flex flex-col text-center md:text-left">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0" style={{ background: 'linear-gradient(135deg, #231815 0%, #595758 100%)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Design</h3>
              <p className="text-gray-600">Modern, conversion-optimized designs that make your business stand out.</p>
            </div>

            <div className="feature-card min-h-[280px] flex flex-col text-center md:text-left">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0" style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Full Service Management</h3>
              <p className="text-gray-600">We handle everything from design to deployment. Sit back and watch your vision come to life.</p>
            </div>

            <div className="feature-card min-h-[280px] flex flex-col text-center md:text-left">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0" style={{ background: 'linear-gradient(135deg, #231815 0%, #595758 100%)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Preview</h3>
              <p className="text-gray-600">See your free homepage preview in just 24 hours. Love it before you commit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              From concept to launch in <span className="gradient-text">3 simple steps</span>
            </h2>
            <p className="text-xl text-gray-600">Our streamlined process gets you online faster</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="process-step text-center">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg" style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}>
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Submit</h3>
                <p className="text-gray-600">Share your vision and current website. We&apos;ll create a free preview in 24 hours.</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: '#595758' }}>Day 1</div>
              </div>
            </div>

            <div className="process-step text-center">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg" style={{ background: 'linear-gradient(135deg, #231815 0%, #595758 100%)' }}>
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Design</h3>
                <p className="text-gray-600">We create your complete website with all pages, features, and optimizations.</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: '#595758' }}>Days 2-4</div>
              </div>
            </div>

            <div className="process-step text-center">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg" style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}>
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Launch</h3>
                <p className="text-gray-600">Your new website goes live. We handle hosting, domains, and everything else.</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: '#595758' }}>Day 5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #595758 0%, #231815 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your website?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free homepage preview delivered in 24 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@sitesheep.io?subject=Free Homepage Mockup Request" className="bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-50" style={{ color: '#231815' }}>
              Get Your Free Mockup
            </a>
            <a href="mailto:hello@sitesheep.io?subject=Schedule a Call" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-gray-50 to-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logos/sheep-free-svgrepo-com.svg" alt="SiteSheep Logo" width={40} height={40} loading="lazy" />
                <span className="text-xl font-bold text-black">SiteSheep</span>
              </div>
              <p className="text-gray-600">
                Website redesign in days, not weeks.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-[#595758] transition-colors">Website Redesign</a></li>
                <li><a href="#features" className="hover:text-[#595758] transition-colors">New Websites</a></li>
                <li><a href="#features" className="hover:text-[#595758] transition-colors">Website Management</a></li>
                <li><a href="#features" className="hover:text-[#595758] transition-colors">Performance Optimization</a></li>
              </ul>
            </div>
            
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Get in Touch</h4>
              <a href="mailto:hello@sitesheep.io" className="text-gray-600 mb-2 hover:text-[#595758] transition-colors">hello@sitesheep.io</a>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#595758] transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#595758] transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 SiteSheep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}