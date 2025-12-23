import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'loading'> {
  eager?: boolean;
}

/**
 * Optimized Image component with best practices
 * - Lazy loading by default (eager for above-the-fold)
 * - Proper sizing
 * - WebP/AVIF support via Next.js
 */
export function OptimizedImage({ 
  eager = false,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

