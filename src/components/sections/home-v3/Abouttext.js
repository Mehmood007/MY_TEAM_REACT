import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Abouttext extends Component {
    render() {
        return (
            <div className="about-text-warp">
                <div className="container">
                    <div className="row no-gutters justify-content-center justify-content-lg-start">
                        <div className="col-lg-5 col-md-10">
                            <div className="about-text position-relative">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About us</span>
                                    <h2>All skill levels are welcome!</h2>
                                </div>
                                <p className="mb-30">Forms of cricket range from Twenty20, with each team batting for a single innings
                                of 20 overs, to Test matches played over five days. Traditionally cricketers play in all-white
                        sports , but in limited overs cricket they wear club or team colours.</p>
                                <p>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the
                                centre of which is a 22-yard 20-metre pitch with a wicket at each end, each comprising two bails
                        balanced on three stumps. </p>
                                <Link to="/about" className="main-btn btn-filled mt-40">Get Started Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mockup-img">
                    <img src={process.env.PUBLIC_URL + "/assets/img/about/about-mock.png"} alt="mockup-img" />
                </div>
                <div className="about-small-img">
                    <img src={process.env.PUBLIC_URL + "/assets/img/about/about.jpg"} alt="about-small-img" />
                </div>
            </div>
        );
    }
}

export default Abouttext;