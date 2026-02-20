import React, { useEffect } from 'react';

const About = () => {
    return (
        <div id="about" className="section-wrapper">
            <div className="about-row">
                <div className="about-text">
                    <h2 style={styles.heading} className="animate-fade-up delay-1">About Me</h2>
                    <p style={styles.paragraph} className="animate-fade-up delay-2">
                        I'm a passionate Full Stack Developer located in India.
                        I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                        <br /><br />
                        Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                    </p>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1cCJ__weeJZqYm9y6ASGg1B2Fuo0w4EjF"
                        className="resume-btn animate-fade-up delay-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg> Resume
                    </a>
                </div>

                <div className="about-image-ctr animate-fade-up delay-3">
                    <img
                        src="https://avatars.githubusercontent.com/u/211788246?s=400&u=1f5f074476c7de26cdae5cd5935b7bb8449d2c4f&v=4"
                        alt="Profile"
                        className="about-img"
                    />
                </div>
            </div>
        </div>
    );
};

const styles = {
    // Keep remaining static styles
    heading: {
        fontSize: '4rem',
        color: 'var(--secondary-color)',
        marginBottom: '20px',
        marginTop: 0
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: 'var(--text-secondary)'
    }
};

export default About;
