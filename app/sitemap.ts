import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/services', '/products', '/gallery', '/training', '/contact'].map(path => ({
    url: `https://kariba-fisheries.vercel.app${path}`,
  }));
}
