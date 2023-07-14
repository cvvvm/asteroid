import { useState } from 'react';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// COLOR SET
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
                backgroundColor: 'var(--' + color + '-accent)',
                borderColor:
                  color == currentAppColor
                    ? 'var(--bg-' + currentAppColor + ')'
                    : 'var(--accent)',
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
