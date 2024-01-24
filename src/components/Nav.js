import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ThemeSet, /* ColorSet, */ rgbvar } from '../functions/ThemeSet'

// nav links
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function NavLink({ to, children, appColor, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link
      to={to}
      {...props}
      className={'nav-link ' + (isActive ? ' active' : '')}
      style={{
        backgroundColor: isActive ? rgbvar('text') : rgbvar('bg'),
        color: isActive ? rgbvar('bg-' + appColor) : rgbvar('text-' + appColor)
      }}
    >
      {children}
    </Link>
  )
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

function Nav({ appColor, changeAppColor }) {
  const nav = useRef()
  const navTL = useRef()
  const [navState, setNavState] = useState('closed')
  // const [appColor, setAppColor] = useState(defaultColor)

  // NAV TOGGLES
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  /*
  // change app color
  //-----------------------------------------------------------
  function changeAppColor(e) {
    setAppColor(e.currentTarget.id)
  }
  // update CSS variables
  useEffect(() => {
    setCssVarColor(appColor)
  }) */

  // toggle nav menu state
  //-----------------------------------------------------------
  function toggleNavMenu() {
    if (navState === 'closed') {
      setNavState('open')
    } else if (navState === 'open') {
      setNavState('closed')
    }
  }

  // watch nav state
  //-----------------------------------------------------------
  useEffect(() => {
    // toggle the direction of timeline
    if (navState === 'open') {
      navTL.current.timeScale(1)
    } else if (navState === 'closed') {
      navTL.current.timeScale(1)
    }
    // state on page load?
    navTL.current.reversed(navState === 'closed')
  }, [navState])

  // animate nav
  //-----------------------------------------------------------
  useLayoutEffect(() => {
    const navCtx = gsap.context(() => {
      navTL.current = gsap.timeline({ reversed: true }).add(navOpenCtrlBar())
      // .add(navOpenNavLinks(), '<')
    }, [nav])

    return () => navCtx.revert()
  }, [])

  // build nav menu
  //-----------------------------------------------------------
  return (
    <nav ref={nav}>
      <div className="nav-placement-wrap">
        <div
          className="nav-container"
          style={{
            backgroundColor: navState === 'open' ? rgbvar('blk') : rgbvar('accent')
          }}
        >
          {/* <div className="nav-control-bar"> */}
          <ThemeSet
            classNames={'theme-toggle ' + (navState === 'open' ? 'active' : '')}
          />
          <button
            className={'nav-toggle ' + (navState === 'open' ? 'active' : '')}
            onClick={toggleNavMenu}
          >
            {navState === 'open' ? 'menu' : 'exit'}
          </button>
          {/* </div> */}

          {/* <ColorSet currentAppColor={appColor} appColorTarget={changeAppColor} /> */}

          {/*
        // NAV LINKS
        //-----------------------------------------------------------
         */}
          <div className="nav-link-container" onClick={toggleNavMenu}>
            <NavLink to="home" children="home" appColor={appColor} />
            <NavLink to="projects" children="projects" appColor={appColor} />
            <NavLink to="docs" children="docs" appColor={appColor} />
            <NavLink to="about" children="about" appColor={appColor} />
          </div>
        </div>
      </div>
      {/*       <ColorSet
        currentAppColor={appColor}
        appColorTarget={changeAppColor}
        classNames={'row-f10 row-gap-0 col-gap-1 p-1 py-xs-2 px-xs-0'}
      /> */}
    </nav>
  )
}

export default Nav

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// ANIMATIONS
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function navOpenCtrlBar() {
  let openCtrlBarTL = gsap.timeline({
    defaults: { duration: 0.3, ease: 'power4.in' }
  })
  openCtrlBarTL
    .to(
      '.nav-container',
      {
        rowGap: '0rem',
        padding: '0rem',
        width: 'auto'
      },
      '<'
    )
    .to('.nav-link', { opacity: 0, translateY: '-50px' }, '<')
    .to('.nav-link-container', { height: 0, paddingBottom: '0rem' }, '<')
    .to('.nav-link-container', { display: 'none' }, '<')
  return openCtrlBarTL
}

/* function navOpenNavLinks() {
  let openNavLinksTL = gsap.timeline({
    defaults: { duration: 0.3, ease: 'power4.out' }
  })
  openNavLinksTL
    .to('.nav-link', { scale: 0.9 }, '<')
    .to('.nav-link-container', { height: 0, paddingBottom: 0 }, '<')
    .to('.nav-link', { opacity: 0 }, '<')
    .to('.nav-link-container', { display: 'none' }, '<')
  return openNavLinksTL
} */
