import { useState, useEffect, useLayoutEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

import { gsap } from 'gsap'

import './1-css/main.min.css'
import calcGridCol from './functions/calcGridCol'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { setCssVarColor } from './functions/ThemeSet'

// top-level pages
//-----------------------------------------------------------
import Home from './pages/Home'
import About from './pages/About'
import { Projects, ReturnToProjects } from './pages/Projects'
import { Documentation, DocIndex } from './pages/Documentation'

import ColorDoc from './pages/docs/ColorsThemeDoc'
import LayoutDoc from './pages/docs/LayoutDoc'

// project pages
//-----------------------------------------------------------
import ZigZagTattoo from './pages/projects/ZigZagTattoo'
import JamisonExhibit from './pages/projects/JamisonExhibit'
import SsuWebReskin from './pages/projects/SsuWebReskin'
import VoltaRoach from './pages/projects/VoltaRoach'
import TourTaniti from './pages/projects/TourTaniti'
import NinaJarnumYoga from './pages/projects/NinaJarnumYoga'
import CovidCampusComms from './pages/projects/CovidCampusComms'
import LocalElectionGuides from './pages/projects/LocalElectionGuides'
import LoboRedesign from './pages/projects/LoboRedesign'

// ON ROUTE CHANGE
//-----------------------------------------------------------
export const ScrollToTop = ({ children }) => {
  const location = useLocation()

  // scroll to top
  //-----------------------------------------------------------
  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  // animate page
  //-----------------------------------------------------------
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(['.container:first-of-type > * ', '.projects-container'], {
        delay: 0.1,
        translateY: '100vh',
        stagger: 0.025,
        ease: 'expo.out'
      })
      gsap.from('.projects-return', {
        delay: 0.6,
        translateY: -100,
        duration: 0.5,
        ease: 'expo.out'
      })
    })

    return () => ctx.revert() // cleanup
  }, [location.pathname])

  return children
}

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
  )
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
/* function randNumRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
} */

function App() {
  // APP COLOR
  //-----------------------------------------------------------
  // const appColorsList = ['yellow', 'green', 'blue', 'pink', 'red', 'grey', 'mono']
  const [appColor, setAppColor] = useState(localStorage.getItem('setColor'))

  // change app color
  //-----------------------------------------------------------
  function changeAppColor(e) {
    setAppColor(e.currentTarget.id)
    localStorage.setItem('setColor', e.currentTarget.id)
  }
  // update CSS variables
  useEffect(() => {
    if (!appColor) setAppColor('mono')
    setCssVarColor(appColor)
  }, [appColor])

  // CALC GRID
  //-----------------------------------------------------------
  useLayoutEffect(() => {
    calcGridCol()
  }, [])

  // RENDER
  //-----------------------------------------------------------
  return (
    <>
      <ScrollToTop>
        <Nav appColor={appColor} changeAppColor={changeAppColor} />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route
            index
            element={<Home appColor={appColor} changeAppColor={changeAppColor} />}
          />
          <Route
            path="home"
            element={<Home appColor={appColor} changeAppColor={changeAppColor} />}
          />
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
                <ReturnToProjects /> <Footer project />
              </>
            }
          >
            <Route path="projects/zig-zag-tattoo" element={<ZigZagTattoo />} />
            <Route path="projects/asc-exhibit" element={<JamisonExhibit />} />
            <Route path="projects/ssu-web-reskin" element={<SsuWebReskin />} />
            <Route path="projects/volta-roach" element={<VoltaRoach />} />
            <Route path="projects/tour-taniti" element={<TourTaniti />} />
            <Route path="projects/nina-jarnum-yoga" element={<NinaJarnumYoga />} />
            <Route path="projects/covid-campus-comms" element={<CovidCampusComms />} />
            <Route path="projects/lobo-redesign" element={<LoboRedesign />} />
            <Route
              path="projects/local-election-guides"
              element={<LocalElectionGuides />}
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
