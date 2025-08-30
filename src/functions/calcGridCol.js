// variables
let rtime;
let timeout = false;
const resizeDelay = 85;
const root = document.documentElement;

/*-| delay, update on resize |-*/
/*---+----+---+----+---+----+---+----+---*/
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

/*-| Calculate Columns |-*/
/*---+----+---+----+---+----+---+----+---*/
function calcGridCol() {
  // find maximum column count
  //let maxCol = getComputedStyle(root).getPropertyValue('--max-columns');

  /*-| Calculate current # of columns |-*/
  let winWidth = window.innerWidth; // 15px for scrollbar;
  let colCount = parseInt(winWidth / 100 + 1);

  /*-| Update current # of columns |-*/
  root.style.setProperty('--current-columns', colCount.toString());
}

export default calcGridCol;
