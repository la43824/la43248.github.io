import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {FaFacebookF, FaInstagram , FaYoutube} from 'react-icons/fa';




function footer()  {
    return (
        <footer className="mt-5 borderfooter">
            <Container fluid={true}>
                <Row className="text-white justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        
                    </Col>
                    <Col className="text-white p-0 d-flex justify-content-end " md={3} >
                        <a href="https://www.facebook.com/gentrit.bejta/"
                        className="social">
                        <FaFacebookF color="white" />
                        </a>
                        <a href="https://www.instagram.com/gentrit_bejta/"
                        className="social">
                        <FaInstagram color="white"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCLHWrt8TJ1u8uUSHhmlW3Kw"
                        className="social">
                        <FaYoutube color="white"/>
                        </a>
                        {/* <a href="https://www.twitter.com"
                        className="social">
                        <FaTwitter color="white"/>
                        </a> */}
                        
                    </Col>
                </Row>
            </Container>

        </footer>

    );

}


export default footer;



