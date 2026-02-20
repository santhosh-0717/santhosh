import React from 'react';

const Projects = () => {
    // Hardcoded data with direct links
    const projects = [
        {
            id: 2,
            title: "student Form",
            description: "Personal portfolio to showcase skills and projects.",
            tech: ["React", "CSS3", "Vite"],
            image: "https://screenshots.codesandbox.io/wkrncj/482.png",
            demoLink: "https://santhosh-0717.github.io/student/",
            repoLink: "https://github.com/santhosh-0717/student"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Kanban-style task manager for teams.",
            tech: ["Vue.js", "Firebase", "Tailwind"],
            image: "https://www.livemint.com/lm-img/img/2023/03/29/600x338/Disney_Hotstar_1680055435670_1680055456705_1680055456705.png",
            demoLink: "https://santhosh-0717.github.io/clone/",
            repoLink: "https://github.com/santhosh-0717/clone"
        },
        {
            id: 32,
            title: "student-registration-form",
            description: "Kanban-style task manager for teams.",
            tech: ["html", "css", "javascript"],
            image: "https://static.vecteezy.com/system/resources/previews/029/136/188/non_2x/scientific-calculator-calculator-online-google-calculator-percentage-calculator-vector.jpg",
            demoLink: "https://santhosh-0717.github.io/calculator/",
            repoLink: "https://github.com/santhosh-0717/calculator"
        }
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>My Projects</h2>
            <div style={styles.grid}>
                {projects.map(project => (
                    <div key={project.id} style={styles.card} className="project-card">
                        <div style={{ ...styles.image, backgroundImage: `url(${project.image})` }} className="project-image"></div>
                        <div style={styles.content}>
                            <h3 style={styles.title}>{project.title}</h3>
                            <p style={styles.description}>{project.description}</p>

                            <div style={styles.techStack}>
                                {project.tech.map((t, index) => (
                                    <span key={index} style={styles.tech}>{t}</span>
                                ))}
                            </div>

                            <div style={styles.links}>
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                                    Live Demo
                                </a>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-btn repo-btn">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '100px 50px',
        minHeight: '100vh',
        background: 'transparent'
    },
    heading: {
        fontSize: '3rem',
        color: 'var(--text-color)',
        marginBottom: '50px',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
    },
    card: {
        background: 'var(--card-bg)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px var(--shadow-color)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        height: '100%'
    },
    image: {
        height: '220px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid var(--border-color)'
    },
    content: {
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    title: {
        color: 'var(--text-color)',
        fontSize: '1.5rem',
        margin: '0 0 10px 0',
        fontWeight: '600'
    },
    description: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        marginBottom: '20px',
        flex: 1
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '25px'
    },
    tech: {
        background: 'var(--bg-secondary)',
        color: 'var(--primary-color)',
        padding: '4px 10px',
        borderRadius: '15px',
        fontSize: '0.8rem',
        fontWeight: '500',
        border: '1px solid var(--border-color)'
    },
    links: {
        display: 'flex',
        gap: '15px'
    }
};

export default Projects;
