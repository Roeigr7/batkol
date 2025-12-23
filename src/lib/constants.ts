// Brand Colors
export const COLORS = {
  primary: '#d97e00',
  secondary: '#bf1a22',
  dark: '#171717',
  light: '#ffffff',
} as const;

// Company Information
export const COMPANY = {
  name: 'בת-קול',
  nameEn: 'Bat-Kol',
  fullName: 'בת-קול בע״מ',
  tagline: 'מומחים במערכות מתח נמוך מאז 1982',
  description: 'בת-קול בע״מ - מומחים במערכות מתח נמוך, אבטחה, כריזה, הגברה, גילוי וכיבוי אש באזור באר שבע והדרום. מוסמכי מכון התקנים הישראלי. שירות מקצועי מאז 1982.',
  foundedYear: 1982,
  phone: '08-6276698',
  phoneInternational: '+97286276698',
  email: 'bk@batkol.co.il',
  whatsapp: 'https://wa.me/97286276698',
  wazeLink: 'https://waze.com/ul?q=רחוב הנגרים 1/5 באר שבע',
  address: {
    street: 'רחוב הנגרים 1/5',
    city: 'באר שבע',
    country: 'ישראל',
    full: 'רחוב הנגרים 1/5, באר שבע',
  },
  hours: {
    days: 'ראשון - חמישי',
    time: '08:00 - 17:00',
  },
  social: {
    facebook: 'https://facebook.com/batkol.ltd',
    linkedin: 'https://linkedin.com/company/batkol',
  },
} as const;

// Customer logos for testimonials
export const CUSTOMERS = [
  { src: '/customers/icl.png', alt: 'ICL - כימיקלים לישראל' },
  { src: '/customers/bgu.png', alt: 'אוניברסיטת בן גוריון בנגב' },
  { src: '/customers/beersheva.png', alt: 'עיריית באר שבע' },
  { src: '/customers/arad.png', alt: 'עיריית ערד' },
  { src: '/customers/amal.png', alt: 'רשת עמל - בתי ספר מקצועיים' },
  { src: '/customers/adama.png', alt: 'ADAMA - פתרונות חקלאיים' },
  { src: '/customers/rotem.png', alt: 'תעשיות רותם' },
  { src: '/customers/konchia.png', alt: 'הקונכייה - מרכז מסחרי' },
  { src: '/customers/naamat.png', alt: 'נעמת - תנועת נשים עובדות ומתנדבות' },
] as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '#home', label: 'דף הבית' },
  { href: '#solutions', label: 'הפתרונות שלנו' },
  { href: '#about', label: 'אודות' },
  { href: '#contact', label: 'צור קשר' },
] as const;

