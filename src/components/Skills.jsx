import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', level: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', level: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', level: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Git', level: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'MongoDB', level: '65%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Express', level: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Skills</h2>
            <div style={styles.grid}>
                {skills.map((skill, index) => (
                    <div key={index} style={styles.card} className="skill-card animate-fade-up">
                        <img src={skill.icon} alt={skill.name} style={styles.skillIcon} />
                        <h3 style={styles.skillName}>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '100px 50px',
        background: 'transparent',
        minHeight: '60vh'
    },
    heading: {
        fontSize: '3rem',
        color: 'var(--primary-color)',
        marginBottom: '50px',
        textAlign: 'center'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Reduced min-width
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
    },
    card: {
        background: 'var(--card-bg)',
        padding: '30px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px var(--shadow-color)',
        border: '1px solid var(--border-color)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column', // Stack icon and text
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        transition: 'transform 0.3s, box-shadow 0.3s'
    },
    skillIcon: {
        width: '50px',
        height: '50px',
        marginBottom: '10px'
    },
    skillName: {
        color: 'var(--text-color)',
        marginBottom: '0',
        textAlign: 'center',
        fontSize: '1.2rem',
        width: '100%'
    }
};

export default Skills;
