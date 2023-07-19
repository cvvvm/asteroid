import { useState } from 'react';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// COLOR SET
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// rgb variable reader
//---------------------------------------------------------------------
export function rgbvar(color, opacity = 100) {
  console.log('rgba(var(--' + color + '), ' + opacity + '%)');
  return 'rgba(var(--' + color + '), ' + opacity + '%)';
}

// UPDATE CSS VARS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// primary CSS var
//---------------------------------------------------------------------
const root = document.documentElement.style;
export function setCssVarColor(color) {
  root.setProperty('--text', 'var(--text-' + color + ')');
  root.setProperty('--bg', 'var(--bg-' + color + ')');
  root.setProperty('--accent', 'var(--' + color + '-accent)');
  root.setProperty('--blk', 'var(--' + color + '-blk)');
}

export function ColorSet({ currentAppColor, appColorTarget }) {
  const appColorList = ['yellow', 'green', 'blue', 'pink', 'red', 'grey', 'mono'];

  return (
    <div className="color-set-toggles-mask">
      <div className="color-set-toggles-bar">
        {appColorList.map(function (color) {
          return (
            <div
              onClick={appColorTarget}
              id={color}
              key={color}
              style={{
                backgroundColor: rgbvar(color + '-accent'),
                borderColor:
                  color == currentAppColor
                    ? rgbvar('bg-' + currentAppColor)
                    : rgbvar('accent'),
              }}
              className="color-set-toggle"
            ></div>
          );
        })}
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// THEME
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// GET preferred theme!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function detectThemePref() {
  var detectedThemePref = '';

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    detectedThemePref = 'dark';
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    detectedThemePref = 'light';
  }

  return detectedThemePref;
}

// SET THEME
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function ThemeSet({ classNames }) {
  let themeIcon = '';
  const [appTheme, setAppTheme] = useState(detectThemePref());

  document.documentElement.className = 'bg ' + appTheme + '-theme';

  // SET theme icon
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (appTheme === 'light') {
    themeIcon = 'lt'; //<i className="bi bi-lightbulb-fill"></i>;
  } else {
    themeIcon = 'dk'; //<i className="bi bi-moon-fill"></i>;
  }

  // SWAP theme
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function themeSwap() {
    if (appTheme === 'light') {
      setAppTheme('dark');
    } else {
      setAppTheme('light');
    }
  }

  return (
    <button id="themeToggleButton" onClick={themeSwap} className={classNames}>
      <div>{themeIcon}</div>
    </button>
  );
}
