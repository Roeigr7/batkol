'use client';

import Image from 'next/image';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';

export function Header() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <header>
      <nav 
        className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${
          isLight 
            ? 'bg-white/97 border-neutral-200' 
            : 'bg-[#1a1a1a]/97 border-neutral-700/50'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" aria-label={`${COMPANY.name} - דף הבית`}>
                <Image
                  src={isLight ? "/logo-dark.png" : "/logo-white.png"}
                  alt={`${COMPANY.name} לוגו`}
                  width={56}
                  height={22}
                  className="h-5 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8" role="menubar">
              {NAV_LINKS.map((link) => (
                <li key={link.href} role="none">
                  <a 
                    href={link.href} 
                    className={`font-medium transition-colors duration-200 hover:text-[#d97e00] ${
                      isLight ? 'text-neutral-700' : 'text-neutral-300'
                    }`}
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a 
              href={`tel:${COMPANY.phone}`} 
              className="hidden md:flex items-center gap-2 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105" 
              style={{ background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)', boxShadow: '0 4px 15px rgba(217, 126, 0, 0.3)' }}
              aria-label={`התקשר אלינו: ${COMPANY.phone}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{COMPANY.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2 ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}
              aria-label="פתח תפריט ניווט"
              aria-expanded="false"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
