import Image from 'next/image';

interface ExpertiseIconProps {
  src: string;
  alt: string;
  title: string;
}

export function ExpertiseIcon({ src, alt, title }: ExpertiseIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 group cursor-pointer py-3 sm:py-4 md:py-6 px-1 sm:px-2 md:px-4">
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl p-[3px] group-hover:scale-105 transition-all duration-300" 
        style={{
          background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(217,126,0,0.2)',
        }}
      >
        <div className="w-full h-full rounded-xl flex items-center justify-center bg-neutral-900">
          <Image 
            src={src} 
            alt={alt} 
            width={48} 
            height={48} 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" 
          />
        </div>
      </div>
      <span className="text-neutral-200 text-[10px] sm:text-xs md:text-sm font-semibold text-center leading-tight">
        {title}
      </span>
    </div>
  );
}

