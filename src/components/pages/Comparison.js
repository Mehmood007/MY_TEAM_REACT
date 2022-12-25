import React, {Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/players-comparison/Content';
import { useLocation } from 'react-router-dom';

const pagelocation = 'Player Comparison'

function Comparison() {
    const location = useLocation()
    const {player1id} = location.state
    const {player2id} = location.state

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
                <Content player1id={player1id} player2id={player2id}/>
                <Footer/>
            </Fragment>
        );
}

export default Comparison;