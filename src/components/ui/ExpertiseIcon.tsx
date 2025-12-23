import Image from 'next/image';

interface ExpertiseIconProps {
  src: string;
  alt: string;
  title: string;
}

export function ExpertiseIcon({ src, alt, title }: ExpertiseIconProps) {
  return (
    <div className="flex flex-col items-center gap-4 group cursor-pointer py-6 px-4">
      <div 
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 backdrop-blur-sm" 
        style={{
          background: 'linear-gradient(145deg, rgba(217,126,0,0.15) 0%, rgba(191,26,34,0.15) 100%)',
          border: '1px solid rgba(217,126,0,0.3)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 0 20px rgba(217,126,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          width={48} 
          height={48} 
          className="w-12 h-12 sm:w-14 sm:h-14" 
        />
      </div>
      <span className="text-neutral-200 text-xs sm:text-sm font-semibold text-center">
        {title}
      </span>
    </div>
  );
}

