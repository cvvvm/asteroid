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

// sidebar toggle
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function SidebarToggle() {
  const sidebarToggleRef = useRef();
  const sidebarToggleContainer = useRef();
  const [sidebarState, setSidebarState] = useState('open');
  const [mouseY, setMouseY] = useState();

  // toggle track mouse Y position
  //-----------------------------------------------------------
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseY(event.clientY);

      gsap.to(sidebarToggleRef.current, {
        top: mouseY - 70,
        ease: 'power4.out',
        duration: 0.75,
      });
    };
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

// sidebar
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function Sidebar({ links = [], title, children }) {
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
  //-----------------------------------------------------------
  return (
    <div className="sidebar">
      {title}
      {linksMap}
      {children}
      <SidebarToggle />
    </div>
  );
}
