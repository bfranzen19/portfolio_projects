import React from "react";
import Text from "../Text/Text";
import "./styles.css";

const CardBody = ({bodyItems, style}) => {
    return (
        <div className='card-body' style={style}>
            {typeof bodyItems === "string" ? bodyItems : bodyItems.map((body) => <Text bodyText={body} />)}
        </div>
    );
};

export default CardBody;
