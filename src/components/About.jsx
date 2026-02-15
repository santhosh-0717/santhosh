import React, { useEffect } from 'react';

const About = () => {
    return (
        <div style={styles.about}>
            <div style={styles.container}>
                <div style={styles.textSection}>
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
                        Download Resume
                    </a>
                </div>

                <div style={styles.imageContainer} className="animate-fade-up delay-3">
                    <img
                        src="https://avatars.githubusercontent.com/u/211788246?s=400&u=1f5f074476c7de26cdae5cd5935b7bb8449d2c4f&v=4"
                        alt="Profile"
                        style={styles.profileImage}
                        onMouseEnter={(e) => e.target.style.transform = 'rotate(0deg) scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'rotate(5deg)'}
                    />
                </div>
            </div>
        </div>
    );
};

const styles = {
    about: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 100px',
        background: 'transparent',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '100%',
        gap: '50px'
    },
    textSection: {
        flex: 1,
        textAlign: 'left', // Text align left
        zIndex: 10
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: '350px', // Slightly larger
        height: '350px',
        borderRadius: '20px', // Rounded rectangle instead of circle
        border: '3px solid var(--primary-color)',
        objectFit: 'cover',
        boxShadow: '0 0 20px rgba(8, 253, 216, 0.3)',
        transform: 'rotate(5deg)', // Slight tilt for style
        transition: 'transform 0.3s'
    },
    heading: {
        fontSize: '4rem',
        color: 'var(--secondary-color)',
        marginBottom: '20px',
        marginTop: 0
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#ccc'
    }
};

export default About;
