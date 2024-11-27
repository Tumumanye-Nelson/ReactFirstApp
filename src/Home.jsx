import React from "react";
import photo from './assets/uganda.jpg'
import Service from "./Service";
import About from "./About";
import Destination from "./Destination";
import Tours from "./Tours";
import Contact from "./Contact";
import Blogs from "./Blogs";

const Home = () =>{
return(
    <div className="H">
        <h4>Uganda is the best tourism destination </h4>
        <img src={photo} height={200} width={200} alt="uganda tourism" />

        <div>
            <p>we have the variety of tourism city in uganda </p>
            <p> To know about the tourism destionation tap the below link </p>
        </div>
        <a className="img1" href="https://www.google.com/search?q=uganda+tourism+attractions&oq=uganda+tourism+attractions&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMg0ICRAAGIYDGIAEGIoF0gEINTQ0M2owajmoAgCwAgE&sourceid=chrome&ie=UTF-8" target="blank">LINK</a>
<About/>
<Blogs/>
<Contact/>
<Destination/>
<Service/>

    </div>
);
}
export default Home;