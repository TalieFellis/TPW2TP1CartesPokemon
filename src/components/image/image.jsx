import React from 'react';
import "./Image.css"

const Image = () => {
    return (
        <img 
            className="Image"
            src="./components/assets/pokemonPikachu.png" 
            loading="lazy" 
            width="600" 
            height="400" 
        />
    );
};

export default Image;