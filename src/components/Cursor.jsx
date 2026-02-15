import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        let mouseX = 0, mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move main cursor
            if (cursor) {
                cursor.style.left = `${mouseX}px`;
                cursor.style.top = `${mouseY}px`;
            }

            // Create a drop
            createDrop(mouseX, mouseY);
        };

        const createDrop = (x, y) => {
            const drop = document.createElement('div');
            drop.classList.add('cursor-drop');
            drop.style.left = `${x}px`;
            drop.style.top = `${y}px`;
            document.body.appendChild(drop);

            // Remove after animation completes (0.5s match CSS)
            setTimeout(() => {
                drop.remove();
            }, 500);
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            // Cleanup any remaining drops
            document.querySelectorAll('.cursor-drop').forEach(el => el.remove());
        };
    }, []);

    return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
