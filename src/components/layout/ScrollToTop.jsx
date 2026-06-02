import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../../hooks/useSmartNav';

/**
 * Al cambiar de ruta:
 * - Si la URL trae un ancla (#seccion), desplaza suavemente a esa sección.
 * - En caso contrario, sube al inicio de la página.
 *
 * No renderiza nada.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Espera un frame a que el contenido de la ruta esté montado.
      const t = window.setTimeout(() => {
        const ok = scrollToSection(id);
        if (!ok) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 80);
      return () => window.clearTimeout(t);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
