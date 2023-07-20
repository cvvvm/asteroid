import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import highlighterstyles from './docs/highlighter-slyles';
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
    <div className="sidebar">
      <h4>topics:</h4>
      <NavLink to={''}>home</NavLink>
      <NavLink to={'colors'}>colors</NavLink>
      <NavLink to={'nav-menu'}>nav menu</NavLink>
    </div>
  );
}

// build docs
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default function Documentation() {
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="page-content">
        <Outlet />
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
      <p className="note">in progress. doesn't work on mobile yet!</p>
      <h1>documentation</h1>
      <p>here's how this website works.</p>
    </div>
  );
}

export function ColorDoc() {
  const colorScssVar =
    '// pink scss variables\n$pink-lt: 246, 205, 254;\n$pink-accent: 255, 110, 206;\n$pink-dk: 170, 9, 170;\n$pink-blk: 90, 0, 90;';
  const cssColorVarSetFunc =
    "@include cssvar-set(\n\t(\n\t\ttext: '',\n\t\tbg: '',\n\t\taccent: '',\n\t\tblk: '',\n\n\t\tyellow-accent: #{$yellow-accent},\n\t\tgreen-accent: #{$green-accent},\n\t\tblue-accent: #{$blue-accent},\n\t\tpink-accent: #{$pink-accent},\n\t\tred-accent: #{$red-accent},\n\t\tgrey-accent: #{$grey-accent},\n\t\tmono-accent: #{$mono-accent},\n\n\t\tyellow-blk: #{$yellow-blk},\n\t\tgreen-blk: #{$green-blk},\n\t\tblue-blk: #{$blue-blk},\n\t\tpink-blk: #{$pink-blk},\n\t\tred-blk: #{$red-blk},\n\t\tgrey-blk: #{$grey-blk},\n\t\tmono-blk: #{$mono-blk},\n\t)\n);";
  return (
    <div className="row-f10 pc-start">
      <div className="col-7 invert mb-3">
        <h1>colors</h1>
        <p>
          colors are implemented as number values with css variables, and accessed via
          functions.
        </p>
      </div>
      <div className="pc-start row-f10">
        <h2 className="">variable setup</h2>
      </div>
      <div className="row-f10 pc-start outline">
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
    </div>
  );
}
export function NavDoc() {
  return (
    <div className="row-f10 full">
      <div className="col-f10">
        <h1>navigation menu</h1>
        <p>
          the navigation menu doubles as a theme/color picker, and is animated with gsap.
        </p>
      </div>
    </div>
  );
}
