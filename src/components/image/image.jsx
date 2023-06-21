import React from 'react';
import "./Image.css"

const Image = () => {
    return (
        <img 
            className="Image"
            src="src\assets\pokemonPikachu.png" 
            loading="lazy" 
            width="250" 
            height="250" 
        />
    );
};

export default Image;