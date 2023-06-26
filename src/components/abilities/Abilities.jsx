import React from 'react';
import './Abilities.css';

const Abilities = (props) => {
    return (
        <div className='abilities-container'>
        {props.abilities.map((ability, index) => (
            <span key={index} className='ability'>
                {ability}
            </span>
        ))}
    </div>
    );
}

export default Abilities;
