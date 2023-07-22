// variables
var rtime;
var timeout = false;
const resizeDelay = 100;
const root = document.documentElement;

// delay, update on resize
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('resize', (e) => {
  rtime = new Date();
  if (timeout === false) {
    timeout = true;
    setTimeout(resizeEnd, resizeDelay);
  }
});

function resizeEnd() {
  if (new Date() - rtime < resizeDelay) {
    setTimeout(resizeEnd, resizeDelay);
  } else {
    timeout = false;
    calcGridCol();
  }
}

// calclate columns
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function calcGridCol() {
  // find maximum column count
  //let maxCol = getComputedStyle(root).getPropertyValue('--max-columns');

  // calulate current # of columns
  let winWidth = window.innerWidth; //15px for scrollbar;
  let colCount = parseInt(winWidth / 100 + 1); //Math.round(winWidth / 100);
  //let colShrink = maxCol - colCount;

  // update current # of columns
  root.style.setProperty('--current-columns', colCount);

  // generate [--column-*] CSS variables
  // &
  // shrink GRID to match # current columns
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // DEACTIVATED WITH NEW FLEX GRID SYSTEM

  /* for (let i = 1; i <= maxCol; i++) {
    let colVarCheck = getComputedStyle(root).getPropertyValue('--column-' + i);

    if (colVarCheck >= colCount) {
      root.style.setProperty('--column-' + i, colCount);
    }
    if (colVarCheck < colCount) {
      root.style.setProperty('--column-' + i, i);
    }

    //document.getElementById('colVarCheck').innerHTML = colVarCheck;
  } */

  // print debugs
  /* document.getElementById('pageWidth').innerHTML = winWidth;
  document.getElementById('colCount').innerHTML = colCount;
  document.getElementById('maxCol').innerHTML = maxCol; */
}

export default calcGridCol;
