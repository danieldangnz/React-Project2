//Import all dependencies, other Components
import { ReactComponent as Nzmap } from "./nzmap/nz_map.svg";
import "../App.css";
import { useState } from 'react';

//Function Component
function Demo3() {
    /*
    //Declare "state" variables    
    //Handle "onChange" event   
    let showName = (event) => {
       //alert("Hover over");
       document.getElementById("path").addEventListener("mouseover", displayInfo(this), false);
       //document.getElementById("info-box").innerHTML = `<p>${event.target.value}</p>`;
    } 
    let displayInfo = (item) => {  
        // not needed since item is already global, 
        // I am assuming this is here just because it's sample code?
        // var item = document.getElementById("button"); 
        document.getElementById("info-box").innerHTML = document.getElementById(item).data('info');
    }
    */
    
    //Component UI: HTML Rendering
    //Ref: https://www.telerik.com/blogs/how-to-use-svg-react#:~:text=We%20can%20use%20inline%20SVG,code%20of%20a%20React%20component.&text=In%20this%20example%2C%20we%20directly,element%20into%20the%20App%20component.
    return(<>
        <h1>DEMO 3: Interactive NZ Map</h1>
        {/* SVG NZ Map */}
        <Nzmap /> {/*  <Nzmap onMouseOver={(event) => showName(event)} /> */}
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Demo3;