import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Abouttext(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="about-section pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-tile-gallery">
                            <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/01.jpg"} alt="img" className="image-one" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/02.jpg"} alt="img" className="image-two" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/03.jpg"} alt="img" className="image-three" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/icon.png"} alt="icon" className="icon" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/tile-gallery/icon-2.png"} alt="icon" className="zero-icon" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text pl-25">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">About us</span>
                                <h2>Improve your cricket playing skills.</h2>
                            </div>
                            <p>Forms of cricket range from Twenty20, with each team batting for a single innings of 20 overs, to Test matches played over five days. Traditionally cricketers play in all-white sports , but in limited overs cricket they wear club or team colours.</p>
                            <div className="about-features mt-50">
                                <div className="sngle-features">
                                    <div className="progressbar-sec">
                                        <VisibilitySensor>
                                            {({ isVisible }) => {
                                                const percentage = isVisible ? 32 : 0;
                                                return (
                                                    <CircularProgressbar className="chart"
                                                        value={percentage}
                                                        strokeWidth={5}
                                                        styles={buildStyles({
                                                            pathTransitionDuration: 1,
                                                            pathColor: '#3765c7',
                                                            trailColor: '#e2e8ee',
                                                        })} />
                                                );
                                            }}
                                        </VisibilitySensor>

                                        <span className="icon"><i className="fas fa-award" /></span>
                                    </div>
                                    <div className="counter-box">
                                        <span className="timer">
                                            <CountUp start={focus ? 0 : null} end={32} duration={5} redraw={true}>
                                                {({ countUpRef }) => (
                                                    <Fragment>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                            <span>+</span>
                                                        </VisibilitySensor>
                                                    </Fragment>
                                                )}
                                            </CountUp>
                                        </span>
                                    </div>
                                    <div className="desc">
                                        <h4>Welcome to our club!</h4>
                                        <p>The earliest reference to cricket is in South East England in the mid-16th century. It spread globally with the expansion of the British Empire.</p>
                                    </div>
                                </div>
                                <div className="sngle-features">
                                    <div className="progressbar-sec">
                                        <VisibilitySensor>
                                            {({ isVisible }) => {
                                                const percentage = isVisible ? 99 : 0;
                                                return (
                                                    <CircularProgressbar className="chart"
                                                        value={percentage}
                                                        strokeWidth={5}
                                                        styles={buildStyles({
                                                            pathTransitionDuration: 1,
                                                            pathColor: '#3765c7',
                                                            trailColor: '#e2e8ee',
                                                        })} />
                                                );
                                            }}
                                        </VisibilitySensor>

                                        <span className="icon"><i className="fas fa-globe" /></span>
                                    </div>
                                    <div className="counter-box">
                                        <span className="timer">
                                            <CountUp start={focus ? 0 : null} end={99} duration={5} redraw={true}>
                                                {({ countUpRef }) => (
                                                    <Fragment>
                                                        <span ref={countUpRef} />
                                                        <VisibilitySensor
                                                            onChange={isVisible => {
                                                                if (isVisible) {
                                                                    setFocus(true);
                                                                }
                                                            }}
                                                        >
                                                            <span>+</span>
                                                        </VisibilitySensor>
                                                    </Fragment>
                                                )}
                                            </CountUp>
                                        </span>
                                    </div>
                                    <div className="desc">
                                        <h4>The best players</h4>
                                        <p>The earliest reference to cricket is in South East England in the mid-16th century. It spread globally with the expansion of the British Empire.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Abouttext;