import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

const pagelocation = 'Homepage'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>MY Team | {pagelocation}</title>
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

export default Home;