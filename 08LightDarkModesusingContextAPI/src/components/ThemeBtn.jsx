import React from 'react'
import './ThemeBtn.css'
import useTheme from '../contexts/theme'

function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme}=useTheme()
    
    const handleThemeChange = (e) => {
      if (e.target.checked) {
        darkTheme();
      } else {
        lightTheme();
      }
    }
    
  return (
    <div>
      <label className={`theme-label ${themeMode}`}>
        <input
          type="checkbox"
          value=""
          className="theme-input"
          onChange={handleThemeChange}
          checked={themeMode === 'dark'}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-text">
          Toggle Theme
        </span>
      </label>
    </div>
  )
}

export default ThemeBtn
