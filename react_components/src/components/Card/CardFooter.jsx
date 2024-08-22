import React from "react";
import "./styles.css";

const CardFooter = ({footerText, style}) => {
    return (
        <div className='card-footer' style={style}>
            {footerText}
        </div>
    );
};

export default CardFooter;
