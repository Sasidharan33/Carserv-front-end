import React from 'react';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import About1 from './About1';
import About2 from './About2';
import Serv1 from './Serv1';
import Serv2 from './Serv2';
import Book from './Book';
import Technical from './Technical';
import Testimon from './Testimon';
import Contac from './Contac';
import Home1 from './Home1';
import Book1 from './Book1';
function Home(){
    return(
        <div>
       <Home1/>
       <About1/>
       <About2/>
       <Serv1/>
      <Serv2/>
      <Book/>
      <Technical/>
      <Testimon/>
      <Contac/>
       </div>
        
    )
}
export default Home