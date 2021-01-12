import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Hero.css';

const Hero = (props) => {


    return(
        <Jumbotron className="jumbotron-fluid p-0 ">
            <Container fluid={true}>
                <Row className="color justify-content-center align-items-center py-5">
                    <Col md={8} sm={10}>
                            { props.title && <h3 className="text-white display-4  col-lg-4 col-md-4 col-sm-4 container justify-content-center">{props.title}</h3> }
                            { props.subtitle && <h3 className="text-white display-1 font-weight-bolder col-lg-4 col-md-4 col-sm-4 container justify-content-center">{props.subtitle}</h3> }
                            
                    </Col>
                </Row>
            </Container>
            
        </Jumbotron>


    );

}





export default Hero;