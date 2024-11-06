import { useState, useRef } from 'react';

function FormRepairDetail2( { passDataToParent } ) {
    //
    //The useState Hook: track & update component state
    const [warrantyStatus, setWarrantyStatus] = useState('Please select the purchase date');
    const [warrantyStyle, setWarrantyStyle]  = useState({color: 'green'});

    //The useRef Hook: used to access a DOM element directly.
    //DON'T USE: document.getElementById('') => CAN'T REUSE the component in many places
    const warrantRef = useRef(null);
    //Write function response to an "onChange" event - "e" is the manupulated element

    let updateWarrantyStatus = (e) => {
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
    const updateWarranty = (value) => {
        passDataToParent(value); //Child1 (FormCourtesyPhone)
    } 

    //Component UI: HTML Rendering
    return(<>
        <h2>Repair Details</h2>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Purchase Date *</label>
            <input className="col-12 col-md-12 col-lg-7" type="date" 
                max={new Date().toJSON().slice(0, 10)} required 
                onChange={updateWarrantyStatus} />
        </div>      
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Repair Date *</label>
            <input className="col-12 col-md-12 col-lg-7" type="date" required/>
        </div>  

        {/*Under Warranty*/}
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                <legend className="col-11 float-none w-auto">Under Warranty</legend>
                <div>
                    <p style={warrantyStyle}> {warrantyStatus} </p>
                    <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                    <input type="checkbox" ref={warrantRef}
                           onChange={(event) => updateWarranty(event.target.checked)} />  {/*passDataToParent(event.target.checked). This is shared warranty need to pass upto parent Component "Home" */}                   
                </div>
            </fieldset>             
        </div>     

        {/*Other details*/}         
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">IMEI *</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" required />
        </div>  
        
        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Make *</label>                
            <select className="col-12 col-md-12 col-lg-7">                        
                <option value="apple">Apple</option>
                <option value="lg">LG</option>
                <option value="motorola">Motorola</option>
                <option value="nokia">Nokia</option>
                <option value="samsung">Samsung</option>
                <option value="sony">Sony</option>
                <option value="other">Other</option>                   
            </select>   
        </div>  

        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Model Number</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" required />
        </div>  

        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Fault Category *</label>                
            <select className="col-12 col-md-12 col-lg-7">               
                <option value="battery">Battery</option>
                <option value="charging">Charging</option>
                <option value="screen">Screen</option>
                <option value="sd-storage">SD Storage</option>
                <option value="software">Software</option>
                <option value="other">Other</option>                
            </select>   
        </div> 

        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Description *</label>
            <textarea className="col-12 col-md-12 col-lg-7" name="description" rows="5" required></textarea>            
        </div>  
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormRepairDetail2;