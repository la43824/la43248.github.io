import React from 'react';
import Hero from '../component/Hero';
import Carousel2 from '../component/Carousel2';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function  IllustrationPage(props) {

    return (
        <div>
        <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
        <Nav className="ml-auto justify-content-center">
         <Link className="nav-link text-white " to="/">Manipulation</Link>
         <Link className="nav-link text-white " to="/illustration">Illustration</Link>
         {/* <Link className="nav-link text-white " to="/animation">Animation</Link> */}
       </Nav>
        <Carousel2 />
        </div>
    );


}


export default IllustrationPage;