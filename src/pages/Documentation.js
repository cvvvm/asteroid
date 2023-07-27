import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import highlighterstyles from './docs/highlighter-slyles';
import calcGridCol from '../functions/calcGridCol';
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('javascript', javascript);

// sidebar
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={'sidebar-item' + (isActive ? ' active' : '')}>
      {children}
    </Link>
  );
}

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        {/* <NavLink to={'colors'}>colors</NavLink>
        <NavLink to={'layout'}>layout</NavLink> */}
      </div>
    </div>
  );
}

// build docs
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default function Documentation() {
  return (
    <div className="sidebar-content-container">
      <Sidebar />
      <div className="sidebar-page-content">
        <Outlet />
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// section components
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function SectionHead({ title, children }) {
  return (
    <div className="col-6 outline pc-start py-1 px-2 mt-3">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function H4Code({ textCol = 3, code, language, title, children }) {
  return (
    <div className="row-f10 pc-start pi-center gap-1 pl-2">
      <div className={'col-' + textCol}>
        <h4>{title}</h4>
        {children}
      </div>
      <div className="row-f jc-start">
        <SyntaxHighlighter language={language} style={highlighterstyles} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// PAGES
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function DocIndex() {
  return (
    <div className="col-6">
      <h1>documentation</h1>
      <p>coming soon. how exciting.</p>
    </div>
  );
}

export function ColorDoc() {
  const colorScssVar =
    '// pink scss variables\n$pink-lt: 246, 205, 254;\n$pink-accent: 255, 110, 206;\n$pink-dk: 170, 9, 170;\n$pink-blk: 90, 0, 90;';
  const cssColorVarSetFunc =
    "@include cssvar-set(\n\t(\n\t\ttext: '',\n\t\tbg: '',\n\t\taccent: '',\n\t\tblk: '',\n\n\t\tyellow-accent: #{$yellow-accent},\n\t\tgreen-accent: #{$green-accent},\n\t\tblue-accent: #{$blue-accent},\n\t\tpink-accent: #{$pink-accent},\n\t\tred-accent: #{$red-accent},\n\t\tgrey-accent: #{$grey-accent},\n\t\tmono-accent: #{$mono-accent},\n\t\t...\n\t));"; // yellow-blk: #{$yellow-blk},\n\t\tgreen-blk: #{$green-blk},\n\t\tblue-blk: #{$blue-blk},\n\t\tpink-blk: #{$pink-blk},\n\t\tred-blk: #{$red-blk},\n\t\tgrey-blk: #{$grey-blk},\n\t\tmono-blk: #{$mono-blk},\n\t)\n);";
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
  );
}
const calcGridColFunc =
  "function calcGridCol() { \n\t // calulate current # of columns \n\t let winWidth = window.innerWidth; \n\t let colCount = parseInt(winWidth / 100 + 1); \n\t\n\t // update current # of columns \n\t root.style.setProperty('--current-columns', colCount);\n}";

const colMixin =
  '@mixin col() { \n\t flex-flow: column wrap; \n\t gap: var(--item-gap); \n\t place-content: $place-start; \n\t place-items: $place-start; \n\t > img, \n\t > video { \n\t width: 100%; \n\t max-width: 100%; \n\t }\n}';
const rowMixin =
  '@mixin row() { \n\t  flex-flow: row wrap; \n\t  gap: var(--object-gap); \n\t  place-content: $place-center; \n}';

export function LayoutDoc() {
  return (
    <div className="row-f9 pc-start">
      <div className="col-f10 invert">
        <h1>layout</h1>
        <p>
          base layout items are built with flex-box, and offer scaling + fixed width
          options for rows/columns.
        </p>
      </div>
      <SectionHead title={'rows + columns'}>
        <p>
          fixed width layout items are built to emulate css grid items - in that their
          width isn't based on a width percentage, but emulates a responsive column width.
        </p>
        <p>
          as the viewport is scaled, the items will scale down once the viewport width is
          less than the item width.
        </p>
      </SectionHead>
      <H4Code
        title={'calculating columns'}
        code={calcGridColFunc}
        language={'javascript'}
      >
        <p className="small">
          using the css variable '--current-columns', fixed width items watch if their
          width is larger than the viewport width.
        </p>
        <p className="small">
          once the item's width is exceeded, the '--current-columns' css variable is used
          to appropriately scale the item.
        </p>
      </H4Code>

      <SectionHead title={'scss @mixins'} />

      <H4Code code={rowMixin} language={'scss'} title={'rows base mixin'}>
        <p className="small">
          rows are flex containers, defaulting to center-placed content.
        </p>
        <p className="small">
          rows are intended to hold cols, rows, and most other objects.
        </p>
      </H4Code>

      <H4Code code={colMixin} language={'scss'} title={'col base mixin'}>
        <p className="small">
          columns are flex containers, defaulting to left-aligned content.
        </p>
        <p className="small">
          columns are intended to hold content + rows. they don't usually behave when
          placed directly within other columns.
        </p>
      </H4Code>
    </div>
  );
}
