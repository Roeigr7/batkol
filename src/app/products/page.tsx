"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { AccessibilityButton } from '@/components/layout/AccessibilityButton';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { EXPERTISE_ICONS } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';

export default function ProductsPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className="min-h-screen theme-page-bg">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden theme-hero-section">
          {/* Main gradient background */}
          <div 
            className="absolute inset-0" 
            style={{
              background: isLight 
                ? 'linear-gradient(135deg, rgba(217, 126, 0, 0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(191, 26, 34, 0.06) 100%)'
                : 'linear-gradient(135deg, rgba(217, 126, 0, 0.12) 0%, rgba(26,26,26,0) 40%, rgba(26,26,26,0) 60%, rgba(191, 26, 34, 0.10) 100%)'
            }}
          />
          
          {/* Secondary diagonal gradient */}
          <div 
            className="absolute inset-0" 
            style={{
              background: isLight 
                ? 'linear-gradient(to bottom, rgba(217, 126, 0, 0.03) 0%, transparent 50%, rgba(191, 26, 34, 0.03) 100%)'
                : 'linear-gradient(to bottom, rgba(217, 126, 0, 0.06) 0%, transparent 50%, rgba(191, 26, 34, 0.05) 100%)'
            }}
          />
          
          {/* Background decorations - glowing orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.25]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
            <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full blur-[100px] opacity-[0.20]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
            
            {/* Center accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[120px] opacity-[0.12]" style={{background: 'linear-gradient(90deg, #d97e00 0%, #bf1a22 100%)'}}></div>
          </div>
          
          {/* Decorative geometric accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top right corner accent */}
            <div className="absolute top-12 right-12 sm:right-20 w-24 h-24 opacity-[0.20]">
              <div className="absolute inset-0 border-2 border-[#d97e00] rounded-lg rotate-45"></div>
              <div className="absolute inset-3 border border-[#d97e00]/60 rounded-lg rotate-45"></div>
            </div>
            
            {/* Bottom left corner accent */}
            <div className="absolute bottom-12 left-12 sm:left-20 w-20 h-20 opacity-[0.18]">
              <div className="absolute inset-0 border-2 border-[#bf1a22] rounded-full"></div>
              <div className="absolute inset-3 border border-[#bf1a22]/60 rounded-full"></div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-8 left-1/4 w-2.5 h-2.5 rounded-full bg-[#d97e00] opacity-[0.35]"></div>
            <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-[#bf1a22] opacity-[0.30]"></div>
            <div className="absolute bottom-16 right-1/4 w-2.5 h-2.5 rounded-full bg-[#bf1a22] opacity-[0.35]"></div>
            <div className="absolute bottom-8 right-1/3 w-2 h-2 rounded-full bg-[#d97e00] opacity-[0.30]"></div>
            
            {/* Additional accent dots */}
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#d97e00] opacity-[0.25]"></div>
            <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#bf1a22] opacity-[0.25]"></div>
          </div>
          
          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d97e00]/40 to-transparent"></div>
          
          {/* Top subtle line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#bf1a22]/20 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.15), rgba(191, 26, 34, 0.15))', border: '1px solid rgba(217, 126, 0, 0.4)', color: '#d97e00'}}>
                המוצרים שלנו
              </span>
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                פתרונות מתקדמים במערכות מתח נמוך
              </h1>
              <p className={`text-lg max-w-2xl mx-auto ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
                מגוון רחב של מוצרים ומערכות מקצועיות לאבטחה, כריזה, הגברה וגילוי אש
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden theme-solutions-section">
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 opacity-[0.06]" style={{background: 'linear-gradient(135deg, #d97e00 0%, transparent 40%, transparent 60%, #bf1a22 100%)'}}></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d97e00]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#bf1a22]/20 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
            {/* Products Grid - 3x3 on large screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {EXPERTISE_ICONS.map((item, index) => (
                <Link 
                  key={index}
                  href={`/products/${item.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-neutral-700/80 hover:border-[#d97e00]/50 h-[320px] sm:h-[350px] bg-neutral-900 transition-[border-color] duration-500 hover:shadow-2xl hover:shadow-[#d97e00]/10 cursor-pointer block"
                >
                  {/* Background Image - GPU accelerated smooth transition */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div 
                      className="product-bg-image absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-90"
                      style={{ backgroundImage: `url(${item.bg})` }}
                    />
                  </div>
                  
                  {/* Dark Overlay */}
                  <div 
                    className="absolute inset-0 z-[5] opacity-100 group-hover:opacity-45"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.20) 100%)',
                      transition: 'opacity 0.25s ease-out',
                    }}
                  ></div>
                  
                  {/* Color Accent Overlay */}
                  <div 
                    className="absolute inset-0 z-[6] opacity-25 group-hover:opacity-55"
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(217,126,0,0.45)' : 'rgba(191,26,34,0.45)'} 0%, transparent 60%)`,
                      transition: 'opacity 0.25s ease-out',
                    }}
                  ></div>
                  
                  {/* Icon - GPU accelerated smooth transition */}
                  <div className="absolute top-5 right-5 z-20">
                    <div 
                      className="product-icon w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-[3px]" 
                      style={{
                        background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(217,126,0,0.3), 0 0 40px rgba(191,26,34,0.2)',
                      }}
                    >
                      <div className="w-full h-full rounded-xl flex items-center justify-center bg-neutral-900">
                        <Image 
                          src={item.src} 
                          alt={item.alt} 
                          width={32} 
                          height={32} 
                          className="w-7 h-7 sm:w-8 sm:h-8" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 right-0 left-0 p-5 sm:p-6 z-20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                    <p className="text-neutral-200 text-sm sm:text-base leading-relaxed drop-shadow-md">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <p className={`text-lg mb-6 ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
                מעוניינים במידע נוסף על המוצרים שלנו?
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center gap-3 text-white text-base font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)', boxShadow: '0 4px 25px rgba(217, 126, 0, 0.35)'}}
              >
                צרו איתנו קשר
                <svg className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ThemeToggle />
      <AccessibilityButton />
      <WhatsAppButton />
    </div>
  );
}

