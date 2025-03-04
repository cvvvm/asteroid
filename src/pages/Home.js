import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import { ColorSet } from '../functions/ThemeSet'

// HOME PAGE
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function Home({ appColor, changeAppColor }) {
  return (
    <>
      <div className="container vh-90 pt-2 pt-xs-0 pb-0 row-gap-2 ">
        <img src="/images/home/computer-avatar-D-v1.7.1.gif"
             alt=""
        className={"computer-home"}/>
        <div className="row-4 px-1 px-sm-0">
          <div className="col-4">
            <h1 className="">hi, i'm claire.</h1>
            <p className="">self-taught designer, developer, occasional illustrator.</p>
          </div>
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
        {/* colors */}
        <div className="row-f10 pi-center pc-center row-gap-1 mt-2">
          <p className="note row-f10 ai-center col-gap-1">
            current color: <p className="badge">{appColor}</p>
          </p>
          <ColorSet
            currentAppColor={appColor}
            appColorTarget={changeAppColor}
            classNames={'color-set-home'}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
