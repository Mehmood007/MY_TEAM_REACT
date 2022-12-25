import React, { Component } from 'react';
import Sidebar from '../../layouts/Servicesidebar';
import faqs from '../../../data/faqs.json';
import { Accordion, Button } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <section className="service-details-wrap pt-150 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="service-details">
                                <div className="thmb mb-50">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/details/01.jpg"} alt="img" />
                                </div>
                                <div className="details-text mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Cricket</span>
                                        <h2>Improve your cricket playing skills Here.</h2>
                                    </div>
                                    <p className="mb-30">Cricket is a bat-and-ball game played between two teams of eleven players on a
                                    field at the centre of which is a 22-yard 20-metre pitch with a wicket at each end, each
                                    comprising two bails balanced on three stumps. The batting side scores runs by striking the
                                    ball bowled at the wicket with the bat and running between the wickets, while the bowling
                            and fielding side tries to prevent this by preventing the ball.</p>
                                    <p>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the
                                    centre of which is a 22-yard 20-metre pitch with a wicket at each end, each comprising two
                                    bails balanced on three stumps. The batting side scores runs by striking the ball bowled at
                                    the wicket with the bat and running between the wickets, while the bowling and fielding side
                                    tries to prevent this by preventing the ball from leaving the field, and getting the ball to
                                    either wicket and dismiss each batter so they are "out". Means of dismissal include being
                                    bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side
                                    either catching the ball after it is hit by the bat and before it hits the ground, or
                                    hitting a wicket with the ball before a batter can cross the crease in front of the wicket.
                                    When ten batters have been dismissed, the innings ends and the teams swap roles. The game is
                                    adjudicated by two umpires, aided by a third umpire and match referee in international
                                    matches. They communicate with two off-field scorers who record the match's statistical
                                    information Forms of cricket range from Twenty20, with each team batting for a single
                                    innings of 20 overs, to Test matches played over five days. Traditionally cricketers play in
                            all-white sports , but in limited overs cricket they wear club or team colours.</p>
                                </div>
                                <div className="feature-list-wrap mb-50">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">features</span>
                                        <h2>Why Choose Us</h2>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row align-items-center">
                                            <div className="col-sm-5">
                                                <div className="list-img">
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/details/02.jpg"} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="list-text">
                                                    <p>Cricket is a bat-and-ball game played between two teams of eleven players on
                                                    a field at the centre of which is a 22-yard 20-metre pitch with a wicket at
                                            each end, each comprising two bails balanced on three stumps.</p>
                                                    <ul>
                                                        <li><i className="fal fa-check" /> Advance skills</li>
                                                        <li><i className="fal fa-check" /> Batting skills</li>
                                                        <li><i className="fal fa-check" /> Bowling skills</li>
                                                        <li><i className="fal fa-check" /> Cricket and management</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-wrapper">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">faq</span>
                                        <h2>get every answers here</h2>
                                    </div>
                                    <Accordion defaultActiveKey={1} className="faq-accordion faq-loop accordion">
                                        {faqs.slice(0, 5).map((item, i) => (
                                            <div key={i} className="card">
                                                <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                                    <div className="card-body">
                                                        {item.text}
                                                    </div>
                                                </Accordion.Collapse>
                                                <div className="card-header">
                                                    <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                                        {item.title}
                                                        <span className="icon"><span>+</span></span>
                                                    </Accordion.Toggle>
                                                </div>
                                            </div>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;