import { useState } from 'react'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// COLOR SET
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// rgb variable reader
//-----------------------------------------------------------
export function rgbvar(color, opacity = 100) {
  return 'rgba(var(--' + color + '), ' + opacity + '%)'
}

// UPDATE CSS VARS
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// primary CSS var
//-----------------------------------------------------------
const root = document.documentElement.style

export function setCssVarColor(color) {
  root.setProperty('--text', 'var(--text-' + color + ')')
  root.setProperty('--bg', 'var(--bg-' + color + ')')
  root.setProperty('--accent', 'var(--' + color + '-accent)')
  root.setProperty('--blk', 'var(--' + color + '-blk)')
}

export function ColorSet({ currentAppColor, appColorTarget, classNames, styles }) {
  const appColorList = ['yellow', 'green', 'blue', 'pink', 'red', 'grey', 'mono']

  return (
    <div className={'color-set-toggles-bar ' + classNames} style={{ styles }}>
      {appColorList.map(function (color) {
        return (
          <div
            onClick={appColorTarget}
            id={color}
            key={color}
            style={{
              backgroundColor: rgbvar(color + '-accent'),
              borderColor: color === currentAppColor ? rgbvar('blk', 50) : '',
              boxShadow: 'none' //'4px 4px 0px ' + rgbvar('text-' + color + '', 100)
            }}
            className="color-set-toggle"
          ></div>
        )
      })}
    </div>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// THEME
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// GET preferred theme!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function detectThemePref() {
  var isDetectedThemePref = localStorage.getItem('setTheme')

  if (isDetectedThemePref) {
    return isDetectedThemePref
  }
  //
  else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    isDetectedThemePref = 'dark'
  }
  //
  else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    isDetectedThemePref = 'light'
  }

  return isDetectedThemePref
}

// SET THEME
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function ThemeSet({ classNames }) {
  let themeIcon = ''
  const [appTheme, setAppTheme] = useState(detectThemePref())

  document.documentElement.className = 'bg ' + appTheme + '-theme'

  // SET theme icon
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (appTheme === 'light') {
    themeIcon = 'lt' //<i className="bi bi-lightbulb-fill"></i>;
  } else {
    themeIcon = 'dk' //<i className="bi bi-moon-fill"></i>;
  }

  // SWAP theme
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function themeSwap() {
    if (appTheme === 'light') {
      setAppTheme('dark')
      localStorage.setItem('setTheme', 'dark')
    } else {
      setAppTheme('light')
      localStorage.setItem('setTheme', 'light')
    }
  }

  return (
    <button id="themeToggleButton" onClick={themeSwap} className={classNames}>
      <div>{themeIcon}</div>
    </button>
  )
}
