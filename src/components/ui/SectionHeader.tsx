interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  variant = 'light',
  className = '' 
}: SectionHeaderProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`text-center ${className}`}>
      {badge && (
        <span 
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            isDark 
              ? 'text-[#d97e00]' 
              : 'bg-gradient-to-r from-[#bf1a22]/10 to-[#d97e00]/10 text-[#d97e00] border border-[#d97e00]/20'
          }`}
          style={isDark ? {
            background: 'linear-gradient(135deg, rgba(191, 26, 34, 0.2), rgba(217, 126, 0, 0.2))',
            border: '1px solid rgba(191, 26, 34, 0.3)',
          } : undefined}
        >
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold mt-2 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

