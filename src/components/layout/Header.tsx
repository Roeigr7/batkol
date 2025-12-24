'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_LINKS, COMPANY, EXPERTISE_ICONS } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';

export function Header() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle navigation with hash - ensures proper scroll after page load
  const handleHashNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if link has a hash
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path || '/';
      
      // If we're already on the target page, just scroll
      if (pathname === targetPath || (pathname === '/' && targetPath === '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to page first, then scroll after page loads
        e.preventDefault();
        router.push(targetPath);
        
        // Function to scroll to element when it's available
        const scrollToElement = (attempts = 0) => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (attempts < 20) {
            // Retry up to 20 times (2 seconds total)
            setTimeout(() => scrollToElement(attempts + 1), 100);
          }
        };
        
        // Start checking after initial navigation
        setTimeout(() => scrollToElement(), 50);
      }
    }
  }, [pathname, router]);

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
              <a 
                href="/#home" 
                aria-label={`${COMPANY.name} - דף הבית`}
                onClick={(e) => handleHashNavigation(e, '/#home')}
              >
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
                <li key={link.href} role="none" className="relative">
                  {link.href === '/products' ? (
                    // Products with dropdown
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <Link 
                        href={link.href}
                        className={`font-medium transition-colors duration-200 hover:text-[#d97e00] flex items-center gap-1 ${
                          isLight ? 'text-neutral-700' : 'text-neutral-300'
                        }`}
                        role="menuitem"
                      >
                        {link.label}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full right-0 pt-2 w-64 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isProductsOpen ? 'pointer-events-auto' : 'pointer-events-none'
                        }`}
                        style={{ 
                          zIndex: 100,
                          clipPath: isProductsOpen 
                            ? 'inset(0 0 0 0)' 
                            : 'inset(0 0 100% 0)',
                        }}
                      >
                        <div 
                          className={`rounded-xl shadow-2xl border overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isLight 
                              ? 'bg-white border-neutral-200' 
                              : 'bg-neutral-900 border-neutral-700'
                          } ${
                            isProductsOpen 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 -translate-y-2'
                          }`}
                        >
                          <div 
                            className={`py-2 max-h-[280px] overflow-y-auto dropdown-scrollbar ${
                              isLight ? 'dropdown-scrollbar-light' : 'dropdown-scrollbar-dark'
                            }`}
                          >
                            {EXPERTISE_ICONS.map((product, idx) => (
                              <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                className={`flex items-center gap-3 px-4 py-2.5 transition-all duration-200 ${
                                  isLight 
                                    ? 'hover:bg-neutral-100 text-neutral-700 hover:text-[#d97e00]' 
                                    : 'hover:bg-neutral-800 text-neutral-300 hover:text-[#d97e00]'
                                } ${
                                  isProductsOpen 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 translate-x-2'
                                }`}
                                style={{
                                  transitionDelay: isProductsOpen ? `${idx * 30}ms` : '0ms'
                                }}
                              >
                                <div 
                                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                                  style={{
                                    background: idx % 2 === 0 
                                      ? 'linear-gradient(135deg, rgba(217,126,0,0.15) 0%, rgba(191,26,34,0.15) 100%)'
                                      : 'linear-gradient(135deg, rgba(191,26,34,0.15) 0%, rgba(217,126,0,0.15) 100%)',
                                  }}
                                >
                                  <Image 
                                    src={product.src} 
                                    alt={product.alt} 
                                    width={18} 
                                    height={18}
                                    className="w-[18px] h-[18px]"
                                  />
                                </div>
                                <span className="text-sm font-medium">{product.title}</span>
                              </Link>
                            ))}
                          </div>
                          {/* View all link */}
                          <div 
                            className={`border-t px-4 py-3 transition-all duration-200 ${
                              isLight ? 'border-neutral-200 bg-neutral-50' : 'border-neutral-700 bg-neutral-800/50'
                            } ${
                              isProductsOpen 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-1'
                            }`}
                            style={{
                              transitionDelay: isProductsOpen ? `${EXPERTISE_ICONS.length * 30 + 50}ms` : '0ms'
                            }}
                          >
                            <Link
                              href="/products"
                              className="flex items-center justify-center gap-2 text-sm font-semibold text-[#d97e00] hover:underline"
                            >
                              צפה בכל המוצרים
                              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular nav links
                    <a 
                      href={link.href}
                      onClick={(e) => handleHashNavigation(e, link.href)}
                      className={`font-medium transition-colors duration-200 hover:text-[#d97e00] ${
                        isLight ? 'text-neutral-700' : 'text-neutral-300'
                      }`}
                      role="menuitem"
                    >
                      {link.label}
                    </a>
                  )}
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
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-black/5 active:scale-95 ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}
              aria-label={isMenuOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <div className="relative w-6 h-6">
                {/* Hamburger icon */}
                <svg 
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg 
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isMenuOpen 
                ? 'max-h-[600px] opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`border-t ${isLight ? 'border-neutral-200/60' : 'border-neutral-700/40'}`}>
              <ul 
                className={`flex flex-col py-3 transition-all duration-300 ease-out ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-2 opacity-0'
                }`} 
                role="menu"
              >
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href} role="none">
                    {link.href === '/products' ? (
                      // Products with expandable submenu
                      <div>
                        <button 
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className={`w-full flex items-center justify-between px-6 py-3 font-medium transition-all duration-200 ${
                            isLight 
                              ? 'text-neutral-600 hover:text-[#d97e00] hover:bg-neutral-100/70' 
                              : 'text-neutral-400 hover:text-[#d97e00] hover:bg-white/5'
                          }`}
                          style={{
                            transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms'
                          }}
                        >
                          <span>{link.label}</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Mobile Products Submenu */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            isProductsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className={`py-2 mr-4 border-r-2 ${isLight ? 'border-neutral-200' : 'border-neutral-700'}`}>
                            {EXPERTISE_ICONS.map((product) => (
                              <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                onClick={closeMenu}
                                className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors duration-150 ${
                                  isLight 
                                    ? 'text-neutral-500 hover:text-[#d97e00]' 
                                    : 'text-neutral-500 hover:text-[#d97e00]'
                                }`}
                              >
                                <Image 
                                  src={product.src} 
                                  alt={product.alt} 
                                  width={16} 
                                  height={16}
                                  className="w-4 h-4 opacity-60"
                                />
                                <span>{product.title}</span>
                              </Link>
                            ))}
                            <Link
                              href="/products"
                              onClick={closeMenu}
                              className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-[#d97e00]"
                            >
                              צפה בכל המוצרים
                              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a 
                        href={link.href}
                        onClick={(e) => {
                          handleHashNavigation(e, link.href);
                          closeMenu();
                        }}
                        className={`block px-6 py-3 font-medium transition-all duration-200 ${
                          isLight 
                            ? 'text-neutral-600 hover:text-[#d97e00] hover:bg-neutral-100/70' 
                            : 'text-neutral-400 hover:text-[#d97e00] hover:bg-white/5'
                        }`}
                        role="menuitem"
                        style={{
                          transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms'
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
                {/* Mobile CTA */}
                <li className="px-6 pt-3 pb-1" role="none">
                  <a 
                    href={`tel:${COMPANY.phone}`} 
                    className="flex items-center justify-center gap-2 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]" 
                    style={{ 
                      background: 'linear-gradient(135deg, #d97e00 0%, #bf1a22 100%)'
                    }}
                    aria-label={`התקשר אלינו: ${COMPANY.phone}`}
                    onClick={closeMenu}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{COMPANY.phone}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
