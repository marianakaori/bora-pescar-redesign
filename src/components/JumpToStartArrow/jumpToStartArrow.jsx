import React, { useState, useEffect } from 'react';
import './jumpToStartArrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const JumpToStartArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // botao aparece se o user scrollar mais q 200px
            setIsVisible(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='container-up-button'>
            {isVisible && (
                <div className="scroll-to-start-button">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default JumpToStartArrow;
