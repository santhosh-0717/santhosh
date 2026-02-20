import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        let mouseX = 0, mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move main cursor head
            if (cursor) {
                cursor.style.left = `${mouseX}px`;
                cursor.style.top = `${mouseY}px`;
            }

            // Create trail dot
            createTrailDot(mouseX, mouseY);
        };

        const createTrailDot = (x, y) => {
            const dot = document.createElement('div');
            dot.classList.add('cursor-trail-dot');
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            document.body.appendChild(dot);

            // Remove after animation
            setTimeout(() => {
                dot.remove();
            }, 500); // 0.5s match CSS animation
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.querySelectorAll('.cursor-trail-dot').forEach(el => el.remove());
        };
    }, []);

    return <div className="cursor-head" ref={cursorRef}></div>;
};

export default Cursor;
