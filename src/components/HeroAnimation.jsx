import React, { useEffect } from "react";

const icons = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", top: "40%", left: "65%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png", top: "70%", left: "55%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", top: "50%", left: "75%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png", top: "30%", left: "80%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", top: "60%", left: "85%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", top: "20%", left: "45%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png", top: "80%", left: "35%" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png", top: "10%", left: "60%" }
];

const HeroAnimation = () => {
    useEffect(() => {
        const container = document.querySelector(".light-container");
        if (!container) return; // Guard clause in case component unmounts quickly

        // Clear existing lights to prevent duplicates on re-render
        container.innerHTML = '';

        const createLight = () => {
            const light = document.createElement("div");
            light.className = "light";
            light.style.left = Math.random() * 100 + "vw";
            light.style.animationDuration = 3 + Math.random() * 5 + "s";
            // Create a random distinct color
            const hue = Math.floor(Math.random() * 360);
            light.style.background = `linear-gradient(transparent, hsl(${hue}, 100%, 50%), transparent)`;
            container.appendChild(light);

            // Remove the light after animation to keep DOM clean
            setTimeout(() => {
                light.remove();
            }, 8000); // Max duration (3+5) is 8s
        };

        // Create lights periodically
        const intervalId = setInterval(createLight, 300);

        // Initial burst
        for (let i = 0; i < 20; i++) {
            createLight();
        }

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="hero-animation-wrapper">
            <div className="light-container"></div>

            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.src}
                    alt="tech icon"
                    className="floating-icon"
                    style={{ top: icon.top, left: icon.left }}
                />
            ))}

            {/* Re-adding the main content here or letting it be passed as children could be better, 
          but for now following the visual request to just have this background/animation layer. 
          The 'title' from the request is omitted here to let the main Hero component handle text,
          or we can add it back if this Replacesthe Hero component entirely. */}
        </div>
    );
};

export default HeroAnimation;
