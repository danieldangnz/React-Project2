//Import all dependencies, other Components
import { useState } from 'react';

//Function Component
function FormCost_State(props) {

    //Declare multiple "state" variables: "bond" and "serviceFee"
    const [bond, setBond] = useState(0);
    const [serviceFee, setServiceFee] = useState(85);

    //Event handling
    const bondUpdate = (event) => {
        setBond(event.target.value);
    }
    const feeUpdate = (event) => {
        setServiceFee(event.target.value);
    }

    //Component UI: HTML Rendering
    return(<>
        <h2>Cost</h2>
        <div className="row mt-2  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" onChange={bondUpdate} value={props.sharedState} />
        </div>  
        <div className="row mt-1  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" onChange={feeUpdate} value={85} />
        </div>  
        <div className="row mt-1  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={Number(bond) + Number(serviceFee)} onlyread />
        </div>    
        <div className="row mt-1  ms-3">
            <label className="col-12 col-md-12 col-lg-4">GST ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={(0.15*(Number(bond) + Number(serviceFee))).toFixed(2)} onlyread/>
        </div>    
        <div className="row mt-1  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total (+GST) ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" value={(1.15*(Number(bond) + Number(serviceFee))).toFixed(2)} onlyread/>
        </div>        
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost_State;