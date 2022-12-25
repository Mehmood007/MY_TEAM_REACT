import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Featuredservices extends Component {
    render() {
        return (
            <section className="services-secton pt-120 pb-200">
                <div className="container">
                    <div className="section-title mb-80 text-center both-border">
                        <span className="title-tag">Services</span>
                        <h2>What We Do</h2>
                    </div>
                    <div className="services-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center white-bg">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-1.png"} alt="icon" />
                                    </div>
                                    <h4>Provide Stats</h4>
                                    <p>We provide stats graphically and tabularly. Comparing players at different players with each other.</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center secondary-bg doted mt-60">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-2.png"} alt="icon" />
                                    </div>
                                    <h4>Suggestions</h4>
                                    <p>We suggest players for franchises. Suggestions are made based on their stats and roles.</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10">
                                <div className="single-service text-center primary-bg mt-120">
                                    <div className="icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/services/icon-3.png"} alt="icon" />
                                    </div>
                                    <h4>Additional Support</h4>
                                    <p>We help franchise make thier playing XI for upcomming match. Also we suggest them current score according to current DL method.</p>
                                    <Link to="/services" className="service-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Featuredservices;