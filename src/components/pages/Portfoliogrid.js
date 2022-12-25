import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/portfolio-grid/Content';

const pagelocation = 'Portfolio Grid'

class Portfoliogrid extends Component {
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
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfoliogrid;