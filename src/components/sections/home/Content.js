import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Client from './Client';
import Contact from './Contact';
import Counter from './Counter';
import Cta from './Cta';
import Featuredservices from './Featuredservices';
import Portfolio from './Portfolio';
import Team from './Team';
import Testimonials from './Testimonials';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouttext />
                <Featuredservices />
                <Cta />
                <Counter/>
                <Video />
                <Portfolio />
                <Team /> 
                <Testimonials/>
                <section className="contact-section pt-110 pb-110">
                    <Contact />
                    <Client />
                </section>
            </Fragment>
        );
    }
}

export default Content;