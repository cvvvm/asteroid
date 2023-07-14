import { useState } from 'react';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// COLOR SET
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
  setCssVarColorRGB();
}

// RGB CSS var
//---------------------------------------------------------------------
function splitRGB(type) {
  const style = getComputedStyle(document.documentElement);
  let textSlice = style.getPropertyValue('--' + type).slice(4, -1);

  return textSlice;
}
function setCssVarColorRGB() {
  root.setProperty('--text-rgb', splitRGB('text'));
  root.setProperty('--bg-rgb', splitRGB('bg'));
  root.setProperty('--accent-rgb', splitRGB('accent'));
  root.setProperty('--blk-rgb', splitRGB('blk'));
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
