import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <Grid /> */}
            <Card
                titleText='title!'
                bodyText='body!'
                footerText='footer'
                imgAltText='alt text'
                imgSrc={viteLogo}
                // cardStyle={}
                // titleStyle={}
                // bodyStyle={}
                // imgStyle={}
                // footerStyle={}
            />
        </>
    );
}

export default App;
