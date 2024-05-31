import React, { useState, useEffect } from 'react';

import dark from '../images/logo-dark.png';
import light from '../images/logo-light.png';


const Header = () => {
  // Define state for theme
  const [theme, setTheme] = useState('light-theme');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  // Add event listener for theme button
  useEffect(() => {
    const themeBtns = document.querySelectorAll('.theme-btn');

    themeBtns.forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });

    return () => {
      // Cleanup: Remove event listener when component unmounts
      themeBtns.forEach((btn) => {
        btn.removeEventListener('click', toggleTheme);
      });
    };
  }, []);



  return (
    <header className={theme}>
        <div className="container">
          <nav className="navbar">

            <a href="#">
              <img src={light} alt="SimpleBlog logo" width="150" className="logo-light" />
              <img src={dark} alt="SimpleBlog logo" width="150" className="logo-dark" />
            </a>
            <div className="btn-group">
            <button className="theme-btn theme-btn-mobile light" onClick={toggleTheme}>
                <ion-icon name={theme === 'light-theme' ? 'moon' : 'sunny'} className="moon"></ion-icon>
              </button>
            </div>


            <div className="flex-wrapper">
              <ul className="desktop-nav">
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">About Me</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
              </ul>
              <button className="theme-btn theme-btn-desktop light">
                <ion-icon name="moon" className="moon"></ion-icon>
                <ion-icon name="sunny" className="sun"></ion-icon>
              </button>
            </div>
            <div className="mobile-nav">
              <button className="nav-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="wrapper">
                <p className="h3 nav-title">Main Menu</p>
                <ul>
                  <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">About Me</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <p className="h3 nav-title">Topics</p>
                <ul>
                  <li className="nav-item"><a href="#" className="nav-link">Database</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Accessibility</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Web Performance</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header;
