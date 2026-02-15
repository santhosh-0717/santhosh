import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div style={styles.progressContainer}>
            <div style={{ ...styles.progressBar, height: `${scrollTop}%` }}></div>
        </div>
    );
};

const styles = {
    progressContainer: {
        position: 'fixed',
        top: 0,
        right: 0, // Position on the right side
        width: '6px', // Width of the track
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.05)', // Subtle track color
        zIndex: 9999
    },
    progressBar: {
        width: '100%',
        background: 'var(--primary-color)', // Use theme primary color
        boxShadow: '0 0 10px var(--primary-color)', // Glow effect
        transition: 'height 0.1s ease-out'
    }
};

export default ScrollProgress;
