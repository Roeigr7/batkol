import type { Metadata } from 'next';
import { COMPANY } from './constants';

const siteUrl = 'https://www.batkol.co.il';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} | מערכות מתח נמוך, אבטחה וגילוי אש בבאר שבע`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    // Primary services
    'מערכות מתח נמוך',
    'מערכות אבטחה',
    'מצלמות אבטחה',
    'גילוי אש',
    'כיבוי אש',
    'מערכות כריזה',
    'מערכות הגברה',
    'אינטרקום',
    'בקרת כניסה',
    'גילוי פריצה',
    'שעוני צלצולים',
    'מערכות שחרור עשן',
    'מערכות קריאת מצוקה',
    // Technical terms
    'מצלמות IP',
    'מצלמות HD',
    'DVR',
    'NVR',
    'מוקד אבטחה',
    'גלאי עשן',
    'גלאי תנועה',
    'ספרינקלרים',
    'לוחות בקרה',
    // Location based
    'בת-קול',
    'באר שבע',
    'דרום הארץ',
    'נגב',
    'ישראל',
    // Certifications & trust signals
    'מכון התקנים',
    'מוסמך ת"י',
    'תחזוקה שנתית',
  ],
  authors: [{ name: COMPANY.fullName }],
  creator: COMPANY.fullName,
  publisher: COMPANY.fullName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | מערכות מתח נמוך, אבטחה וגילוי אש`,
    description: COMPANY.description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - ${COMPANY.tagline}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | מערכות מתח נמוך, אבטחה וגילוי אש`,
    description: COMPANY.description,
    images: [`${siteUrl}/og-image.png`],
    creator: '@batkol',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

// JSON-LD Structured Data
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.fullName,
  alternateName: COMPANY.nameEn,
  url: siteUrl,
  logo: `${siteUrl}/logo-dark.png`,
  description: COMPANY.description,
  foundingDate: COMPANY.foundedYear.toString(),
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressCountry: 'IL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY.phoneInternational,
    email: COMPANY.email,
    contactType: 'customer service',
    availableLanguage: ['Hebrew', 'English'],
    areaServed: 'IL',
  },
  sameAs: [
    COMPANY.social.facebook,
    COMPANY.social.linkedin,
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY.fullName,
  image: `${siteUrl}/logo-dark.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: COMPANY.phoneInternational,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressCountry: 'IL',
    postalCode: '8489312',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.2530,
    longitude: 34.7915,
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '08:00',
    closes: '17:00',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'באר שבע',
    },
    {
      '@type': 'State',
      name: 'Southern District, Israel',
    },
  ],
  serviceType: [
    'Security Systems Installation',
    'Fire Detection Systems',
    'PA Systems',
    'CCTV Installation',
    'Access Control Systems',
    'Intercom Systems',
    'Smoke Release Systems',
  ],
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Security and Fire Detection Systems',
  provider: {
    '@type': 'Organization',
    name: COMPANY.fullName,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Israel',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'שירותי מתח נמוך',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'מערכות אבטחה',
          description: 'מצלמות אבטחה, מערכות גילוי פריצה, בקרת כניסה ואינטרקום',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'מערכות כריזה והגברה',
          description: 'מערכות כריזה מקצועיות, הגברה לאירועים ומוסדות',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'גילוי וכיבוי אש',
          description: 'מערכות גילוי אש, כיבוי אוטומטי ושחרור עשן',
        },
      },
    ],
  },
};

