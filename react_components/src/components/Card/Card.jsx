import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";
import placeholderPic from "/src/assets/react.svg";
import "./styles.css";

export default function Card({titleText, subTitle, bodyItems, footerText, imgAltText, imgSrc, cardStyle, titleStyle, bodyStyle, imgStyle, footerStyle}) {
    return (
        <div className='card-wrapper'>
            <div className='card' style={cardStyle}>
                <CardTitle title={titleText} style={titleStyle} subTitle={subTitle} />
                <hr />
                <CardBody bodyItems={bodyItems} style={bodyStyle} />
                <CardImage altText={imgAltText} srcLink={imgSrc} style={imgStyle} />
            </div>
            <CardFooter footerText={footerText} style={footerStyle} />
        </div>
    );
}
