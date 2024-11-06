function Demo8() {

  let x = document.getElementById("demo");
  let getLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  let showPosition = (position) => {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
                    "<br>Longitude: " + position.coords.longitude;
  }

  return (<>
    <h1>Demo 8: HTML Geolocation - show the shop location on Google Map</h1>
    <h3>Possibly calculate the distance between user location to shop location</h3>
    
    <p>Click the button to get your coordinates.</p>
    <button onClick={getLocation}>Get current location</button>   
    <br />   
    <br />       
    <p id="demo" style={{backgroundColor: 'white'}}></p> 
    </>
  );
}

export default Demo8;