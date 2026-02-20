import React from "react";
import { motion } from "framer-motion";

export const LoadingIsometric = () => {
    return (
        <div style={{ position: 'relative', width: '200px', height: '200px', transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(45deg)' }}>
            {/* Base Platform */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(8, 253, 216, 0.2)', // Primary color subtle
                    border: '2px solid var(--primary-color)',
                    transform: 'rotateX(90deg) translateZ(-50px)',
                    boxShadow: '0 0 20px rgba(8, 253, 216, 0.4)'
                }}
            />

            {/* Cube 1 */}
            <Cube color="#ff2a6d" delay={0} x={-20} y={-20} z={20} />

            {/* Cube 2 */}
            <Cube color="#08fdd8" delay={0.5} x={20} y={-40} z={0} />

            {/* Cube 3 */}
            <Cube color="#a855f7" delay={1} x={0} y={-60} z={-20} />

            {/* Connection Lines (Simulated with thin divs) */}
            <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    width: '2px',
                    height: '40px',
                    background: 'var(--primary-color)',
                    transform: 'translate3d(30px, -30px, 10px) rotateZ(45deg)',
                }}
            />
        </div>
    );
};

const Cube = ({ color, delay, x, y, z }) => {
    const faceStyle = {
        position: 'absolute',
        width: '40px',
        height: '40px',
        border: '1px solid rgba(255,255,255,0.2)',
        boxSizing: 'border-box'
    };

    return (
        <motion.div
            animate={{
                y: [y, y - 20, y],
            }}
            transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay },
            }}
            style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                transformStyle: 'preserve-3d',
                transform: `translate3d(${x}px, ${y}px, ${z}px)`
            }}
        >
            {/* Front */}
            <div style={{ ...faceStyle, transform: 'translateZ(20px)', background: color, filter: 'brightness(1.2)' }} />
            {/* Back */}
            <div style={{ ...faceStyle, transform: 'translateZ(-20px) rotateY(180deg)', background: color, filter: 'brightness(0.8)' }} />
            {/* Right */}
            <div style={{ ...faceStyle, transform: 'translateX(20px) rotateY(90deg)', background: color, filter: 'brightness(0.9)' }} />
            {/* Left */}
            <div style={{ ...faceStyle, transform: 'translateX(-20px) rotateY(-90deg)', background: color, filter: 'brightness(0.9)' }} />
            {/* Top */}
            <div style={{ ...faceStyle, transform: 'translateY(-20px) rotateX(90deg)', background: color, filter: 'brightness(1.5)' }} />
            {/* Bottom */}
            <div style={{ ...faceStyle, transform: 'translateY(20px) rotateX(-90deg)', background: color, filter: 'brightness(0.5)' }} />
        </motion.div>
    );
}
