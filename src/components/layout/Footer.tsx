'use client';

import Image from 'next/image';
import { COMPANY, NAV_LINKS, SERVICES, EXPERTISE_ICONS } from '@/lib/constants';
import { useTheme } from '@/context/ThemeContext';

// Reusable phone icon component
const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Reusable email icon component
const EmailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <footer 
      className={`border-t transition-colors duration-300 ${
        isLight 
          ? 'bg-neutral-100 border-neutral-200' 
          : 'bg-black border-neutral-800'
      }`} 
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className={`rounded-lg p-4 inline-block mb-4 ${isLight ? 'bg-neutral-200' : 'bg-white'}`}>
              <Image
                src="/logo-dark.png"
                alt={`${COMPANY.name} לוגו`}
                width={140}
                height={56}
                className="h-10 w-auto"
              />
            </div>
            <p className={`text-base max-w-md ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
              מאז {COMPANY.foundedYear}, {COMPANY.name} מספקת פתרונות מקצועיים למערכות מתח נמוך, אבטחה וגילוי אש. מוסמכי מכון התקנים.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className={`font-semibold mb-4 ${isLight ? 'text-neutral-900' : 'text-white'}`}>קישורים מהירים</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services - Combined on mobile */}
          <div className="md:contents">
            <div>
              <h4 className={`font-semibold mb-4 ${isLight ? 'text-neutral-900' : 'text-white'}`}>מוצרים</h4>
              <ul className="space-y-2 grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
                {SERVICES.map((service) => {
                  // Map service IDs to product slugs
                  const serviceToSlug: Record<string, string> = {
                    security: '/products/security-cameras',
                    pa: '/products/pa-equipment',
                    fire: '/products/fire-detection',
                    maintenance: '/#contact',
                  };
                  const href = serviceToSlug[service.id] || '/products';
                  return (
                    <li key={service.id}>
                      <a 
                        href={href}
                        className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}
                      >
                        {service.title}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a 
                    href="/products/security-cameras" 
                    className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}
                  >
                    מצלמות אבטחה
                  </a>
                </li>
                {/* More services - shown inline on mobile */}
                {EXPERTISE_ICONS.slice(1, 5).map((item) => (
                  <li key={item.title} className="md:hidden">
                    <a 
                      href={`/products/${item.slug}`}
                      className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Services - Hidden on mobile */}
            <div className="hidden md:block">
              <h4 className="font-semibold text-transparent mb-4 select-none" aria-hidden="true">&nbsp;</h4>
              <ul className="space-y-2">
                {EXPERTISE_ICONS.slice(1, 5).map((item) => (
                  <li key={item.title}>
                    <a 
                      href={`/products/${item.slug}`}
                      className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isLight ? 'border-neutral-300' : 'border-neutral-800'}`}>
          <p className={`text-sm ${isLight ? 'text-neutral-500' : 'text-neutral-500'}`}>
            © {currentYear} {COMPANY.fullName}. כל הזכויות שמורות.
          </p>
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a 
              href={COMPANY.whatsapp}
              className={`hover:text-[#25D366] transition-colors ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            {/* Waze */}
            <a 
              href={COMPANY.wazeLink}
              className={`hover:text-[#33CCFF] transition-colors ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}
              aria-label="נווט אלינו בוויז"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.486 2 2 6.486 2 12c0 1.385.284 2.704.793 3.903l-.898 3.351a.5.5 0 00.621.621l3.351-.898A9.964 9.964 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm-3 11a1 1 0 110-2 1 1 0 010 2zm3.5 3c-1.657 0-3-1.343-3-3h1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5h1.5c0 1.657-1.343 3-3 3zm2.5-3a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
            </a>
            {/* Email */}
            <a 
              href={`mailto:${COMPANY.email}`}
              className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            {/* Phone */}
            <a 
              href={`tel:${COMPANY.phone}`}
              className={`hover:text-[#d97e00] transition-colors ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}
              aria-label="Phone"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
