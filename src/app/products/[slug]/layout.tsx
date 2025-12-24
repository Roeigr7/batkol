// Re-export generateStaticParams for static generation
// This ensures all product pages are pre-rendered at build time
export { generateStaticParams } from './generateStaticParams';

// Disable dynamic params - any slug not in generateStaticParams will 404
// This ensures we stay 100% static with no serverless functions
export const dynamicParams = false;

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

