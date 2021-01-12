import React from 'react';
import Hero from '../component/Hero';
import Content from '../component/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
           name:'',
           email:'',
           message:'',
           disabled:false,
           emailSent:null
       }
   }
   handleChange = (event) => {
        const target=event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

   }
     sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9nveutq', 'template_dpbij98', e.target, 'user_Y2BeOfKt0zUr0N1JzOG9f')
      .then(result => {
        this.setState({
            disabled:false,
            emailSent:true
        });
      }, (error) => {
        this.setState({
            disabled:false,
            emailSent:false
        });
        
      });
      e.target.reset();
  }
        

   render(){
       return(
        <div>
            <Hero title={this.props.title} subtitle={this.props.subtitle}/>

            <Content>
                <Form onSubmit={this.sendEmail}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name" className="text-white">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}  />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email" className="text-white">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}  />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message" className="text-white">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea"rows="7" value={this.state.message} onChange={this.handleChange}  />
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
                        </Button>


                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}    
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}    
                </Form>
            </Content>
        </div>
       );

       }


}


export default ContactPage;