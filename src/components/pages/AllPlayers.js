import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/all-players/Content';

const pagelocation = 'All Players'

function Teamdetails(props) {
    
      

        return (
            <Fragment>
                <MetaTags>
                    <title>My Team {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <Footer/>
            </Fragment>
        );
}

export default Teamdetails;