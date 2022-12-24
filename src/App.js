import  React from 'react';
import './App.css';
import {AiFillCodeSandboxCircle, AiOutlineCodepenCircle, AiOutlineShoppingCart} from 'react-icons/ai';
import {GiCircleSparks} from 'react-icons/gi';
import Laptop from "./Laptop.json";
import House from "./House.json";
import Box from "./Box.json";
import Fruits from "./Fruits.json";
import Lottie from "lottie-react";
import Veg from "./Veg.json";
import {BiSearch} from 'react-icons/bi';

function App() {
  return (
    <div className="App">
     
      <br></br>
       <div class="top">
            <button className="n">
              <p className="v1">HOME &emsp; &emsp; &emsp; &emsp; OUR INDUSTRIES &emsp; &emsp; &emsp; &emsp; OUR COMPANIES &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Career &emsp; &emsp; &emsp; &emsp; Contact &emsp; &emsp; &emsp; &emsp; <BiSearch></BiSearch></p>
            </button>
            <br></br>
            <h1 className="ram">RAMAERA <br></br> INDUSTRIES</h1>
            <p className='p1'>An incredible multi-industrial approach oriented
              <br></br> towards financial independence, customer focus <br></br> and serving the best quality to the people</p>
        <button className="n1" placeholder="Explore more">Explore more</button>
      
      <div className="d1">
      <br></br>
      <br></br>
      <p className="r1">THE RAMAERA EXPANSION</p>
      <br></br>
      <p className="p2">We are aiming to be a part of the major industrialisation drive <br></br>
      in India and embarking our presence in every signinficant <br></br>
       industrial domain including IT.</p>
      <br></br>
      <br></br>
   <div className='d2'><p className='p3'>Unleasing the strength of</p> 
      <AiFillCodeSandboxCircle className="a1"></AiFillCodeSandboxCircle><br></br>
      <p className='p4'>Technology</p>
      <p className='p5'>We believe in innovation and excellence hence,<br></br>
      our approach in the field of technology is <br></br>
      focused to relish incredible customer experience <br></br>
      and stablishing business models for tomorrow.</p>
      <button className="n2">Read more</button>

      </div>
      <div className='d3'> <Lottie className='l1' animationData={Laptop} /><p className='p6'><GiCircleSparks className='g1'></GiCircleSparks>Making<br></br>accomodations easier</p>
      <p className='p7'>Introducing capsule hotels in places of extreme <br></br> need such as examination centres and hospitals <br></br> to provide comfortable and convenient <br></br>
      accomodation at pocket friendly prices.</p>
      <button className="n3">Read more</button>
      <div className="d4"><Lottie className='l2' animationData={House} /></div>
       <p className='p3'>Packaging industry for <AiOutlineCodepenCircle className='a2'></AiOutlineCodepenCircle><p className="p3">business growth </p>   
      <p className='p9'>We provide packaging solutions to help your <br></br>business flourish with boosted outreach.<br></br>Ensuring the protection,
       containment, and <br></br> communication of packaged projects is our <br></br> foremost priority.<br></br><button className="n3">Read more</button></p>
      </p> 
      </div> 
      <div className='d5'>
      <Lottie className='l1' animationData={Box} />
      </div>
      <div className = "d6">
          <p className='p10'><AiOutlineShoppingCart className='a4'></AiOutlineShoppingCart><Lottie className='l1' animationData={Fruits} />Offering the best with<br></br> FMCG industry</p>
          <p className='p7'>Ramaera FMCG industry has commenced on <br></br> extensive range of FMCG to make your days <br></br> more than ordinary. We plan to offer you <br></br> nothing less than the best. </p>
          <button className="n4">Read more</button>
      </div>
      <div className='p3'>
        <p>Agri-business to bestow <p className='p12'>Nature's Love</p></p>
        <p className='p9'>Our Agri-business industry is established to get <br></br>
         you fresh and organic fruits and vegetables <br></br>
         with the blessed with the touch of nature</p>
         <button className="n5">Read more</button>
         <Lottie className='l1' animationData={Veg} />
      </div>
      <div className='p3'>
            
       </div>
      </div>
     </div>
    </div>
  );
 }
export default App;