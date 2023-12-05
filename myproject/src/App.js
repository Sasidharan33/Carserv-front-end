import './App.css';
import Home from './Home';
import About from './About';
import './Style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Service from './Service';
import Navbari from './Navbar';
import Booking from './Booking';
import Technicians from './Technicians';
import Testimonial from './Testimonial';
import Navii from './Navii';
import About2 from './About2';
import Serv2dia from './Serv2-dia';
import Serv2eng from './Serv2eng';
import Serv2tir from './Serv2tir';
import Serv2oil from './Serv2oil';
import Page404 from './Page404';
import Contact from './Contact';
import Technical from './Technical';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
    <Navii/>
    <Navbari/>
    <Routes>
    <Route path='/' index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/technicians' element={<Technicians/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>
    <Route path='/404' element={<Page404/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about2' element={<About2/>}/>
    <Route path='/tech' element={<Technical/>}/>
    <Route path='/dia' element={<Home/>} />
    <Route path='/eng' element={<Serv2eng/>}/>
    <Route path='/tir' element={<Serv2tir/>}/>
    <Route path='/oil' element={<Serv2oil/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
