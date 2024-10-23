// import Navbar from './Component/Navbar';
// import Footer from './Component/Footer';
// import Homeimg from './Component/Homeimg';
// import Crosel from './Component/Crosel';


import Index from './Component/Index';
import About from './Component/About';
import Application from './Component/Application';
import Blog from './Component/Blog';
import Blog2 from './Component/Blog2';
import Business from './Component/Business';
import C_policy from './Component/C_policy';
import Delivery from './Component/Delivery';
import Experiance from './Component/Experiance';
import P_privacy from './Component/P-privacy';
import Product from './Component/Product';
import Sign from './Component/Sign';
import Sign_up from './Component/Sign_up';
import Term from './Component/Term';
import Culainry from './Component/Culainry';
import './Component/Style.css';
import './Component/Phone.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        {/* <nav>
      
            <Link to="/"> Home</Link>
           
     
            <Link to="/About">About</Link>
            

          
      </nav> */}

        <Routes>
           {/*{<Route path="/" element={<Navbar />}/>}*/}
          {/* {<Route path="/" element={<Homeimg />} />} */}
          {/* {<Route path="/" element={<Footer />}/>} */}
          {/*{<Route path="/" element={<Crosel />}/>}*/}

          {<Route path="/" element={<Index />}/>}
          {<Route path="/About" element={<About />}/>}
          {<Route path="/Application" element={<Application /> }/>}
          {<Route path="/Blog" element={<Blog />}/>}
          {<Route path="/Blog2" element={<Blog2 />}/>}
          {<Route path="/Business" element={<Business />} />}
          {<Route path="/C_policy" element={<C_policy/>}/>}
          {<Route path="/Delivery" element={<Delivery/>}/>}
          {<Route path="/Experiance" element={<Experiance/>}/>}
          {<Route path="/P-privacy" element={<P_privacy />} />}
          {<Route path="/Product" element={<Product />} />}
          {<Route path="/Sign" element={<Sign/>} />}
          {<Route path="/Sign_up" element={<Sign_up/>} />}
          {<Route path="/Term" element={<Term/>} />}
          {<Route path="/Culainry" element={<Culainry />} />}
           Add other routes here

        </Routes>
      </Router>
    </>




  );
}

export default App;
