import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/shopping-cart', '/shopping-cart/confirmed-order'],
      crawlDelay: 30,
    },
    sitemap: 'https://coffee-delivery-rocket.vercel.app/sitemap.xml',
  };
}
