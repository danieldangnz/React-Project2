//Import all dependencies, other Components
import { useState } from 'react';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import Demo7 from './Demo7';
import Demo8 from './Demo8';
import Demo9 from './Demo9';
import Demo10 from './Demo10';
import Demo11 from './Demo11';


//Function Component
function AdvancedJS() {    
    //State
    const [clickedButton, setClickedButton] = useState(0);
    const toggleDemo = (index) => {
        setClickedButton(index);
    }
    
    //Component UI: HTML Rendering
    return(<>
        <div style={{minHeight: '60vh'}}>            
            {/*BUTTONS AND DEMOS*/}
            <div className="row mt-2 p-0">
                {/*Column 1 */}
                <div className="col-12 col-md-2 bg-primary ">
                    <div className="row">
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(1)}>DEMO-1: SLIDESHOWS </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(2)}>DEMO-2: PERSONALIZATION & LOCALSTORAGE </button>     
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(3)}>DEMO-3 </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(4)}>DEMO-4 </button>                  
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(5)}>DEMO-5 </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(6)}>DEMO-6 </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(7)}>DEMO-7 </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(8)}>DEMO-8 </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(9)}>DEMO-9: REST API </button>
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(10)}>DEMO-10: Warranty check </button>   
                        <button className="col-6 col-md-12 btn btn-outline-warning mb-1" onClick={() => toggleDemo(11)}>DEMO-11: REST API</button>                                             
                    </div>
                </div>
               {/*Column 2*/}
                <div className="col-12 col-md-10 bg-white">
                    <div className="row" style={{minHeight: '50vh'}}>                        
                        <div className="col-12" style={{display: clickedButton===1 ?'block': 'none'}}><Demo1 /> </div> {/*Demo 1 */}                   
                        <div className="col-12" style={{display: clickedButton===2 ?'block': 'none'}}><Demo2 /> </div> {/*Demo 2 */}
                        <div className="col-12" style={{display: clickedButton===3 ?'block': 'none'}}><Demo3 /> </div> {/*Demo 3 */}
                        <div className="col-12" style={{display: clickedButton===4 ?'block': 'none'}}><Demo4 /> </div> {/*Demo 4 */}
                        <div className="col-12" style={{display: clickedButton===5 ?'block': 'none'}}><Demo5 /> </div> {/*Demo 5 */}
                        <div className="col-12" style={{display: clickedButton===6 ?'block': 'none'}}><Demo6 /> </div> {/*Demo 6 */}
                        <div className="col-12" style={{display: clickedButton===7 ?'block': 'none'}}><Demo7 /> </div> {/*Demo 7 */}
                        <div className="col-12" style={{display: clickedButton===8 ?'block': 'none'}}><Demo8 /> </div> {/*Demo 8 */}
                        <div className="col-12" style={{display: clickedButton===9 ?'block': 'none'}}><Demo9 /> </div> {/*Demo 9 */}
                        <div className="col-12" style={{display: clickedButton===10 ?'block': 'none'}}><Demo10 /></div> {/*Demo 10 */}     
                        <div className="col-12" style={{display: clickedButton===11 ?'block': 'none'}}><Demo11 /></div> {/*Demo 11 */}                           
                    </div>
                </div>
            </div>            
        </div>        
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;