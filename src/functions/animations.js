import { gsap } from 'gsap';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// NAV MENU
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function navOpenCtrlBar() {
  let openCtrlBarTL = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power4.out' },
  });
  openCtrlBarTL
    .to('.color-set-toggles-mask', {
      width: 'auto',
      height: 'auto',
    })
    .to(
      '.nav-control-bar',
      {
        borderRadius: '1.5rem',
        padding: '0.65rem',
      },
      '<'
    )
    .to('.nav-toggle', { borderRadius: '1rem' }, '<')
    .to('.theme-toggle', { borderRadius: '1rem' }, '<');

  return openCtrlBarTL;
}

function navOpenColorToggles() {
  let openColorTogglesTL = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power4.out' },
  });
  openColorTogglesTL
    .to('.nav-wrapper', { rowGap: '1rem' }, '<')
    .to(
      '.color-set-toggles-mask',
      {
        translateY: 0,
        scale: 1,
      },
      '<'
    )
    .to(
      '.color-set-toggle',
      {
        boxShadow: 'inset -2px 5px rgba(0, 0, 0, 0.35)',
        scale: 1,
        stagger: {
          amount: 0.4,
        },
        duration: 0.6,
      },
      '<'
    );

  return openColorTogglesTL;
}

function navOpenNavLinks() {
  let openNavLinksTL = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power4.out' },
  });
  openNavLinksTL
    .to('.nav-link-container', { padding: '1rem', duration: 0 }, '<')
    .to('.nav-link-mask', { height: 'auto', scale: 1, translateY: 0 })
    .to('.nav-link', { translateY: 0 }, '<')
    .to('.nav-link', { scale: 1, duration: 0.5 }, '<');

  return openNavLinksTL;
}

// OPEN NAV
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let openNavTL = gsap.timeline({ reversed: true });
openNavTL
  .add(navOpenCtrlBar())
  .add(navOpenColorToggles(), '-=0.1')
  .add(navOpenNavLinks(), '-=0.9');

export function animOpenNav() {
  return openNavTL.reversed(!openNavTL.reversed());
}
