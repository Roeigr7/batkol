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
  { href: '/#home', label: 'דף הבית' },
  { href: '/#solutions', label: 'הפתרונות שלנו' },
  { href: '/products', label: 'מוצרים' },
  { href: '/#about', label: 'אודות' },
  { href: '/#contact', label: 'צור קשר' },
] as const;

// Services/Expertise Icons
export const EXPERTISE_ICONS = [
  { 
    slug: 'security-cameras',
    src: '/icons/security-cameras.svg', 
    alt: 'מצלמות אבטחה', 
    title: 'מצלמות אבטחה', 
    bg: '/slides/security-cameras.jpg', 
    description: 'מצלמות IP ואנלוגיות באיכות HD עם מערכות הקלטה DVR/NVR וצפייה מרחוק מכל מקום דרך הסמארטפון.',
    subtitle: 'מגוון מצלמות אבטחה מקצועיות לכל סוגי הפרויקטים',
    contentText: `בבת-קול אנו מציעים מגוון רחב של מצלמות אבטחה מהמותגים המובילים בתעשייה. הפורטפוליו שלנו כולל מצלמות כיפה, מצלמות צינור, מצלמות PTZ ממונעות, ומצלמות IP באיכות 4K.

אנו מספקים פתרונות מלאים הכוללים מערכות הקלטה DVR ו-NVR, מסכי צפייה, דיסקים קשיחים ייעודיים, וכל האביזרים הנדרשים להתקנה מקצועית.

הצוות המקצועי שלנו ישמח לסייע בבחירת המערכת המתאימה לצרכים שלכם - בין אם מדובר בבית פרטי, עסק קטן, או פרויקט מסחרי גדול.`,
    variants: [
      { name: 'מצלמת כיפה HD 2MP', description: 'מצלמת כיפה פנימית באיכות Full HD' },
      { name: 'מצלמת צינור 4MP', description: 'מצלמת חוץ עמידה בתנאי מזג אוויר' },
      { name: 'מצלמת PTZ 360°', description: 'מצלמה ממונעת עם זום אופטי x30' },
      { name: 'מצלמת IP 8MP 4K', description: 'מצלמה באיכות 4K Ultra HD' },
      { name: 'מערכת NVR 16 ערוצים', description: 'מערכת הקלטה רשתית מתקדמת' },
    ]
  },
  { 
    slug: 'burglar-alarm',
    src: '/icons/burglar-alarm.svg', 
    alt: 'מערכות גילוי פריצה', 
    title: 'מערכות גילוי פריצה', 
    bg: '/slides/motion-sensor.jpg', 
    description: 'מערכות אזעקה חכמות עם גלאי תנועה מתקדמים, מגנטים לדלתות וחלונות וחיבור ישיר למוקד אבטחה.',
    subtitle: 'מערכות אזעקה מתקדמות להגנה מקסימלית',
    contentImage: '/products/burglar-alarm-risco.jpg',
    contentImageTitle: 'מערכת אזעקה RISCO LightSYS2',
    contentText: `מערכות אזעקה לכל מטרה

חברת בת-קול עוסקת בשיווק והתקנה של מערכות אזעקה בבתים, בעסקים ובמוסדות.

דלפק מכירות – מכירת מערכות אזעקה, חלפים, סוללות ואביזרים נלווים. מיועד עבור מתקיני מערכות אזעקה וצרכנים כאחד.

מחלקת התקנה – טכנאים מנוסים ומקצועיים של החברה מבצעים התקנות בכל רחבי הארץ.

מוקד שירות לקוחות – מטפל בקריאות שירות ללקוחות באמצעות תוכנת שירות טלפונית, המאפשרת ביצוע שינויי תכנות ותיקונים מרחוק או באמצעות טכנאים המגיעים לאתר הלקוח.`,
    variants: [
      { name: 'מערכת אזעקה אלחוטית', description: 'התקנה קלה ללא חיווט' },
      { name: 'גלאי תנועה PIR', description: 'גלאי אינפרא-אדום מדויק' },
      { name: 'מגנט לדלת/חלון', description: 'חיישן פתיחה אלחוטי' },
      { name: 'לוח בקרה 64 אזורים', description: 'מערכת מרכזית לבניינים גדולים' },
      { name: 'חיבור למוקד אבטחה', description: 'ניטור 24/7 עם תגובה מיידית' },
    ]
  },
  { 
    slug: 'amplification',
    src: '/icons/amplification.svg', 
    alt: 'מערכות הגברה', 
    title: 'מערכות הגברה', 
    bg: '/slides/amplifiers.jpg', 
    description: 'מערכות הגברה מקצועיות לאולמות, בתי כנסת ואירועים. מגברים, רמקולים וציוד סאונד איכותי.',
    subtitle: 'פתרונות הגברה מקצועיים לכל אירוע ומקום',
    variants: [
      { name: 'מגבר 100W', description: 'מגבר הספק לאולמות קטנים' },
      { name: 'מגבר 500W', description: 'מגבר מקצועי לאולמות גדולים' },
      { name: 'רמקול תקרה 6"', description: 'רמקול שקוע לתקרה אקוסטית' },
      { name: 'רמקול קיר 8"', description: 'רמקול חיצוני עמיד למים' },
      { name: 'מיקסר 12 ערוצים', description: 'מיקסר דיגיטלי מקצועי' },
    ],
    categories: [
      {
        name: 'רמקולים פאסיביים בתיבה',
        subcategories: [
          {
            brand: 'PRO TECH',
            products: [
              { name: 'CB 350 - רמקול היענות מלאה מפוצל ל-2 תחומים' },
              { name: 'CX-500 - רמקול לתחום מלא, מפוצל ל-2 תחומי תדר' },
            ]
          },
          {
            brand: 'TLA',
            products: [
              { name: '900WP - רמקול מוגן מים "15 + "1.4' },
              { name: 'CS-200 - High-End passive speaker' },
              { name: 'CS-300 - רמקול "12 לתחום מלא, 2 תחומי תדר 350W' },
              { name: 'CS-600 - רמקול פאסיבי 2WAY מקצועי "15' },
              { name: 'EJ218 - רמקול סאב "2x18' },
              { name: 'N10 - professional speaker' },
              { name: 'N12F - Waterproof professional speaker' },
              { name: 'N6 - רמקול פאסיבי "6.5' },
              { name: 'N8 - רמקול 2way פאסיבי "8' },
              { name: 'S261FR' },
              { name: 'TLA 21 - Line Array System' },
              { name: 'X15B - סאב פאסיבי "15' },
              { name: 'B-118 - Subwoofer for highest standard audio' },
              { name: 'CS-250 - High-End passive speaker' },
              { name: 'CS-400 - רמקול פאסיבי מעץ "15, 2WAY' },
              { name: 'EB110 - רמקול סאב "10' },
              { name: 'MU2215B - רמקול סאב פאסיבי כפול "15' },
              { name: 'N10F / N10TF - Waterproof professional speaker' },
              { name: 'N15F - Waterproof professional speaker' },
              { name: 'N6F - Waterproof professional speaker' },
              { name: 'N8F / N8TF - Waterproof professional speaker' },
              { name: 'TLA-481 - Compact Line Array System' },
              { name: 'X12i - רמקול "12 + "1.4 High End' },
              { name: 'X15i - רמקול "15 + "1.4 700W' },
              { name: 'TLA-101 - סדרת LINE ARRAY' },
              { name: 'B3' },
              { name: 'EB115H - רמקול סאב "15' },
              { name: 'HF101 - רמקול' },
              { name: 'MU12B - סאב "12 פאסיבי' },
              { name: 'S-210 - רמקול "10 + "1.7 300W RMS' },
              { name: 'T4.8 - רמקול קולונה "8x4' },
              { name: 'EB118D - רמקול סאב "1x18' },
              { name: 'I22W' },
              { name: 'QS400 - רמקול אליפטי מעוצב "4 Two-Way' },
              { name: 'S480 - רמקול 2WAY FULL RANGE 2x4" + 1" Tweeter' },
            ]
          },
          {
            brand: 'AST',
            products: [
              { name: 'A-44 / A-48 - רמקול פאסיבי "4' },
              { name: 'B-4T / B-5T / B-6T - רמקול עם שנאי קו' },
              { name: 'B-6WPT - רמקול מוגן מים "6.5 עם שנאי קו' },
              { name: 'FWS-501W - רמקול שטוח לקיר דקורטיבי' },
              { name: 'H-3T - רמקול פלסטיק "3 כולל שנאי קו 100V' },
              { name: 'H-5T - רמקול פלסטיק "5¼ כולל שנאי קו 100V' },
              { name: 'H-8WP - רמקול פלסטיק מוגן מים "8' },
              { name: 'B-5 / B-6 / B-8 - רמקול "5 / "6.5 / "8' },
              { name: 'C-5V - רמקול פאסיבי "5 עם בורר עוצמה' },
              { name: 'H-3 - רמקול פלסטיק איכותי "3' },
              { name: 'H-5 - רמקול פלסטיק איכותי "5¼' },
              { name: 'H-5WP - רמקול פלסטיק מוגן מים "5¼' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: 'CS-120 / CS-120T - רמקול קולונה "12x3.5' },
              { name: 'CS-40T - רמקול קולונה "4x3.5 עם שנאי קו' },
              { name: 'CS-80 - רמקול קולונה "8x3.5' },
              { name: 'ODS-5 - רמקול "5 מוגן מים עם סאב מובנה' },
              { name: 'SS316 - רמקולים מיני סטליטיים "2.75' },
              { name: 'WS-48 - רמקול פאסיבי "4.5' },
              { name: 'CS-50 - רמקול קולונה "5x3.5' },
              { name: 'MS-5 - רמקול "5 מוגן מים לקיבוע בקרקע' },
              { name: 'SP-55 - רמקול עץ "5, Two-way' },
              { name: 'WS-44 - רמקול פאסיבי "4.5' },
              { name: 'WS-58 - רמקול פאסיבי "5.25' },
            ]
          },
          {
            brand: 'MIXTECH',
            products: [
              { name: 'PRO-15N - רמקול פאסיבי "15 סדרת MIXTECH' },
              { name: 'FVCS-02 - רמקול להתקנה על הקיר "3, שנאי קו 100V' },
              { name: 'HL826 - רמקול סלע לגינה "6.5 מוגן מים עם שנאי קו' },
              { name: 'HWR101T - רמקול להתקנה על קיר "6.5 כולל שנאי קו' },
              { name: 'HWR118T - רמקול להתקנה על הקיר "5, כולל שנאי קו 100V' },
              { name: 'VSX 10BP - רמקול סאב וופר פאסיבי "10 רצפתי' },
              { name: 'HSR312-6T - רמקול פרוזקטור "6.5, כולל שנאי קו 100V' },
              { name: 'HWR108TB - רמקול להתקנה על הקיר "6.5 כולל שנאי קו' },
              { name: 'HWR122T - רמקול להתקנה על הקיר "5, כולל שנאי קו 100V' },
            ]
          },
          {
            brand: 'EUROCOM',
            products: [
              { name: 'CL208S - רמקול סאב, "2x8 התנגדות 4ohm' },
              { name: 'CL208T - רמקול 2WAY, דאבל "8 + "1.35, כולל שנאי קו' },
            ]
          },
          {
            brand: 'TANNOY',
            products: [
              { name: 'AMS 5ICT-WH / AMS 5ICT - בצבעים שחור ולבן - רמקול 5" להתקנות בטכנולוגית ICT מ-TANNOY' },
              { name: 'AMS 6ICT-WH / AMS 6ICT - בצבעים שחור ולבן - רמקול 6" להתקנות בטכנולוגית ICT מ-TANNOY' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'רמקולים מוגברים ומערכות הגברה קומפקטיות',
        subcategories: [
          {
            brand: 'PROTECH',
            products: [
              { name: '300N | רמקול מוגבר "10 מקצועי' },
              { name: 'Professional Active Speaker | 400AM' },
              { name: '500A | רמקול אקטיבי לתחום מלא, מפוצל לשני תחומי תדר' },
              { name: '550A | רמקול מוגבר, מפוצל לשני תחומי תדר' },
              { name: 'AS-360 | רמקול מוגבר מקצועי נייד "12 עם 2 מיק\' אלחוטיים, DVD/CD/USB/BT, אפקט' },
              { name: 'PA-308 | רמקול מוגבר נייד "8 כולל נגן' },
              { name: 'PA-408 | רמקול מוגבר "8 עם נגן USB/SD/BT' },
              { name: 'PA-512 | מערכת הגברה קומפקטית רמקול "12 כולל 2 מיק\' אלחוטיים, נגן USB/SD, חיבור Bluetooth להשמעת מוזיקה וסוללה נטענת' },
              { name: 'PA-612 | רמקול מוגבר נייד "12, תומך עד 2 מיק\' אלחוטיים, נגן USB/SD וחיבור Bluetooth להשמעת מוזיקה' },
              { name: 'PPA2000BT | מערכת הגברה קומפקטית (COMBO)' },
              { name: '400A | רמקול מוגבר "12' },
              { name: '400N | רמקול מוגבר "12 מקצועי' },
              { name: '500N | רמקול מוגבר "15 מקצועי' },
              { name: '600A | רמקול מוגבר מקצועי "15 קל משקל 1650W' },
              { name: 'PA-302A | מערכת הגברה קומפקטית (COMBO)' },
              { name: 'PA-310 | רמקול מוגבר נייד "10 כולל נגן' },
              { name: 'PA-410 | רמקול מוגבר "10 עם נגן USB/SD/BT' },
              { name: 'PA-515 | מערכת הגברה קומפקטית רמקול "15 כולל 2 מיק\' אלחוטיים, נגן USB/SD, חיבור Bluetooth להשמעת מוזיקה וסוללה נטענת' },
              { name: 'PA-615 | רמקול מוגבר נייד "15 תומך עד 2 מיק\' אלחוטיים, נגן USB/SD וחיבור Bluetooth להשמעת מוזיקה' },
              { name: 'U15Ba | סאב-וופר "15 אקטיבי' },
            ]
          },
          {
            brand: 'TLA',
            products: [
              { name: '900A | רמקול מוגבר "15, 900W' },
              { name: 'TLA 21 - Line Array System | מערכת Line Array מושלמת' },
              { name: 'XDA-15 | רמקול מוגבר קואקסיאלי ברמה הגבוהה ביותר' },
              { name: 'S18A | סאב "18 אקטיבי' },
              { name: 'WS218XA | רמקול סאב אקטיבי "2x18 עוצמתי 4500W' },
              { name: 'B3' },
              { name: 'ΣB115A | סאב-וופר אקטיבי קצה עליון ליישומים בסטנדרט גבוה' },
              { name: 'EB110A | סאב "10 מוגבר' },
              { name: 'MU18Ba | סאב "18 אקטיבי' },
              { name: 'U10a | רמקול אקטיבי רב-שימושי, היענות מלאה' },
              { name: 'MU12Ba | סאב "12 אקטיבי' },
              { name: 'S15 | מערכת הגברה אקטיבית מקצועית' },
            ]
          },
          {
            brand: 'TURBOSOUND',
            products: [
              { name: 'iNSPIRE iP300 | מערכת הגברה קומפקטית וניידת' },
              { name: 'iNSPIRE iP3000 | עמודת רמקולים 2000W עם סאבוו\'פר כפול, מיקסר, מעבד סאונד ושליטה מרחוק' },
              { name: 'iX12 | רמקול "12 מוגבר 1000 וואט כולל DSP, שליטה מרחוק והשמעה דרך Bluetooth' },
              { name: 'סדרת IQ החכמה - להגברה ניידת ולהתקנות | יכולות רשת והדמיית רמקולים - למגוון יישומים' },
              { name: 'סדרת TSP - להגברה ניידת ולהתקנות | עם DSP ויכולות רשת - למגוון יישומים' },
              { name: 'IP1000 / IP2000 | עם DSP, מיקסר דיגיטלי, שליטה מרחוק והזרמת אודיו' },
              { name: 'iX15 | רמקול "15 מוגבר 1000 וואט כולל DSP, שליטה מרחוק והשמעה דרך Bluetooth' },
              { name: 'סדרת MILAN - להגברה ניידת ולהתקנות | זווית העמדה משתנה ואמצעי עיגון - למגוון יישומים' },
            ]
          },
          {
            brand: 'AST',
            products: [
              { name: 'B-5A / B-6A / B-8A | רמקול מוגבר "5 / "6.5 / "8' },
              { name: 'B-5AR | רמקול "5 מוגבר עם שליטה מרחוק על מפסק ההפעלה' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: 'MAS-12 MKIII | מערכת הגברה קומפקטית עם 2 מיק\' אלחוטיים, נגן מובנה וסוללה נטענת' },
            ]
          },
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'B105D | Ultra-Compact 50-Watt PA/Monitor Speaker with MP3 Player and Bluetooth Audio Streaming' },
              { name: 'B115W | רמקול "15 בהספק 1000W, עם 2 כניסות, חיבור Bluetooth להשמעת מוזיקה ועוד' },
              { name: 'B15X | רמקול "15 בהספק 1000W, עם 2 כניסות, DSP מובנה, חיבור Bluetooth להשמעת מוזיקה ועוד' },
              { name: 'DR110DSP | רמקול "10 אקטיבי 1000 וואט כולל מיקסר ו-DSP' },
              { name: 'DR115DSP | רמקול "15 אקטיבי 1400 וואט כולל מיקסר ו-DSP' },
              { name: 'EUROLIVE B112D | רמקול מוגבר נייד 1000 וואט עם מיקסר והכנה לאלחוט' },
              { name: 'EUROLIVE B115D | רמקול מוגבר נייד 1000 וואט עם מיקסר והכנה לאלחוט' },
              { name: 'EUROLIVE B212D | רמקול מוגבר 550 וואט "12' },
              { name: 'MPA30BT | רמקול מוגבר נייד 30W עם חיבור Bluetooth להשמעת מוזיקה וסוללה מובנת' },
              { name: 'B112W | רמקול "12 בהספק 1000W, עם 2 כניסות, חיבור Bluetooth להשמעת מוזיקה ועוד' },
              { name: 'B12X | רמקול "12 בהספק 1000W, עם 2 כניסות, DSP מובנה, חיבור Bluetooth להשמעת מוזיקה ועוד' },
              { name: 'C210 | עמודת רמקולים 200 וואט עם סאב וופר "8, טוויטר "4, זרימת בלוטות\', תאורת LED ושלט רחוק' },
              { name: 'DR112DSP | רמקול "12 אקטיבי 1200 וואט כולל מיקסר ו-DSP' },
              { name: 'Eurolive - סדרת רמקולים מוגברים ניידים' },
              { name: 'EUROLIVE B112MP3 | רמקול מוגבר נייד 1000 וואט עם נגן MP3, מיקסר ועוד' },
              { name: 'EUROLIVE B115MP3 | רמקול מוגבר נייד 1000 וואט עם נגן MP3, מיקסר ועוד' },
              { name: 'EUROLIVE B215D | רמקול מוגבר 550 וואט "15' },
              { name: 'MPA40BT | מערכת הגברה קומפקטית ניידת 40 ואט עם חיבור Bluetooth להשמעת מוזיקה וסוללה מובנת' },
            ]
          },
          {
            brand: 'PROAUDIO',
            products: [
              { name: 'PA-815M | רמקול מוגבר ממוקד מקצועי איכותי' },
            ]
          },
          {
            brand: 'TANNOY',
            products: [
              { name: 'LIVE MINI | רמקול Bluetooth מיני נייד בעל אקוסטיקה מתקדמת' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'קדם-מגברי מיקרופון',
        subcategories: [
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'MIC500USB | קדם מגבר מיקרופון, מבוסס שפופרת וכולל חיבור USB למחשב' },
              { name: 'ULTRAGAIN PRO MIC2200 | ערוץ כפול עם קדם מגבר מיקרופון מבוסס שפופרת, מגבר קו, קופסת DI משולבים' },
              { name: 'TUBE ULTRAGAIN MIC100 | קדם מגבר מבוסס שפופרת (מנורה) כולל לימיטר' },
            ]
          },
          {
            brand: 'KLARK TEKNIK',
            products: [
              { name: 'MIC BOOSTER CT 1 | בוסטר/מגביר מיקרופון דינמי עם קדם מגבר איכותי' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'ציוד אולפן ממוחשב',
        subcategories: [
          {
            brand: 'ממשקי אודיו BEHRINGER',
            products: [
              { name: 'U-Phoria UM2 / UMC22 / UMC202HD / UMC204HD / UMC404HD UMC1820 | סדרת ממשקי אודיו מקצועיים עם מבחר כניסות/יציאות' },
            ]
          },
          {
            brand: 'בקרי ושלטי תוכנה BEHRINGER',
            products: [
              { name: 'FCB1010 Midi Foot Controller | שלט רגל ל-MIDI, כולל דוושות עוצמה/הבעה' },
              { name: 'X-TOUCH COMPACT | Universal USB/MIDI Controller with 9 Touch-Sensitive Motor Faders' },
              { name: 'X-TOUCH MINI | שלט אוניברסלי קומפקטי במיוחד' },
              { name: 'SX-TOUCH | Universal Control Surface with 9 Touch-Sensitive Motor Faders, LCD Scribble Strips and Ethernet/USB/MIDI Interface' },
              { name: 'X-TOUCH EXTENDER | X-TOUCH EXTENDER with 8 Touch-Sensitive Motor Faders, LCD Scribble Strips, USB Hub and Ethernet/USB Interfaces' },
              { name: 'X-TOUCH ONE | Universal Control Surface with Touch-Sensitive Motor Fader and LCD Scribble Strip' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'ציוד Broadcast',
        subcategories: [
          {
            brand: 'AST',
            products: [
              { name: 'BC | BC-88 / BC-82 / BC-44' },
              { name: 'IC-3Z | יחידת שליטת תקשורת / במאי לאולפנים וכו\'' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'HYBRID EA 915A' },
              { name: 'שעון קיר דיגיטלי' },
              { name: 'TC-1/R | בקר טיימר לשעון קיר דיגיטלי' },
              { name: 'תיאור פונקציונלי לאולפן רדיו' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'פנלים, בקרה וקופסאות A/V',
        subcategories: [
          {
            brand: 'פנלים AV סדרת CABLETEK MS',
            products: [
              { name: 'MS-1' },
              { name: 'MS-120 | סדרת פנלים המתאימה לקופסאות 120 (גוויס 3 מקום)' },
              { name: 'MS-19' },
              { name: 'MS-20' },
              { name: 'MS-3' },
              { name: 'MS-31 IR | פנל חיבורים הכולל מפסק הפעלה לומד IR' },
              { name: 'MS-38' },
              { name: 'MS-38 IRSW | פנל חיבורים הכולל מפסק הפעלה לומד IR וכפתור הפעלה' },
              { name: 'MS-57 | פנל הכולל 2 HDMI, רשת, USB ו PL 3.5mm' },
              { name: 'MS-62 | פנל הכולל 2 HDMI' },
              { name: 'MS-12' },
              { name: 'MS-13' },
              { name: 'MS-2' },
              { name: 'MS-22 / MS-23' },
              { name: 'MS-31' },
              { name: 'MS-31 IRSW | פנל חיבורים הכולל מפסק הפעלה לומד IR וכפתור הפעלה' },
              { name: 'MS-38 IR | פנל חיבורים הכולל מפסק הפעלה לומד IR' },
              { name: 'MS-55' },
              { name: 'MS-60 | פנל הכולל חיבור HDMI' },
            ]
          },
          {
            brand: 'פנלים סדרת 120TYPE (גוויס 3 מקום) - מתכת (GS/MS) CABLETEK',
            products: [
              { name: 'MS-120 | סדרת פנלים המתאימה לקופסאות 120 (גוויס 3 מקום)' },
            ]
          },
          {
            brand: 'פנלים סדרת 120 TYPE (גוויס 3 יח\') - פלסטיק',
            products: [
              { name: 'GEWISS 3 units - TYPE 120, ready + modular A/V panels | פנלים סדרת 120 TYPE (גוויס 3 יח\')' },
            ]
          },
          {
            brand: 'קופסאות AV',
            products: [
              { name: 'TABLE BOX | קופסת חיבורים מודולארית לשולחן' },
              { name: 'CABLETEK - MS BOX' },
              { name: 'CABLETEK - MS WALL BOX' },
              { name: 'CABLETEK - MS-22 / MS-23' },
            ]
          },
          {
            brand: 'בקרים ואביזרים AV',
            products: [
              { name: 'UMT - SBLN-8830 | מאריך COMPOSITE ו- AUDIO על CAT5' },
              { name: 'UMT - SC-2 | מעגל בקרה להרמת / הורדת מסך הניזון מאספקת מתח 12V לצורך הפעלתו' },
              { name: 'UMT - WC-24 / WC-242M | בקר אוניברסאלי לומד' },
              { name: 'UMT - SC-1 | מעגל בקרה להרמת / הורדת מסך' },
              { name: 'UMT - WC-10 / WC-12 | Multi functional wall controller series' },
              { name: 'Hidden IR Repeater System | סט מרחיק עיניות IR' },
              { name: 'בקר מקרנים SPC D7' },
              { name: 'CABLETEK - H2VA | מעביר מ-HDMI ל-VGA כולל אודיו' },
            ]
          },
          {
            brand: 'זיווד בגודל חצי RACK',
            products: [
              { name: 'זיווד בגודל חצי RACK' },
            ]
          },
          {
            brand: 'קופסאות "POP UP"',
            products: [
              { name: 'POPUP BOX' },
              { name: 'TABLE BOX | קופסת חיבורים מודולארית לשולחן' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'תאורה – בקרים',
        subcategories: [
          {
            brand: 'UMT',
            products: [
              { name: 'CR-4 | יחידת מיתוג בחיבור טרמינל בלוק' },
              { name: 'WC-5LP | בקר מקליט פקודות DMX' },
            ]
          },
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'LC2412' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'BS-426' },
              { name: 'C.C. LED DMX | בקר זרם קבוע' },
              { name: 'HD-725 | בקר 3 ערוצים, הפעלה אוטומטית / DMX / ידני' },
              { name: 'PR-3192A | בקר מיתכנת 192 ערוצים DMX' },
              { name: 'PR-348 | בקר מיתכנת 48 ערוצים DMX' },
              { name: 'RGB CPR2 | תיאור והוראות הפעלה' },
              { name: 'WLC6+1 | יחידת שליטה לקיר' },
              { name: 'בקר לדים עם שלט רחוק IR' },
              { name: 'HD-723 | בקר לדים להתקנה' },
              { name: 'PR-204 | מפצל תקשורת DMX (SPLITTER)' },
              { name: 'PR-324 | בקר מיתכנת 24 ערוצים DMX' },
              { name: 'PR-384 | בקר מיתכנת 384 ערוצים DMX' },
              { name: 'TRDX-922 | מפצל תקשורת DMX (SPLITTER)' },
              { name: 'בקר לדים LC-II - תיאור והוראות הפעלה' },
            ]
          },
          {
            brand: 'LIGHTEK',
            products: [
              { name: 'AD2 | ממיר ARTNET ל 2 יציאות DMX' },
              { name: 'AD8 | ממיר ARTNET ל 8 יציאות DMX' },
              { name: 'HD-714-CH | בקר LED RGBW/RGBWA' },
            ]
          },
          {
            brand: 'LST',
            products: [
              { name: 'ELC-9 | לוח פיקוד DMX ייעודי לפנסי LED' },
              { name: 'LC-720 | בקר לדים 720W' },
              { name: 'MLC-27 | בקר LED הכולל 27 יציאות (3x9) ושליטת DMX' },
              { name: 'LBD-8 | בקר לדים 4 ערוצים הנשלט ידני / DMX / RS-232' },
              { name: 'LC-III | בקר לדים' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'תאורה – אביזרים',
        subcategories: [
          {
            brand: 'LIGHTEK',
            products: [
              { name: 'LT5001INB | חובק לפנס עד 100 ק"ג' },
              { name: 'LT5005TB | קלמרת לפנס מתקפלת עד 150KG' },
              { name: 'LT5011Y | חובק כפול מאריך 60 ס"מ משקל עד 40KG' },
              { name: 'LT5039B | קלמרה בסיסית עד 60KG' },
              { name: 'LT5003T' },
              { name: 'LT5011 | חובק בודד מאריך 55 ס"מ משקל עד 50KG' },
              { name: 'LT5031 | קלמרה ברזל מקצועית למשקל עד 75KG' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'תאורה – פנסים',
        subcategories: [
          {
            brand: 'פנסי תאורה LIGHTEK',
            products: [
              { name: 'B018 | פנס שטיפה LED WALL WASH 4in1 RGBW 40x10W' },
              { name: 'CMB40-5RGB | Razor Combination LED Moving Head Light RGBW 4in1 Beam And RGB Strobe' },
              { name: 'PIXEL 25 | 25pcs Led COB Matrix' },
              { name: 'SPL 18 RGBWA | פנס 5in1 RGBWA' },
              { name: 'SPL 54 UV | פנס 54x3W אולטרה סגול' },
              { name: 'C1320 | STROBE / WASH, RGBW 1320 LED' },
              { name: 'LMS1000 | STROBE / WASH ממונע, RGBW 1320 LED' },
              { name: 'SPL 18 RGBW | פנס 4in1 RGBW' },
              { name: 'SPL 54 | פנס 54x3W RGBW' },
              { name: 'SPL 54 WW | פנס 54x3W לבן חם' },
            ]
          },
          {
            brand: 'אפקטים',
            products: [
              { name: 'DERBY II | אפקט קרניים מרחבי עם לדים 9W' },
              { name: 'LED MEGA PAR 18 UV | פנס מחליף צבע 18 לדים UV' },
              { name: 'URANUS 18 UV | פנס לד UV (אולטרה סגול)' },
              { name: 'LED GLAUCE B | פנס קרניים צבעוניות' },
              { name: 'LED MENELAUS 54 UV | פנס לד UV (אולטרה סגול) 54x3W' },
              { name: 'VERTIGO' },
            ]
          },
          {
            brand: 'פנסי שטיפה וספוט',
            products: [
              { name: '1112W | LED PROFILE SPOT 120' },
              { name: '1705 | MINI LED PROFILE SPOT 50 ZOOM' },
              { name: '918 | פנס לבן חם עוצמתי שקט לחלוטין' },
              { name: 'BL04 | פנס שטיפה 4 לדים WW 100W' },
              { name: 'COB LED BLINDER 4 | פנס שטיפה 4 לדים CW + WW 2in1 100W' },
              { name: 'LED MENELAUS 54 RGBW | פנס מחליף צבע 54 לדים RGBW' },
              { name: 'LED PAR 64-100 | פנס הכולל LED COB 98W 3000K, זום ידני 13°/28°/39°/49°/57°' },
              { name: 'LED PROFILE COLOR SPOT 180 | פנס PROFILE LED 180W RGBW' },
              { name: 'PL954 | LED PAR 54X5W' },
              { name: 'URANUS 18 WW | פנס לד WW (לבן חם)' },
              { name: '1321 | LED ZOOMING AND IMAGING SPOT 200' },
              { name: '910 | פנס מחליף צבע עוצמתי שקט לחלוטין' },
              { name: 'B004B | led wall washer light' },
              { name: 'COB LED BLINDER 2 | פנס שטיפה 2 לדים CW + WW 2in1 100W' },
              { name: 'LED FOLLOW SPOT 350 | פנס פולוספוט LED 350W' },
              { name: 'LED MENELAUS 54 WW | פנס לד WW (לבן חם) 54x3W' },
              { name: 'P073 | פנס LED COB 80W RGBW 4in1' },
              { name: 'URANUS 18 RGBWA | פנס לד 5in1 RGBWA' },
            ]
          },
          {
            brand: 'פנסים ממונעים',
            products: [
              { name: 'BEAM SPOT 280 | פנס MOVING LIGHT HYBRID BSW R10 איכותי ומקצועי' },
              { name: 'HELIOS 1925' },
              { name: 'LED BEAM 7 ZOOM | פנס 7 לדים 4in1 RGBW 15W הכולל ZOOM' },
              { name: 'LED MOVING WASH 7 RGBW ZOOM PLUS | פנס שטיפה ממונע 7x 4in1 LED RGBW וכולל זום אלקטרוני' },
              { name: 'LED SPOT 90 II | פנס MOVING LIGHT LED 90W' },
              { name: 'M070 | פנס ספיידר MOVING HEAD LED' },
              { name: 'LED BEAM 60 B | פנס BEAM 60W' },
              { name: 'LED MOVING WASH 37 RGBW ZOOM' },
              { name: 'LED SPOT 230 ZOOMING | פנס LED SPOT 230' },
              { name: 'M003 | פנס BEAM 230W 7R' },
            ]
          },
          {
            brand: 'תאורה לינארית',
            products: [
              { name: '089 | פנס תאורה המיועד לצילום, במה, קולנוע ואולפנים' },
              { name: 'GL-502/GL-307 | מנורת עבודה LED' },
              { name: 'TM-12 | סרגל באורך 1 מטר עם לדים 3W בלבן חם' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מכשירי הגברה והשמעה מיוחדים',
        subcategories: [
          {
            brand: 'AST',
            products: [
              { name: '5SVA | בקר שמע נשלט' },
              { name: 'DCM-4 | מיקסר 4 כניסות' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: '3ZC | יחידת שליטה על עוצמת השמעה ל-3 אזורים שונים + בקר שליטה כללי ובורר בין 4 מקורות שונים' },
              { name: 'PA-180 | מגבר קומפקטי באיכות גבוהה עם נגן פנימי' },
              { name: 'ITU-232 | נגן "רדיו אינטרנט", FM, ו USB' },
            ]
          },
          {
            brand: 'STAR VOICE',
            products: [
              { name: 'SV-55 | יחידת השמעה משולבת' },
            ]
          },
          {
            brand: 'UMT',
            products: [
              { name: 'CRU-7 / CRU-7A | מגבר להתקנות משולב קופסת חיבורים ומפסק IR להפעלת מקרנים וכדומה' },
              { name: 'CRU-72 | מגבר התקנות משולב קופסת חיבורים + מפסק ייעודי להפעלת מקרנים וכו\' דרך פקודת IR' },
              { name: 'CU72 | יחידת חיבורים ומגבר שמע חדשני לכיתות לימוד מכל הסוגים' },
              { name: 'UMT SOUND FIELD 55 | מערכת כיתתית להרצאות וכבדי שמיעה' },
              { name: 'CRU-77 | מגבר להתקנות משולב קופסת חיבורים ומפסק IR להפעלת מקרנים וכדומה' },
              { name: 'NM-55H | מגבר שמע להתקנות עם חיבור USB ,VGA ,HDMI ומפסק הפעלה להפעלת מקרנים' },
              { name: 'WC-10 / WC-12 | Multi functional wall controller series' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'NM-PD2 | מגבר להתקנות' },
              { name: 'RETEVIS | מערכת אינטרקום דו כיווני לדלפק עם מחיצת זכוכית' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'נגני / מקליטי CD ו-Solid State',
        subcategories: [
          {
            brand: 'JADE',
            products: [
              { name: 'BCU-300 | נגן CD/USB/SD/BT מקצועי' },
              { name: 'PR-5 | נגן/מקליט USB/SD הכולל חיבור BT להשמעה' },
              { name: 'ITU-232 | נגן "רדיו אינטרנט", FM, ו USB' },
              { name: 'PRA-55 | מגבר קיר עם נגן מובנה' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'STUDIO TECH R-4 | מכשיר הקלטה / השמעה קומפקטי ואיכותי למוזיקה ודיבור' },
            ]
          },
          {
            brand: 'DENON PRO',
            products: [
              { name: 'DN-700C | נגן CD ומדיה עם יכולות רשת' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'רמקולי שופר',
        subcategories: [
          {
            brand: 'JADE',
            products: [
              { name: 'HANDHELD / SHOULDER MEGAPHONE | MP-25' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'H-30RT | שופר W30' },
              { name: 'H-40RT | שופר W40' },
              { name: 'H128 | רמקול שופר 25W' },
              { name: 'H3600 | רמקול שופר מוזיקאלי 2WAY' },
              { name: 'HD150W | דריוור 150W לרמקולי שופר' },
              { name: 'HN16-2 | שופר עגול "16' },
              { name: 'HN656 | שופר עגול "22' },
              { name: 'SC-75T | רמקול שופר 75W' },
              { name: 'UH-25 | שופר 25W' },
              { name: 'H-50T | שופר מקצועי 50W' },
              { name: 'H1314T | שופר 50W עם שנאי קו מובנה' },
              { name: 'HD100TA | דריוור 100W עם שנאי קו 100V לרמקולי שופר' },
              { name: 'HD60ML | דריוור 60W עם שנאי קו 100V לרמקולי שופר' },
              { name: 'HN20-2 | שופר עגול "20' },
              { name: 'SC-20 | רמקול שופר 20W כולל שנאי קו' },
              { name: 'SC-75W | שופר 75W' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'רמקולים שקועי קיר, תקרה ותלייה',
        subcategories: [
          {
            brand: 'AST',
            products: [
              { name: 'R-5 | רמקול קיר/תקרה עגול "5 עם שנאי קו' },
              { name: 'R-8 | רמקול שקוע עגול "8 עם שנאי קו' },
              { name: 'R-6 | רמקול שקוע עגול "6.5 עם שנאי קו' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: 'S26CT | רמקול שקוע עגול הכולל תיבת תהודה "6.5 ושנאי קו, ללא מסגרת' },
              { name: 'CCP-5 | רמקול לתלייה "5.25 כולל שנאי קו' },
              { name: 'CPS-6 | רמקול תלייה דקורטיבי לכיסוי שטחים גדולים' },
              { name: 'CS-6 / CST-6 | רמקול שקוע עגול "6.5 עם ובלי שנאי קו' },
              { name: 'CS-6ET | רמקול שקוע תקרה עגול "6.5 הכולל שנאי קו 100V' },
              { name: 'CS-8E | רמקול שקוע תקרה עגול "8' },
              { name: 'CSP-6 | רמקול שקוע תקרה עם נעילת פטנט "6.5 איכותי הכולל CROSSOVER ושנאי קו' },
              { name: 'IWC-3 | רמקול שקוע, מרובע / עגול, "3 ללא מסגרת' },
              { name: 'IWS-55 | רמקול שקוע, "2x5, מתאים לשימוש כ"סנטר" ושימוש כללי' },
              { name: 'IWS-8 | רמקול שקוע מלבני "8, ללא מסגרת' },
              { name: 'PCS-8C/T | רמקול שקוע קיר/תקרה עגול ללא מסגרת "8 עם/בלי שנאי קו' },
              { name: 'CCP-6 | רמקול לתלייה "6.5 כולל שנאי קו' },
              { name: 'CS-5E | רמקול שקוע תקרה עגול "5.25' },
              { name: 'CS-6E | רמקול שקוע תקרה עגול "6.5' },
              { name: 'CS-8 / CST-8 | רמקול שקוע עגול "8 עם ובלי שנאי קו' },
              { name: 'CS-8ET | רמקול שקוע תקרה עגול "8 הכולל שנאי קו 100V' },
              { name: 'CSP-8 | רמקול שקוע תקרה עם נעילת פטנט "8 איכותי הכולל CROSSOVER ושנאי קו' },
              { name: 'IWS-5 | רמקול שקוע מלבני "5, ללא מסגרת' },
              { name: 'IWS-6 | רמקול שקוע מלבני "6.5, ללא מסגרת' },
              { name: 'PCS-6C/T | רמקול שקוע קיר/תקרה עגול ללא מסגרת "6 עם/בלי שנאי קו' },
              { name: 'IW-55 | רמקול שקוע קיר "2x5 + טוויטר, ללא מסגרת' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'HSR109-6T/8T | רמקול עגול שקוע "6.5 "8 עם שנאי קו' },
              { name: 'HSR318-6T | רמקול כדורי לתלייה, "6.5 כולל שנאי קו' },
              { name: 'PAW4C8/ 5C8 / 6C8 | רמקול מוגן מים להתקנה בקיר או תקרה' },
              { name: 'HSR153-6T | רמקול עגול שקוע "6.5' },
              { name: 'P.A IW-6T / IW-5T | רמקול שקוע "5 / "6.5, מלבני, 2WAY, מסגרת דקה, כולל שנאי קו' },
            ]
          },
          {
            brand: 'A SYSTEMS',
            products: [
              { name: 'CS-8SUB | רמקול סאב שקוע תקרה "8 (סליל כפול)' },
            ]
          },
          {
            brand: 'TANNOY',
            products: [
              { name: 'AMS 5ICT-WH / AMS 5ICT - בצבעים שחור ולבן | רמקול 5" להתקנות בטכנולוגית ICT מ-TANNOY' },
              { name: 'AMS 6ICT-WH / AMS 6ICT - בצבעים שחור ולבן | רמקול 6" להתקנות בטכנולוגית ICT מ-TANNOY' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'כריזה ושליטה דיגיטלית',
        subcategories: [
          {
            brand: 'AST',
            products: [
              { name: '24ZM | מערכת שליטה לכריזה עד 24 אזורים' },
              { name: '5ZM | מיקרופון שולחני לכריזה, 5 אזורים + קבוצת כריזה + כללי וגונג' },
              { name: '8ZM' },
              { name: 'EV-325S | ווסת עוצמה סטריאו (כפול)' },
              { name: 'MLMI M-22 EMII | מיקרופונים צוואר גמיש לכריזה, אינטרקום ושימושים אחרים' },
              { name: '5SVA | בקר שמע נשלט' },
              { name: '6ZC | מיקסר / מטריצה 6 אזורים של חברת AST' },
              { name: 'DM-7 | מיקסר אודיו נשלט + 2 כניסות מיקרופון' },
              { name: 'IA-492 | מגבר 4 אזורים' },
              { name: 'מגבר 6X90 / 6X90LT | מגבר הספק 6 ערוצים עם ובלי שנאי קו, תואם ל- 6ZC' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: 'AP-50 | מגבר עם נגן בהספק 50W RMS' },
              { name: 'PA-350 | מגבר הספק עם שנאי קו 350W' },
              { name: 'TM-1 | מיקרופון שולחני לכריזה' },
              { name: 'ZMX-4 | בקר שמע ל- 4 אזורי השמעה וכולל נגן מובנה' },
              { name: 'MM-8 | מערבל צליל מיוחד למערכות כריזה' },
              { name: 'PAP-180 / PAP-250 / PAP-350 | מגברי כריזה והשמעה הכוללים שנאי קו ומתח גיבוי 24V' },
              { name: 'ZMC-12 + SRU-12 | מערכת כריזה ומיתוג עד 12 אזורים' },
            ]
          },
          {
            brand: 'UMT',
            products: [
              { name: '5AB | יחידת שליטה לקיר עם 5 לחצני בורר מגע יבש + 2 לחצני הפעלה ON/OFF' },
              { name: 'CRU-360 | מגבר CLASS D סדרת Sound Field' },
              { name: 'SC-1 | מעגל בקרה להרמת / הורדת מסך' },
              { name: 'SFM-4 | מיקסר קומפקטי חצי "19' },
              { name: 'WC-24 / WC-242M | בקר אוניברסאלי לומד' },
              { name: 'PMC-12 | מיקרופון כריזה מאוזן עם לחצן צד' },
              { name: 'SC-2 | מעגל בקרה להרמת / הורדת מסך הניזון מאספקת מתח 12V לצורך הפעלתו' },
              { name: 'WC-10 / WC-12 | Multi functional wall controller series' },
              { name: 'XO-421 | קרוסאובר אלקטרוני קומפקטי' },
            ]
          },
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'ULTRALINK PRO MX882 | מיקסר / ספליטר 8 ערוצים' },
              { name: 'ULTRAZONE ZMX8210 V2 | מיקסר 8 ערוצים עם 3 יציאות נפרדות (מתאים לשימוש כמיקסר אזורים) מתאים להתקנה ב RACK' },
              { name: 'ULTRAZONE ZMX2600 | ספליטר / מיקסר אזורים, 2 כניסות סטריאו ל 6 יציאות סטריאו' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: '66-01004 | בורר 5 מקורות שמע עם יחידת ממסר עקיפה (24V) לכריזת חירום ווסת עוצמת שמע 100V' },
              { name: 'GRRC-4SV | פנל בקרת עוצמה ומקור שמע' },
              { name: 'HVC5002 | ווסת עוצמה 2x100W 8ohm' },
              { name: 'MBC-16Z | תוכנה לשליטה על עד 16 אזורים המתממשקת עם מיקסרים דיגיטאליים BEHRINGER ו MIDAS' },
              { name: 'WLC6+1 | יחידת שליטה לקיר' },
              { name: 'הוראות חיבור והפעלה ATEIS UAP G2' },
              { name: 'HVC120-1-30d | ווסת עוצמה עם יחידת ממסר עקיפה (24V) לכריזת חירום 100V' },
              { name: 'HVC812D | ווסת עוצמה עם יחידת ממסר עקיפה (24V) לכריזת חירום 100V' },
              { name: 'UAPg2 | מעבד אודיו DSP ניתן לתכנות ולשרשור' },
              { name: 'בקר מקרנים SPC D7' },
              { name: 'קופסת קיר תקנית למיקרופון כריזת חירום | קופסת קיר ייחודית ותקנית למיקרופוני כריזת חירום' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'כבלים',
        subcategories: [
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'CT100 בודק כבלים | בודק כבלים מבוסס מעבד' },
              { name: 'CT200 - בודק כבלים 8-מצבים מבוסס מיקרו-מעבד | XLR, speakON, 1/4" / 1/8" TRS, RCA, RJ45, MIDI, USB כולל מחולל צליל' },
            ]
          },
          {
            brand: 'CABLETEK',
            products: [
              { name: 'DC404 | כבל זוג צמוד לא מאוזן גיד + סיכוך' },
              { name: 'DMX004 | כבל DMX איכותי' },
              { name: 'HPC-80 | כבל דק מבודד להשחלה וחיווט' },
              { name: 'MUL601 ,MUL602 ,MUL603 ,MUL604 ,MUL606 ,MUL608 | מולטי כבלים מקצועיים' },
              { name: 'SC504 | כבל רמקול 2x2mm פנדל' },
              { name: 'SNP004 | מולטי כבל מוכן' },
              { name: 'DC407 | כבל זוג צמוד מאוזן 2 גידים + סיכוך' },
              { name: 'HDBT6A | כבל CAT6A U/FTP (100Ω 1-500MHz)' },
              { name: 'MC-202, MC-203, MC-212 | כבל מיקרופון מקצועי' },
              { name: 'SC502 | כבל רמקול 2x1.3mm פנדל' },
              { name: 'SCW075B / SCW150 / SCW250 | כבל רמקול זוג צמוד 2x0.75 / 2x1.15 / 2x2.5' },
              { name: 'SPK-102, 103, 104 | כבלי פנדל לרמקולים' },
            ]
          },
          {
            brand: 'KLOTZ',
            products: [
              { name: 'FOAHD030 | כבל אקטיבי-אופטי FOAHD HDMI 2.0 AOC עם מחבר פריק' },
              { name: 'GRG1PP GREYHOUND | כבל סטריאו עם מחברים מאוזנים' },
              { name: 'KT-CC MiniLink Pro | זוג כבל סטריאו עם תקעי rca מתכתיים, מצופים זהב' },
              { name: 'KT-JJ MiniLink Pro | זוג כבלי סטריאו עם תקעי PL מתכת, מצופים זהב' },
              { name: 'LSC425YS | כבל רמקול מרובה גידים 2.5 מ\'מ²' },
              { name: 'LY240 | כבלי רמקול דו-אקסיאלי 4.0 מ\'מ²' },
              { name: 'MC2000SW | כבל מיקרופון מעולה עם נדן שרוול עבה במיוחד' },
              { name: 'P0122Y | כבל חיווט זוגי מאוזן' },
              { name: 'כבל KY7 MiniLink PRO מפצל | פיצול מתקע מיני 3.5 מ"מ לשני תקעים RCA' },
              { name: 'GRG1MP GREYHOUND | כבל מיקרופון חיבור מאוזן XLR ל- PL' },
              { name: 'KIKKG..PR pro | כבל לכלי נגינה עם מחבר זוויתי' },
              { name: 'KT-CJ MiniLink Pro | זוג כבלי סטריאו עם תקעי rca ו-PL מתכתיים, מצופים זהב' },
              { name: 'KY5 MiniLink PRO | כבל Y מחבר מיני 3.5 מ"מ ל-2X מחברי 6.35 מ"מ' },
              { name: 'LSC825YS | כבל רמקול מרובה גידים 2.5 מ\'מ²' },
              { name: 'M2FM | כבל מיקרופון באיכות גבוהה עם שרווול עבה במיוחד ומחברי Neutrik' },
              { name: 'MY206 | כבל מיקרופון מקצועי - שרוול חיצוני PVC' },
              { name: 'SLW124XE | מולטי StraightLink עם 16 קווים ו-12/4 מחברי XLR, אדמה משותפת' },
              { name: 'כבל פיצול KY9 MiniLink PRO | מפצל מחבר מיני 35 מ"מ ל-2X מחברי XLR זכר' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'אביזרים ופתרונות',
        subcategories: [
          {
            brand: 'מגני כבלים',
            products: [
              { name: 'תעלות דריכה | מגני כבלים / קאפות, 2 תעלות' },
            ]
          },
          {
            brand: 'ארונות RACK ואביזריהם',
            products: [
              { name: 'BEHRINGER - 19" Rack Ears - 70 HP Eurorack | מתלי זיווד "19 ל-Eurorack' },
              { name: 'BEHRINGER - EURORACK 104 | מכלול יורוראק' },
              { name: 'BEHRINGER - 19" Rack Ears for 80 HP Eurorack | מתלי זיווד "19 ל-Eurorack' },
              { name: 'BEHRINGER - EURORACK GO | זיווד נייד 2 שורות ל-140 HP עם ספק כוח' },
              { name: 'CABLETEK - RD011 | זיווד נייד 2 שורות ל-140 HP עם ספק כוח' },
              { name: 'CABLETEK - RS1U19 | מדף נשלף 1U לארון RACK' },
            ]
          },
          {
            brand: 'מכשירים בעבור לקויי שמיעה',
            products: [
              { name: 'JADE - IRM Multi Propose IR system | הוראות הפעלה מערכת שידור שמע IR' },
              { name: 'UMT - UMT SOUND FIELD 55 | מערכת כיתתית להרצאות וכבדי שמיעה' },
              { name: 'מערכת לכבדי שמיעה, תרגום, הדרכה וכל מטרה סדרה PROAUDIO - 5000 | מערכת מקצועית לכבדי שמיעה, תרגום והדרכה' },
              { name: 'ריכוז מידע בהקשר למערכות נגישות שמע בעבור אירועים בפני קהל וישיבות' },
            ]
          },
          {
            brand: 'מערכת קשר במה ואולפן',
            products: [
              { name: 'AST - IC-3Z | יחידת שליטת תקשורת / במאי לאולפנים וכו\'' },
              { name: 'AST - SP-2Z | מפצל Intercom שני אזורים + ספק' },
              { name: 'MT-HS Mixtech - Intercom Belt Pack | מערכות אינטרקום לבמה, אולפנים ותאטרון' },
            ]
          },
          {
            brand: 'עזרי חיווט ומיתוג BEHRINGER',
            products: [
              { name: 'CT100 בודק כבלים | בודק כבלים מבוסס מעבד' },
              { name: 'HD400 | מבטל HUM, מיני' },
              { name: 'CT200 - בודק כבלים 8-מצבים מבוסס מיקרו-מעבד | 8- XLR, speakON, 1/4" / 1/8" TRS, RCA, RJ45, MIDI, USB כולל מחולל צליל' },
              { name: 'ULTRAPATCH PRO PX3000 | לוח חיבורים (Patch), שלשה מצבים, רב שימושי' },
            ]
          },
          {
            brand: 'קופסאות חיבור ישיר - DI',
            products: [
              { name: 'AST - DB-01 | קופסת חיבור ישיר - DI פאסיבית' },
              { name: 'BEHRINGER - ULTRA-DI DI100 | קופסת DI סופר עמידה למטרות אולפן ומופעים' },
              { name: 'BEHRINGER - ULTRA-DI DI20 | קופסת DI/מפצל קו דו ערוצי מקצועי' },
              { name: 'BEHRINGER - ULTRA-G GI100 | קופסת חיבור ישיר - DI - אקטיבית, עם הדמית מגברי גיטרות' },
              { name: 'BEHRINGER - ULTRA-DI PRO DI800 | קופסת חיבור ישיר 8 ערוצים מופעל מתח פאנטום או חשמל' },
              { name: 'KLARK TEKNIK - DI 10A | קופסת חיבור ישיר DI Box אקטיבית איכות גבוהה' },
              { name: 'KLARK TEKNIK - DW 20BR | מקלט סטריאו אלחוטי Bluetooth לשידור איכותי' },
            ]
          },
          {
            brand: 'קופסאות עיתונאים',
            products: [
              { name: 'AST - Press Box PB-12 | קופסת עיתונאים 12 יציאות' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'אוזניות',
        subcategories: [
          {
            brand: 'אוזניות אלחוטיות',
            products: [
              { name: 'JADE - AP-72T | מערכת IN-EAR מוניטור איכותית ואקונומית' },
              { name: 'BEHRINGER - BB 560M | אוזניות מקצועיות באיכות גבוהה עם מיקרופון מובנה' },
              { name: 'BEHRINGER - HC 2000B | אוזניות אלחוטיות באיכות אולפן עם קישוריות Bluetooth' },
              { name: 'BEHRINGER - HC 2000BNC | אוזניות אלחוטיות מבטלות רעש עם קישוריות Bluetooth' },
              { name: 'STAR VOICE - STAR VOICE DA-601 | אוזניות אלחוטיות למסיבות שקט, קריוקי, אולפנים, SILENT DISCO וכל מטרה' },
              { name: 'STAR VOICE - SV-55 | יחידת השמעה משולבת' },
              { name: 'TANNOY - LIFE BUDS | אוזניות אלחוטיות אודיופילס להאזנה איכותית' },
            ]
          },
          {
            brand: 'מגברי אוזניות BEHRINGER',
            products: [
              { name: 'AMP800 | מגברי אוזניות, קומפקטי' },
              { name: 'MICROMON MA400 | מגבר מוניטור-אוזניות אולטרה קומפקטי' },
              { name: 'POWERPLAY HA8000 V2 | מגבר אוזניות 8 ערוצים' },
              { name: 'HA400 | מגברי אוזניות, מיני' },
              { name: 'POWERPLAY HA6000 | מגבר אוזניות 6 ערוצים כולל טונים גבוהים ונמוכים לכל יציאה' },
            ]
          },
          {
            brand: 'אוזניות ומערכות ראש BEHRINGER',
            products: [
              { name: 'BDJ 1000 | אוזניות DJ מקצועיות באיכות גבוהה' },
              { name: 'BH 770 | אוזניות אולפן סגורות חיצונית, היענות בס מורחבת' },
              { name: 'HC 2000 | אוזניות מוניטור אולפן' },
              { name: 'HO 66 | שלישיית אוזניות תואמות' },
              { name: 'HPM1000-BK | אוזניות רב תכליתיות' },
              { name: 'HPS5000 | אוזניות אולפן מקצועיות' },
              { name: 'HPX4000 | אוזניות תקליטן מקצועיות' },
              { name: 'BH 470 | אוזניות מוניטור אולפן' },
              { name: 'HC 200 | אוזניות DJ מקצועיות באיכות גבוהה' },
              { name: 'HLC 660M | אוזניות רב תכליתיות עם מיקרופון מובנה' },
              { name: 'HPM1000 | אוזניה בסיסית' },
              { name: 'HPS3000 | אוזניות אולפניות' },
              { name: 'HPX2000 | אוזניות תקליטן' },
              { name: 'HPX6000 | אוזניות מקצועיות' },
            ]
          },
          {
            brand: 'אוזניות ומערכות ראש MAESTRO',
            products: [
              { name: 'GMH D 8.400 D | מערכת ראש (אוזניה כפולה + מיקרופון) איכותית, מאסיבית ומקצועית' },
              { name: 'GMH D 8.400 S | מערכת ראש (אוזניה בודדת + מיקרופון) איכותית, מאסיבית ומקצועית' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מחברים',
        subcategories: [
          {
            brand: 'CABLETEK',
            products: [
              { name: 'PROCAT6AF | High Quality Toolless STP Cat.6A/Cat.6 RJ45 keystone jack' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מגברים',
        subcategories: [
          {
            brand: 'PRO TECH',
            products: [
              { name: 'PA 302A | COMPACT AUDIO DRIVING SYSTEM' },
            ]
          },
          {
            brand: 'AST',
            products: [
              { name: 'AMP-36 | מגבר קומפקטי איכותי' },
              { name: 'DA-825 | המגברים באיכות צליל גבוהה ביותר ומסוג CLASS D נצילות מקסימלית' },
              { name: 'IA-492 | מגבר 4 אזורים' },
              { name: 'מגבר 6X90 / 6X90LT | מגבר הספק 6 ערוצים עם ובלי שנאי קו, תואם ל- 6ZC' },
              { name: 'EPA 48 | מגבר מיני להתקנות' },
              { name: 'MAX400D | Class D High End Stereo Power Amplifier' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: 'AP-50 | מגבר עם נגן בהספק 50W RMS' },
              { name: 'MAP-300 | מגבר מיקסר 4 כניסות 150W RMS' },
              { name: 'MAX250-D | מגבר דיגיטאלי 2x250W' },
              { name: 'PA-180HZ' },
              { name: 'PAP-180 / PAP-250 / PAP-350 | מגברי כריזה והשמעה הכוללים שנאי קו ומתח גיבוי 24V' },
              { name: 'MAX-500Q | מגבר 4 ערוצים Class D, איכות Hi-Fi' },
              { name: 'PA-180 | מגבר קומפקטי באיכות גבוהה עם נגן פנימי' },
              { name: 'PA-350 | מגבר הספק עם שנאי קו 350W' },
              { name: 'PRA-55 | מגבר קיר עם נגן מובנה' },
            ]
          },
          {
            brand: 'PHONIC',
            products: [
              { name: 'IAMP 3020 DSP | מגבר class D בהספק 3000W עם DSP מובנה' },
            ]
          },
          {
            brand: 'UMT',
            products: [
              { name: 'CRU-360 | מגבר CLASS D סדרת Sound Field' },
              { name: 'CRU-7 / CRU-7A | מגבר להתקנות משולב קופסת חיבורים ומפסק IR להפעלת מקרנים וכדומה' },
              { name: 'CRU-77 | מגבר להתקנות משולב קופסת חיבורים ומפסק IR להפעלת מקרנים וכדומה' },
              { name: 'NM-55H | מגבר שמע להתקנות עם חיבור USB ,VGA ,HDMI ומפסק הפעלה להפעלת מקרנים' },
              { name: 'CRU-72 | מגבר התקנות משולב קופסת חיבורים + מפסק ייעודי להפעלת מקרנים וכו\' דרך פקודת IR' },
              { name: 'CU72 | יחידת חיבורים ומגבר שמע חדשני לכיתות לימוד מכל הסוגים' },
              { name: 'SF-240 / SF-240FBD | מגבר Class D סדרת Sound Field' },
            ]
          },
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'A500 | מגבר מוניטור 2X250W' },
              { name: 'EP2000 | מגבר הספק 2x1000W into 2ohms' },
              { name: 'KM1700 | Professional 1700-Watt Stereo Power Amplifier with ATR (Accelerated Transient Response)' },
              { name: 'A800 | מגבר מוניטור 2x400 Watts into 4 Ohms' },
              { name: 'EP4000 | מגבר הספק 2x2000W into 2 Ohms' },
              { name: 'KM750 | Professional 750-Watt Stereo Power Amplifier with ATR (Accelerated Transient Response)' },
              { name: 'NM-PD2 | מגבר להתקנות' },
            ]
          },
          {
            brand: 'Labgruppen',
            products: [
              { name: 'CA1201 | מגבר מסחרי 120W עם הסמכת Energy Star' },
              { name: 'CA1202 | מגבר מסחרי 2X120W עם אישור Energy Star' },
              { name: 'CA2402 | מגבר מסחרי 2X240W עם אישור Energy Star' },
              { name: 'D 10:4L | מגבר 1,000W עם 4 ערוצי יציאה גמישים, מעבד אות LAKE ורשת שמע ליישומי התקנה' },
              { name: 'D 40:4L | מגבר 4,000W עם 4 יציאות גמישות, מעבד אות LAKE ורשת שמע ליישומי התקנה' },
              { name: 'E 10:4 | מגבר 1,000W עם 4 ערוצי יציאה גמישים ליישומי התקנה' },
              { name: 'E 2:2 | מגבר 200W עם 2 יציאות גמישות ליישומי התקנה' },
              { name: 'E 5:4 | מגבר 500 W עם 4 ערוצי יציאה גמישים ליישומי התקנה' },
              { name: 'FP 14000 | מגבר 14,000W עם 2 ערוצים כולל ניטור רשת NomadLink ובקרה ייעודית ליישומי סיור' },
              { name: 'IPD 1200 | מגבר 1200W מבוקר DSP' },
              { name: 'LUCIA 120/1-70 | מגבר מונו 120W קומפקטי ליישומי התקנה במהירות גבוהה 70 וולט' },
              { name: 'LUCIA 120/2M | מגבר מטריקס קומפקטי 2X60W עבור יישומי התקנה' },
              { name: 'LUCIA 240/2 | מגבר קומפקטי 2X120W ליישומי התקנה' },
              { name: 'LUCIA 60/1-70 | מגבר מונו 60W קומפקטי ליישומי התקנה עם עכבה גבוהה 70 וולט' },
              { name: 'LUCIA 60/2M | מגבר מטריקס קומפקטי 2X30W ליישום התקנה' },
              { name: 'PLM 12K44 SP | מגבר 12,000W עם 4 יציאות גמישות עם מחברי SpeakON, מעבד אות LAKE ורשת דיגיטלית ליישומי סיור' },
              { name: 'PLM 5K44 | מגבר 5,000 ואט עם 4 יציאות גמישות, מעבד LAKE ורשת שמע דיגיטלית ליישומי סיור' },
              { name: 'CA2401 | מגבר מסחרי 240W עם הסמכת Energy Star' },
              { name: 'CA602 | מגבר מסחרי של 2X60W עם הסמכת Energy Star' },
              { name: 'D 80:4L | מגבר 8,000W עם 4 יציאות גמישות, מעבד אות LAKE ורשת דיגיטלית ליישומי התקנות' },
              { name: 'D 120:4L | מגבר 12,000W עם 4 יציאות גמישות, מעבד אות LAKE ורשת שמע דיגיטלית ליישומי התקנה' },
              { name: 'E 12:2 | מגבר 1,200 ואט עם 2 ערוצי יציאה גמישים' },
              { name: 'E 4:2 | מגבר 400W עם 2 ערוצי יציאה גמישים ליישומי התקנה' },
              { name: 'E 8:2 | מגבר 800 ואט עם 2 ערוצי יציאה גמישים' },
              { name: 'FP 7000 | מגבר 7,000W דו-ערוצי עם ניטור רשת NomadLink ובקרה ייעודית ליישומי סיור' },
              { name: 'IPD 2400 | מגבר מבוקר מעבד אות קומפקטי 2,400W' },
              { name: 'LUCIA 120/2 | מגבר מטריקס קומפקטי 2X60W עבור יישומי התקנה' },
              { name: 'LUCIA 240/1-70 | מגבר מונו 240 וואט קומפקטי ליישומי התקנה של עכבה גבוהה 70 וולט' },
              { name: 'LUCIA 240/2M | מגבר מטריקס קומפקטי 2X120W עבור יישומי התקנה' },
              { name: 'LUCIA 60/2 | מגבר קומפקטי 2X30 וואט ליישומי התקנה' },
              { name: 'PDX3000 | מגבר דו ערוצי עם בקרת DSP בהספק 3000W' },
              { name: 'PLM 20K44 SP | מגבר 20,000W עם 4 ערוצי פלט גמישים על מחברי SpeakON, מעבד אות של LAKE ורשת דיגיטלית ליישומי סיור' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מוניטורים לשדה שמיעה קרוב',
        subcategories: [
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'B2031A - מוניטור מפוצל ל-2 תחומי תדר | מוניטור אולפני לבקרת צליל, מדויק, מפוצל ל-2 תחומים' },
              { name: 'MEDIA 40USB | מוניטור דיגיטלי ברזולוציה גבוהה עם USB' },
              { name: 'MS16 - מוניטור אישי אקטיבי | מוניטור אישי עם מגבר מובנה' },
              { name: 'Studio 50USB - מוניטור אולפני מוגבר ברזולוציה גבוהה כולל USB מ-Behringer' },
              { name: 'C5A | מוניטור הוינטאג\' המיתולוגי טווח מלא 30 וואט' },
              { name: 'MONITOR 1C | מוניטור קומפקטי במיוחד' },
              { name: 'NEKKST K5 / K6 / K8 / K10S | סדרת מוניטורים אולפניים עם התאמה אקוסטית לכל חדר' },
              { name: 'TRUTH B2030A | מוניטור ביקורת אולפני מדויק, רזולוציה גבוהה, מפוצל ל-2 תחומים' },
            ]
          },
          {
            brand: 'TANNOY',
            products: [
              { name: 'GOLD 5 | מוניטור "5 קואקסייאלי פרימיום אולפני לשדה שמיעה קרוב 200 וואט' },
              { name: 'GOLD 8 | מוניטור "8 קואקסייאלי פרימיום אולפני לשדה שמיעה קרוב 300W' },
              { name: 'GOLD 7 | מוניטור "6.5 קואקסייאלי פרימיום אולפני לשדה שמיעה קרוב 300W' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מוזיקה אלקטרונית ועיצוב סאונד',
        subcategories: [
          {
            brand: 'מחוללי ומעבדי צליל BEHRINGER',
            products: [
              { name: '110 VCO/VCF/VCA | מודול אנלוגי מגבר, פילטר ומתנד נשלטי מתח' },
              { name: '121 DUAL VCF | פילטר כפול נשלט מתח' },
              { name: '140 DUAL ENVELOPE/LFO | מחולל מעטפת כפול ומתנד תדר נמוך לאיפנון' },
              { name: '172 PHASE SHIFTER/DELAY/LFO | מסיט מופע, השהייה, מתנד תדר נמוך' },
              { name: '297 DUAL PORTAMENTO/CV UTILITIES | מחולל פורטמנטו ומתח כפול' },
              { name: '902 VOLTAGE CONTROLLED AMPLIFIER | מגבר נשלט מתח' },
              { name: '904A VOLTAGE CONTROLLED LOW PASS FILTER | מסנן תדר גבוה נשלט מתח' },
              { name: '911 ENVELOPE GENERATOR | מחולל מעטפת' },
              { name: '914 FIXED FILTER BANK | בנק פילטרים קבועים Eurorack' },
              { name: '921A OSCILLATOR DRIVER - Eurorack | מנוע מתנד (אוסילטור) אגדי למוזיקה אלקטרונית' },
              { name: '923 FILTERS' },
              { name: '962 SEQUENTIAL SWITCH' },
              { name: '994 MULTIPLES | מודול פיצולי אות או מתח' },
              { name: 'CP1A | מודול ספק כוח ליורוראק' },
              { name: 'CP3A-M MIXER | מודול מיקסר אנלוגי ליורוראק' },
              { name: 'EURORACK 104 | מכלול יורוראק' },
              { name: 'EURORACK RACK-EU | קיט זיווד יורוראק עם ספק כוח' },
              { name: '112 Dual VCO | מתנד נשלט מתח כפול' },
              { name: '130 DUAL VCA | מודול פילטר נשלט מתח כפול' },
              { name: '150 RING MOD/NOISE/S&H/LFO | רינג מודולטור, מחולל רעש, מחולל אקראיות ותדר איפנון נמוך' },
              { name: '173 QUAD GATE/MULTIPLES | ארבעה מתגי אודיו ומכפילים' },
              { name: '305 EQ/MIXER/OUTPUT | מודול מיקסר, יציאות ואיקיו' },
              { name: '903A RANDOM SIGNAL GENERATOR | מחולל אות אקראי' },
              { name: '904B VOLTAGE CONTROLLED HIGH PASS FILTER | מסנן תדרים נמוכים נשלט מתח ל-Eurorack' },
              { name: '911A DUAL TRIGGER DELAY | מודול השהייה כפול מופעל טריגר' },
              { name: '921 מתנד נשלט מתח | מודול VCO אנלוגי אגדי ל-Eurorack' },
              { name: '921B מתנד נשלט מתח | מודול VCO אנלוגי אגדי ל-Eurorack' },
              { name: '961 INTERFACE | ממיר טריגר רב-ערוצי' },
              { name: '992 CONTROL VOLTAGES' },
              { name: '995 ATTENUATORS | מנחתי עוצמה ליורוראק' },
              { name: 'CP35 ATTENUATORS | מנחתי עוצמה ליורוראק' },
              { name: 'CP3A-O OSCILLATOR CONTROLLER | שלט מתנד ל-Eurorack' },
              { name: 'EURORACK GO | זיווד נייד 2 שורות ל-140 HP עם ספק כוח' },
              { name: 'EURORACK STAND 3-TIER | מעמד יורוראק 3 קומות' },
            ]
          },
          {
            brand: 'כלי נגינה והפקה BEHRINGER',
            products: [
              { name: 'CAT - Duophonic Analog Synthesizer | סינטיסייזר אנלוגי אגדי דואופוני, שולחני או ל-Eurorack' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מארזים',
        subcategories: [
          {
            brand: 'כללי',
            products: [
              { name: '6002 | מארז קשיח בגודל 55x42x24.5 ס"מ כולל טרולי עם גלגלים' },
              { name: '8003 | מארז קשיח בגודל 46.5x40x16 ס"מ' },
              { name: 'R3U | מארז "19 3U מפלסטיק קשיח' },
              { name: '8002 | מארז קשיח בגודל 46.5x40x24 ס"מ' },
              { name: '8004 | מארז קשיח בגודל 46.5x40x29 ס"מ' },
            ]
          },
          {
            brand: 'CABLETEK',
            products: [
              { name: 'ESC-305 | גלגלות במגוון גדלים' },
              { name: 'ESL-306 | גלגלת' },
              { name: 'RS1U19 | מדף נשלף 1U לארון RACK' },
              { name: 'RD011 | ארונות RACK ממתכת במגוון גדלים' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מערכות הדרכה, תרגום והשמעה אלחוטיות',
        subcategories: [
          {
            brand: 'מערכות אל-חוטיות להדרכה ותרגום',
            products: [
              { name: 'JADE - AP-72T | מערכת IN-EAR מוניטור איכותית ואקונומית' },
              { name: 'PROAUDIO - מערכת מקצועית לכבדי שמיעה, תרגום והדרכה' },
              { name: 'JADE - IRM Multi Propose IR system | הוראות הפעלה מערכת שידור שמע IR' },
            ]
          },
          {
            brand: 'אוזניות אלחוטיות',
            products: [
              { name: 'JADE - AP-72T | מערכת IN-EAR מוניטור איכותית ואקונומית' },
              { name: 'UMT - DA-601 | מערכת אוזניות אלחוטית מרובת משתמשים' },
              { name: 'STAR VOICE - STAR VOICE DA-601 | אוזניות אלחוטיות למסיבות שקט, קריוקי, אולפנים, SILENT DISCO וכל מטרה' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מעמדים ואביזרי עזר למולטימדיה',
        subcategories: [
          {
            brand: 'כללי',
            products: [
              { name: 'KS050 | מסגרת שולחן מתקפלת' },
              { name: 'SS039 | מעמד שולחני לרמקולים' },
              { name: 'LT005-5 | מתקן אוניברסלי לטאבלט בגודל "6 - "10' },
              { name: 'SS040 | מעמד תפיסה בשולחן לרמקולים' },
            ]
          },
          {
            brand: 'זרועות למסכים',
            products: [
              { name: 'LDT09-C012 | נגן זרוע מתכווננת למסך עם חיבור מהיר לשולחן / מוט הברגה' },
              { name: 'LDT14-C012 | זרוע מתכווננת למסך עם חיבור מהיר לשולחן / מוט הברגה' },
              { name: 'LDT11-C024 | זרוע מתכווננת ל 2 מסכים עם חיבור מהיר לשולחן / מוט הברגה' },
            ]
          },
          {
            brand: 'מעמדים רצפתיים למסכי TV',
            products: [
              { name: 'TTL04-610TW | מעמד רצפתי טלסקופי מאסיבי עם רגלים כפולות וגלגלים למסך מ 60" עד 100" הכולל 2 מדפים מתכווננים למכשירים' },
              { name: 'TTV03H-46TW | מעמד רצפתי טלסקופי עם גלגלים למסך מ 30" עד 70" הכולל 2 מדפים מתכווננים למכשירים' },
            ]
          },
          {
            brand: 'משטחי עמידה',
            products: [
              { name: 'STM02-3 | משטח עמידה למניעת עייפות' },
            ]
          },
          {
            brand: 'מתקני תלייה למסכי טלוויזיה',
            products: [
              { name: 'LVW02-46T | מתקן תלייה קופץ (POP OUT) למסך טלוויזיה המיועד לקירות וידאו' },
              { name: 'LVW06-46T | מתקן תלייה קופץ (POP OUT) למסך טלוויזיה המיועד לקירות וידאו' },
            ]
          },
          {
            brand: 'מתקני תלייה למקרנים',
            products: [
              { name: 'PRB-16-01S | זרוע תליה למקרן' },
              { name: 'PRB-18F | זרוע תלייה למקרן צמוד תקרה' },
              { name: 'PRB-2 | זרוע תליה למקרן' },
              { name: 'PRB-16-02S | זרוע תליה למקרן' },
              { name: 'PRB-18S | זרוע תליה למקרן' },
            ]
          },
          {
            brand: 'שולחן מתכוונן',
            products: [
              { name: 'M02-23R | שולחן מתכוונן לגובה חשמלי בעזרת 2 מנועים לשמירת יציבות' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מעמדים להגברה ותאורה',
        subcategories: [
          {
            brand: 'מעמדים-FENIX',
            products: [
              { name: 'AC-523B | מנשא הובלה עם ידית וגלגלים למעמדים מסדרת NEMESIS' },
              { name: 'AT-06B | Frontal loading lifting tower' },
              { name: 'MEGARA 300 | Telescopic lifting tower with removable legs' },
              { name: 'NEMESIS PRO | Telescopic lifting tower' },
              { name: 'AC-568 | מעמד ל-4 רמקולים, סדרת MEGARA / ELV' },
              { name: 'MEGARA 150 | Telescopic lifting tower with removable legs' },
              { name: 'NEMESIS 110 | Light, affordable and easy-to-carry FENIX lifter' },
            ]
          },
          {
            brand: 'אביזרים - FENIX',
            products: [
              { name: 'AC-508 | מעמד מתכוונן לטראס עד 40 ס"מ' },
              { name: 'AC-521B | מעמד מתכוונן לטראס עד 29 ס"מ' },
              { name: 'AC-535 | מעמד מתכוונן עם הדקים לטראס עד 40 ס"מ' },
              { name: 'AC-569 | מעמד למערכות ליין-אריי בינוניות/קטנות' },
              { name: 'AC-520B | בר רוחבי מכני (צינור)' },
              { name: 'AC-522B | מעמד מתכוונן לטראס מקבילי עם תמיכה בודדת' },
              { name: 'AC-567B | תמיכה טלסקופית בצורת C למערכות סאונד' },
              { name: 'AC-591 | מתאם צינורי 28מ"מ מסדרת MEGARA / ELV' },
            ]
          },
          {
            brand: 'כללי',
            products: [
              { name: 'A-104 | פלטת רצפה לפנס, גובה 18 ס"מ, משקל מקס\' 9 ק"ג' },
              { name: 'A-203 | מעמד תאורה, גובה מקס\' 3 מ\', משקל מקס\' 30 ק"ג' },
              { name: 'MF-6808 | מתאם "5/8, מיועד לחיבור על סטנד תאורה' },
              { name: 'B-306 | מעמד תאורה, גובה מקס\' 4.7 מ\', משקל מקס\' 30 ק"ג' },
              { name: 'MF-6809 | מתאם "3/8, מיועד לחיבור על סטנד תאורה' },
            ]
          },
          {
            brand: 'מעמדים למיקרופונים',
            products: [
              { name: 'MS007 | מעמד למיקרופון נמוך ("גמדי")' },
              { name: 'RSM180 | מעמד רצפה למיקרופון איכותי' },
              { name: 'PRO200 | מעמד מיקרופון מקצועי' },
            ]
          },
          {
            brand: 'מעמדים לתאורה ומקרנים',
            products: [
              { name: 'LS014 | מעמד תאורה' },
              { name: 'LS022 | מעמד תאורה' },
              { name: 'LS017 | מעמד תאורה' },
              { name: 'MUS020 | מעמד רצפתי למקרן' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מיקרופונים',
        subcategories: [
          {
            brand: 'מיקרופונים דיאפרגמה רחבה ו-Ribbon',
            products: [
              { name: 'BEHRINGER - B-1 | מיקרופון קונדנסר אולפני רחב-דיאפרגמה' },
              { name: 'BEHRINGER - B-2 PRO - מיקרופון קונדנסר בעל דיאפרגמה "1 כפולה רחבה, לאיכות צליל ללא פשרות' },
            ]
          },
          {
            brand: 'מיקרופונים קונדנסר',
            products: [
              { name: 'JADE - HS-12B | Professional Headset Microphone' },
              { name: 'UMT - CB-220 | מיקרופון דש' },
              { name: 'UMT - GC-306 | מיקרופון גוזנייק קונדנסר עם חיווי' },
              { name: 'UMT - HS-06 | מיקרופון קונדנסר Back Electret מדונה מאחז אוזן' },
              { name: 'UMT - PCM-5000 | Professional Condenser Microphone' },
              { name: 'UMT - GC-160L | מיקרופון גוזנייק קונדנסר עם חיווי' },
              { name: 'UMT - HM-501 | Overhead microphone' },
              { name: 'UMT - KM-WP88 | מיקרופון מדונה מוגן מים איכותי' },
              { name: 'MIPRO - MM-707P | מיקרופון קונדנסר קרדיואיד (כיווני)' },
              { name: 'MIPRO - MU-55L / LS | Professional Lavalier Microphone' },
              { name: 'BEHRINGER - B-5 - קונדנסר אמיתי, דיאפרגמה יחידה | קונדנסר עם דיאפרגמה מצופה זהב 18מ"מ' },
              { name: 'BEHRINGER - C-1 - מיקרופון קונדנסר לאולפן | מיקרופון קונדנסר אולפני' },
              { name: 'BEHRINGER - C-2 - זוג מיקרופונים אולפניים | זוג מיקרופוני קונדנסור מקצועיים' },
              { name: 'BEHRINGER - ECM8000 - מיקרופון למדידות | מיקרופון מדידות רב-כיווני' },
              { name: 'BEHRINGER - C-1U | מיקרופון קונדנסר דיאפרגמה רחבה בחיבור USB' },
              { name: 'BEHRINGER - C-3 - מיקרופון אולפני בעל דיאפגרמה כפולה | מיקרופון קונדנסור מקצועי' },
              { name: 'BEHRINGER - SB 78A | מיקרופון קונדנסר כיווני' },
              { name: 'MIXTECH - EM-265B | Hypercardioid Condenser Microphone' },
            ]
          },
          {
            brand: 'מיקרופונים דינמיים',
            products: [
              { name: 'PROTECH - PRO-58 | Super Cardioid Dynamic Microphone' },
              { name: 'PROTECH - PRO-58 TRIO | שלישיית מיקרופונים דינמים במארז' },
              { name: 'UMT - GD-730 | מיקרופון גוזנייק דינמי' },
              { name: 'UMT - PMC-12 | מיקרופון כריזה מאוזן עם לחצן צד' },
              { name: 'BEHRINGER - B 906 | מיקרופון דינמי להקלטות כלים ושירה' },
              { name: 'BEHRINGER - SL 75C | מיקרופון כיווני/קרדיואידי דינמי' },
              { name: 'BEHRINGER - SL 85S | מיקרופון דינמי כיווני עם מתג' },
              { name: 'BEHRINGER - ULTRAVOICE XM8500 | מיקרופון כיווני דינמי' },
              { name: 'BEHRINGER - BA 85A | מיקרופון דינמי סופר-כיווני' },
              { name: 'BEHRINGER - SL 84C | מיקרופון דינמי כיווני' },
              { name: 'BEHRINGER - TA 312S | Dynamic Gooseneck Microphone' },
              { name: 'BEHRINGER - XM1800S - מיקרופונים דינמיים | סט 3 מיקרופונים דינמיים' },
            ]
          },
          {
            brand: 'מיקרופונים משטח/גבול BOUNDRY',
            products: [
              { name: 'UMT - BM 38 | BOUNDRY MICROPHONE' },
              { name: 'UMT - BM38/O | Omnidirectional Condenser Boundary Microphone' },
              { name: 'BEHRINGER - BA 19A | מיקרופון משטח Boundary קונדנסר להקלטות כלים' },
            ]
          },
          {
            brand: 'מיקרופוני כריזה / שולחני',
            products: [
              { name: 'AST - 24ZM | מערכת שליטה לכריזה עד 24 אזורים' },
              { name: 'AST - 88ZM' },
              { name: 'AST - 5ZM | מיקרופון שולחני לכריזה, 5 אזורים + קבוצת כריזה + כללי וגונג' },
              { name: 'AST - MLMI M-22 EMII | מיקרופונים צוואר גמיש לכריזה, אינטרקום ושימושים אחרים' },
              { name: 'JADE - BASELED | בסיס שולחני למיקרופון קונדנסר עם נורית חיווי' },
              { name: 'JADE - ZMC-12 + SRU-12 | מערכת כריזה ומיתוג עד 12 אזורים' },
              { name: 'JADE - TM-1 | מיקרופון שולחני לכריזה' },
              { name: 'UMT - GC-160L | מיקרופון גוזנייק קונדנסר עם חיווי' },
              { name: 'UMT - GC-306 | מיקרופון גוזנייק קונדנסר עם חיווי' },
              { name: 'UMT - PMC-12 | מיקרופון כריזה מאוזן עם לחצן צד' },
              { name: 'UMT - GD-730 | מיקרופון גוזנייק דינמי' },
              { name: 'קופסת קיר תקנית למיקרופון כריזת חירום | קופסת קיר ייחודית ותקנית למיקרופוני כריזת חירום' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מיקרופונים אלחוטיים',
        subcategories: [
          {
            brand: 'VHF',
            products: [
              { name: 'STAR VOICE - The Star Voice VHF-302 | ערכת קריוקי, 2 מיקרופונים אלחוטיים' },
              { name: 'PRO VHF-301 | סט מיקרופון אלחוטי VHF' },
            ]
          },
          {
            brand: 'UHF',
            products: [
              { name: 'JADE - IU-2071 PRO | סט אלחוטי כפול UHF' },
              { name: 'UMT - MICPRO/ECO UHF-5100 | סט מיקרופון אלחוטי מקצועי' },
              { name: 'UMT - UHF-5100 WALL SOUND FIELD | סט מיקרופון אלחוטי ACT להתקנה על קיר' },
              { name: 'UMT - UHF-5200 | סט מיקרופון אלחוטי איכותי' },
              { name: 'MIPRO - סדרה 707 אנלוגית ו 8 דיגיטאלית' },
            ]
          },
          {
            brand: 'מיקרופונים אלחוטים IR',
            products: [
              { name: 'STAR VOICE - IR-360 | מיקרופון IR איכותי וחדשני כפול' },
              { name: 'מיקרופון אלחוטי IR' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מיקסרים',
        subcategories: [
          {
            brand: 'PRO TECH',
            products: [
              { name: 'PA 302A | COMPACT AUDIO DRIVING SYSTEM' },
            ]
          },
          {
            brand: 'AST',
            products: [
              { name: '5SVA | בקר שמע נשלט' },
              { name: 'DCM-4 | מיקסר 4 כניסות' },
              { name: 'DM-7 | מיקסר אודיו נשלט + 2 כניסות מיקרופון' },
            ]
          },
          {
            brand: 'JADE',
            products: [
              { name: 'MAP-300 | מגבר מיקסר 4 כניסות 150W RMS' },
              { name: 'MM-8 | מערבל צליל מיוחד למערכות כריזה' },
              { name: 'MF-802 | מיקסר 8 ערוצים הכולל נגן USB/SD עם חיבור BT להשמעת מוזיקה, אפקט, EQ' },
              { name: 'ZMX-4 | בקר שמע ל- 4 אזורי השמעה וכולל נגן מובנה' },
            ]
          },
          {
            brand: 'MIDAS',
            products: [
              { name: 'DL16 | מולטי דיגטאלי / קופסת במה למיקסר דיגיטאלי, 16 כניסות, 8 יציאות וחיבור ULTRANET' },
              { name: 'DM12 | מיקסר 12 ערוצים (8 ערוצי מונו + 2 ערוצי סטריאו)' },
              { name: 'HUB4 | Monitor System Hub with 4 PoE Ports for Personal Mixers or Compatible Stage Boxes, 48/44.1 kHz AES50 In and Through, StageCONNECT and 16-Channel Analogue Out' },
              { name: 'M32C | מיקסר דיגיטאלי 40 ערוצים (ללא כניסות אנלוגיות, עם 2 חיבורי AES50) המתאים להתקנה בארון RACK' },
              { name: 'MR12 | מיקסר דיגיטאלי קומפקטי 12 ערוצים הנשלט ע"י טאבלט/מחשב/נייד עם נגן מובנה' },
              { name: 'DL32 | מולטי דיגטאלי / קופסת במה למיקסר דיגיטאלי, 32 כניסות, 16 יציאות וחיבור ULTRANET' },
              { name: 'DM16 | מיקסר 16 ערוצים (12 ערוצי מונו + 2 ערוצי סטריאו)' },
              { name: 'M32 LIVE | מיקסר דיגיטאלי 40 ערוצים' },
              { name: 'M32R LIVE | מיקסר דיגיטאלי 40 ערוצים (22 כניסות פיזיות + אופציה להרחבה)' },
              { name: 'MR18 | מיקסר דיגיטאלי 18 ערוצים הנשלט ע"י טאבלט/מחשב/נייד עם חיבור USB למחשב להקלטה רב-ערוצית' },
            ]
          },
          {
            brand: 'PHONIC',
            products: [
              { name: 'AM14GE | מיקסר 14 ערוצים הכולל חיבור BT להשמעה, נגן/מקליט TF, קומפרסור לערוצי המיקרופון, אפקט מובנה, EQ גרפי וחיבור USB למחשב' },
              { name: 'AM6GE | מיקסר 6 ערוצים הכולל חיבור BT להשמעה, נגן/מקליט TF, קומפרסור לערוצי המיקרופון, חיבור USB למחשב' },
              { name: 'CELEUS 200 | מיקסר 6 ערוצים הכולל חיבור BT להשמעה, אפקט מובנה, נגן/מקליט USB, קומפרסור לערוץ המיקרופון ו EQ גרפי' },
              { name: 'CELEUS 600 | מיקסר 12 ערוצים הכולל חיבור BT להשמעה, אפקט מובנה, נגן/מקליט USB, קומפרסור לערוץ המיקרופון ו EQ גרפי' },
              { name: 'AM5GE | מיקסר 5 ערוצים הכולל חיבור BT להשמעה, נגן/מקליט TF, קומפרסור לערוץ המיקרופון, חיבור USB למחשב' },
              { name: 'AM8GE | מיקסר 8 ערוצים הכולל חיבור BT להשמעה, נגן/מקליט TF, קומפרסור לערוצי המיקרופון, אפקט מובנה וחיבור USB למחשב' },
              { name: 'CELEUS 400 | מיקסר 12 ערוצים הכולל חיבור BT להשמעה, אפקט מובנה, נגן/מקליט USB, קומפרסור לערוץ המיקרופון ו EQ גרפי' },
            ]
          },
          {
            brand: 'BEHRINGER',
            products: [
              { name: 'EURODESK SX2442FX | מיקסר 24 ערוצים הכולל 2 מולטי אפקט מובנים ו EQ גרפי' },
              { name: 'EURORACK PRO RX1202FX | מיקסר 12 ערוצים המתאים ל RACK עם מולטי אפקט מובנה' },
              { name: 'MICROMIX MX400 | מיקסר 4 ערוצי LINE' },
              { name: 'S32 | מולטי דיגטאלי / קופסת במה למיקסר דיגיטאלי, 32 כניסות, 16 יציאות וחיבור ULTRANET' },
              { name: 'SD8 | מולטי דיגטאלי / קופסת במה למיקסר דיגיטאלי, 8 כניסות, 8 יציאות ו 2 חיבורי ULTRANET' },
              { name: 'ULTRAZONE ZMX2600 | ספליטר / מיקסר אזורים, 2 כניסות סטריאו ל 6 יציאות סטריאו' },
              { name: 'X AIR X18 | מיקסר דיגיטאלי שולחני 18 ערוצים הנשלט ע"י טאבלט/מחשב/נייד עם חיבור USB למחשב להקלטה רב-ערוצית' },
              { name: 'X AIR XR16 | מיקסר דיגיטאלי קומפקטי 16 ערוצים הנשלט ע"י טאבלט/מחשב/נייד עם נגן מובנה' },
              { name: 'X32 | מיקסר דיגיטאלי 40 ערוצים' },
              { name: 'X32 CORE | מיקסר דיגיטאלי 40 ערוצים (ללא כניסות אנלוגיות, עם 2 חיבורי AES50) המתאים להתקנה בארון RACK' },
              { name: 'X32 RACK | מיקסר דיגיטאלי 40 ערוצים (22 כניסות פיזיות + אופציה להרחבה) המתאים להתקנה בארון RACK' },
              { name: 'XENYX 1002B | מיקסר 10 ערוצים עם אפשרות להפעלה ע"י סוללות' },
              { name: 'XENYX 1202 | מיקסר 12 ערוצים' },
              { name: 'XENYX 1204USB | מיקסר 12 ערוצים הכולל קומפרסור לערוצי המיקרופון וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX 502 | מיקסר קומפקטי 5 ערוצים' },
              { name: 'XENYX Q1002USB | מיקסר 10 ערוצים הכולל קומפרסור לערוצי המיקרופון וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX Q1204USB | מיקסר 12 ערוצים הכולל קומפרסור לערוצי המיקרופון וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX Q802USB | מיקסר 8 ערוצים הכולל קומפרסור לערוצי המיקרופון וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX1202USB | ערוצים עם קומפרסור לכניסות, מולטי אפקט KLARK TEKNIK וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX1222USB | ערוצים עם קומפרסור ב-4 ערוצי מיקרופון, מולטי אפקט, EQ גרפי וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX1832USB | מיקסר 18 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט, EQ גרפי וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX2442USB | 24 ערוצים עם קומפרסור לערוצי המיקרופון, מולטי אפקט של KLARK TEKNIK וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX X1204USB | מיקסר 12 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX X1622USB | מיקסר 16 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX X2222USB | מיקסר 22 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט וחיבור למחשב להשמעה/הקלטה' },
              { name: 'EURODESK SX3242FX | מיקסר 32 ערוצים הכולל 2 מולטי אפקט מובנים ו EQ גרפי' },
              { name: 'EURORACK PRO RX1602 V2 | מיקסר 16 ערוצים רב תכליתי' },
              { name: 'S16 | מולטי דיגטאלי / קופסת במה למיקסר דיגיטאלי, 16 כניסות, 8 יציאות וחיבור ULTRANET' },
              { name: 'SD16 | מולטי דיגטאלי / קופסת במה למיקסר דיגיטאלי, 16 כניסות, 8 יציאות ו 4 חיבורי ULTRANET' },
              { name: 'ULTRALINK PRO MX882 | מיקסר / ספליטר 8 ערוצים' },
              { name: 'ULTRAZONE ZMX8210 V2 | מיקסר 8 ערוצים עם 3 יציאות נפרדות (מתאים לשימוש כמיקסר אזורים) מתאים להתקנה ב RACK' },
              { name: 'X AIR XR12 | מיקסר דיגיטאלי קומפקטי 12 ערוצים הנשלט ע"י טאבלט/מחשב/נייד עם נגן מובנה' },
              { name: 'X AIR XR18 | מיקסר דיגיטאלי 18 ערוצים הנשלט ע"י טאבלט/מחשב/נייד עם חיבור USB למחשב להקלטה רב-ערוצית' },
              { name: 'X32 COMPACT | מיקסר דיגיטאלי 40 ערוצים (22 כניסות פיזיות + אופציה להרחבה)' },
              { name: 'X32 PRODUCER | מיקסר דיגיטאלי 40 ערוצים (22 כניסות פיזיות + אופציה להרחבה) "19' },
              { name: 'XENYX 1002 | מיקסר 10 ערוצים' },
              { name: 'XENYX 1002FX | מיקסר 10 ערוצים הכולל מולטי אפקט מובנה' },
              { name: 'XENYX 1202FX | מיקסר 12 ערוצים הכולל מולטי אפקט מובנה' },
              { name: 'XENYX 302USB | מיקסר קומפקטי 5 ערוצים היכול לשמש גם כרטיס קול למחשב' },
              { name: 'XENYX 802 | מיקסר 8 ערוצים (2 כניסות מונו/מיקרופון ו 2 כניסות סטריאו)' },
              { name: 'XENYX Q1202USB | מיקסר 12 ערוצים הכולל קומפרסור לערוצי המיקרופון וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX Q502USB | מיקסר קומפקטי 5 ערוצים וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX1002USB | מיקסר 10 ערוצים, קומפרסור לערוצי המיקרופון, מולטי אפקט של KLARK TEKNIK וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX1204USB | 12 ערוצים עם קומפרסור לערוצי המיקרופון, מולטי אפקט KLARK TEKNIK וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX1622USB | 16 ערוצים עם קומפרסור לערוצי המיקרופון, מולטי אפקט של KLARK TEKNIK וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX2222USB | מיקסר 22 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט של KLARK TEKNIK וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX QX602MP3 | מיקסר 6 ערוצים הכולל נגן MP3 ומולטי אפקט מובנה' },
              { name: 'XENYX X1222USB | מיקסר 16 ערוצים הכולל קומפרסור ל 4 ערוצי המיקרופון הראשונים, מולטי אפקט, EQ גרפי וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX X1832USB | מיקסר 18 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט, EQ גרפי וחיבור למחשב להשמעה/הקלטה' },
              { name: 'XENYX X2442USB | מיקסר 24 ערוצים הכולל קומפרסור לערוצי המיקרופון, מולטי אפקט וחיבור למחשב להשמעה/הקלטה' },
            ]
          },
          {
            brand: 'A SYSTEMS',
            products: [
              { name: 'DM434 | מיקסר 4 אזורים' },
            ]
          },
          {
            brand: 'CABLETEK',
            products: [
              { name: 'MS-20' },
            ]
          },
          {
            brand: 'Labgruppen',
            products: [
              { name: 'CM41 | מיקסר 4 כניסות ויציאה אחת' },
            ]
          },
          {
            brand: 'UMT',
            products: [
              { name: 'SFM-4 | מיקסר קומפקטי חצי "19' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'ממירים, מפצלים, מטריצות, מרחיקים ופרזנטציה AV',
        subcategories: [
          {
            brand: 'פרזנטציה',
            products: [
              { name: 'B51PS | יחידת פרזנטציה / ממתג 5 כניסות ליציאה אחת תומך 4K, נשלט IR/RS-232' },
              { name: 'PS-52H | יחידת פרזנטציה 5x2' },
            ]
          },
          {
            brand: 'מרחיקים',
            products: [
              { name: 'B70 | סט הארכה HDMI (HDBaseT)/RS-232/IR ע"ג כבל CAT6, מרחק 70 מ\', רזולוציה 4:4:4 4K כולל HDR' },
              { name: 'E100U | סט הארכה HDMI (HDBaseT)/RS-232/IR/רשת ע"ג כבל CAT6, מרחק 100 מ\', תומך עד 4K' },
              { name: 'E50C | סט הארכה HDMI/IR עד מרחק 50 מ\' על CAT5e/6/7, תומך 1080P' },
              { name: 'R55 | מאריך קו HDMI (Repeater)' },
              { name: 'WPB70T | משדר HDMI ל HDBaseT אקטיבי לקיר כולל IR' },
              { name: 'BS11 | מאריך קו (Repeater) ‏HDMI, ‏4K עם Scaling' },
              { name: 'E4100 | סט הארכה HDMI/IR עד מרחק 100 מ\' OVER IP, תומך 1080P' },
              { name: 'E70S | סט הארכה HDMI (HDBaseT)/RS-232/IR ע"ג כבל CAT6, מרחק 70 מ\', תומך עד 4K' },
              { name: 'WPB200T | משדר VGA+AUDIO/HDMI ל HDBaseT אקטיבי לקיר כולל IR' },
            ]
          },
          {
            brand: 'מטריצות',
            products: [
              { name: '922H70 | מטריצה HDBaseT, 2X2 4K, נשלטת RS-232' },
              { name: '944F | מטריצה 4x4 Seamless HDMI, נשלטת RS-232/רשת' },
              { name: 'B42A | מטריצה 4 כניסות 2 יציאות HDMI2.0' },
              { name: 'B44C | מטריצה 4 כניסות 4 יציאות HDMI2.0 18G, נשלטת IR/RS-232' },
              { name: 'A88IA | מטריצה 8 כניסות 8 יציאות HDMI/IR, נשלט RS-232/IR/רשת' },
              { name: 'B44 | מטריצה 4x4 עם מפרק אודיו HDMI2.0 18G, נשלטת IR/RS-232/רשת' },
            ]
          },
          {
            brand: 'ממירים',
            products: [
              { name: 'M330 | ממיר מ VGA + אודיו ל HDMI' },
              { name: 'M903U | מחלץ HDMI1.4 ליציאת אודיו ויציאת HDMI' },
              { name: 'S008 | ממיר 3G SDI ל HDMI' },
              { name: 'SA01 | ממיר HDMI/DVI/VGA/AV ל SDI' },
              { name: 'MB01 | מחלץ HDMI2.0 ליציאת אודיו ויציאת HDMI' },
              { name: 'S009 | ממיר HDMI ל 3G SDI' },
            ]
          },
          {
            brand: 'ממתגים',
            products: [
              { name: '841SLS50 | ממתג HDMI SEAMLESS 4:1 (בורר/מסך מפוצל) נשלט IR/RS-232 כולל IR HUB' },
              { name: '891MV | ממתג 9:1 Seamless כולל מפרק אודיו, נשלט IR/RS-232/רשת' },
              { name: '931V | ממתג 3 כניסות ליציאה 1 עם מפרק אודיו ו ARC' },
              { name: 'S41SL | ממתג SDI SEAMLESS 4:1' },
              { name: '931 | ממתג HDMI, 3 כניסות ליציאה אחת' },
              { name: 'B51PS | ‏מתג 4:1 Seamless, ‏2 מצבי עבודה, בורר בין כניסות או מציג את 4 הכניסות יחד במסך מפוצל, נשלט IR/RS-232 וכולל HUB IR מובנה' },
            ]
          },
          {
            brand: 'מפצלים',
            products: [
              { name: '814S50S | מפצל 1:4 ע"ג CAT5E/CAT6 (כולל 4 מרחיקים) עד 50 מ\' ו IR HUB מובנה' },
              { name: '9812 | מפצל 1:2 של HDMI 1.4 עם EDID' },
              { name: 'B14H | מפצל 1:4 של HDMI2.0' },
              { name: 'S14 | מפצל 1:4 SDI' },
              { name: 'A12 | מפצל 1:2 של HDMI 2.0 עם EDID' },
              { name: 'B14H70 | ‏מפצל 1:4 HDBaseT עם LOOP HDMI כולל 4 מרחיקים' },
            ]
          },
          {
            brand: 'CABLETEK',
            products: [
              { name: 'H2VA | מעביר מ-HDMI ל-VGA כולל אודיו' },
              { name: 'HDBT6A | כבל CAT6A U/FTP (100? 1-500MHz)' },
            ]
          },
          {
            brand: 'KLARK TEKNIK',
            products: [
              { name: 'DN 30R | מקלט אודיו DANTE דו-ערוצי באיכות גבוהה' },
              { name: 'DN 30T | משדר אודיו DANTE דו-ערוצי באיכות גובהה' },
              { name: 'DW 20BR | מקלט סטריאו אלחוטי Bluetooth לשידור איכותי' },
            ]
          },
          {
            brand: 'Xilica',
            products: [
              { name: 'Solaro FR1 DSP | מערכת כניסות/יציאות מודולרית עם מעבד חזק במיוחד' },
              { name: 'SOLARO QR1 | DSP חזק ברוחב חצי ארון זיווד' },
            ]
          },
        ],
        products: []
      },
      {
        name: 'מעבדי צליל ודינמיקה, אפקטים',
        subcategories: [
          {
            brand: 'מעבדים דינמיים',
            products: [
              { name: 'UMT - XO-421 | קרוסאובר אלקטרוני קומפקטי' },
              { name: 'KLARK TEKNIK - DM8000 | מיקסר/מעבד אודיו דיגיטלי להתקנות קבע' },
              { name: 'BEHRINGER - SPL3220 | MULTIBAND DYNAMICS PROCESSOR' },
            ]
          },
        ],
        products: []
      },
    ]
  },
  { 
    slug: 'fire-detection',
    src: '/icons/fire-detection.svg', 
    alt: 'מערכות כיבוי וגילוי אש', 
    title: 'גילוי וכיבוי אש', 
    bg: '/slides/fire-extinguisher.jpg', 
    description: 'מערכות גילוי אש מוסמכות ת"י עם גלאי עשן וחום, לוחות בקרה וספרינקלרים. תחזוקה שנתית מקצועית.',
    subtitle: 'מערכות גילוי וכיבוי אש מוסמכות לפי תקן ישראלי',
    contentSections: [
      {
        title: 'מערכות גילוי וכיבוי אש',
        text: `חברת בת קול מספקת ומתקינה ציוד גילוי וכיבוי אש עבור מבנים, מלווה אתכם החל משלבי התכנון ועד למסירת מערכת וקבלת אישורי התקן הדרושים.

חברתנו מוסמכת לבצע בדיקות שנתיות ותחזוקת מערכות כולל מתן אישור תקינות לרשות הכבאות הארצית. לחברתנו צוות רחב של טכנאים מתקינים ונותני שירות מוסמכים בעלי ניסיון רב בתחום.

להלן סוגי המערכות עליהן אנו מוסמכים:`
      },
      {
        images: [
          '/products/fire-telefire.jpg',
          '/products/fire-mircom.jpg',
          '/products/fire-teletek.jpg'
        ],
        imagesTitles: ['TELEFIRE', 'MIRCOM', 'TELETEK']
      }
    ],
    variants: [
      { name: 'גלאי עשן אופטי', description: 'גלאי עשן מוסמך ת"י 1220' },
      { name: 'גלאי חום', description: 'גלאי טמפרטורה קבועה/עולה' },
      { name: 'לוח בקרה אש', description: 'מרכזיית גילוי אש מוסמכת' },
      { name: 'צופר/סירנה אש', description: 'התרעה קולית וחזותית' },
      { name: 'ספרינקלר אוטומטי', description: 'מערכת כיבוי אוטומטית' },
    ]
  },
  { 
    slug: 'emergency-call',
    src: '/icons/emergency-call.svg', 
    alt: 'מערכות קריאת מצוקה', 
    title: 'מערכות קריאת מצוקה', 
    bg: '/slides/sos-button.jpg', 
    description: 'לחצני מצוקה לקשישים ונכים עם מערכות אזעקה אישיות וחיבור ישיר למוקד חירום מקצועי.',
    subtitle: 'פתרונות קריאת מצוקה להגנה על יקיריכם',
    contentImage: '/products/emergency-call-system.jpg',
    contentImageTitle: 'מערכת קריאת מצוקה BCF',
    contentText: `מערכת קריאת מצוקה לאחות/בלנית

מערכת קריאת אחות דיגיטלית מתקדמת המבוססת על מערך כרטיסים דיגיטליים. המערכת מותאמת לעד 128 אזורים ופותחה ומיוצרת במעבדות בת-קול.

המערכת כוללת:
• מערך כרטיסים (כרטיס חד-כתובתי ודו-כתובתי)
• רכזת בעלת לוח תצוגה גרפי ולחצני שליטה
• זיהוי מספר החדר ו/או חדר שירותים בלוח התצוגה
• צליל חירום מושמע במקביל לקריאה

המערכת מתאפיינת בפשטות הפעלה, אמינות גבוהה וקלות תחזוקה.`,
    variants: [
      { name: 'לחצן מצוקה אישי', description: 'תליון/צמיד עם לחצן SOS' },
      { name: 'לחצן קיר אמבטיה', description: 'לחצן עמיד במים לחדרי רחצה' },
      { name: 'מערכת אזעקה ביתית', description: 'יחידה מרכזית עם חיוג אוטומטי' },
      { name: 'חיבור למוקד חירום', description: 'ניטור 24/7 עם צוות רפואי' },
      { name: 'גלאי נפילה', description: 'זיהוי אוטומטי של נפילות' },
    ]
  },
  { 
    slug: 'smoke-release',
    src: '/icons/smoke-release.svg', 
    alt: 'מערכות שחרור עשן', 
    title: 'מערכות שחרור עשן', 
    bg: '/slides/smoke-release.jpg', 
    description: 'מערכות פתיחת חלונות ופתחי אוורור אוטומטיים לשחרור עשן בעת שריפה. עמידה בתקן הישראלי.',
    subtitle: 'מערכות שחרור עשן לפינוי בטוח בעת חירום',
    contentSections: [
      {
        title: 'מערכת שחרור עשן דגם BCF SRS-248',
        subtitle: 'תיאור המוצר',
        text: `רכזת שליטה ובקרה על מנועי פתיחה וסגירה של חלונות לשחרור עשן.

הרכזת מחוברת אינטגראלית למערכת גילוי אש שבאתר. בזמן גילוי עשן, רכזת גילוי האש שולחת פקודה לרכזת שחרור עשן והיא נותנת פקודה למנועים של החלונות להיפתח אוטומטית על מנת לשחרר את העשן.

כמו כן, ניתן להפעיל את המערכת גם באופן ידני.`,
        image: '/products/smoke-release-system.jpg'
      },
      {
        title: 'מבנה המערכת',
        text: `• מארז מתכת עם מנעול
• לחצני שליטה ונוריות בקרה
• ספק כח 220V/24V
• מעגל אלקטרוני עם שבב תוכנה
• לחצן להפעלה ידנית
• מגעים יבשים לחיבור מערכת גילוי אש`,
        image: '/products/smoke-release-schema.jpg'
      }
    ],
    variants: [
      { name: 'חלון שחרור עשן', description: 'חלון אוטומטי עם מנוע חשמלי' },
      { name: 'פתח גג אוטומטי', description: 'כיפת שחרור עשן לגגות' },
      { name: 'לוח בקרה שחרור עשן', description: 'מרכזיית שליטה מוסמכת' },
      { name: 'לחצן שחרור ידני', description: 'הפעלה ידנית במקרה חירום' },
      { name: 'ממשק לגילוי אש', description: 'חיבור למערכת גילוי קיימת' },
    ]
  },
  { 
    slug: 'intercom',
    src: '/icons/intercom.svg', 
    alt: 'אינטרקום ובקרת כניסה', 
    title: 'אינטרקום ובקרת כניסה', 
    bg: '/slides/intercom-panel.jpg', 
    description: 'מערכות אינטרקום וידאו מתקדמות, בקרת כניסה ביומטרית עם כרטיסי מגנט ושלטים למשרדים ובניינים.',
    subtitle: 'פתרונות אינטרקום ובקרת כניסה חכמים',
    contentSections: [
      {
        title: 'מערכות אינטרקום לכל מטרה',
        text: `• מערכות אינטרקום לבתים משותפים
• מערכות אינטרקום לווילות
• מערכות אינטרקום-טלוויזיה
• מערכות מיוחדות לבתי חולים ולבתי אבות
• מערכות בקרת כניסה`
      },
      {
        title: 'מבצע חדש !!',
        subtitle: '2,500 ש"ח',
        text: `שירותים נוספים במידת הצורך:

• התקנה 1,000 ש"ח
• מנעול חשמלי כולל התקנה 350 ש"ח
• לחצן פנימי אנטי ונדלי במידת הצורך 250 ש"ח`,
        image: '/products/intercom-dahua-kit.jpg',
        isPromo: true
      },
      {
        title: 'אינטרקום DAHUA IP',
        text: `ניתן לבצע פעולות פתיחה וצפייה דרך האפליקציה מהסמארטפון.

מאפיינים נוספים:
• פתיחה באמצעות קוד סודי
• פתיחה על ידי כרטיס קירבה
• אפשרות לחבר למערכת מצלמות אבטחה
• כתב ברייל בפנל לקצרי ראייה
• מסך צבעוני 7" DAHUA
• סוויץ' 4 פורטים + POE`
      },
      {
        title: 'ההמלצה שלנו לבנייני מגורים',
        subtitle: 'מערכת אינטרקום BCF',
        images: [
          '/products/intercom-bcf-monitor.jpg',
          '/products/intercom-bcf-indoor.jpg',
          '/products/intercom-bcf-panel.jpg'
        ]
      }
    ],
    variants: [
      { name: 'אינטרקום וידאו IP', description: 'מערכת וידאו דיגיטלית מתקדמת' },
      { name: 'פנל כניסה ביומטרי', description: 'זיהוי טביעת אצבע/פנים' },
      { name: 'קורא כרטיסים RFID', description: 'בקרת כניסה בכרטיס מגנטי' },
      { name: 'מסך דירה 7"', description: 'מסך צבעוני עם הקלטה' },
      { name: 'מנעול חשמלי', description: 'מנעול אלקטרוני לשערים' },
    ]
  },
  { 
    slug: 'pa-equipment',
    src: '/icons/pa-equipment.svg', 
    alt: 'ציוד כריזה מקצועי', 
    title: 'ציוד כריזה מקצועי', 
    bg: '/slides/pa-microphones.jpg', 
    description: 'ציוד כריזה מקצועי לבתי ספר, מפעלים ומוסדות ציבור. מיקרופונים, רמקולים ומערכות שליטה.',
    subtitle: 'ציוד כריזה איכותי למוסדות ומפעלים',
    variants: [
      { name: 'מיקרופון שולחני', description: 'מיקרופון כריזה עם מתג PTT' },
      { name: 'מיקרופון אלחוטי', description: 'מיקרופון יד/דש אלחוטי' },
      { name: 'רמקול פעמון', description: 'רמקול כריזה חיצוני' },
      { name: 'מגבר כריזה 120W', description: 'מגבר עם 5 אזורים' },
      { name: 'בורר אזורים', description: 'יחידת בחירת אזורי כריזה' },
    ],
    categoryGroups: [
      {
        groupTitle: 'רמקולים ומגברים BCF',
        categories: [
          { 
            name: 'רמקולים תקרתיים', 
            products: [
              { name: 'HSR-126T | רמקול "5 גריל לבן + חיפוי' },
              { name: 'BCF-153-6TH | רמקול "6.5 גריל מתכת' },
              { name: 'HWR-111T | רמקול "3 על הקיר' },
              { name: 'BCF-163-8T | רמקול תקרתי "8 + חיפוי גריל' },
              { name: 'HSR-316-6TH | רמקול כדורי "6.5 30W R.M.S' },
              { name: 'HSR-304T | רמקול כדורי "8 30W R.M.S' },
              { name: '108-6CT | רמקול "6.5 WAY 2' },
              { name: 'HSR-108-8CT | רמקול "8 מוסיקלי TWO-WAY' },
              { name: 'HSR-108-5CT | רמקול "5 מוסיקלי TWO-WAY' },
              { name: 'DIKT | דיקט לרמקול 60/40' },
              { name: 'WS6TE | רמקול מלבני "6.5 איכותי מאוד' },
              { name: 'CSL-412 | רמקול מלבני "5 + שנאי' },
              { name: 'WS-8TF | רמקול "8 מלבני מקצועי' },
              { name: 'RDS-601 | רמקול תקרתי מוסיקלי' },
              { name: 'HSR-162-T | רמקול "3 שקוע' },
            ]
          },
          { 
            name: 'רמקולי קיר', 
            products: [
              { name: 'HWR-103T | רמקול משופע עה"ט "5 6W' },
              { name: 'BCF-153-6TH | רמקול "6.5 גריל מתכת' },
              { name: 'HWR-102-T | רמקול קיר משופע "6' },
              { name: 'HWR-118T | רמקול ירח "5 6W' },
              { name: 'HPR-126T | רמקול "5 בתיבת עץ דקורטיבית' },
              { name: 'HPR-125T | רמקול בקופסאת עץ לדירה' },
            ]
          },
          { 
            name: 'פרוז\'קטורים', 
            products: [
              { name: 'ED-D-30 | פרוז\'קטור W30 מוגן מים+שנאי' },
              { name: 'HSR312-5T | פרוז\'קטור "5 10W' },
              { name: 'HSR312-6T | פרוז\'קטור "6.5 20W' },
            ]
          },
          { 
            name: 'בוקסות', 
            products: [
              { name: 'HPR-106-5T | "5.25 30W ל/ש מלבני מאחור' },
              { name: 'HPR-125-5T | 5.25 30W ל/ש מעוגל מאחור' },
              { name: 'HPR-126-5T | 40W כפול לבן/שחור' },
              { name: 'HPR-131T | 30W כפול לבן/שחור' },
              { name: 'HYB-127-5T | 5.5 + טויטר 30W פנים/חוץ' },
              { name: 'CSB-150 | רמקול "6.5 חיצוני/פנימי W60' },
              { name: 'CSB-175 | "8 חיצוני/פנימי W90' },
              { name: 'HYB-127-6T | "6.5 40W בוקסה איכותית' },
              { name: 'HYB-106 | "5 מוגבר+usb+רמקול נוסף' },
              { name: 'SUB-8 | 8 סאב מוגבר pure' },
            ]
          },
          { 
            name: 'שופר, הורן ודרייברים', 
            products: [
              { name: 'BCF-SC-30 | שופר 30W דרייבר ושנאי' },
              { name: 'HPR-40 | שופר W40 דרייבר ושנאי' },
              { name: 'BCF-709RT | שופר מלבני W15 שנאי לבן' },
              { name: 'BCF-SC-75 | שופר 75W דרייבר משולב שנאי' },
              { name: 'SPH-1005 | שופר מלבני, דרייבר W150' },
              { name: 'BCF HN20 + HD50 | שופר "20 + דרייבר 50W משולב שנאי' },
              { name: 'BCF HN20 + HD100 | שופר "20 + דרייבר 100W משולב שנאי' },
              { name: 'HN-20 | שופר "20 ללא דרייבר' },
              { name: 'TH-20 | שופר "20 קרם ללא דרייבר' },
              { name: 'HD-50-T | דרייבר 50W משולב שנאי' },
              { name: 'HD-100-T | דרייבר 100W משולב שנאי' },
              { name: 'HD-150 | דרייבר 150W ללא שנאי' },
              { name: 'HPR-6300 | שופר W50 מוסיקלי מיוחד' },
              { name: 'HTS-100 | שנאי 100W מקצועי ישראלי' },
              { name: 'H-154 | שופר מוסיקלי 30W' },
              { name: 'MS | ממברנה לשופר' },
            ]
          },
          { 
            name: 'מגברים', 
            products: [
              { name: 'HPR-8615 | מגבר 2*20 וואט שקוע+usb' },
              { name: 'PA-302 | מגבר 30W' },
              { name: 'HY-880 | מגבר 50W+usb 12VMIC-2AUX1' },
              { name: 'PA-50 | מגבר AUX 50WRMS 2 MIC 4' },
              { name: 'PA-80 | מגבר 80W + השתקת מוסיקה' },
              { name: 'PA-100-USB | מגבר usb 100W+טעינה' },
              { name: 'PA-120 | מגבר 120W + השתקת מוסיקה' },
              { name: 'PA-150-USB | מגבר usb 150W טעינה' },
              { name: 'BC-180 | מגבר 180W 6 +ווסתי עוצמה' },
              { name: 'BC-250 | מגבר 250W 6 ווסתי עוצמה' },
              { name: 'SB-624EI | מגבר הספק 240W + טעינה' },
              { name: 'BC-350 | מגבר 350W 6 ווסתי עוצמה' },
              { name: 'SB-636EI | מגבר הספק 360W + טעינה/בוסטר' },
              { name: 'SM-648-ECZ | מגבר 480W מיקסר גונג, 5 אזורים' },
              { name: 'SB-648-EI | מגבר הספק 480W טעינה' },
              { name: 'SM-60-V | מיקסר 6 ערוצים' },
              { name: 'SM-624-ECZS | מגבר 5 אזורים W240 גונג סירנה' },
              { name: 'TM-624EUZS | מגבר 5 אזורים טיונר 240W R.M.S' },
            ]
          },
        ]
      },
      {
        groupTitle: 'ציוד כריזה JDM',
        categories: [
          { 
            name: 'מגברים ומיקסרים', 
            products: [
              { name: 'JE-3612E | מגבר 120W' },
              { name: 'JE-3618E | מגבר 180W' },
              { name: 'JE-3624E | מגבר 240W' },
              { name: 'JE-3636E | מגבר 360W' },
              { name: 'JE-3648E | מגבר 480W' },
              { name: 'JE-4148ET | מגבר + טיונר 480W טעינה' },
              { name: 'JE-4124EKT | מגבר 240W CLASS-D' },
              { name: 'JE-4136EK | מגבר 360W CLASS-D' },
              { name: 'JE-4148EK | מגבר 480W CLASS-D' },
              { name: 'JE-4148EKT | מגבר + טיונר 480W CLASS-D' },
            ]
          },
          { 
            name: 'מטען סוללות ומצברים', 
            products: [
              { name: 'RP-04 | מטען סוללות 4A' },
              { name: 'RP-08 | מטען סוללות 8A' },
              { name: 'JE-SS-3 | יחידת סוללות גיבוי 3A' },
              { name: 'JE-SS-4 | יחידת סוללות גיבוי 4A' },
              { name: 'BC-180-EI | בנק טעינה' },
              { name: 'DB12-12 | סוללה 12A' },
              { name: 'DB12-18 | סוללה 18A' },
              { name: 'DB12-7.2 | סוללה 7.2A' },
            ]
          },
          { 
            name: 'מיקרופון ועמדות כריזה', 
            products: [
              { name: 'JP-6200 | מיקרופון כריזה שולחני' },
              { name: 'JE-6200N | מיקרופון כריזה שולחני + גונג' },
              { name: 'JE-MU-2306 | עמדת בורר + מיקרופון' },
              { name: 'JE-MU-8006 | עמדת כריזה 6 אזורים + מיקרופון' },
              { name: 'TK-800 | מודול דרישה דו-כיווני' },
              { name: 'TK-1000/V | מודול שלט ידני' },
            ]
          },
          { 
            name: 'מיקסרים מודולים ומקורות', 
            products: [
              { name: 'JE-6012ESBZ | מודול מיקסר 5 ערוצים+USB' },
              { name: 'JE-6016EKG | מודול 120W 4 אזורים' },
              { name: 'JE-MU-5012 | מודול מיקסר 6 ערוצים' },
              { name: 'JE-MU-5016 | מודול אזורים 4 ערוצים' },
              { name: 'JE-MU-5019USB | מודול USB+AM/FM' },
              { name: 'JE-MU-5023/N | מודול נגן MP3' },
              { name: 'JE-MU-5031 | מודול 8 כניסות/3 יציאות' },
              { name: 'JE-MU-5046 | מודול גונג/סירנה' },
              { name: 'JE-5900W | טיונר AM/FM' },
            ]
          },
          { 
            name: 'מע\' ניטור ובקרת עוצמה', 
            products: [
              { name: 'JE-100 | יחידת ניטור לקו רמקולים' },
              { name: 'JE-4148-W | לוח מגברים CLASS-A' },
              { name: 'PE-100 | פנל אינדיקציות' },
              { name: 'JE-MU-2307 | מוניטור ל-10 אזורים' },
              { name: 'MU-1 | מוניטור פשוט אזור 1' },
              { name: 'AKR | עמדה קרובה רחוקה' },
              { name: 'NC-1111 | בקרת עוצמה' },
              { name: 'FM-300 | ניטור מתחים' },
              { name: 'BCM | מוניטור BCF' },
              { name: 'AVR | וסת עוצמה לרמקול בקופסא' },
              { name: 'ATT-20W | וסת עוצמה אזורי W20 5W-תה"ט' },
              { name: 'ATT-50W | וסת עוצמה אזורי W50 תה"ט' },
              { name: 'ATT-75W | ווסת עוצמה אזורי W75 תה"ט' },
              { name: 'ATT-100W | וסת עוצמה אזורי W100 תה"ט' },
              { name: 'VB-1004 | וסת עוצמה W100 + בורר תחנות' },
              { name: 'EV-950 | יחידת 6 ווסתים 50 וואט 100 וולט' },
            ]
          },
          { 
            name: 'ארונות מס"ד 19"', 
            products: [
              { name: '6U | פנל AC-DC' },
              { name: '9U | קיט ל19"' },
              { name: '10U | מדף מגש' },
              { name: '12U | ברגים+אומים' },
              { name: '16U | פנל עיוור 1U' },
              { name: '20U | פנל עיוור 2U' },
              { name: '24U | פנל עיוור 3U' },
              { name: '30U | ארבע גלגלגים 10-16U' },
              { name: '35U | ארבע גלגלגים 20-44U' },
            ]
          },
        ]
      },
    ]
  },
  { 
    slug: 'bell-clocks',
    src: '/icons/bell-clocks.svg', 
    alt: 'שעוני צלצולים', 
    title: 'שעוני צלצולים', 
    bg: '/slides/digital-clock.jpg', 
    description: 'שעוני צלצולים ממוחשבים לבתי ספר ומפעלים עם תכנות גמיש, צלצולים אוטומטיים ושילוב עם כריזה.',
    subtitle: 'מערכות שעוני צלצולים ממוחשבות',
    contentSections: [
      {
        title: 'שעון צלצולים דיגיטלי BCF AR-MP3',
        subtitle: 'עם אפשרות צלצול הקלטה שונה לכל הפסקה',
        text: `תצוגה גרפית עם מסך בגודל 84x84 פיקסלים.
תצוגה מלאה וברורה על המסך.

• אפשרות לתכנת טיימר לכל השבוע או כל יום בנפרד
• אפשרות לעריכה של הטיימר כל יום בנפרד
• אפשרות לתכנת צלצול אחר לכל שעה
• אפשרות עצמית בלחיצה אחת לשנות שעון קיץ/חורף
• איכות שמע הצלצולים גבוהה מאוד
• מתאים לכל סוגי כרטיסי הזיכרון השונים
• תומך בכל הפורמטים של מוסיקה (MP3, WAV)`,
        image: '/products/bell-clock-bcf-armp3.jpg',
        links: [
          { text: 'לחץ כאן למפרט הטכני המלא', type: 'image', url: '/products/bell-clock-tech-specs.jpg' },
          { text: 'לחץ כאן להוראות הפעלה', type: 'external', url: 'https://www.docdroid.net/7RBXlt8/50-1-pdf' }
        ]
      },
      {
        title: 'להתקנה על הקיר',
        subtitle: 'שעוני צלצול דיגיטליים להתקנה על הקיר',
        image: '/products/bell-clock-wall.jpg'
      },
      {
        title: 'להרכבה בארון מס"ד',
        subtitle: 'שעוני צלצול דיגיטליים להרכבה בארון מס"ד',
        image: '/products/bell-clock-rack.jpg'
      },
      {
        title: 'שעון צלצולים UT-370',
        text: `שעון צלצולים איכותי הכולל תצוגה גרפית.

• הזנה עד 6 הודעות/מנגינות
• תכנות קל ונוח
• מעבר בין שעון קיץ לחורף בלחיצה אחת בלבד
• כולל חיבור USB לחיבור דיסק און קי`,
        image: '/products/bell-clock-ut370.jpg'
      }
    ],
    variants: [
      { name: 'שעון צלצולים דיגיטלי', description: 'תכנות עד 100 צלצולים יומיים' },
      { name: 'פעמון חשמלי', description: 'פעמון 220V עוצמתי' },
      { name: 'צופר צלצול', description: 'צופר חיצוני עמיד' },
      { name: 'תוכנת תכנות', description: 'ממשק תכנות נוח למחשב' },
      { name: 'ממשק כריזה', description: 'חיבור למערכת כריזה קיימת' },
    ]
  },
  { 
    slug: 'integrated-pa',
    src: '/icons/integrated-pa.svg', 
    alt: 'מערכות כריזה משולבות', 
    title: 'כריזה משולבת אש', 
    bg: '/slides/loudspeakers.jpg', 
    description: 'מערכות כריזה משולבות גילוי אש לפי תקן ישראלי. הודעות חירום אוטומטיות ופינוי מבנים בטוח.',
    subtitle: 'מערכות כריזת חירום משולבות גילוי אש',
    contentImage: '/products/integrated-pa-bcf.jpg',
    contentImageTitle: 'מערכת כריזה משולבת BCF',
    contentText: `מערכת הכריזה המשולבת מאפשרת להשמיע בשעת אזעקה, הודעות אזהרה ופינוי, העדיפות על התראה צלילית בלבד ונועדה למנוע פאניקה ובלבול בעת אירוע חרום.

ההודעות הקוליות יעילות יותר לביצוע פינוי מאורגן של המבנה בה היא מותקנת.

בהיות המערכת חיונית, כל רכיבי המערכת מבוקרים לרבות קווי הרמקולים, המגבר, מיקרופוני החרום, הודעת החרום, ספק כח ומצברי הגיבוי.

רכזת כריזה מיועדת להתקנה פנימית בלבד במקום המוגן מפני רטיבות.`,
    variants: [
      { name: 'מרכזיית כריזה EN54', description: 'מערכת מוסמכת לתקן אירופאי' },
      { name: 'מגבר גיבוי', description: 'מגבר חירום אוטומטי' },
      { name: 'רמקול אש מוסמך', description: 'רמקול עמיד אש EN54-24' },
      { name: 'מודול הודעות', description: 'נגן הודעות חירום אוטומטי' },
      { name: 'ממשק גילוי אש', description: 'חיבור למרכזיית אש קיימת' },
    ]
  },
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

