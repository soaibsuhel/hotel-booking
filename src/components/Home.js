import React from "react";
import web from "../images/BE_AnimazioneHome_04_1024.gif";
import Common from "./Common";
import Service from './service';
const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/gallery"
                btname=" Get Started"
            />
            <Service />
        </>
    );
};

export default Home;