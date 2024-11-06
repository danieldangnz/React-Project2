//Import all dependencies, other Components
import Header from './my-components/Header';//import Header Component
import Footer from './my-components/Footer';//import Footer Component
import Home from './my-components/Home';//import Home Component
import Home2 from './my-components/Home2';//import Home2 Component
import Home3 from './my-components/Home3';//import Home3 Component

import AdvancedJS from './my-components/AdvancedJS';//import AdvancedJS Component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FAQ from './my-components/FAQ';//import FAQ Component
import FAQ2 from './my-components/FAQ2';//import FAQ2 Component

import Invoice from './my-components/Invoice';//import Invoice Component

//--------------------------------------------
//Function Component "App"
function App() {
  
  //Component UI: HTML Rendering
  return (
    <>{/*React Fragment: serve as parent component in JSX and doesn't add anything to the DOM*/}
      {/*<h1 className='bg-warning p-3 text-center'>ITWD6.408: PROJECT 2</h1>*/}
      <Router>          
          <Header />
          <Routes>
            <Route path="/" element={<Home3 />}   />
            <Route path="/advancedJS" element={<AdvancedJS />}   />
            <Route path="/faq" element={<FAQ2 />}   />
            <Route path="/invoice" element={<Invoice />}   />
          </Routes>         
          <Footer />
      </Router>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default App;