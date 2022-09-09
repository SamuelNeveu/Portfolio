import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "../style.scss"
import Hi from "./HI";
import About from "./About";
import Timeline from "./timeline";
import Projects from "./projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div id="home">
            <section className="one">
                <Hi/>
            </section>
            <section className="two">
                <About/>
            </section>
            <section className="three">
                <Projects/>
            </section>
            <section className="four">
                <Timeline/>
            </section>
            <section className="five">
                <Contact/>
            </section>
            <section className={"six"}>
                <Footer/>
            </section>
        </div>
    );
};

export default Home;
