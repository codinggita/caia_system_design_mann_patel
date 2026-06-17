import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="theme-toggle-track">
                <div className="theme-toggle-indicator">
                    <div className="theme-toggle-icon-container">
                        <FiSun className={`theme-icon sun ${!isDark ? 'active' : ''}`} />
                        <FiMoon className={`theme-icon moon ${isDark ? 'active' : ''}`} />
                    </div>
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
