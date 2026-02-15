import React from 'react';

const Projects = () => {
    // Hardcoded data with direct links
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart and checkout functionality.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://via.placeholder.com/400x250?text=E-Commerce",
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Personal portfolio to showcase skills and projects.",
            tech: ["React", "CSS3", "Vite"],
            image: "https://via.placeholder.com/400x250?text=Portfolio",
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Kanban-style task manager for teams.",
            tech: ["Vue.js", "Firebase", "Tailwind"],
            image: "https://via.placeholder.com/400x250?text=Task+App",
            demoLink: "#",
            repoLink: "#"
        },
        {
            id: 32,
            title: "student-registration-form",
            description: "Kanban-style task manager for teams.",
            tech: ["html", "css", "javascript"],
            image: "",
            demoLink: "https://santhosh-0717.github.io/student/",
            repoLink: "https://github.com/santhosh-0717/student"
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
        color: '#fff',
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
        background: '#050505',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
        height: '100%'
    },
    image: {
        height: '220px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid #333'
    },
    content: {
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    title: {
        color: '#fff',
        fontSize: '1.5rem',
        margin: '0 0 10px 0',
        fontWeight: '600'
    },
    description: {
        color: '#aaa',
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
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'var(--primary-color)',
        padding: '4px 10px',
        borderRadius: '15px',
        fontSize: '0.8rem',
        fontWeight: '500'
    },
    links: {
        display: 'flex',
        gap: '15px'
    }
};

export default Projects;
