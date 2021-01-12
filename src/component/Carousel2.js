import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import foto1 from '../assets/images/illustration/1.jpg';
import foto2 from '../assets/images/illustration/2.jpg';
import foto3 from '../assets/images/illustration/3.jpg';
import foto4 from '../assets/images/illustration/4.jpg';
import foto5 from '../assets/images/illustration/5.jpg';
import foto6 from '../assets/images/illustration/7.png';
import foto7 from '../assets/images/illustration/8.jpg';
import foto9 from '../assets/images/illustration/9.jpg';
import foto10 from '../assets/images/illustration/10.jpg';
import foto11 from '../assets/images/illustration/11.jpg';
import foto12 from '../assets/images/illustration/12.jpg';
import foto13 from '../assets/images/illustration/13.jpg';
import foto14 from '../assets/images/illustration/14.jpg';
import foto17 from '../assets/images/illustration/17.jpg';
import foto18 from '../assets/images/illustration/18.jpg';
import foto19 from '../assets/images/illustration/19.jpg';

class Carousel extends Component {
            
        constructor(props){
            super(props);
            this.state ={
                items: [
                    {
                        id:0,
                        title:'GENTRITBEJTA',
                        subtitle:'',
                         imgSrc:foto1,
                        link: 'dd',
                        selected:false
                    },
                    {
                        id:1,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc:foto2,
                        link: 'dds',
                        selected:false
                    },
                    {
                        id:2,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto3,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:3,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto4,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:4,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto5,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:5,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto6,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:6,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto7,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:7,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto9,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:8,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto10,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:9,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto11,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:10,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto12,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:11,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto13,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:12,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto14,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:13,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto18,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:14,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto19,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:15,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto17,
                        link: 'ddss',
                        selected:false
                    },


                ]
            }
        }



        handleCardClick = (id,card) => {
            let items = [...this.state.items];
            items[id].selected = items[id].selected ? false : true;
            items.forEach(item => {
                if(item.id !== id){
                    item.selected= false;
                }
            })

            this.setState({items});
        }


        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
            })
        }

        render(){


            return(
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>


            );            
        }


}





export default Carousel;