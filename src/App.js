import { useEffect, useLayoutEffect, useRef } from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import gsap from 'gsap';

import './1-css/main.min.css';
import calcGridCol from './functions/calcGridCol';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import { Work, ReturnToWork } from './pages/Work';
import ZigZagTattoo from './pages/projects/ZigZagTattoo';
import JamisonExhibit from './pages/projects/JamisonExhibit';

// SCROLL TO TOP ON ROUTE CHANGE
//---------------------------------------------------------------------
export const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  // PAGE TRANSITION + CALC GRID
  //---------------------------------------------------------------------
  const transitionMask = useRef();

  useLayoutEffect(() => {
    calcGridCol();
    gsap.to(transitionMask.current, {
      opacity: 0,
      ease: 'expo.in',
      duration: 0.4,
    });
  }, []);

  // APP RENDER
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <>
      <div
        ref={transitionMask}
        style={{
          pointerEvents: 'none',
          zIndex: 9999,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          background: 'var(--bg-mono)',
        }}
      ></div>
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
                  <a href="/">
                    <button className="button">go home</button>
                  </a>
                </div>
              </div>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />

          {/* projects */}
          <Route
            element={
              <>
                <ReturnToWork /> <Footer project />
              </>
            }
          >
            <Route path="/work/zig-zag-tattoo" element={<ZigZagTattoo />} />
            <Route path="/work/asc-exhibit" element={<JamisonExhibit />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
