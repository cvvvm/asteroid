import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import { ColorSet } from '../functions/ThemeSet'

// HOME PAGE
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function Home({ appColor, changeAppColor }) {
  return (
    <>
      <div className="container vh-80 pt-7 pt-md-6 pb-0 row-gap-3 row-gap-xs-5">
        <div className="row-4">
          <div className="col-4">
            <h1 className="">hi, i'm claire.</h1>
            <p className="">self-taught designer, engineer, occasional illustrator.</p>
          </div>
        </div>

        {/* colors */}
        <div className="row-f10 pi-center pc-center row-gap-0">
          <p className="note row-f10">current color: {appColor}</p>
          <ColorSet
            currentAppColor={appColor}
            appColorTarget={changeAppColor}
            classNames={'row-10 row-gap-1 col-gap-1 col-gap-xs-3 col-gap-sm-2'}
          />
        </div>
        {/* buttons */}
        <div className="row-f10">
          <div className="row-4 pc-evenly">
            <Link to={'/about'}>
              <button className="button-outline as-center">about</button>
            </Link>
            <Link to={'/projects'}>
              <button className="button as-center ">projects</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
