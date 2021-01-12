import React from 'react';
import CardInfo from './CardInfo';

function Card(props){
    return(
        
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <div className="inner">
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} /> 
            </div>
            {/* <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} /> */}
            {/* {props.item.selected && <CardInfo img={props.item.imgSrc} />}      */}
        </div>
       
    );

}


export default Card;


