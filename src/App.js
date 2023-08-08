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

import { DocIndex, LayoutDoc, ColorDoc } from './pages/Documentation';
import VoltaRoach from './pages/projects/VoltaRoach';

// ON ROUTE CHANGE
//-----------------------------------------------------------
export const ScrollToTop = ({ children }) => {
  const location = useLocation();

  // scroll to top
  //-----------------------------------------------------------
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  // animate page
  //-----------------------------------------------------------
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

export function ErrorPage({ page = '' }) {
  return (
    <div className="container vh-100">
      <div className="col-6 ps-center pc-center pi-center">
        <h1>lol oops.</h1>
        <p>how did you get here?</p>
        <Link to={'/' + page}>
          <button className="button">go back</button>
        </Link>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// APP
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function App() {
  // CALC GRID
  //-----------------------------------------------------------
  useLayoutEffect(() => {
    calcGridCol();
  }, []);

  // RENDER
  //-----------------------------------------------------------
  return (
    <>
      <ScrollToTop>
        <Nav />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />

          {/* docs */}
          <Route
            path="docs"
            element={
              <>
                <Documentation />
              </>
            }
          >
            <Route path="*" element={<ErrorPage page="docs" />} />
            <Route index element={<DocIndex />} />
            <Route path="colors" element={<ColorDoc />} />
            <Route path="layout" element={<LayoutDoc />} />
          </Route>

          {/* projects */}
          <Route
            element={
              <>
                <ReturnToWork /> <Footer project />
              </>
            }
          >
            <Route path="projects/zig-zag-tattoo" element={<ZigZagTattoo />} />
            <Route path="projects/asc-exhibit" element={<JamisonExhibit />} />
            <Route path="projects/ssu-web-reskin" element={<SsuWebReskin />} />
            <Route path="projects/volta-roach" element={<VoltaRoach />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
