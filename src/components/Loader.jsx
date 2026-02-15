import React from 'react';

const Loader = ({ loaded }) => {
    return (
        <div className={`loader-container ${loaded ? 'loaded' : ''}`}>
            <div className="loader-content">
                {/* Logo removed */}
                <div className="loader-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
