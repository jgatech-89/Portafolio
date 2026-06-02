import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Desplaza suavemente hasta una sección por su id, compensando el navbar.
 */
export function scrollToSection(id, { focus = false } = {}) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
  if (focus) {
    // Mejora de accesibilidad: mueve el foco a la sección destino.
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
  return true;
}

/**
 * Navegación inteligente:
 * - Si estamos en la Home, hace smooth scroll a la sección (id).
 * - Si estamos en otra ruta, navega a la ruta dedicada (path).
 *
 * Devuelve `go(link)` donde link = { id, path }.
 */
export function useSmartNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const go = useCallback(
    (link, options = {}) => {
      const { id, path } = link;
      const onHome = location.pathname === '/';

      if (onHome && id) {
        scrollToSection(id, { focus: true });
        // Refleja el ancla en la URL sin recargar ni añadir historial extra.
        if (window.history?.replaceState) {
          window.history.replaceState(null, '', `/#${id}`);
        }
        options.onNavigate?.();
        return;
      }

      // Desde otra ruta: ir a la Home con ancla para hacer scroll allí,
      // salvo que se prefiera la ruta dedicada.
      if (options.preferRoute === false && id) {
        navigate(`/#${id}`);
      } else {
        navigate(path || '/');
      }
      options.onNavigate?.();
    },
    [navigate, location.pathname]
  );

  return { go, pathname: location.pathname };
}
