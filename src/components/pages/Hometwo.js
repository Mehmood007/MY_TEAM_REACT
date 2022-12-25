import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home-v2/Content';

const pagelocation = 'Homepage'

class Hometwo extends Component {
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
                <Footer/>
            </Fragment>
        );
    }
}

export default Hometwo;