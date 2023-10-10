import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import highlighterstyles from '../pages/docs/highlighter-slyles'
import { rgbvar } from '../functions/ThemeSet.js'
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('javascript', javascript)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// section components
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// title block
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function TitleBlock({ title, children, links = [] }) {
  var linksMap = links.map((name, i) => {
    return (
      <div key={i}>
        <span className="note">{i + 1 + '.'}</span>
        <a href={'#' + name} className="plink">
          {name}
        </a>
      </div>
    )
  })

  return (
    <div className="row-f10 pc-start col-gap-2 row-gap-1">
      <div className="col-f10">
        <p className="note">jump to:</p>
      </div>
      {linksMap}

      <div className="col-f10 invert mt-1">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

// section head
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function SectionHead({ title, link, children }) {
  if (children) {
    var childContent = <div className="row-f10 jc-start ai-baseline">{children}</div>
  }
  return (
    <div
      className="row-f10 quote mt-2 mt-sm-4"
      style={{
        borderLeft: '3px solid ' + rgbvar('accent'),
        backgroundColor: rgbvar('accent', 15)
      }}
      id={link}
    >
      <h2>{title}</h2>
      {childContent}
    </div>
  )
}

// h4 code block
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function H4Code({ textCol = 3, code, language, title, children }) {
  if (children) {
    var childContent = <div className="row-f10 pc-start ai-baseline">{children}</div>
  }
  return (
    <>
      <div className={'row-f10 row-gap-1 pc-start mt-1 px-sm-1'}>
        <h4>{title}</h4>
        {childContent}
      </div>

      <div className={'jc-start row-f10'} style={{ minHeight: 0, minWidth: 0 }}>
        <SyntaxHighlighter language={language} style={highlighterstyles} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
