// ThemePage.js
import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';


const ThemePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const pageStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyles}>
      <h2>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
      <button onClick={toggleTheme} className="btn btn-primary mt-3">
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemePage;
