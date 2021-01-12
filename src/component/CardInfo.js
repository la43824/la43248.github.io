import React from 'react';
// import { useSpring , animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CardInfo(props) {

    // const style = useSpring({opacity:1,from:{opacity:0}})

    let settings={
        dot:true,
        infinite:true,
        speed:500,
        slidesToShow:0,
        slidesToScroll:1,
        cssEase:'linear'
    }
    return(
        <Slider {...settings}>    
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-img">
                        <img src={props.img} alt={props.img}/>
                    </div>
                </div>

            </div>
        </Slider>








        // <animated.div  style={style}>
        //     <img className="g-card-info" src={props.img} alt={props.img} />
            
        //     {/* <p className="g-card-title text-white">{props.title}</p>
        //     <p className="g-card-sub-title text-white">{props.subtitle}</p>
        //     <a href={props.link} target="_blank" rel="noopener noreferrer">View</a> */}
        // </animated.div>
    );

}




export default CardInfo;