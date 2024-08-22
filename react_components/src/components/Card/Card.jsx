import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";
import placeholderPic from "/src/assets/react.svg";
import "./styles.css";

export default function Card({titleText, bodyText, footerText, imgAltText, imgSrc, cardStyle, titleStyle, bodyStyle, imgStyle, footerStyle}) {
    return (
        <div className='card' style={cardStyle}>
            <CardTitle title={titleText} style={titleStyle}></CardTitle>
            <CardBody bodyText={bodyText} style={bodyStyle}></CardBody>
            <CardImage altText={imgAltText} srcLink={imgSrc} style={imgStyle}></CardImage>
            <CardFooter footerText={footerText} style={footerStyle}></CardFooter>
        </div>
    );
}
