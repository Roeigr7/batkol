import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.batkol.co.il';
  
  // Product page slugs
  const productSlugs = [
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

  const productPages = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...productPages,
  ];
}
