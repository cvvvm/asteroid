import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ThemeSet, ColorSet, rgbvar } from '../functions/ThemeSet'

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
      /* style={{
        backgroundColor: isActive ? rgbvar('text') : rgbvar('bg'),
        color: isActive ? rgbvar('bg-' + appColor) : rgbvar('text-' + appColor)
      }} */
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

export default function Nav({ appColor, changeAppColor }) {
  const nav = useRef()
  const [navState, setNavState] = useState({
    inital: false,
    clicked: null,
    state: 'menu'
  })
  // const [navState, setNavState] = useState('closed')
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
    if (navState.state === 'menu' && !navState.inital) {
      setNavState({ inital: null, clicked: true, state: 'exit' })
    }
    if (navState.state === 'exit' && navState.clicked) {
      setNavState({ inital: null, state: 'menu' })
    }
  }
  let navAniDur = 0.3
  let openNavEase = 'power4.out'
  let closeNavEase = 'power4.in'
  useGSAP(
    () => {
      // close
      //-----------------------------------------------------------
      if (navState.state === 'menu' && !navState.inital) {
        gsap.to(['.nav-mask', '.colors-mask'], {
          height: '0px',
          paddingBottom: '0rem',
          duration: navAniDur,
          ease: closeNavEase
        })
        gsap.to(['.nav-container', '.colors-container'], {
          gridTemplateRows: '0fr 54px',
          duration: navAniDur,
          ease: closeNavEase
        })
        gsap.to('.menu-container', {
          width: '155px',
          padding: '0.5rem',
          gap: '0.5rem',
          duration: navAniDur,
          ease: closeNavEase
        })
        gsap.to('.nav-link', {
          opacity: 0,
          scale: 0.8,
          ease: closeNavEase
        })
        gsap.to('.color-set-toggle', {
          opacity: 0,
          scale: 0.8,
          translateY: '100px',
          stagger: -0.025,
          ease: closeNavEase
        })
      }

      // open
      //-----------------------------------------------------------
      if (navState.state === 'exit' && navState.clicked) {
        gsap.to(['.nav-mask', '.colors-mask'], {
          height: '465px',
          paddingBottom: '1rem',
          duration: navAniDur,
          ease: openNavEase
        })
        gsap.to(['.nav-container', '.colors-container'], {
          gridTemplateRows: '1fr 54px',
          duration: navAniDur,
          ease: openNavEase
        })
        gsap.to('.menu-container', {
          width: '100%',
          padding: '1rem',
          gap: '1rem',
          duration: navAniDur,
          ease: openNavEase
        })
        gsap.to('.nav-link', {
          opacity: 1,
          scale: 1,
          ease: openNavEase
        })
        gsap.to('.color-set-toggle', {
          opacity: 1,
          scale: 1,
          translateY: '0px',
          stagger: 0.025,
          ease: openNavEase
        })
      }
    },
    { dependencies: [navState], scope: nav }
  )

  // build nav menu
  //-----------------------------------------------------------
  return (
    <nav ref={nav}>
      <div className="nav-placement-wrap">
        <div className="menu-container">
          <div className="colors-container">
            <div className="colors-mask">
              <ColorSet
                currentAppColor={appColor}
                appColorTarget={changeAppColor}
                classNames={'color-set-nav'}
              />
            </div>
            <ThemeSet
              classNames={'theme-toggle ' + (navState === 'open' ? 'active' : '')}
            />
          </div>
          <div className="nav-container">
            <div className="nav-mask">
              <div className="nav-link-container" onClick={toggleNavMenu}>
                <NavLink to="home" children="home" appColor={appColor} />
                <NavLink to="projects" children="work" appColor={appColor} />
                <NavLink to="docs" children="docs" appColor={appColor} />
                <NavLink to="about" children="about" appColor={appColor} />
              </div>
            </div>
            <button
              className={'nav-toggle ' + (navState === 'open' ? 'active' : '')}
              onClick={toggleNavMenu}
            >
              {navState.state}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
