import React from 'react';

const ExperiencieBar: React.FC = () => {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
                <div>
                    <div style={{ width: '50%' }} />
                    <span style={{left: '50%' }} className="current-experience">300 xp</span>
                </div>
            <span>600 px</span>
        </header>
    );
}

export default ExperiencieBar;