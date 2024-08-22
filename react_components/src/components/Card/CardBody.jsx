import React from "react";
import "./styles.css";

const CardBody = ({bodyText, style}) => {
    return (
        <div className='card-body' style={style}>
            {bodyText}
        </div>
    );
};

export default CardBody;
