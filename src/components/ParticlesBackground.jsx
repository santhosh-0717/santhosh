import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
            options={{
                fullScreen: { enable: false, zIndex: 0 },
                background: {
                    color: {
                        value: "#0d0d0d",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        bubble: {
                            distance: 200,
                            duration: 2,
                            size: 10,
                            opacity: 0,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#08fdd8",
                    },
                    links: {
                        enable: false, // Disable lines for a cleaner floating effect
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 1, // Slow movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100, // More particles
                    },
                    opacity: {
                        value: { min: 0.1, max: 0.7 }, // Twinkle effect
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                        animation: {
                            enable: true,
                            speed: 3,
                            minimumValue: 0.1,
                            sync: false
                        }
                    },
                    // Add a subtle glow
                    shadow: {
                        blur: 10,
                        color: {
                            value: "#08fdd8"
                        },
                        enable: true,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
