import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogpost from './Blogpost';
import Clients from './Clients';
import Cta from './Cta';
import Portfolio from './Portfolio';
import Services from './Services';
import Testimonials from './Testimonials';
import Whyus from './Whyus';
import Video from '../home/Video';
import Framework from './Framework';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Video/>
                <section className="about-section about-style-two">
                    <Abouttext />
                </section>
                <Whyus />
                <Framework/>
                <Services />
                <Cta />
                <Portfolio />
                <section className="testimonials-clinet-section pt-120 pb-120">
                    <Testimonials />
                    <Clients />
                </section>
                <Blogpost />
            </Fragment>
        );
    }
}

export default Content;