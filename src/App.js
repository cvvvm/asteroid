import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { gsap } from 'gsap';

import './1-css/main.min.css';
import calcGridCol from './functions/calcGridCol';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';

import { Projects, ReturnToWork } from './pages/Projects';
import ZigZagTattoo from './pages/projects/ZigZagTattoo';
import JamisonExhibit from './pages/projects/JamisonExhibit';
import SsuWebReskin from './pages/projects/SsuWebReskin';

import { DocNav, DocNav2 } from './pages/Documentation';

// ON ROUTE CHANGE
//---------------------------------------------------------------------
export const ScrollToTop = ({ children }) => {
  const location = useLocation();

  // scroll to top
  //---------------------------------------------------------------------
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  // animate page
  //---------------------------------------------------------------------
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(['.container > * ', '.projects-container > * '], {
        delay: 0.1,
        y: '100vh',
        stagger: 0.025,
        ease: 'expo.out',
      });
      /*       gsap.from(['.outline', '.work-card', 'img'], {
        delay: 0.4,
        duration: 0.6,
        y: 50,
        ease: 'expo.out',
      }); */
      /*       gsap.from(['h1', 'h2', 'h3', 'h4', '.badge', '.badge-outline'], {
        delay: 0.3,
        y: 10,
        ease: 'ease.out',
      }); */
      gsap.from('.projects-return', {
        delay: 0.6,
        y: -100,
        duration: 0.5,
        ease: 'expo.out',
      });
    });

    return () => ctx.revert(); // cleanup
  }, [location.pathname]);

  return children;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// APP
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function App() {
  // CALC GRID
  //---------------------------------------------------------------------
  useLayoutEffect(() => {
    calcGridCol();
  }, []);

  // RENDER
  //---------------------------------------------------------------------
  return (
    <>
      <ScrollToTop>
        <Nav />
        <Routes>
          <Route
            path="*"
            element={
              <div className="container vh-100">
                <div className="col-6 ps-center pc-center pi-center">
                  <h1>lol oops.</h1>
                  <p>how did you get here?</p>
                  <Link to="/">
                    <button className="button">go home</button>
                  </Link>
                </div>
              </div>
            }
          />

          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />

          {/* docs */}
          <Route
            path="/docs"
            element={
              <>
                <Documentation />
              </>
            }
          >
            <Route index element={<DocNav />} />
            <Route path="docs/nav-menu" element={<DocNav />} />
            <Route path="docs/nav-menu2" element={<DocNav2 />} />
          </Route>

          {/* projects */}
          <Route
            element={
              <>
                <ReturnToWork /> <Footer project />
              </>
            }
          >
            <Route path="/projects/zig-zag-tattoo" element={<ZigZagTattoo />} />
            <Route path="/projects/asc-exhibit" element={<JamisonExhibit />} />
            <Route path="/projects/ssu-web-reskin" element={<SsuWebReskin />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
