import React from "react";
import "./styles.css";

const CardImage = ({altText, srcLink, style}) => {
    return (
        <div style={style}>
            <img className='card-image' alt={altText} src={srcLink} />
        </div>
    );
};

export default CardImage;
