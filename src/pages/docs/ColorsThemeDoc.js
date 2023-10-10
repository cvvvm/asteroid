import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import highlighterstyles from '../docs/highlighter-slyles'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'

// import { TitleBlock, SectionHead, H4Code } from 'src/components/DocsComponents.js'
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('javascript', javascript)

// colors & theming
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function ColorDoc() {
  const colorScssVar =
    '// pink scss variables\n$pink-lt: 246, 205, 254;\n$pink-accent: 255, 110, 206;\n$pink-dk: 170, 9, 170;\n$pink-blk: 90, 0, 90;'
  const cssColorVarSetFunc =
    "@include cssvar-set(\n\t(\n\t\ttext: '',\n\t\tbg: '',\n\t\taccent: '',\n\t\tblk: '',\n\n\t\tyellow-accent: #{$yellow-accent},\n\t\tgreen-accent: #{$green-accent},\n\t\tblue-accent: #{$blue-accent},\n\t\tpink-accent: #{$pink-accent},\n\t\tred-accent: #{$red-accent},\n\t\tgrey-accent: #{$grey-accent},\n\t\tmono-accent: #{$mono-accent},\n\t\t...\n\t));" // yellow-blk: #{$yellow-blk},\n\t\tgreen-blk: #{$green-blk},\n\t\tblue-blk: #{$blue-blk},\n\t\tpink-blk: #{$pink-blk},\n\t\tred-blk: #{$red-blk},\n\t\tgrey-blk: #{$grey-blk},\n\t\tmono-blk: #{$mono-blk},\n\t)\n);";
  return (
    <div className="row-f9 pc-start">
      <div className="col-f10 invert">
        <h1>colors</h1>
        <p>
          colors are implemented as number values with css variables, and accessed via
          functions.
        </p>
      </div>

      <div className="pc-start row-f10">
        <h2 className="">variable setup</h2>
      </div>
      <div className="row-f10 pc-start">
        <div className="col-3 jc-center">
          <h4>scss variables</h4>
          <p className="small">
            each color starts as the raw numbers for their rgb values.
          </p>
        </div>
        <SyntaxHighlighter language="scss" style={highlighterstyles} showLineNumbers>
          {colorScssVar}
        </SyntaxHighlighter>
      </div>
      <div className="col-3 jc-center">
        <h4>css variables: base</h4>
        <p className="small">css variables are used to toggle color/theme switching.</p>
        <p className="small">
          'text' + 'bg' variables alternate based on theme, but each 'accent' + 'blk'
          color remains the same, so those are directly declared here.
        </p>
      </div>
      <SyntaxHighlighter language="scss" style={highlighterstyles} showLineNumbers>
        {cssColorVarSetFunc}
      </SyntaxHighlighter>
    </div>
  )
}
