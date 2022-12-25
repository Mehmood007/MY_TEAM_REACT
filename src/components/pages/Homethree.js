import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footer';
import Content from '../sections/home-v3/Content';

const pagelocation = 'Homepage'

class Homethree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Scorez - Cricket Club - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer />
            </Fragment>
        );
    }
}

export default Homethree;