import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import { ColorSet } from '../functions/ThemeSet'

// HOME PAGE
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function Home({ appColor, changeAppColor }) {
  return (
    <>
      <div className="container vh-80 pt-7 pb-0 row-gap-4 row-gap-xs-7">
        <div className="row-8 row-gap-2">
          <div className="col-4">
            <h1 className="">hi, i'm claire.</h1>
            <p className="">self-taught designer, engineer, occasional illustrator.</p>
          </div>

          <div className="row-4 pc-evenly">
            <Link to={'/about'}>
              <button className="button-outline as-center">about</button>
            </Link>
            <Link to={'/projects'}>
              <button className="button as-center ">projects</button>
            </Link>
          </div>
        </div>

        <div className="row-f10 pi-center pc-center row-gap-1">
          <p className="note row-f10">current color: {appColor}</p>
          <ColorSet
            currentAppColor={appColor}
            appColorTarget={changeAppColor}
            classNames={'row-10 row-gap-1 col-gap-xxs-2 col-gap-xs-3 col-gap-sm-1'}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
