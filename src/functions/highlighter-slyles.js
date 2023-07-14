// variables & functions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const accent = 'var(--accent-rgb)';
const blk = 'var(--blk)';

function filter(b, s) {
  return 'brightness(' + b + ') saturate(' + s + ')';
}

function color(o) {
  return 'rgba(' + accent + ', ' + o + ')';
}
// color
//---------------------------------------------------------------------

// text
//---------------------------------------------------------------------
const fontSize = '1rem';
const lineHeight = '150%';
const tabSize = 2;
const fontFamily = 'JetBrains Mono';
const wtReg = '200';
const wtBold = '700';

// misc
//---------------------------------------------------------------------
const transition = 'all 250ms ease-in-out';

// styles
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default {
  'pre[class*="language-"]': {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: wtReg,
    lineHeight: lineHeight,
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    MozTabSize: tabSize,
    OTabSize: tabSize,
    tabSize: tabSize,
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    background: blk,
    color: color(1),
    padding: '2rem 1.65rem 2rem 1.5rem',
    margin: '.5rem 0',
    borderRadius: '.75rem',
    overflow: 'auto',
    transition: transition,
  },
  'code[class*="language-"]': {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: wtReg,
    lineHeight: lineHeight,
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    MozTabSize: tabSize,
    OTabSize: tabSize,
    tabSize: tabSize,
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    color: color(1),
    transition: transition,
  },
  'pre > code[class*="language-"]': {
    fontSize: '1rem',
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'pre[class*="language-"]::selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'pre[class*="language-"] ::selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'code[class*="language-"]::selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  'code[class*="language-"] ::selection': {
    textShadow: 'none',
    background: '#6a51e6',
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '.1rem',
    borderRadius: '.3rem',
  },
  comment: {
    color: color(),
    filter: filter(1.2, 0.5),
  },
  prolog: {
    color: '#6c6783',
  },
  doctype: {
    color: '#6c6783',
  },
  cdata: {
    color: '#6c6783',
  },
  punctuation: {
    color: '#6c6783',
  },
  namespace: {
    opacity: '.7',
  },
  tag: {
    color: '#e09142',
  },
  operator: {
    color: '#e09142',
  },
  number: {
    color: '#e09142',
  },
  property: {
    color: blk,
  },
  function: {
    color: accent,
  },
  'tag-id': {
    color: '#eeebff',
  },
  selector: {
    color: '#eeebff',
  },
  'atrule-id': {
    color: '#eeebff',
  },
  'code.language-javascript': {
    color: '#c4b9fe',
  },
  'attr-name': {
    color: '#c4b9fe',
  },
  'code.language-css': {
    color: '#ffcc99',
  },
  'code.language-scss': {
    color: '#ffcc99',
  },
  boolean: {
    color: '#ffcc99',
  },
  string: {
    color: '#ffcc99',
  },
  entity: {
    color: '#ffcc99',
    cursor: 'help',
  },
  url: {
    color: '#ffcc99',
  },
  '.language-css .token.string': {
    color: '#ffcc99',
  },
  '.language-scss .token.string': {
    color: '#ffcc99',
  },
  '.style .token.string': {
    color: '#ffcc99',
  },
  'attr-value': {
    color: '#ffcc99',
  },
  keyword: {
    color: '#ffcc99',
  },
  control: {
    color: '#ffcc99',
  },
  directive: {
    color: '#ffcc99',
  },
  unit: {
    color: '#ffcc99',
  },
  statement: {
    color: '#ffcc99',
  },
  regex: {
    color: '#ffcc99',
  },
  atrule: {
    color: '#ffcc99',
  },
  placeholder: {
    color: '#ffcc99',
  },
  variable: {
    color: '#ffcc99',
  },
  deleted: {
    textDecoration: 'line-through',
  },
  inserted: {
    borderBottom: '1px dotted #eeebff',
    textDecoration: 'none',
  },
  italic: {
    fontStyle: 'italic',
  },
  important: {
    fontWeight: 'bold',
    color: '#c4b9fe',
  },
  bold: {
    fontWeight: 'bold',
  },
  'pre > code.highlight': {
    Outline: '.4rem solid #8a75f5',
    OutlineOffset: '.4rem',
  },
  '.line-numbers.line-numbers .line-numbers-rows': {
    borderRightColor: '#2c2937',
  },
  '.line-numbers .line-numbers-rows > span:before': {
    color: '#3c3949',
  },
  '.line-highlight.line-highlight': {
    background:
      'linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))',
  },
};
