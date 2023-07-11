import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  railscasts,
  shadesOfPurple,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Documentation() {
  const codeString = '@mixin flex-base() {\ndisplay: flex;\nflex: 1 1 100%;\n}';
  const codeString2 =
    '@mixin row() {\n  flex-flow: row wrap;\n  gap: cssvar-get(gap);\n  place-content: $place-center;\n  //place-items: $place-center;\n}';
  return (
    <div className="container vh-90">
      <div className="col-f8">
        <h1>documentation</h1>
        <p>oooh. looks like these haven't been written yet!</p>
        <p>try coming back in 5 minutes?</p>

        <SyntaxHighlighter language="scss" style={railscasts} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="scss" style={shadesOfPurple} showLineNumbers>
          {codeString2}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Documentation;
