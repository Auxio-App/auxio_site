import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://auxio.pt/', lastModified: new Date() },
    { url: 'https://auxio.pt/demo', lastModified: new Date() },
  ];
}
