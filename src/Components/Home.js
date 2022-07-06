import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Team from "./Team";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="bg-green-secondary mt-5">
                <About/>
            </div>
            <Team/>
            <Footer/>
        </div>
    )
}

export default Home