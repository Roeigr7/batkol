'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useTheme } from '@/context/ThemeContext';
import { CUSTOMERS } from '@/lib/constants';

// Swiper CSS is imported globally in layout.tsx

export function CustomersSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="theme-customers-section relative min-h-[calc(100vh-80px)] py-20 bg-white flex flex-col justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.07]" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.07]" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04]" style={{background: 'linear-gradient(135deg, #d97e00, #bf1a22)'}}></div>
        
        {/* Top and bottom accent lines */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d97e00]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bf1a22]/20 to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-16 w-20 h-20 rounded-full border border-[#d97e00]/10"></div>
        <div className="absolute top-28 right-24 w-8 h-8 rounded-full border border-[#bf1a22]/8"></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 rounded-full border border-[#bf1a22]/10"></div>
        <div className="absolute bottom-28 left-28 w-6 h-6 rounded-full border border-[#d97e00]/8"></div>
        
        {/* Colored dots */}
        <div className="absolute top-[25%] left-[8%] w-2 h-2 rounded-full bg-[#d97e00]/15"></div>
        <div className="absolute top-[35%] right-[6%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/12"></div>
        <div className="absolute bottom-[30%] left-[5%] w-1.5 h-1.5 rounded-full bg-[#bf1a22]/12"></div>
        <div className="absolute bottom-[25%] right-[7%] w-2 h-2 rounded-full bg-[#d97e00]/15"></div>
        
        {/* Geometric shapes */}
        <svg className="absolute top-16 left-20 w-24 h-24 opacity-[0.05]" viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#d97e00" strokeWidth="1"/>
        </svg>
        <svg className="absolute bottom-16 right-20 w-20 h-20 opacity-[0.04]" viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#bf1a22" strokeWidth="1"/>
        </svg>
        
        {/* Floating gradient shapes */}
        <div className="absolute top-[12%] left-[12%] w-28 h-28 rounded-full opacity-[0.035]" style={{background: 'linear-gradient(135deg, #d97e00 0%, transparent 70%)'}}></div>
        <div className="absolute top-[30%] right-[8%] w-20 h-20 rounded-full opacity-[0.03]" style={{background: 'linear-gradient(225deg, #bf1a22 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-[28%] left-[6%] w-24 h-24 rounded-full opacity-[0.03]" style={{background: 'linear-gradient(45deg, #bf1a22 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-[12%] right-[12%] w-32 h-32 rounded-full opacity-[0.035]" style={{background: 'linear-gradient(315deg, #d97e00 0%, transparent 70%)'}}></div>
        <div className="absolute top-[45%] left-[4%] w-16 h-16 rounded-full opacity-[0.025]" style={{background: 'linear-gradient(180deg, #d97e00 0%, transparent 100%)'}}></div>
        <div className="absolute top-[55%] right-[5%] w-18 h-18 rounded-full opacity-[0.025]" style={{background: 'linear-gradient(0deg, #bf1a22 0%, transparent 100%)'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-[#d97e00]/10 to-[#bf1a22]/10 text-[#d97e00] border border-[#d97e00]/20">
            הלקוחות שלנו
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 theme-section-title mt-3 mb-4">
            גאים לשרת לקוחות מובילים
          </h2>
          <p className="text-lg text-neutral-600 theme-section-subtitle max-w-2xl mx-auto mb-8">
            חברות וארגונים מובילים במשק סומכים עלינו לאורך שנים
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d97e00]">100+</div>
              <div className={`text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>לקוחות מרוצים</div>
            </div>
            <div className={`w-px h-12 ${isDark ? 'bg-neutral-600' : 'bg-neutral-200'}`}></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d97e00]">40+</div>
              <div className={`text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>שנות שירות</div>
            </div>
            <div className={`w-px h-12 ${isDark ? 'bg-neutral-600' : 'bg-neutral-200'}`}></div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d97e00]">100%</div>
              <div className={`text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>שביעות רצון</div>
            </div>
          </div>
        </div>

        {/* Slider with Arrows */}
        <div className="relative">
          {/* Navigation Arrow - Left */}
          <button 
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg hover:shadow-xl border ${
              isDark 
                ? 'bg-neutral-800 text-neutral-300 border-neutral-600 hover:border-[#d97e00]' 
                : 'bg-white text-neutral-600 border-neutral-200'
            }`}
            aria-label="הקודם"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation Arrow - Right */}
          <button 
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg hover:shadow-xl border ${
              isDark 
                ? 'bg-neutral-800 text-neutral-300 border-neutral-600 hover:border-[#d97e00]' 
                : 'bg-white text-neutral-600 border-neutral-200'
            }`}
            aria-label="הבא"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div className="mx-14 sm:mx-16">
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={2}
              speed={600}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 24 },
                640: { slidesPerView: 2, spaceBetween: 28 },
                768: { slidesPerView: 3, spaceBetween: 32 },
                1024: { slidesPerView: 4, spaceBetween: 40 },
              }}
              className="customers-slider"
            >
              {CUSTOMERS.map((customer, index) => (
                <SwiperSlide key={index}>
                  <div className={`flex items-center justify-center p-10 rounded-2xl transition-all duration-300 h-52 ${
                    isDark 
                      ? 'bg-neutral-800 hover:bg-neutral-700 shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]' 
                      : 'bg-white hover:bg-neutral-50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                  }`}>
                    <Image 
                      src={customer.src} 
                      alt={customer.alt} 
                      width={200} 
                      height={100} 
                      className={`max-h-32 w-auto object-contain ${isDark ? 'brightness-0 invert opacity-80' : ''}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
