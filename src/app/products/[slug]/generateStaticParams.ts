// All product slugs for static generation
export const productSlugs = [
  'security-cameras',
  'burglar-alarm',
  'amplification',
  'fire-detection',
  'emergency-call',
  'smoke-release',
  'intercom',
  'pa-equipment',
  'bell-clocks',
  'integrated-pa',
];

export function generateStaticParams() {
  return productSlugs.map((slug) => ({
    slug,
  }));
}

