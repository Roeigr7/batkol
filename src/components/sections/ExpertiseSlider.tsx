'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExpertiseIcon } from '@/components/ui/ExpertiseIcon';
import { EXPERTISE_ICONS } from '@/lib/constants';

// Swiper CSS is imported globally in layout.tsx

export function ExpertiseSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden" aria-labelledby="expertise-title">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" aria-hidden="true"></div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20" style={{background: 'radial-gradient(circle, #bf1a22 0%, transparent 70%)'}}></div>
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20" style={{background: 'radial-gradient(circle, #d97e00 0%, transparent 70%)'}}></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10" style={{background: 'radial-gradient(ellipse, #bf1a22 0%, transparent 60%)'}}></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#bf1a22] to-transparent opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d97e00] to-transparent opacity-60" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-10 md:mb-12">
        <SectionHeader
          badge="תחומי התמחות"
          title="המומחיות שלנו לשירותכם"
          description="מגוון רחב של שירותים מקצועיים בתחום מערכות מתח נמוך"
          variant="dark"
        />
      </div>

      {/* Slider with Arrows */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Arrow - Left */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(217,126,0,0.3) 0%, rgba(191,26,34,0.3) 100%)',
            border: '1px solid rgba(217,126,0,0.5)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
          aria-label="הקודם"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Navigation Arrow - Right */}
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(217,126,0,0.3) 0%, rgba(191,26,34,0.3) 100%)',
            border: '1px solid rgba(217,126,0,0.5)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
          aria-label="הבא"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slider Container */}
        <div className="mx-10 sm:mx-14 md:mx-16 overflow-hidden">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={2}
            speed={600}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              400: { slidesPerView: 3, spaceBetween: 12 },
              540: { slidesPerView: 4, spaceBetween: 16 },
              768: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 28 },
            }}
            className="expertise-slider"
          >
            {EXPERTISE_ICONS.map((icon, index) => (
              <SwiperSlide key={index}>
                <ExpertiseIcon
                  src={icon.src}
                  alt={icon.alt}
                  title={icon.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

