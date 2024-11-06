//Import all dependencies, other Components
import { useState } from 'react';

//Function Component
function FormCustomerDetail2( { passDataToParent } ) {

    const [type, setType] = useState({customer: "checked", business: ""}); 

    const updateCustomerType = (event) => {
        //alert("selected: " + event.target.value);
        if (event.target.value === "customer") {
            passDataToParent(true);
            setType({customer: "checked", business: ""});
        } else {
            passDataToParent(false);
            setType({customer: "", business: "checked"});
        }
    } 

    //Component UI: HTML Rendering
    return(<>
        <h2>Customer Details</h2>
        {/*Customer type*/}
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                <legend className="col-11 float-none w-auto">Customer type *</legend> 
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Customer</label>
                    <input type="radio" name="customer-type" value="customer" checked={type.customer}
                           onChange={(event) => updateCustomerType(event)} />
                </div>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Business</label>
                    <input type="radio" name="customer-type" value="business" checked={type.business}
                        onChange={(event) => updateCustomerType(event)} />
                </div>
            </fieldset>             
        </div>
            
        {/*Details*/}
        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Title *</label>                
            <select className="col-12 col-md-12 col-lg-7" required>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>   
        </div>                                  
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">First Name *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Last Name *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Street *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Suburb</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" />
        </div>   
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">City *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" required />
        </div>  
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Post Code</label>
            <input className="col-12 col-md-12 col-lg-7" type="text"/>
        </div>  
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Email *</label>
            <input className="col-12 col-md-12 col-lg-7" type="email" />
        </div>        
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCustomerDetail2;