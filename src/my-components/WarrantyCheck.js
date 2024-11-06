import { useState, useRef } from 'react';

function WarrantyCheck() {

  //The useState Hook: track & update component state
  const [warrantyStatus, setWarrantyStatus] = useState('Please select the purchase date above');
  const [warrantyStyle, setWarrantyStyle]  = useState({color: 'green'});

  //The useRef Hook: used to access a DOM element directly.
  //DON'T USE: document.getElementById('') => CAN'T REUSE the component in many places
  const warrantRef = useRef(null);

  //Write function response to an "onChange" event - "e" is the manupulated element
  let updateWarranty = (e) => {
    let getPurchaseDate = new Date(e.target.value);
    let today = new Date(new Date().toJSON().slice(0, 10));
    //Get the difference in time (milliseconds)
    let timeDifference = today.getTime() - getPurchaseDate.getTime();
    //Convert time difference from milliseconds to days
    let dayDifference = timeDifference / (1000 * 3600 * 24);
    
    //CHECK IF the days between TODAY and Purchase Date is more than 10 days or not?    
    let warrantyBox = warrantRef.current;  
    if ( dayDifference > 2*365) {
      warrantyBox.checked = false;
      warrantyBox.disabled = true;
      setWarrantyStatus('Not under warranty anymore!');
      setWarrantyStyle({color: 'red'});
    } else {
      warrantyBox.disabled = false;
      setWarrantyStatus('Please check the box if your phone is under waranty!');
      setWarrantyStyle({color: 'green'});
    }
  }

  //
  return (
    <>   
      <div>
        <label>Purchase Date: </label>
        <input type="date" max = {new Date().toJSON().slice(0, 10)}
          /*max="2024-09-24" min="2024-09-24"*/
          /*min={new Date().toJSON().slice(0, 10)} */
          onChange={updateWarranty} />
      </div>   
      <div>
          <label>Warranty: <span style={warrantyStyle}>{warrantyStatus}</span> </label>
          <input type="checkbox" ref={warrantRef} />  
      </div>
    </>
  );
}

export default WarrantyCheck;
