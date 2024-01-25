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
    navState === 'closed' ? setNavState('open') : setNavState('closed')
  }

  useGSAP(
    () => {
      if (navState === 'closed') {
        openNavTL().pause().revert()
        closeNavTL()
      }
      if (navState === 'open') {
        closeNavTL().pause().revert()
        openNavTL()
      }
    },
    { dependencies: [navState], scope: nav }
  )

  // build nav menu
  //-----------------------------------------------------------
  return (
    <nav ref={nav}>
      <div className="nav-placement-wrap">
        <div className="nav-container">
          {/* <div className="nav-control-bar"> */}
          <ThemeSet
            classNames={'theme-toggle ' + (navState === 'open' ? 'active' : '')}
          />
          <button
            className={'nav-toggle ' + (navState === 'open' ? 'active' : '')}
            onClick={toggleNavMenu}
          >
            {navState === 'closed' ? 'menu' : 'exit'}
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

export function openNavTL() {
  let openNav = gsap.timeline({
    defaults: { duration: 0.3, ease: 'power4.out' }
  })
  openNav
    // .to('.nav-container', { backgroundColor: rgbvar('accent'), duration: 0.0025 }, '<')
    .to('.nav-link-container', { display: 'grid', duration: 0.015 }, '<')
    .to(
      '.nav-link-container',
      {
        height: '100%',
        padding: '1.25rem 0.5rem 0.75rem',
        duration: 0.15
      },
      '<'
    )
    .to('.nav-link', { opacity: 1, translateY: '0px' }, '<')
    .to(
      '.nav-container',
      {
        padding: '1rem',
        width: '100%',
        height: '100%',
        borderRadius: '1rem 1rem 1.25rem 1.25rem'
      },
      '<'
    )

  return openNav
}

export function closeNavTL() {
  let closeNav = gsap.timeline({
    defaults: { duration: 0.2, ease: 'power4.in' }
  })
  closeNav
    // .to('.nav-container', { backgroundColor: rgbvar('blk'), duration: 0.0025 }, '<')
    .to(
      '.nav-link-container',
      { height: '0%', padding: '0rem 0rem 0rem 0rem', duration: 0.3 },
      '<'
    )
    .to('.nav-link', { opacity: 0 }, '<')
    .to(
      '.nav-container',
      {
        width: '142px',
        height: '55px',
        padding: '0.125rem',
        borderRadius: '0.7375rem'
      },
      '<'
    )
    .to('.nav-link-container', { display: 'none' })
  return closeNav
}
