//Function Component
function FormCost() {
    //Component UI: HTML Rendering
    return(<>
        <h2>Cost</h2>
        <div className="row mt-2  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="bond" value={0} readonly />
        </div>  
        <div className="row mt-1  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="serviceFee" value={85} readonly/>
        </div>  
        <div className="row mt-1  ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="totalFee" value={85} readonly />
        </div>              
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;