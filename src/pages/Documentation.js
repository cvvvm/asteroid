import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import highlighterstyles from '../functions/highlighter-slyles';
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const codeString =
  "useLayoutEffect(() => {\n\tconst navCtx = gsap.context(() => {\n\t\tnavTL.current = gsap\n\t\t\t.timeline({ reversed: true })\n\t\t\t.add(navOpenCtrlBar())\n\t\t\t.add(navOpenNavLinks(), '<');\n\t}, [nav]);\n\n\treturn () => navCtx.revert();\n}, []);";
const codeString2 =
  '@mixin row() {\n\tflex-flow: row wrap !important;\n\tgap: cssvar-get(gap);\n\tplace-content: $place-center;\n\t//place-items: $place-center;\n}';

function Documentation() {
  return (
    <div className="container vh-90">
      <div className="row-f8">
        <div className="col-6">
          <h1>documentation</h1>
          <p>oooh. looks like these haven't been written yet!</p>
          <p className="note">try coming back in 5 minutes?</p>
        </div>
      </div>

      <div className="row-f8">
        <SyntaxHighlighter language="scss" style={highlighterstyles} showLineNumbers>
          {codeString2}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="javascript"
          style={highlighterstyles}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Documentation;
