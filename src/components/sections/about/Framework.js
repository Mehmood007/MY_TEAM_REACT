import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap'
import frameworktabs from '../../../data/frameworktabs.json';

class Framework extends Component {
    render() {
        return (
            <section className="framework-section padding-bottom-extra">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="framework-img">
                                <img src="https://i.dawn.com/primary/2020/03/5e67bceb3eec3.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="framework-text pl-20">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">Factors</span>
                                    <h2> Don't ignore external factors while analysing </h2>
                                </div>
                                <Tab.Container defaultActiveKey="tab0">
                                    <Tab.Content>
                                        {frameworktabs.map((item, i) => (
                                            <Tab.Pane key={i} eventKey={"tab" + i}>
                                                <p>
                                                    {item.content}
                                                </p>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                    <Nav variant="tabs" className="framework-list nav nav-pills mt-25">
                                        {frameworktabs.map((item, i) => (
                                            <Nav.Item key={i}>
                                                <Nav.Link eventKey={"tab" + i}>
                                                    <span className="icon">
                                                        <i className={item.icon}></i>
                                                    </span>
                                                    {item.title}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Framework;