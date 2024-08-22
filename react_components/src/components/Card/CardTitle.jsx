import React from "react";
import "./styles.css";

const CardTitle = ({title, style}) => {
    return (
        <h2 className='card-title' style={style}>
            {title}
        </h2>
    );
};

export default CardTitle;
