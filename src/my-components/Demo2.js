//Import all dependencies, other Components
import { useState } from 'react';

//Function Component
function Demo2() {
    //Declare "state" variables
    const [bgColor, setbgColor] = useState(localStorage.getItem("color_preference") != null ? localStorage.getItem("color_preference") : "white");
    const [textSize, setTextSize] = useState(localStorage.getItem("size_preference") != null ? localStorage.getItem("size_preference") : "16px");

    //Handle "onChange" event
    let changeBgColor = (selectedOption) => {              
        setbgColor(selectedOption);	//Change the background color accordingly					
		localStorage.setItem("color_preference", selectedOption);//Store this color locally & permanently on client side
    }
    //
    let changeText = (selectedOption) => {
        setTextSize(selectedOption);			
        localStorage.setItem("size_preference", selectedOption);	
    }
    
    //Component UI: HTML Rendering
    return(<>
        <h1>DEMO 2: Remember user preferences by using Local Storage API</h1>
	    <div id="customization-card" style={{backgroundColor: bgColor, fontSize: textSize}} >
            <p>Lorem Ipsum</p>
            <img src={require("./images/movie0.jpg")}
                alt="Image"
                height="100px" />
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
	    </div>

        <p>YOUR PERSONAL PREFERENCES:</p>
        <label>Select Image: </label>
        <select>
            <option value={require("./images/movie0.jpg")} selected>DEFAULT</option>
            <option value={require("./images/movie0.jpg")}>Image 1</option>
            <option value={require("./images/movie1.jpg")}>Image 2</option>
            <option value={require("./images/movie2.jpg")}>Image 3</option>
            <option value={require("./images/movie3.jpg")}>Image 4</option>
            <option value={require("./images/movie4.jpg")}>Image 5</option>
        </select>
        <br />

        <label>Select background color: </label>
        <select onChange={(event) => changeBgColor(event.target.value)} >
            <option value="white" selected>DEFAULT</option>
            <option value="red">RED</option>
            <option value="green">GREEN</option>
            <option value="yellow">YELLOW</option>
            <option value="ivory">IVORY</option>
            <option value="pink">PINK</option>
            <option value="purple">PURPLE</option>
        </select>
        <br />

        <label>Select Text Size: </label>
        <select id="sizeOption" onChange={(event) => changeText(event.target.value)} >	
            <option value="35px" selected>DEFAULT</option>
            <option value="35px">VERY BIG</option>
            <option value="25px">BIG</option>
            <option value="16px">NORMAL</option>		
        </select>	   
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Demo2;