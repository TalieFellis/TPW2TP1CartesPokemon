import React from 'react';
import "./Image.css"

const Image = (props) => {
    return (
        <img 
            className="Image"
            src={props.src}
            loading="lazy" 
            width="250" 
            height="250" 
            alt="Pokemon"
        />
    );
};

export default Image;