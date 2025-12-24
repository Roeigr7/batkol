"use client";

import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { AccessibilityButton } from '@/components/layout/AccessibilityButton';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { CustomersSlider } from '@/components/sections/CustomersSlider';
import { COMPANY, EXPERTISE_ICONS } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';

// Swiper CSS is imported globally in layout.tsx

export default function Home() {
  const servicesSwiperRef = useRef<SwiperType | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission - using FormSubmit.co (free, no registration needed)
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormError('');

    try {
      // FormSubmit.co - sends email directly to bk@batkol.co.il
      // Free, no API key needed, works client-side
      const response = await fetch('https://formsubmit.co/ajax/bk@batkol.co.il', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `פנייה חדשה מאתר בת-קול - ${formData.name}`,
          _template: 'table',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'לא צוין',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error('שגיאה בשליחת ההודעה');
      }

      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setFormError(error instanceof Error ? error.message : 'שגיאה בשליחת ההודעה. נסה שוב או התקשר אלינו.');
    }
  };

  // Handle hash navigation (e.g., /#contact)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen theme-page-bg">
      {/* Skip to Content Link - Important for keyboard accessibility & SEO */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        tabIndex={0}
      >
        דלג לתוכן הראשי
      </a>
      
      <Header />

      <main id="main-content" role="main" tabIndex={-1}>
      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden theme-hero-section">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          {/* Gradient Orbs - Enhanced */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.18]" style={{background: 'radial-gradient(circle, #d97e00, transparent 70%)'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.14]" style={{background: 'radial-gradient(circle, #bf1a22, transparent 70%)'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.08]" style={{background: 'radial-gradient(circle, #d97e00, #bf1a22, transparent 70%)'}}></div>
          
          {/* Decorative curved lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
            <path d="M0 500 Q500 400 1000 500 T2000 450" stroke="url(#lineGradient2)" strokeWidth="1" fill="none"/>
            <defs>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent"/>
                <stop offset="50%" stopColor="#d97e00"/>
                <stop offset="100%" stopColor="transparent"/>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Corner accent shapes */}
          <div className="absolute top-28 left-16 w-28 h-28 border border-[#d97e00]/8 rounded-full"></div>
          <div className="hidden md:block absolute top-[25%] md:top-20 right-6 md:right-10 w-24 md:w-32 h-24 md:h-32 border border-[#d97e00]/10 rounded-full"></div>
          <div className="absolute top-[45%] md:top-32 right-12 md:right-20 w-16 md:w-20 h-16 md:h-20 border border-[#bf1a22]/8 rounded-full"></div>
          <div className="absolute bottom-[25%] md:bottom-40 left-6 md:left-10 w-20 md:w-24 h-20 md:h-24 border border-[#d97e00]/8 rounded-full"></div>
          
          {/* Floating dots */}
          <div className="hidden md:block absolute top-1/3 right-10 w-2 h-2 rounded-full bg-[#d97e00]/30"></div>
          <div className="absolute top-1/2 right-20 w-1.5 h-1.5 rounded-full bg-[#bf1a22]/25"></div>
          <div className="absolute bottom-1/3 left-16 w-2 h-2 rounded-full bg-[#d97e00]/25"></div>
          <div className="hidden md:block absolute top-40 left-1/3 w-1 h-1 rounded-full bg-white/20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-[#d97e00]/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full min-h-[calc(100vh-5rem)] flex items-center">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch w-full py-16 lg:py-0">
            
            {/* Text Content */}
            <div className="text-center lg:text-right lg:mt-16 order-2 lg:order-1">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.15), rgba(191, 26, 34, 0.15))', border: '1px solid rgba(217, 126, 0, 0.4)', color: '#d97e00', boxShadow: '0 0 20px rgba(217, 126, 0, 0.15)'}}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{background: '#d97e00'}}></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{background: '#d97e00'}}></span>
                </span>
                מאז 1982 — למעלה מ-40 שנות מצוינות
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white theme-hero-text leading-[1.1] mb-6">
                פתרונות מתקדמים
                <br />
                <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #d97e00 0%, #e8a030 50%, #bf1a22 100%)'}}>במערכות מתח נמוך</span>
              </h1>
              
              {/* Description */}
              <p className="text-neutral-400 theme-hero-text-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 lg:mr-0">
                פתרונות מקצועיים למערכות אבטחה, כריזה והגברה, גילוי וכיבוי אש. 
                <span className="text-neutral-300 theme-hero-text-muted"> מוסמכי מכון התקנים הישראלי.</span>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-3 text-white text-base font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)', boxShadow: '0 4px 25px rgba(217, 126, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.1) inset'}}
                >
                  קבל הצעת מחיר חינם
                  <svg className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href={`tel:${COMPANY.phone.replace(/-/g, '')}`} 
                  className={`group inline-flex items-center justify-center gap-3 text-base font-semibold px-8 py-4 rounded-xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    isLight 
                      ? 'text-neutral-800 border-neutral-300 hover:border-[#d97e00] bg-white/50' 
                      : 'text-white border-neutral-700 hover:border-[#d97e00]'
                  }`}
                  style={{background: isLight ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.03)'}}
                >
                  <svg className="w-5 h-5 text-[#d97e00]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {COMPANY.phone}
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 sm:gap-10 justify-center lg:justify-start mb-[64px]">
                <div className="text-center lg:text-right">
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #d97e00, #e8a030)'}}>40+</div>
                  <div className="text-neutral-500 text-sm mt-1">שנות ניסיון</div>
                </div>
                <div className="w-px h-12 sm:h-14" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(191,26,34,0.6) 50%, transparent 100%)'}}></div>
                <div className="text-center lg:text-right">
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #d97e00, #e8a030)'}}>1000+</div>
                  <div className="text-neutral-500 text-sm mt-1">פרויקטים</div>
                </div>
                <div className="hidden md:block w-px h-12 sm:h-14" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(191,26,34,0.6) 50%, transparent 100%)'}}></div>
                <div className="hidden md:block text-center lg:text-right">
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #d97e00, #e8a030)'}}>100%</div>
                  <div className="text-neutral-500 text-sm mt-1">מקצועיות</div>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="order-1 lg:order-2 flex flex-col items-center justify-start lg:mt-[120px]">
              <Image
                src={isLight ? "/logo-dark.png" : "/logo-white.png"}
                alt="בת-קול"
                width={415}
                height={168}
                className="w-full max-w-[275px] md:max-w-[415px] h-auto"
                priority
              />
              <p className="text-sm tracking-[0.2em] font-medium mt-4 text-center bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #d97e00, #e8a030, #bf1a22)'}}>
                בת-קול מערכות מתח נמוך
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a href="#solutions" className="flex flex-col items-center gap-2 animate-bounce-subtle cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-neutral-500 text-xs">גלול למטה</span>
            <svg className="w-5 h-5 text-[#d97e00]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section Divider - Clean line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-neutral-200 via-[#d97e00] to-neutral-200"></div>

      {/* Slider Section */}
      <section id="solutions" className="relative min-h-[calc(100vh-80px)] py-12 sm:py-16 md:py-20 overflow-hidden flex flex-col justify-center theme-solutions-section">
        {/* Base gradient background - slightly muted */}
        <div className="absolute inset-0"></div>
        
        {/* Subtle warm tint overlay */}
        <div className="absolute inset-0 bg-orange-50/20"></div>
        
        {/* Diagonal color stripe accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[120%] h-[200%] rotate-12 opacity-[0.025]" style={{background: 'linear-gradient(135deg, transparent 40%, #d97e00 45%, #bf1a22 55%, transparent 60%)'}}></div>
        </div>
        
        {/* Smooth fade gradient overlays with color scheme */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main gradient orbs - subtle */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.12]" style={{background: 'radial-gradient(circle, #d97e00 0%, #e8a030 40%, transparent 70%)'}}></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.10]" style={{background: 'radial-gradient(circle, #bf1a22 0%, #d44040 40%, transparent 70%)'}}></div>
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.08]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.07]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-[0.04]" style={{background: 'linear-gradient(90deg, #d97e00, #bf1a22)'}}></div>
        </div>
        
        {/* Mesh gradient overlay for depth - subtle */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{backgroundImage: `
          radial-gradient(at 20% 30%, #d97e00 0%, transparent 50%),
          radial-gradient(at 80% 70%, #bf1a22 0%, transparent 50%),
          radial-gradient(at 50% 50%, #e8a030 0%, transparent 40%)
        `}}></div>
        
        {/* Decorative elements - subtle */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top and bottom accent lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d97e00]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#bf1a22]/20 to-transparent"></div>
          
          {/* Beautiful geometric shapes */}
          <svg className="absolute top-10 right-16 w-32 h-32 opacity-[0.06]" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#d97e00" strokeWidth="1"/>
          </svg>
          <svg className="absolute bottom-16 left-12 w-24 h-24 opacity-[0.05]" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#bf1a22" strokeWidth="1"/>
          </svg>
          
          {/* Decorative circles */}
          <div className="absolute top-20 right-[15%] w-20 h-20 rounded-full border border-[#d97e00]/[0.08]"></div>
          <div className="absolute top-28 right-[18%] w-8 h-8 rounded-full border border-[#bf1a22]/[0.06]"></div>
          <div className="absolute bottom-20 left-[12%] w-16 h-16 rounded-full border border-[#bf1a22]/[0.08]"></div>
          <div className="absolute bottom-28 left-[15%] w-6 h-6 rounded-full border border-[#d97e00]/[0.06]"></div>
          
          {/* Curved lines */}
          <svg className="absolute top-1/4 left-0 w-40 h-40 opacity-[0.04]" viewBox="0 0 100 100">
            <path d="M0,50 Q50,0 100,50" fill="none" stroke="#d97e00" strokeWidth="1"/>
            <path d="M0,60 Q50,10 100,60" fill="none" stroke="#d97e00" strokeWidth="0.5"/>
          </svg>
          <svg className="absolute bottom-1/4 right-0 w-40 h-40 opacity-[0.04]" viewBox="0 0 100 100">
            <path d="M0,50 Q50,100 100,50" fill="none" stroke="#bf1a22" strokeWidth="1"/>
            <path d="M0,40 Q50,90 100,40" fill="none" stroke="#bf1a22" strokeWidth="0.5"/>
          </svg>
          
          {/* Small accent dots */}
          <div className="absolute top-[30%] left-[8%] w-2 h-2 rounded-full bg-[#d97e00]/[0.12]"></div>
          <div className="absolute top-[40%] right-[6%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/[0.10]"></div>
          <div className="absolute bottom-[35%] left-[5%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/[0.10]"></div>
          <div className="absolute bottom-[30%] right-[7%] w-2 h-2 rounded-full bg-[#d97e00]/[0.12]"></div>
          
          {/* Soft gradient shapes */}
          <div className="hidden md:block absolute top-16 left-[25%] w-40 h-40 rounded-full opacity-[0.035]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-16 right-[25%] w-36 h-36 rounded-full opacity-[0.035]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
        </div>

        {/* Section Header */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-[#d97e00]/10 to-[#bf1a22]/10 border border-[#d97e00]/25 text-[#d97e00]">הפתרונות שלנו</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 theme-section-title mt-2 sm:mt-3 mb-3 sm:mb-4">מומחים במערכות מתח נמוך</h2>
            <p className="text-base sm:text-lg text-neutral-600 theme-section-subtitle max-w-2xl mx-auto px-2 sm:px-0">פתרונות מקצועיים ומתקדמים למגוון רחב של מערכות מתח נמוך, אבטחה וגילוי אש</p>
          </div>
        </div>

        {/* Swiper Container with Arrows */}
        <div className="relative z-10 max-w-[90rem] mx-auto px-2 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Navigation Arrow - Right */}
            <button 
              type="button"
              onClick={() => {
                servicesSwiperRef.current?.slidePrev();
              }}
              className="theme-nav-button relative z-20 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full border border-neutral-300 hover:border-[#d97e00] bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-neutral-600 hover:text-[#d97e00] transition-all cursor-pointer"
              aria-label="הקודם"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Swiper Slider */}
            <div className="flex-1 min-w-0 max-w-[70vw] overflow-hidden">
              <Swiper
              onSwiper={(swiper) => { servicesSwiperRef.current = swiper; }}
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              spaceBetween={12}
              slidesPerView={1}
              speed={800}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-active-custom',
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className=""
            >
              {/* Expertise Slides */}
              {EXPERTISE_ICONS.map((icon, index) => (
                <SwiperSlide key={`expertise-${index}`}>
                  <div className="group relative rounded-2xl overflow-hidden border border-neutral-700/80 hover:border-[#d97e00]/50 max-h-[200px] min-[500px]:max-h-none h-[260px] sm:h-[280px] md:h-[320px] bg-neutral-900 transition-[border-color] duration-500 hover:shadow-2xl hover:shadow-[#d97e00]/10 cursor-pointer">
                    {/* Background Image Container - GPU accelerated */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="product-bg-image absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-90"
                        style={{ backgroundImage: `url(${icon.bg})` }}
                      />
                    </div>
                    
                    {/* Dark Overlay - static gradient, opacity transition only */}
                    <div 
                      className="absolute inset-0 z-[5] opacity-100 group-hover:opacity-45"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.20) 100%)',
                        transition: 'opacity 0.25s ease-out',
                      }}
                    ></div>
                    
                    {/* Color Accent Overlay - opacity transition only */}
                    <div 
                      className="absolute inset-0 z-[6] opacity-25 group-hover:opacity-55"
                      style={{
                        background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(217,126,0,0.45)' : 'rgba(191,26,34,0.45)'} 0%, transparent 60%)`,
                        transition: 'opacity 0.25s ease-out',
                      }}
                    ></div>
                    
                    {/* Icon */}
                    <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 z-20">
                      <div 
                        className="product-icon w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl p-[3px]" 
                        style={{
                          background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(217,126,0,0.3), 0 0 40px rgba(191,26,34,0.2)',
                        }}
                      >
                        <div className="w-full h-full rounded-xl flex items-center justify-center bg-neutral-900">
                          <Image 
                            src={icon.src} 
                            alt={icon.alt} 
                            width={28} 
                            height={28} 
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 right-0 left-0 p-3 sm:p-4 md:p-6 z-20">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 drop-shadow-lg">{icon.title}</h3>
                      <p className="text-neutral-200 text-sm sm:text-base leading-relaxed drop-shadow-md line-clamp-3 sm:line-clamp-none">{icon.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>

            {/* Navigation Arrow - Left */}
            <button 
              type="button"
              onClick={() => {
                servicesSwiperRef.current?.slideNext();
              }}
              className="theme-nav-button relative z-20 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full border border-neutral-300 hover:border-[#d97e00] bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-neutral-600 hover:text-[#d97e00] transition-all cursor-pointer"
              aria-label="הבא"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-6 sm:mt-8"></div>
        </div>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .swiper-pagination-bullet-custom {
            width: 10px;
            height: 10px;
            background: #a3a3a3;
            opacity: 1;
            border-radius: 50%;
            transition: all 0.3s ease;
            cursor: pointer;
            display: inline-block;
          }
          .swiper-pagination-bullet-active-custom {
            background: linear-gradient(135deg, #d97e00, #bf1a22);
            width: 28px;
            border-radius: 5px;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-[calc(100vh-80px)] py-24 overflow-hidden flex flex-col justify-center theme-about-section">
        {/* Background */}
        <div className="absolute inset-0"></div>
        
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 opacity-[0.12]" style={{background: 'linear-gradient(135deg, #d97e00 0%, transparent 40%, transparent 60%, #bf1a22 100%)'}}></div>
        
        {/* Diagonal accent stripe */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[120%] h-[200%] -rotate-12 opacity-[0.06]" style={{background: 'linear-gradient(135deg, transparent 40%, #d97e00 45%, #bf1a22 55%, transparent 60%)'}}></div>
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large corner orbs */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full blur-[120px] opacity-[0.20]" style={{background: 'radial-gradient(circle, #d97e00 0%, #e8a030 30%, transparent 70%)'}}></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.16]" style={{background: 'radial-gradient(circle, #bf1a22 0%, #d44040 30%, transparent 70%)'}}></div>
          
          {/* Mid-section accent orbs */}
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.12]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.10]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
          
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] opacity-[0.09]" style={{background: 'linear-gradient(90deg, #d97e00 0%, #e8a030 50%, #bf1a22 100%)'}}></div>
        </div>
        
        {/* Top and bottom accent lines */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d97e00]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bf1a22]/30 to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 right-[10%] w-24 h-24 rounded-full border border-[#d97e00]/[0.12]"></div>
          <div className="absolute top-24 right-[13%] w-10 h-10 rounded-full border border-[#bf1a22]/[0.10]"></div>
          <div className="absolute bottom-20 left-[8%] w-20 h-20 rounded-full border border-[#bf1a22]/[0.12]"></div>
          <div className="absolute bottom-28 left-[11%] w-8 h-8 rounded-full border border-[#d97e00]/[0.10]"></div>
          <div className="absolute top-1/3 left-[5%] w-14 h-14 rounded-full border border-[#d97e00]/[0.08]"></div>
          <div className="absolute bottom-1/3 right-[6%] w-16 h-16 rounded-full border border-[#bf1a22]/[0.08]"></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-12 left-12 w-32 h-32 opacity-[0.06]" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#d97e00" strokeWidth="1"/>
          </svg>
          <svg className="absolute bottom-16 right-16 w-28 h-28 opacity-[0.05]" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#bf1a22" strokeWidth="1"/>
          </svg>
          
          {/* Curved lines */}
          <svg className="absolute top-1/4 right-0 w-40 h-40 opacity-[0.05]" viewBox="0 0 100 100">
            <path d="M0,50 Q50,0 100,50" fill="none" stroke="#d97e00" strokeWidth="1"/>
            <path d="M0,60 Q50,10 100,60" fill="none" stroke="#d97e00" strokeWidth="0.5"/>
          </svg>
          <svg className="absolute bottom-1/4 left-0 w-40 h-40 opacity-[0.05]" viewBox="0 0 100 100">
            <path d="M0,50 Q50,100 100,50" fill="none" stroke="#bf1a22" strokeWidth="1"/>
            <path d="M0,40 Q50,90 100,40" fill="none" stroke="#bf1a22" strokeWidth="0.5"/>
          </svg>
        </div>
        
        {/* Small accent dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[25%] right-[8%] w-2.5 h-2.5 rounded-full bg-[#d97e00]/20"></div>
          <div className="absolute top-[40%] left-[6%] w-2 h-2 rounded-full bg-[#bf1a22]/15"></div>
          <div className="absolute bottom-[35%] right-[5%] w-2 h-2 rounded-full bg-[#bf1a22]/15"></div>
          <div className="absolute bottom-[25%] left-[10%] w-2.5 h-2.5 rounded-full bg-[#d97e00]/20"></div>
          <div className="absolute top-[60%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#d97e00]/15"></div>
          <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/12"></div>
        </div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
        </div>

        {/* Section Header */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 mb-12">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.2), rgba(191, 26, 34, 0.2))', border: '1px solid rgba(217, 126, 0, 0.3)', color: '#d97e00'}}>אודות החברה</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white theme-about-title mt-3 mb-4">בת-קול בע״מ</h2>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description - Right side in RTL */}
            <div>
              <p className="text-lg text-neutral-300 theme-about-text mb-4">
                חברת בת-קול הוקמה בשנת 1982 ומאז מספקת שירותי מתח נמוך ברמה הגבוהה ביותר באזור באר שבע והדרום. 
                אנו מתמחים בתכנון, התקנה ותחזוקה של מערכות אבטחה, כריזה והגברה, וגילוי וכיבוי אש.
              </p>
              <p className="text-lg text-neutral-400 theme-about-text-light mb-4">
                הצוות המקצועי שלנו כולל טכנאים מוסמכים ומנוסים המתמחים בהתקנת מצלמות אבטחה, 
                מערכות גילוי פריצה, בקרת כניסה ואינטרקום למגזר העסקי, התעשייתי והפרטי.
              </p>
              <p className="text-lg text-neutral-400 theme-about-text-light mb-4">
                אנו מספקים פתרונות מקיפים למערכות כריזה והגברה לבתי ספר, מפעלים, בתי כנסת ואולמות אירועים, 
                כולל שעוני צלצולים ממוחשבים ומערכות כריזת חירום משולבות.
              </p>
              <p className="text-lg text-neutral-400 theme-about-text-light mb-4">
                מוסמכים על ידי מכון התקנים הישראלי לבדיקות ותחזוקה של מערכות גילוי וכיבוי אש, 
                מערכות כריזה משולבות ומערכות שחרור עשן בהתאם לתקנות הבטיחות.
              </p>
              <p className="text-lg text-neutral-400 theme-about-text-light">
                אנו מציעים שירותי תחזוקה שנתיים מקיפים, ואחריות מלאה על כל עבודה. 
                לקוחותינו כוללים עיריות, מוסדות חינוך, מפעלי תעשייה וארגונים מובילים בדרום הארץ.
              </p>
            </div>

            {/* Card + CTA - Left side in RTL */}
            <div className="relative space-y-6">
              <div className="theme-about-card rounded-2xl p-8 backdrop-blur-sm" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)'}}>
                <h3 className="text-xl sm:text-2xl font-bold text-white theme-about-card-text mb-6">למה בת-קול?</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.2), rgba(191, 26, 34, 0.2))'}}>
                      <svg className="w-4 h-4 text-[#d97e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <span className="text-base text-neutral-200 theme-about-list-text">ניסיון של למעלה מ-40 שנה</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.2), rgba(191, 26, 34, 0.2))'}}>
                      <svg className="w-4 h-4 text-[#d97e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <span className="text-base text-neutral-200 theme-about-list-text">מוסמכי מכון התקנים</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.2), rgba(191, 26, 34, 0.2))'}}>
                      <svg className="w-4 h-4 text-[#d97e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <span className="text-base text-neutral-200 theme-about-list-text">צוות מקצועי ומנוסה</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, rgba(217, 126, 0, 0.2), rgba(191, 26, 34, 0.2))'}}>
                      <svg className="w-4 h-4 text-[#d97e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <span className="text-base text-neutral-200 theme-about-list-text">מחירים הוגנים ושקיפות</span>
                  </li>
                </ul>

                {/* Stats Grid - Inside Card */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-clip-text text-transparent mb-1" style={{backgroundImage: 'linear-gradient(to right, #d97e00, #bf1a22)'}}>1982</div>
                    <div className="text-neutral-400 theme-about-stat-label text-sm">שנת הקמה</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-clip-text text-transparent mb-1" style={{backgroundImage: 'linear-gradient(to right, #d97e00, #bf1a22)'}}>מוסמכים</div>
                    <div className="text-neutral-400 theme-about-stat-label text-sm">מכון התקנים</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a href="#contact" className="group inline-flex items-center gap-3 text-white text-base font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]" style={{background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)', boxShadow: '0 4px 20px rgba(217, 126, 0, 0.3)'}}>
                צור קשר עוד היום
                <svg className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <CustomersSlider />

      {/* Contact Section */}
      <section id="contact" className="relative min-h-[calc(100vh-80px)] py-24 overflow-hidden flex flex-col justify-center theme-contact-section">
        {/* Background */}
        <div className="absolute inset-0"></div>
        
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-orange-50/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top and bottom accent lines */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d97e00]/25 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bf1a22]/25 to-transparent"></div>
          
          {/* Gradient orbs */}
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full blur-[100px] opacity-[0.08]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[100px] opacity-[0.08]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.05]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] rounded-full blur-[80px] opacity-[0.05]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
          
          {/* Decorative circles */}
          <div className="absolute top-[30%] md:top-20 left-8 md:left-16 w-16 md:w-20 h-16 md:h-20 rounded-full border border-[#d97e00]/10"></div>
          <div className="absolute top-[38%] md:top-28 left-16 md:left-24 w-6 md:w-8 h-6 md:h-8 rounded-full border border-[#bf1a22]/8"></div>
          <div className="absolute bottom-[30%] md:bottom-24 right-12 md:right-20 w-12 md:w-16 h-12 md:h-16 rounded-full border border-[#bf1a22]/10"></div>
          <div className="absolute bottom-[22%] md:bottom-32 right-20 md:right-28 w-5 md:w-6 h-5 md:h-6 rounded-full border border-[#d97e00]/8"></div>
          <div className="absolute top-[55%] md:top-1/2 left-[3%] md:left-[5%] w-8 md:w-10 h-8 md:h-10 rounded-full border border-[#d97e00]/6"></div>
          <div className="absolute top-[42%] md:top-1/3 right-[5%] md:right-[8%] w-10 md:w-12 h-10 md:h-12 rounded-full border border-[#bf1a22]/6"></div>
          
          {/* Colored dots */}
          <div className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-[#d97e00]/15"></div>
          <div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/12"></div>
          <div className="absolute bottom-[35%] right-[8%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/12"></div>
          <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-[#d97e00]/15"></div>
          
          {/* Geometric shapes */}
          <svg className="absolute top-16 right-16 w-28 h-28 opacity-[0.05]" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#d97e00" strokeWidth="1"/>
          </svg>
          <svg className="absolute bottom-20 left-16 w-24 h-24 opacity-[0.04]" viewBox="0 0 100 100">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#bf1a22" strokeWidth="1"/>
          </svg>
          
          {/* Curved lines */}
          <svg className="absolute top-1/4 left-0 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100">
            <path d="M0,50 Q50,0 100,50" fill="none" stroke="#d97e00" strokeWidth="1"/>
          </svg>
          <svg className="absolute bottom-1/4 right-0 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100">
            <path d="M0,50 Q50,100 100,50" fill="none" stroke="#bf1a22" strokeWidth="1"/>
          </svg>
          
          {/* Floating gradient shapes */}
          <div className="absolute top-[8%] right-[25%] w-24 h-24 rounded-full opacity-[0.03]" style={{background: 'linear-gradient(135deg, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute top-[35%] left-[15%] w-20 h-20 rounded-full opacity-[0.025]" style={{background: 'linear-gradient(225deg, #bf1a22 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-[15%] right-[8%] w-28 h-28 rounded-full opacity-[0.03]" style={{background: 'linear-gradient(45deg, #bf1a22 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-[35%] left-[25%] w-22 h-22 rounded-full opacity-[0.025]" style={{background: 'linear-gradient(315deg, #d97e00 0%, transparent 70%)'}}></div>
          <div className="absolute top-[60%] right-[15%] w-16 h-16 rounded-full opacity-[0.02]" style={{background: 'linear-gradient(180deg, #d97e00 0%, transparent 100%)'}}></div>
          <div className="absolute top-[20%] left-[6%] w-18 h-18 rounded-full opacity-[0.02]" style={{background: 'linear-gradient(0deg, #bf1a22 0%, transparent 100%)'}}></div>
        </div>

        {/* Section Header */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 mb-12">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-[#d97e00]/10 to-[#bf1a22]/10 text-[#d97e00] border border-[#d97e00]/20">צור קשר</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 theme-section-title mt-3 mb-4">נשמח לעמוד לשירותכם</h2>
            <p className="text-lg text-neutral-600 theme-section-subtitle max-w-2xl mx-auto">מעוניינים בהצעת מחיר? יש לכם שאלות? צרו איתנו קשר ונחזור אליכם בהקדם האפשרי.</p>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <a href={COMPANY.wazeLink} target="_blank" rel="noopener noreferrer" className="theme-contact-card flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundImage: 'linear-gradient(to bottom right, #d97e00, #bf1a22)'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 theme-contact-card-title mb-1">כתובת</h3>
                    <p className="text-base text-neutral-600 theme-contact-card-text">{COMPANY.address.full}</p>
                  </div>
                </a>

                <a href={`tel:${COMPANY.phone.replace(/-/g, '')}`} className="theme-contact-card flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundImage: 'linear-gradient(to bottom right, #d97e00, #bf1a22)'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 theme-contact-card-title mb-1">טלפון</h3>
                    <span className="text-base text-neutral-600 theme-contact-card-text">{COMPANY.phone}</span>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="theme-contact-card flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundImage: 'linear-gradient(to bottom right, #d97e00, #bf1a22)'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 theme-contact-card-title mb-1">דוא״ל</h3>
                    <span className="text-base text-neutral-600 theme-contact-card-text">{COMPANY.email}</span>
                  </div>
                </a>

                <div className="theme-contact-card flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundImage: 'linear-gradient(to bottom right, #d97e00, #bf1a22)'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 theme-contact-card-title mb-1">שעות פעילות</h3>
                    <p className="text-base text-neutral-600 theme-contact-card-text">{COMPANY.hours.days}: {COMPANY.hours.time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="theme-form-card bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 theme-form-title mb-6">השאירו פרטים</h3>
              
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'}}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">ההודעה נשלחה בהצלחה!</h4>
                  <p className="text-neutral-600">נחזור אליך בהקדם האפשרי.</p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleFormSubmit} autoComplete="on">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 theme-form-label mb-2">שם מלא *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === 'loading'}
                        className="theme-form-input w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#d97e00]/40 focus:shadow-[0_0_0_3px_rgba(217,126,0,0.06)] transition-[border-color,box-shadow] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="הכנס את שמך"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 theme-form-label mb-2">טלפון *</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === 'loading'}
                        className="theme-form-input w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#d97e00]/40 focus:shadow-[0_0_0_3px_rgba(217,126,0,0.06)] transition-[border-color,box-shadow] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="050-0000000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 theme-form-label mb-2">דוא״ל</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={formStatus === 'loading'}
                      className="theme-form-input w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#d97e00]/40 focus:shadow-[0_0_0_3px_rgba(217,126,0,0.06)] transition-[border-color,box-shadow] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 theme-form-label mb-2">הודעה *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus === 'loading'}
                      rows={4}
                      className="theme-form-input w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#d97e00]/40 focus:shadow-[0_0_0_3px_rgba(217,126,0,0.06)] transition-[border-color,box-shadow] duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="ספר לנו על הפרויקט שלך..."
                    ></textarea>
                  </div>
                  
                  {formStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                      {formError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#d97e00]/30 hover:scale-[1.02] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100" style={{backgroundImage: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)'}}
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        שולח...
                      </span>
                    ) : (
                      'שלח הודעה'
                    )}
                  </button>
                </form>
              )}
            </div>
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
