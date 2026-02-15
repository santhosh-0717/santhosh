import React, { useEffect, useRef, useState, useMemo } from 'react';
import TagCloud from 'TagCloud';

// Helper to animate letters
const AnimatedLetters = ({ strArray, idx }) => {
    return (
        <span style={{ color: 'var(--primary-color)' }}>
            {strArray.map((char, i) => (
                <span
                    key={char + i}
                    className="blast"
                    onMouseEnter={(e) => {
                        e.target.style.color = 'var(--secondary-color)';
                        e.target.classList.add('rubberBand');
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'var(--primary-color)';
                    }}
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

// Typewriter Component
const Typewriter = ({ texts, speed = 100, deleteSpeed = 50, delay = 2000 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(speed);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? deleteSpeed : speed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, texts, speed, deleteSpeed, delay]);

    return (
        <span>
            {text}
            <span className="blinking-cursor">|</span>
        </span>
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const tagCloudRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return; // Guard clause

        const icons = [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        ];

        // Responsive radius calculation
        const screenWidth = window.innerWidth;
        const radius = screenWidth < 768 ? 150 : 250;

        const options = {
            radius: radius,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true,
        };

        const initTagCloud = () => {
            try {
                // Initialize TagCloud with placeholders
                const texts = icons.map(() => ' ');

                // Cleanup previous instance if any
                if (tagCloudRef.current) {
                    try {
                        tagCloudRef.current.destroy();
                    } catch (e) {
                        container.innerHTML = '';
                    }
                } else {
                    container.innerHTML = '';
                }

                tagCloudRef.current = TagCloud(container, texts, options);

                // Custom image injection
                setTimeout(() => {
                    const items = container.querySelectorAll('.tagcloud--item');
                    items.forEach((item, index) => {
                        if (icons[index]) {
                            const img = document.createElement('img');
                            img.src = icons[index];
                            img.alt = 'Tech Icon';
                            img.style.width = '50px';
                            img.style.height = '50px';
                            img.style.objectFit = 'contain';
                            img.style.pointerEvents = 'none';

                            item.innerHTML = ''; // Clear placeholder text
                            item.style.display = 'flex';
                            item.style.alignItems = 'center';
                            item.style.justifyContent = 'center';
                            item.appendChild(img);
                        }
                    });
                }, 200);
            } catch (error) {
                console.error("TagCloud error:", error);
            }
        }

        initTagCloud();

        return () => {
            if (tagCloudRef.current) {
                try {
                    tagCloudRef.current.destroy();
                } catch (e) {
                    // ignore destroy errors
                }
            }
        };
    }, []);

    const nameArray = useMemo(() => ['s', 'a', 'n', 't', 'h', 'o', 's', 'h'], []);

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="animate-fade-up delay-1">
                    Hi, <br />
                    I'm <AnimatedLetters strArray={nameArray} idx={15} />, <br />
                    <Typewriter texts={['Full Stack Developer', 'MERN Stack Developer', 'React Developer']} />
                </h1>
                <p style={{ color: '#888', marginTop: '20px', marginBottom: '30px' }} className="animate-fade-up delay-2">React / Express / Node.js</p>

                <div className="social-links animate-fade-up delay-3">
                    <a href="https://github.com/Santhosh-2005" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/santhosh-g-727824290/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="sphere-container animate-fade-up delay-3">
                <span className="tagcloud" ref={containerRef}></span>
            </div>
        </div>
    );
};

export default Hero;
