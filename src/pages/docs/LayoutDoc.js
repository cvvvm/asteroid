import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// import highlighterstyles from './docs/highlighter-slyles'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'

import { TitleBlock, H4Code, SectionHead } from '../../components/DocsComponents'
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('javascript', javascript)

// layout
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const calcGridColFunc =
  "function calcGridCol() { \n\t // calulate current # of columns \n\t let winWidth = window.innerWidth; \n\t let colCount = parseInt(winWidth / 100 + 1); \n\t\n\t // update current # of columns \n\t root.style.setProperty('--current-columns', colCount);\n}"
const colMixin =
  '@mixin col() { \n\t flex-flow: column wrap; \n\t gap: var(--item-gap); \n\t place-content: $place-start; \n\t place-items: $place-start; \n\t > img, > video { \n\t width: 100%; \n\t max-width: 100%; \n\t }\n}'
const rowMixin =
  '@mixin row() { \n\t  flex-flow: row wrap; \n\t  gap: var(--object-gap); \n\t  place-content: $place-center; \n}'

export default function LayoutDoc() {
  return (
    <>
      <TitleBlock title={'layout'} links={['rows-columns', 'mixins']}>
        <p>
          base layout items are built with flex-box, and offer scaling + fixed width
          options for rows/columns.
        </p>
      </TitleBlock>
      <SectionHead title={'rows + columns'} link={'rows-columns'}>
        <p className="col-f4">
          fixed width layout items are built to emulate css grid items - in that their
          width isn't based on a width percentage, but emulates a responsive column width.
        </p>
        <p className="col-f4">
          as the viewport is scaled, the items will scale down once the viewport width is
          less than the item width.
        </p>
      </SectionHead>

      <H4Code
        title={'calculating columns'}
        code={calcGridColFunc}
        language={'javascript'}
      >
        <p className="small col-f4">
          using the css variable '--current-columns', fixed width items watch if their
          width is larger than the viewport width.
        </p>
        <p className="small col-f4">
          once the item's width is exceeded, the '--current-columns' css variable is used
          to appropriately scale the item.
        </p>
      </H4Code>
      <SectionHead title={'scss @mixins'} link={'mixins'} />
      <H4Code code={rowMixin} language={'scss'} title={'rows base mixin'}>
        <p className="small ">
          rows are flex containers, defaulting to center-placed content. rows are intended
          to hold cols, rows, and most other objects.
        </p>
      </H4Code>
      <H4Code code={colMixin} language={'scss'} title={'col base mixin'}>
        <p className="small">
          columns are flex containers, defaulting to left-aligned content. columns are
          intended to hold content + rows. they don't usually behave when placed directly
          within other columns.
        </p>
      </H4Code>
    </>
  )
}
