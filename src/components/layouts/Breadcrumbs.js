import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumb-section" style={{ backgroundImage: "url(https://i.samaaenglish.tv/primary/2022/08/121645031bfbec5.jpg)" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <h1>{this.props.breadcrumb.pagename}</h1>
                    </div>
                    <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                        <li>{this.props.breadcrumb.pagename}</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Breadcrumbs;