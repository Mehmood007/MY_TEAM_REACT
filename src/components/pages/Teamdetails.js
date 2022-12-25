import React, {Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/team-details/Content';
import { useLocation } from 'react-router-dom';

const pagelocation = 'Player Profile'

function Teamdetails() {
    const location = useLocation()
    const {player_id} = location.state
    const {cricinfo} = location.state

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
                <Content playerid={player_id} cricinfo={cricinfo}/>
                <Footer/>
            </Fragment>
        );
}

export default Teamdetails;