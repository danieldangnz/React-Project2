//Import all dependencies, other Components
import FormCustomerDetail3 from './FormCustomerDetail3';

import FormRepairDetail2 from './FormRepairDetail2';

import FormCourtesyPhone2 from './FormCourtesyPhone2';
import FormCost2 from './FormCost2';
import FormButtons from './FormButtons';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

//Function Component
function Home3() {
    //----------------------------------------------------
    //"Home" is the Parent Component
    //Child1: FormCourtesyPhone & Child2: FormCost
    const updateSharedState = (value) => setSharedBond(value);//Child1 pass data to Child2
    const [sharedBond, setSharedBond] = useState(0);//Child2 receive data from Child1    

    //Child1: FormRepairDetail & Child2: FormCost
    const updateWarranty = (value) => {setsharedWarranty(value);};//Child1 pass data to Child2
    const [sharedWarranty, setsharedWarranty] = useState(false);//Child2 receive data from Child1
 
    //Child1: FormCustomerDetail & Child2: FormCost
    const updateCustomerType = (value) => setSharedCustomerType(value);//Child1 pass data to Child2  
    const [sharedCustomerType, setSharedCustomerType] = useState(true);//Child2 receive data from Child1 
    
    //-----
    //Pass customerDetails from "FormCustomerDetail" component to "Home"
    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "", });
    
    //----------------------------------------------------
    //Navigate from "home" component to "invoice" component using React Router
    //Attach "sharedBond" and "customerDetails" data to Router to pass from "Home" to "Invoice" component
    const navigate = useNavigate();
    const onSubmit = async(event) => {    
        event.preventDefault();//prevent browser from sending data to server  
        try {    
            //Get entered data on the form
            //For hard-code test: let customerDetails = {title: "Mr", firstname: "Daniel", lastname: "Dang"} 
            //Build the "attached data" in the form of "serialize" json 
            const attachedData = {sharedBond, 
                                  sharedCustomerType,
                                  customerDetails,
                                };    
            //Embed this attached data with the link
            navigate("/invoice", {state: { attachedData } });
        }
        catch(e) {
            alert('ERROR!!!');    
        }
    }
 
    //----------------------------------------------------
    //Component UI: HTML Rendering
    return(<>
      <div className='container-fluid'>
        <form className="row" style={{minHeight: '60vh'}} onSubmit={onSubmit} >
            {/*Customner Details*/}
            <div className="col-12 col-lg-4 p-4 m-0" style={{minHeight:'30vh', backgroundColor:'#FCF3CF'}}> 
                 <FormCustomerDetail3 passDataToParent={updateCustomerType} 
                                      sendCustomerDetails={(value) => setCustomerDetails(value)} />       
            </div>

            {/*Repair Details*/}
            <div className="col-12 col-lg-4 p-4 m-0" style={{minHeight:'30vh', backgroundColor:'#D5F5E3'}}>
                <FormRepairDetail2 passDataToParent={updateWarranty} /> {/*Child1*/}         
            </div>  

            {/*Courtesy Phone & Cost*/}
            <div className="col-12 col-lg-4 p-0 m-0">    
                {/*Courtesy phone*/}
                <div className="p-4" style={{minHeight:'30vh', backgroundColor:'#2874A6'}}> 
                    <FormCourtesyPhone2 passDataToParent={updateSharedState} /> {/*Child1*/}
                </div>

                {/*Cost*/}
                <div className="p-4" style={{minHeight:'20vh', backgroundColor:'#EDBB99'}}>
                    <FormCost2  sharedPropBond={sharedBond} 
                                sharedPropWarranty={sharedWarranty} 
                                sharedPropCustomerType={sharedCustomerType} /> {/*Child2*/}
                </div>              
            </div>  

            {/*Button area*/}
            <div className="p-4 text-center" style={{minHeight: '10vh', backgroundColor: '#EDBB99'}}>
                <FormButtons />
            </div>  
        </form>
      </div>
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Home3;