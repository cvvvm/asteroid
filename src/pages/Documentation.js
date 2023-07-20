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

function NavLink({ to, children, appColor, ...props }) {
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
      <Link to={'docs/nav-menu'} className="sidebar-item">
        nav menu
      </Link>
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

const codeString =
  "useLayoutEffect(() => {\n\tconst navCtx = gsap.context(() => {\n\t\tnavTL.current = gsap\n\t\t\t.timeline({ reversed: true })\n\t\t\t.add(navOpenCtrlBar())\n\t\t\t.add(navOpenNavLinks(), '<');\n\t}, [nav]);\n\n\treturn () => navCtx.revert();\n}, []);";
const codeString2 =
  '@mixin row() {\n\tflex-flow: row wrap !important;\n\tgap: cssvar-get(gap);\n\tplace-content: $place-center;\n\t//place-items: $place-center;\n}';

export function DocIndex() {
  return (
    <div className="col-6">
      <h2>documentation</h2>
      <p>oooh. looks like these haven't been written yet!</p>
      <p className="note">try coming back in 5 minutes?</p>
    </div>
  );
}

export function NavDoc() {
  return (
    <div className="col-f10">
      <SyntaxHighlighter language="scss" style={highlighterstyles} showLineNumbers>
        {codeString2}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={highlighterstyles} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
