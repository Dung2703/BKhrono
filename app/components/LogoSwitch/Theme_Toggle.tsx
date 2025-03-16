import React, { useState, useEffect } from 'react';
import styles from './LogoSwitch.module.css';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isClient, setIsClient] = useState(false); // Flag to check if we're on the client

  useEffect(() => {
    // Ensure this runs only on the client
    setIsClient(true);

    if (typeof window !== 'undefined') {
      // Check for a saved theme in local storage
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    // Save the current theme to local storage whenever it changes
    if (isClient) {
      localStorage.setItem('theme', theme);
    }
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, isClient]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div
      className={`${styles.switch} ${theme === 'light' ? styles.light : styles.dark}`}
      onClick={toggleTheme}
    >
      <div className={styles.slider}>
        {theme === 'light' ? '☀️' : '🌙'}
      </div>
    </div>
  );
};

export default ThemeToggle;
