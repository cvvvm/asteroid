import { rgbvar } from '../../functions/ThemeSet';

// variables & functions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const accent = rgbvar('accent');
const blk = rgbvar('blk');

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
    filter: filter(1, 1),
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
    color: color(0.35),
    filter: filter(2, 0),
  },
  prolog: {
    color: color(1),
    filter: filter(2, 1),
  },
  doctype: {
    color: color(1),
    filter: filter(2, 1),
  },
  cdata: {
    color: color(1),
    filter: filter(2, 1),
  },
  punctuation: {
    color: color(0.35),
    filter: filter(2, 0),
  },
  namespace: {
    color: color(1),
    filter: filter(2, 1),
  },
  tag: {
    color: color(1),
    filter: filter(2, 1),
  },
  operator: {
    color: color(0.75),
    filter: filter(1.5, 1),
  },
  number: {
    color: color(1),
    filter: filter(2, 1),
  },
  property: {
    color: color(1),
    filter: filter(2, 1),
  },
  function: {
    color: color(1),
    filter: filter(3, 1),
    //textShadow: '1px 1px black',
  },
  'tag-id': {
    color: color(1),
    filter: filter(2, 1),
  },
  selector: {
    color: color(1),
    filter: filter(3, 1),
  },
  'atrule-id': {
    color: color(1),
    filter: filter(2, 1),
  },
  'code.language-javascript': {
    color: color(1),
    filter: filter(2, 1),
  },
  'attr-name': {
    color: color(1),
    filter: filter(2, 1),
  },
  'code.language-css': {
    color: color(1),
    filter: filter(2, 1),
  },
  'code.language-scss': {
    color: color(1),
    filter: filter(2, 1),
  },
  boolean: {
    color: color(1),
    filter: filter(1, 2),
  },
  string: {
    color: color(1),
    filter: filter(2, 0),
  },
  entity: {
    color: color(1),
    filter: filter(2, 1),
    cursor: 'help',
  },
  url: {
    color: color(1),
    filter: filter(2, 1),
  },
  '.language-css .token.string': {
    color: color(1),
    filter: filter(2, 1),
  },
  '.language-scss .token.string': {
    color: color(1),
    filter: filter(2, 1),
  },
  '.style .token.string': {
    color: color(1),
    filter: filter(2, 1),
  },
  'attr-value': {
    color: color(1),
    filter: filter(2, 1),
  },
  keyword: {
    color: color(1),
    filter: filter(1.5, 1),
  },
  control: {
    color: color(1),
    filter: filter(2, 1),
  },
  directive: {
    color: color(1),
    filter: filter(2, 1),
  },
  unit: {
    color: color(1),
    filter: filter(2, 1),
  },
  statement: {
    color: color(1),
    filter: filter(2, 1),
  },
  regex: {
    color: color(1),
    filter: filter(2, 1),
  },
  atrule: {
    color: color(1),
    filter: filter(2, 1),
  },
  placeholder: {
    color: color(1),
    filter: filter(2, 1),
  },
  variable: {
    color: color(1),
    filter: filter(1, 3),
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
    color: color(0.5),
    filter: filter(1, 1),
  },
  bold: {
    fontWeight: 'bold',
  },
  'pre > code.highlight': {
    Outline: '.4rem solid #8a75f5',
    OutlineOffset: '.4rem',
  },
  '.line-numbers.line-numbers .line-numbers-rows': {
    borderRightColor: color(1),
    color: color(0.5),
    filter: filter(2, 1),
  },
  '.line-numbers .line-numbers-rows > span:before': {
    color: color(0.5),
    filter: filter(2, 1),
  },
  '.line-highlight.line-highlight': {
    background:
      'linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))',
  },
};