// Services/Expertise Icons
export const EXPERTISE_ICONS = [
  { src: '/icons/security-cameras.svg', alt: 'מצלמות אבטחה', title: 'מצלמות אבטחה', bg: '/slides/security-cameras.jpg', description: 'מצלמות IP ואנלוגיות באיכות HD עם מערכות הקלטה DVR/NVR וצפייה מרחוק מכל מקום דרך הסמארטפון.' },
  { src: '/icons/burglar-alarm.svg', alt: 'מערכות גילוי פריצה', title: 'מערכות גילוי פריצה', bg: '/slides/motion-sensor.jpg', description: 'מערכות אזעקה חכמות עם גלאי תנועה מתקדמים, מגנטים לדלתות וחלונות וחיבור ישיר למוקד אבטחה.' },
  { src: '/icons/amplification.svg', alt: 'מערכות הגברה', title: 'מערכות הגברה', bg: '/slides/amplifiers.jpg', description: 'מערכות הגברה מקצועיות לאולמות, בתי כנסת ואירועים. מגברים, רמקולים וציוד סאונד איכותי.' },
  { src: '/icons/fire-detection.svg', alt: 'מערכות כיבוי וגילוי אש', title: 'גילוי וכיבוי אש', bg: '/slides/fire-extinguisher.jpg', description: 'מערכות גילוי אש מוסמכות ת"י עם גלאי עשן וחום, לוחות בקרה וספרינקלרים. תחזוקה שנתית מקצועית.' },
  { src: '/icons/emergency-call.svg', alt: 'מערכות קריאת מצוקה', title: 'מערכות קריאת מצוקה', bg: '/slides/sos-button.jpg', description: 'לחצני מצוקה לקשישים ונכים עם מערכות אזעקה אישיות וחיבור ישיר למוקד חירום מקצועי 24/7.' },
  { src: '/icons/smoke-release.svg', alt: 'מערכות שחרור עשן', title: 'מערכות שחרור עשן', bg: '/slides/smoke-release.jpg', description: 'מערכות פתיחת חלונות ופתחי אוורור אוטומטיים לשחרור עשן בעת שריפה. עמידה בתקן הישראלי.' },
  { src: '/icons/intercom.svg', alt: 'אינטרקום ובקרת כניסה', title: 'אינטרקום ובקרת כניסה', bg: '/slides/intercom-panel.jpg', description: 'מערכות אינטרקום וידאו מתקדמות, בקרת כניסה ביומטרית עם כרטיסי מגנט ושלטים למשרדים ובניינים.' },
  { src: '/icons/pa-equipment.svg', alt: 'ציוד כריזה מקצועי', title: 'ציוד כריזה מקצועי', bg: '/slides/pa-microphones.jpg', description: 'ציוד כריזה מקצועי לבתי ספר, מפעלים ומוסדות ציבור. מיקרופונים, רמקולים ומערכות שליטה.' },
  { src: '/icons/bell-clocks.svg', alt: 'שעוני צלצולים', title: 'שעוני צלצולים', bg: '/slides/digital-clock.jpg', description: 'שעוני צלצולים ממוחשבים לבתי ספר ומפעלים עם תכנות גמיש, צלצולים אוטומטיים ושילוב עם כריזה.' },
  { src: '/icons/integrated-pa.svg', alt: 'מערכות כריזה משולבות', title: 'כריזה משולבת אש', bg: '/slides/loudspeakers.jpg', description: 'מערכות כריזה משולבות גילוי אש לפי תקן ישראלי. הודעות חירום אוטומטיות ופינוי מבנים בטוח.' },
] as const;

// Main Services
export const SERVICES = [
  {
    id: 'security',
    title: 'מערכות אבטחה',
    description: 'מצלמות אבטחה, מערכות גילוי פריצה, בקרת כניסה ואינטרקום',
    icon: 'shield',
  },
  {
    id: 'pa',
    title: 'כריזה והגברה',
    description: 'מערכות כריזה מקצועיות, הגברה לאירועים ומוסדות',
    icon: 'speaker',
  },
  {
    id: 'fire',
    title: 'גילוי וכיבוי אש',
    description: 'מערכות גילוי אש, כיבוי אוטומטי ושחרור עשן',
    icon: 'fire',
  },
  {
    id: 'maintenance',
    title: 'תחזוקה',
    description: 'שירותי תחזוקה מקיפים לכל סוגי המערכות',
    icon: 'wrench',
  },
] as const;

// Contact Form Service Options
export const SERVICE_OPTIONS = [
  { value: '', label: 'בחר סוג שירות' },
  { value: 'security', label: 'מערכות אבטחה' },
  { value: 'pa', label: 'כריזה והגברה' },
  { value: 'fire', label: 'גילוי וכיבוי אש' },
  { value: 'maintenance', label: 'תחזוקה' },
  { value: 'other', label: 'אחר' },
] as const;

// Why Choose Us Points
export const WHY_CHOOSE_US = [
  'ניסיון של למעלה מ-40 שנה',
  'מוסמכי מכון התקנים הישראלי',
  'צוות טכנאים מקצועי ומיומן',
  'שירות אמין ומהיר',
  'אחריות מלאה על כל עבודה',
] as const;

