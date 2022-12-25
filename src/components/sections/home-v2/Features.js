import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import whyus from '../../../data/whyus.json';

class Features extends Component {
    render() {
        return (
            <section className="features-boxes pt-0 pb-110">
                <div className="container">
                    {/* Section Title */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-7">
                            <div className="section-title left-border">
                                <span className="title-tag">Why Us</span>
                                <h2>Why Choose Us</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
                            <div className="text-right">
                                <Link to="/whyus" className="main-btn btn-filled">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature boxes loop */}
                    <div className="features-boxes-loop mt-100">
                        <div className="row justify-content-center justify-content-md-between">
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                {whyus.slice(0, 3).map((item, i) => (
                                    <div className="feature-box" key={i}>
                                        <h4><i className={item.icon} /> {item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="gap-for-img" />
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                {whyus.slice(3, 6).map((item, i) => (
                                    <div className="feature-box" key={i}>
                                        <h4><i className={item.icon} /> {item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* feature-img */}
                    <div className="feature-img">
                        <img src={process.env.PUBLIC_URL + "/assets/img/feature-img.png"} alt="img" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;