import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import foto1 from '../assets/images/manipulation/1.jpg';
import foto2 from '../assets/images/manipulation/2.jpg';
import foto3 from '../assets/images/manipulation/3.jpg';
import foto4 from '../assets/images/manipulation/4.jpg';
import foto5 from '../assets/images/manipulation/5.jpg';
import foto6 from '../assets/images/manipulation/6.jpg';
import foto7 from '../assets/images/manipulation/7.jpg';
import foto8 from '../assets/images/manipulation/8.jpg';
import foto9 from '../assets/images/manipulation/9.jpg';
import foto10 from '../assets/images/manipulation/10.jpg';
import foto11 from '../assets/images/manipulation/11.jpg';
import foto12 from '../assets/images/manipulation/12.jpg';
import foto13 from '../assets/images/manipulation/13.jpg';
import foto14 from '../assets/images/manipulation/14.jpg';
import foto15 from '../assets/images/manipulation/15.jpg';
import foto16 from '../assets/images/manipulation/16.jpg';
import foto17 from '../assets/images/manipulation/17.jpg';
import foto18 from '../assets/images/manipulation/18.jpg';
import foto19 from '../assets/images/manipulation/19.jpg';

class Carousel extends Component {
            
        constructor(props){
            super(props);
            this.state ={
                items: [
                    {
                        id:0,
                        title:'genti',
                        subtitle:'ddd',
                         imgSrc: foto1,
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
                    },{
                        id:7,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto8,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:8,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto9,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:9,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto10,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:10,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto11,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:11,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto12,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:12,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto13,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:13,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto14,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:14,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto15,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:15,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto16,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:16,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto17,
                        link: 'ddss',
                        selected:false
                    },
                    
                    {
                        id:17,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto18,
                        link: 'ddss',
                        selected:false
                    },
                    {
                        id:18,
                        title:'Gent',
                        subtitle:'ddd',
                        imgSrc: foto19,
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