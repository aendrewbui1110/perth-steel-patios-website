import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = 'https://perthsteelpatios.com.au';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEOHead({ title, description, path = '/', image }: SEOHeadProps) {
  useEffect(() => {
    const fullUrl = `${BASE_URL}${path}`;
    const imageUrl = image ? `${BASE_URL}${image}` : DEFAULT_IMAGE;

    document.title = title;

    setMetaTag('name', 'description', description);

    // Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', imageUrl);

    // Twitter
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);

    // Canonical
    setLinkTag('canonical', fullUrl);
  }, [title, description, path, image]);

  return null;
}
