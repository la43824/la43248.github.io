import React from 'react';
import Hero from '../component/Hero';
import Carousel from '../component/Carousel';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import foto1 from '../assets/images/manipulation/1.jpg';
import foto2 from '../assets/images/manipulation/2.jpg';
import foto3 from '../assets/images/manipulation/3.jpg';
import foto4 from '../assets/images/manipulation/4.jpg';
import foto5 from '../assets/images/manipulation/5.jpg';
import foto6 from '../assets/images/manipulation/6.jpg';
import foto7 from '../assets/images/manipulation/7.jpg';
function HomePage(props) {


    return (
        
        <div>
        <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
        <Nav className="ml-auto justify-content-center">
         <Link className="nav-link text-white " to="/">Manipulation</Link>
         <Link className="nav-link text-white " to="/illustration">Illustration</Link>
         {/* <Link className="nav-link text-white " to="/animation">Animation</Link> */}
       </Nav>
        <Carousel src={foto1} src2={foto2} src3={foto3} src4={foto4} src5={foto5} src6={foto6} src7={foto7}/>
        </div>
    );


}


export default HomePage;