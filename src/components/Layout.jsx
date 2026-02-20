import React from 'react';
import { Link } from 'react-scroll';

import ScrollProgress from './ScrollProgress';
import PillNav from './PillNav';
import SplashCursor from './SplashCursor';

const Layout = ({ children, theme, toggleTheme }) => {
    const navProps = theme === 'dark' ? {
        baseColor: "rgba(29, 29, 29, 0.8)", // Glass effect
        pillColor: "transparent",
        hoveredPillTextColor: "#08fdd8", // Teal/Green
        pillTextColor: "#ffffff", // White text
        activePillColor: "rgba(8, 253, 216, 0.15)", // Green tint, slightly stronger
        activeTextColor: "#08fdd8",
        hoverPillColor: "rgba(8, 253, 216, 0.15)",
        mobileBgColor: "rgba(29, 29, 29, 0.95)", // More opaque for menu
        logoColor: "#08fdd8",
        theme: "dark"
    } : {
        baseColor: "#ffffff",
        pillColor: "transparent",
        hoveredPillTextColor: "#08fdd8",
        pillTextColor: "#4b5563",
        activePillColor: "rgba(8, 253, 216, 0.1)",
        activeTextColor: "#08fdd8",
        hoverPillColor: "rgba(8, 253, 216, 0.1)",
        mobileBgColor: "#ffffff",
        logoColor: "#08fdd8",
        theme: "light"
    };

    return (
        <div className="layout">
            <SplashCursor />
            <ScrollProgress />
            <PillNav
                items={[
                    { label: 'Home', href: 'home' },
                    { label: 'About', href: 'about' },
                    { label: 'Skills', href: 'skills' },
                    { label: 'Projects', href: 'projects' },
                    { label: 'Contact', href: 'contact' }
                ]}
                activeHref="home" // Initial active
                className="custom-nav"
                ease="power2.easeOut"
                initialLoadAnimation
                {...navProps}
            />
            {/* Keeping theme toggle separate or integrated? The mockup didn't show it inside PillNav. 
                I will keep the theme toggle below for now as it was outside Navbar previously. 
                Wait, the previous Navbar contained the links. The theme toggle was separate in Layout line 18. 
                So I just replaced the Navbar component. */}
            <div className="theme-toggle-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={toggleTheme}
                        checked={theme === 'light'}
                    />
                    <div className="slider round">
                        <div className="slider-icon">
                            {theme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            )}
                        </div>
                    </div>
                </label>
            </div>
            <main>{children}</main>
            <footer className="footer">
                <div className="social-links" style={{ justifyContent: 'center', marginBottom: '20px' }}>
                    <a href="https://github.com/Santhosh-2005" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/santhosh-g-727824290/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
                <p>&copy; 2026 Portfolio. Built with React & Express.</p>
            </footer>
        </div >
    );
};

export default Layout;
