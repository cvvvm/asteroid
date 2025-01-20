import { gsap } from 'gsap'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const smWidth = 512

// navlinks
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={to} {...props} className={'sidebar-item' + (isActive ? ' active' : '')}>
      {children}
    </Link>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// sidebar toggle
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function SidebarToggleButton({ sidebarState, clickFunc, sidebarToggleRef }) {
  const sidebarToggleContainer = useRef()
  const [mouseY, setMouseY] = useState()

  // track mouse Y position - moves toggle
  //-----------------------------------------------------------
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseY(event.clientY)

      gsap.to(sidebarToggleRef.current, {
        top: mouseY - 40,
        ease: 'power4.outIn',
        duration: 0.4
      })
    }
    // activate on 'md' width or larger
    // toggle boundaries
    var toggleYBounds = 50
    if (mouseY <= toggleYBounds) {
      setMouseY(toggleYBounds)
    }
    if (mouseY >= window.innerHeight - toggleYBounds) {
      setMouseY(window.innerHeight - toggleYBounds)
    }
    if (window.innerWidth > smWidth) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseY, sidebarToggleRef])

  return (
    <div className="sidebar-toggle-container" ref={sidebarToggleContainer}>
      <button
        className={'sidebar-toggle ' + (sidebarState === 'open' ? 'active' : '')}
        ref={sidebarToggleRef}
        onClick={clickFunc}
      >
        {sidebarState === 'open' ? 'exit' : 'area'}
      </button>
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// sidebar
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default function Sidebar({ links = [], title, children }) {
  const sidebarRef = useRef()
  const sidebarToggleRef = useRef()
  const sidebarTL = useRef()
  const [sidebarState, setSidebarState] = useState('closed')

  // animation
  //------------------------------------------------------------------------------------
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // toggle sidebar state
  //-----------------------------------------------------------
  function toggleSidebar() {
    if (sidebarState === 'closed') {
      setSidebarState('open')
    } else if (sidebarState === 'open') {
      setSidebarState('closed')
    }
  }

  // watch sidebar state
  //-----------------------------------------------------------
  useEffect(() => {
    if (sidebarState === 'closed') {
      sidebarTL.current.timeScale(4)
    } else if (sidebarState === 'open') {
      sidebarTL.current.timeScale(3)
    }
    sidebarTL.current.reversed(sidebarState === 'closed')
  }, [sidebarState])

  // animate sidebar
  //-----------------------------------------------------------
  useLayoutEffect(() => {
    const sidebarCtx = gsap.context(() => {
      sidebarTL.current = gsap
        .timeline({ reversed: true, duration: 0.2, ease: 'power4.out' })
        .to(sidebarRef.current, { translateX: 0, zIndex: 10000 }, '<')

      // animate toggle for xs breakpoint
      if (window.innerWidth < smWidth) {
        sidebarTL.current.to(
          sidebarToggleRef.current,
          {
            translateX: '-5rem',
            translateY: '0.75rem',
            ease: 'power4.out'
          },
          '<'
        )
      }
    }, [sidebarRef])
    return () => sidebarCtx.revert()
  }, [])
  // content
  //------------------------------------------------------------------------------------
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // map links
  //-----------------------------------------------------------
  var linksMap = links.map((link, index) => {
    return (
      <NavLink key={index} to={link} onClick={toggleSidebar}>
        {link}
      </NavLink>
    )
  })

  // if title
  //-----------------------------------------------------------
  if (title) {
    title = <h4 className="pl-1">{title}</h4>
  }

  // render sidebar
  //------------------------------------------------------------------------------------
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="sidebar-content">
        {title}
        {linksMap}
        {children}
      </div>
      <SidebarToggleButton
        sidebarState={sidebarState}
        sidebarToggleRef={sidebarToggleRef}
        clickFunc={toggleSidebar}
      />
    </div>
  )
}
