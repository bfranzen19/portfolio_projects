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
                subTitle='stuff!'
                // bodyItems='things!'
                bodyItems={["one", "two"]}
                footerText='footer'
                imgAltText='alt text'
                imgSrc={viteLogo}
                // cardStyle={}
                titleStyle={{textAlign: "left"}}
                // bodyStyle={}
                // imgStyle={}
                footerStyle={{backgroundColor: "red"}}
            />
        </>
    );
}

export default App;
