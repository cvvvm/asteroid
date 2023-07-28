import { rgbvar } from '../../functions/ThemeSet';

// variables & functions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const getBlk = rgbvar('blk');

function filter(b, s) {
  return 'brightness(' + b + ') saturate(' + s + ')';
}

function white(o) {
  return 'rgba(255,255,255,' + o + '%)';
}
function accent(o) {
  return rgbvar('accent', o);
}
// color
//---------------------------------------------------------------------

// text
//---------------------------------------------------------------------
const fontSize = '.9375rem';
const letterSpacing = '0rem';
const lineHeight = '135%';
const tabSize = 1;
const fontFamily = 'JetBrains Mono';
const wtReg = '200';
const wtBold = '500';

// misc
//---------------------------------------------------------------------
const transition = 'color 50ms ease-in-out';

// styles
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default {
  'pre[class*="language-"]': {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: wtReg,
    letterSpacing: letterSpacing,
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
    background: getBlk,
    color: white(100),
    padding: '1rem .75rem 1rem 1.3125rem',
    margin: '0',
    borderRadius: '.625rem',
    height: 'fit-content',
    overflowX: 'auto',
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
    color: white(100),
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
    color: white(40),
  },
  prolog: {
    color: white(100),
  },
  doctype: {
    color: white(100),
  },
  cdata: {
    color: white(100),
  },
  punctuation: {
    color: white(40),
  },
  namespace: {
    color: white(100),
  },
  tag: {
    color: white(100),
  },
  operator: {
    color: white(75),
  },
  number: {
    color: white(100),
  },
  property: {
    color: white(100),
  },
  function: {
    color: accent(100),
    filter: filter(1.5, 5),
    fontWeight: wtBold,
  },
  'tag-id': {
    color: white(100),
  },
  selector: {
    color: white(100),
  },
  'atrule-id': {
    color: white(100),
  },
  'code.language-javascript': {
    color: white(100),
  },
  'attr-name': {
    color: white(100),
  },
  'code.language-css': {
    color: white(100),
  },
  'code.language-scss': {
    color: white(100),
  },
  boolean: {
    color: accent(100),
    filter: filter(1.5, 2),
  },
  string: {
    color: white(100),
  },
  entity: {
    color: white(100),
    cursor: 'help',
  },
  url: {
    color: white(100),
  },
  '.language-css .token.string': {
    color: white(100),
  },
  '.language-scss .token.string': {
    color: white(100),
  },
  '.style .token.string': {
    color: white(100),
  },
  'attr-value': {
    color: white(100),
  },
  keyword: {
    color: accent(100),
    filter: filter(1, 0.75),
  },
  control: {
    color: white(100),
  },
  directive: {
    color: white(100),
  },
  unit: {
    color: white(100),
  },
  statement: {
    color: white(100),
  },
  regex: {
    color: white(100),
  },
  atrule: {
    color: white(100),
  },
  placeholder: {
    color: white(100),
  },
  variable: {
    color: accent(100),
    filter: filter(1, 1.75),
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
    color: accent(60),
  },
  bold: {
    fontWeight: 'bold',
  },
  'pre > code.highlight': {
    Outline: '.4rem solid #8a75f5',
    OutlineOffset: '.4rem',
  },
  '.line-numbers.line-numbers .line-numbers-rows': {
    borderRightColor: white(100),
    color: white(50),
  },
  '.line-numbers .line-numbers-rows > span:before': {
    color: white(50),
  },
  '.line-highlight.line-highlight': {
    background:
      'linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))',
  },
};
