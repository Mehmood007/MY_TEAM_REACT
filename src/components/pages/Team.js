import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/team/Content';

const pagelocation = 'Team'

function Team() {
    const franchise_name=localStorage.getItem("franchise_name")
        return (
            <Fragment>
                <MetaTags>
                    <title>MY TEAM| {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: franchise_name }} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    
}

export default Team;