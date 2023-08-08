import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import gsap from 'gsap';

import { ThemeSet, ColorSet, setCssVarColor, rgbvar } from '../functions/ThemeSet';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

// nav links
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function NavLink({ to, children, appColor, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={'nav-link' + (isActive ? ' active' : '')}
      style={{
        backgroundColor: isActive ? rgbvar('text') : rgbvar('bg'),
        color: isActive ? rgbvar('bg-' + appColor) : rgbvar('text-' + appColor),
      }}
    >
      {children}
    </Link>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// NAV MENU
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Nav() {
  var defaultColor = 'blue';
  const nav = useRef();
  const navTL = useRef();
  const [navState, setNavState] = useState('closed');
  const [appColor, setAppColor] = useState(defaultColor);

  // NAV TOGGLES
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // change app color
  //-----------------------------------------------------------
  function changeAppColor(e) {
    setAppColor(e.currentTarget.id);
  }
  // update CSS variables
  useEffect(() => {
    setCssVarColor(appColor);
  });

  // toggle nav menu state
  //-----------------------------------------------------------
  function toggleNavMenu() {
    if (navState === 'closed') {
      setNavState('open');
    } else if (navState === 'open') {
      setNavState('closed');
    }
  }

  // watch nav state
  //-----------------------------------------------------------
  useEffect(() => {
    // toggle the direction of timeline
    if (navState === 'open') {
      navTL.current.timeScale(1);
    } else if (navState === 'closed') {
      navTL.current.timeScale(2);
    }
    // state on page load?
    navTL.current.reversed(navState === 'closed');
  }, [navState]);

  // animate nav
  //-----------------------------------------------------------
  useLayoutEffect(() => {
    const navCtx = gsap.context(() => {
      navTL.current = gsap
        .timeline({ reversed: true })
        .add(navOpenCtrlBar())
        .add(navOpenNavLinks(), '<');
    }, [nav]);

    return () => navCtx.revert();
  }, []);

  // build nav menu
  //-----------------------------------------------------------
  return (
    <nav ref={nav}>
      <div className="nav-wrapper">
        <div className="nav-control-bar">
          <ThemeSet
            classNames={'theme-toggle ' + (navState === 'open' ? 'active' : '')}
          />

          <button
            className={'nav-toggle ' + (navState === 'open' ? 'active' : '')}
            onClick={toggleNavMenu}
          >
            <i className={'bi' + (navState === 'open' ? ' bi-x-lg ' : ' bi-list')}></i>
          </button>
        </div>

        <ColorSet currentAppColor={appColor} appColorTarget={changeAppColor} />

        {/*
        // NAV LINKS
        //-----------------------------------------------------------
         */}
        <div className="nav-link-mask">
          <div className="nav-link-container" onClick={toggleNavMenu}>
            <NavLink to="home" children="home" appColor={appColor} />
            <NavLink to="projects" children="projects" appColor={appColor} />
            <NavLink to="docs" children="docs" appColor={appColor} />
            <NavLink to="about" children="about" appColor={appColor} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ANIMATIONS
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function navOpenCtrlBar() {
  let openCtrlBarTL = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power4.out' },
  });
  openCtrlBarTL
    .to('.nav-link-mask', { scaleX: 1 }, '<')
    .to(
      '.nav-control-bar',
      {
        borderRadius: '1.25rem 1.25rem 0rem 0rem',
        padding: '0.625rem 0.8125rem 0.625rem 0.625rem',
      },
      '<'
    )
    .to('.nav-toggle', { borderRadius: '0.875rem' }, '<')
    .to('.theme-toggle', { borderRadius: '0.875rem' }, '<')
    .to(
      '.color-set-toggles-mask',
      {
        width: 'auto',
        height: 'auto',
      },
      '<'
    )
    .to(
      '.color-set-toggles-mask',
      {
        translateY: -1,
        delay: 0.1,
      },
      '<'
    )
    .from(
      '.color-set-toggle',
      {
        translateY: 3,
        translateX: 3,
        boxShadow: '0px 0px 0px rgba(0,0,0,0.25)',
        stagger: {
          amount: 0.3,
        },
        duration: 0.2,
      },
      '<'
    );

  return openCtrlBarTL;
}

function navOpenNavLinks() {
  let openNavLinksTL = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power4.out' },
  });
  openNavLinksTL
    .to('.color-set-toggle', {
      scale: 1,
    })
    .to('.nav-link-container', { padding: '0.875rem', duration: 0.1 }, '<')
    .to('.nav-link-mask', { height: 'auto', scaleY: 1, translateY: '-2px' })
    .to('.nav-link', { translateY: 0 }, '<')
    .to('.nav-link', { scale: 1, duration: 0.5 }, '<');

  return openNavLinksTL;
}
