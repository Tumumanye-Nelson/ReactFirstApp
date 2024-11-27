import React from "react";
import Service from "./Service";
import About from "./About";
import Tours from "./Tours";
import Contact from "./Contact";
import Blogs from "./Blogs";
function Destination(){
    return(
<div>
    <p>This is the Destination page</p>
<About/>
<Blogs/>
<Contact/>
<Service/>
</div>
    );
}
export default Destination