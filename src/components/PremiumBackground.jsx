import React from 'react';

const PremiumBackground = () => {
    const icons = [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    ];

    return (
        <div className="premium-bg-container">
            {/* 1. Soft Gradient Background */}
            <div className="bg-gradient-base"></div>

            {/* 2. Moving Blur/Glow Effects */}
            <div className="glow-blob blob-1"></div>
            <div className="glow-blob blob-2"></div>
            <div className="glow-blob blob-3"></div>

            {/* 3. Diagonal Animated Lines (Grid) */}
            <div className="diagonal-grid"></div>

            {/* 4. Floating Tech Icons */}
            <div className="floating-icons-container">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className={`floating-icon icon-${index}`}
                        style={{
                            backgroundImage: `url(${icon})`,
                            '--delay': `${index * 2}s`,
                            '--duration': `${15 + index * 2}s`,
                            '--left': `${Math.random() * 90}%`,
                            '--top': `${Math.random() * 90}%`
                        }}
                    ></div>
                ))}
            </div>

            {/* Noise overlay for texture (optional premium feel) */}
            <div className="noise-overlay"></div>
        </div>
    );
};

export default PremiumBackground;
