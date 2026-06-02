import { useEffect } from 'react';

const DEFAULT_TITLE = 'JGA TECH | Desarrollo de Software y Consultoría Tecnológica';
const DEFAULT_DESC =
  'Impulsamos la transformación digital mediante desarrollo de software, arquitectura tecnológica y consultoría especializada.';

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Actualiza title y meta tags (incluyendo Open Graph / Twitter) por página.
 * Ligero reemplazo de react-helmet para SEO básico en SPA.
 */
export default function useDocumentMeta({ title, description } = {}) {
  useEffect(() => {
    const finalTitle = title || DEFAULT_TITLE;
    const finalDesc = description || DEFAULT_DESC;

    document.title = finalTitle;
    setMeta('name', 'description', finalDesc);
    setMeta('property', 'og:title', finalTitle);
    setMeta('property', 'og:description', finalDesc);
    setMeta('name', 'twitter:title', finalTitle);
    setMeta('name', 'twitter:description', finalDesc);

    return () => {
      // Al desmontar, restaura los valores por defecto del sitio.
      document.title = DEFAULT_TITLE;
      setMeta('name', 'description', DEFAULT_DESC);
    };
  }, [title, description]);
}
