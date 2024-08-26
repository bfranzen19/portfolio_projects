import React from "react";
import Text from "../Text/Text";
import "./styles.css";

const CardTitle = ({title, style, subTitle}) => {
    return (
        <div className='card-title-wrapper'>
            <Text bodyText={title} size={30} />
            <Text bodyText={subTitle} size={20} />
        </div>
    );
};

export default CardTitle;
