import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// import highlighterstyles from './docs/highlighter-slyles'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import Footer from '../components/Footer'

SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('javascript', javascript)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// PAGES
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// build docs
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function Documentation() {
  // insert sidebar links into component!
  return (
    <>
      <Sidebar links={['layout']} title={'Documentation'}></Sidebar>
      <div
        className="container row-gap-1 pl-sm-9 pb-8 vh-100"
        style={{ maxWidth: '1000px' }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export function DocIndex() {
  return (
    <div className="col-6">
      <h1>documentation</h1>

      <p className="note">it's not everything yet, but it's definitely something.</p>
    </div>
  )
}
