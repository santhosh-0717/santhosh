import React from 'react';
import { LoadingIsometric } from './LoadingIsometric';

const Loader = ({ loaded }) => {
    return (
        <div className={`loader-container ${loaded ? 'loaded' : ''}`}>
            <div className="loader-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <LoadingIsometric />
                <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginTop: '20px', fontFamily: 'monospace', letterSpacing: '2px' }}>Loading...</h3>
            </div>
        </div>
    );
};

export default Loader;
