import { gsap } from 'gsap';
import { useState, useRef, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

// navlinks
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={'sidebar-item' + (isActive ? ' active' : '')}>
      {children}
    </Link>
  );
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
function SidebarToggle({ sidebarState }) {
  const sidebarToggleRef = useRef();
  const sidebarToggleContainer = useRef();
  const [mouseY, setMouseY] = useState();

  // track mouse Y position - moves toggle
  //-----------------------------------------------------------
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseY(event.clientY);

      gsap.to(sidebarToggleRef.current, {
        top: mouseY - 25,
        ease: 'power4.out',
        duration: 0.75,
      });
    };

    // toggle boundaries
    if (mouseY <= 50) {
      setMouseY(50);
    }
    if (mouseY >= window.innerHeight - 60) {
      setMouseY(window.innerHeight - 60);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div className="sidebar-toggle-container" ref={sidebarToggleContainer}>
      <button
        className="button sidebar-toggle"
        ref={sidebarToggleRef}
        /* style={{ top: mouseY - 40 }} */
      >
        <i className={'bi' + (sidebarState === 'open' ? ' bi-x-lg ' : ' bi-list')}></i>
      </button>
    </div>
  );
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
  const sidebarRef = useRef();
  const [sidebarState, setSidebarState] = useState('closed');

  // animation
  //------------------------------------------------------------------------------------
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // toggle sidebar state
  //-----------------------------------------------------------
  function toggleSidebar() {
    if (sidebarState === 'closed') {
      setSidebarState('open');
    } else if (sidebarState === 'open') {
      setSidebarState('closed');
    }
  }

  // watch sidebar state
  //-----------------------------------------------------------
  useEffect(() => {
    if (sidebarState === 'closed') {
      gsap.to(sidebarRef.current, { translateX: 0 });
    } else if (sidebarState === 'open') {
      gsap.to(sidebarRef.current, { translateX: -100 });
    }
  }, [sidebarState]);

  // content
  //------------------------------------------------------------------------------------
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // map links
  //-----------------------------------------------------------
  var linksMap = links.map((link, index) => {
    return (
      <NavLink key={index} to={link}>
        {link}
      </NavLink>
    );
  });

  // if title
  //-----------------------------------------------------------
  if (title) {
    {
      var title = <h4 className="pl-1">{title}</h4>;
    }
  }

  // return sidebar
  //------------------------------------------------------------------------------------
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div className="sidebar" ref={sidebarRef}>
      {title}
      {linksMap}
      {children}
      <SidebarToggle sidebarState={sidebarState} onclick={() => toggleSidebar()} />
    </div>
  );
}
