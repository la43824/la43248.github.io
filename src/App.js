import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import IllustrationPage from './pages/IllustrationPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      title:"Gentrit Bejta",
      headerLinks: [
         {title:'Home', path:'/'},
         {title:'About', path:'/about'},
         {title:'Contact', path:'/contact'}
      ],
    home: {
      title:'Just Imagine',
      subtitle:''
    },
    about: {
      title:'About',
      subtitle:'Me'
    },
    contact: {
      title:'Contact Me',
      subtitle:''
    },
    illustration: {
      title:'Just Shapes',
      subtitle:''
    }
      
    }
  }
  
  render(){
    
    
    return(
      <Router>
        <Container className="p-0 background" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          {/* <Navbar.Brand className="text-white" to="/">Gentrit Bejta</Navbar.Brand> */}
          <Link className="text-white" to="/">Gentrit Bejta</Link>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
          
          <Nav className="ml-auto" >
            
          {/* <Link className="nav-link text-white" to="/about">About Me</Link> */}
          <Link className="nav-link text-white" to="/contact">Contact Me</Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact  render={() => <HomePage title={this.state.home.title}  subtitle={this.state.home.subtitle} text={this.state.home.text}/>} />
        {/* <Route path="/about"   render={() => <AboutPage title={this.state.about.title} subtitle={this.state.about.subtitle}/>} /> */}
        <Route path="/contact"  render={() => <ContactPage title={this.state.contact.title} subtitle={this.state.contact.subtitle} text={this.state.contact.text} />} />
        <Route path="/illustration"  render={() => <IllustrationPage title={this.state.illustration.title} subtitle={this.state.illustration.subtitle} />} />
        {/* <Route path="/animation"  render={() => <IllustrationPage title={this.state.illustration.title} subtitle={this.state.illustration.subtitle} />} /> */}
        <Footer />

        </Container>
        
      </Router>
    )

  }
}

export default App;
