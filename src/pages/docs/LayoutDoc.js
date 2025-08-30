import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'

import { TitleBlock, H4Code, SectionHead } from '../../components/DocsComponents'

SyntaxHighlighter.registerLanguage( 'scss', scss )
SyntaxHighlighter.registerLanguage( 'javascript', javascript )

// layout
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const calcGridColFunc =
    "function calcGridCol() { \n\t // calculate current # of columns \n\t let winWidth = window.innerWidth; \n\t let colCount = parseInt(winWidth / 100 + 1); \n\t\n\t // update current # of columns \n\t root.style.setProperty('--current-columns', colCount);\n}"
const colMixin =
    '@mixin col() { \n\t flex-flow: column wrap; \n\t gap: var(--item-gap); \n\t place-content: $place-start; \n\t place-items: $place-start; \n\t > img, > video { \n\t width: 100%; \n\t max-width: 100%; \n\t }\n}'
const rowMixin =
    '@mixin row() { \n\t  flex-flow: row wrap; \n\t  gap: var(--object-gap); \n\t  place-content: $place-center; \n}'

export default function LayoutDoc() {
    return (
        <>
            <TitleBlock title={ 'Layout' }
                        links={ [ 'rows-columns', 'mixins' ] }>
                <p>Layout classes are built with the intention to strike a balance between the high flexibility of
                   flex-box with the exactness of css-grid.</p>
            </TitleBlock>
            <SectionHead title={ 'Rows + Columns' }
                         link={ 'rows-columns' }>
                <p className="col-fill-10">
                    Base layout items are built with flex-box, and offer scaling + fixed width
                    options for rows/columns.
                </p>
                <p className="col-fill-10">
                    Fixed width layout items are built to emulate CSS grid items - in that their
                    width isn't based on a width percentage, but emulates a responsive column width.
                </p>
                <p className="col-fill-10">
                    As the viewport is scaled, the items will scale down once the viewport width is
                    less than the item width.
                </p>
            </SectionHead>
            <H4Code
                title={ 'Calculating Columns' }
                code={ calcGridColFunc }
                language={ 'javascript' }
            >
                <p className="small col-fill-4">
                    Using the CSS variable '--current-columns', fixed width items watch if their
                    width is larger than the viewport width.
                </p>
                <p className="small col-fill-4">
                    Once the item's width is exceeded, the '--current-columns' CSS variable is used
                    to appropriately scale the item.
                </p>
            </H4Code>
            <SectionHead title={ 'SCSS @mixins' }
                         link={ 'mixins' }/>
            <H4Code code={ rowMixin }
                    language={ 'scss' }
                    title={ 'Rows Mixin' }>
                <p className="small ">
                    Rows are flex containers, defaulting to center-placed content. Rows are intended
                    to hold cols, rows, and most other objects.
                </p>
            </H4Code>
            <H4Code code={ colMixin }
                    language={ 'scss' }
                    title={ 'Column Mixin' }>
                <p className="small">
                    Columns are flex containers, defaulting to left-aligned content. Columns are
                    intended to hold content + rows. They don't usually behave when placed directly
                    within other columns.
                </p>
            </H4Code>
        </>
    )
}