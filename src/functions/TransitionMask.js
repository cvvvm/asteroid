import { gsap } from 'gsap';
import { useRef } from 'react';

function linkClick(mask) {
  document.addEventListener('click', (e) => {
    const origin = e.target.closest('a');

    if (origin) {
      gsap
        .from(mask.current, {
          opacity: 100,
          ease: 'expo.in',
          duration: 0,
        })
        .to(mask.current, {
          opacity: 0,
          ease: 'expo.in',
          duration: 0.6,
        });
    }
  });
}

export function TransitionMask(color) {
  const transitionMask = useRef();
  linkClick(transitionMask);

  return (
    <div
      ref={transitionMask}
      style={{
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: 'var(--bg-' + color + ')',
      }}
    ></div>
  );
}
