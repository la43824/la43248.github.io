import React from 'react';
import Content from '../component/Content';
import Hero from '../component/Hero';

function AboutPage(props) {

    return (
        <div>
            <Hero  title={props.title} subtitle={props.subtitle} />
            <Content>
                
            </Content>
        </div>


    );


}


export default AboutPage;