import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import counter from '../../../data/counter.json';

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    const values = [
        {title:"Leagues",count:9},
        {title:"Players", count:250},
        {title:"Teams", count:54},
        {title:"Countries", count:12}
    ]
    return (
        <section className="counter-section pt-120 pb-120">
            <div className="container">
                <div className="counter-inner">
                    <div className="row">
                        {values.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-3 col-6">
                                <div className="counter-box">
                                    <h1>
                                        <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                            {({ countUpRef }) => (
                                                <Fragment>
                                                    <span ref={countUpRef} className="counter" />
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
                                    </h1>
                                    <p className="title">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <span className="big-text">
                        MYTEAM
      </span>
                </div>
            </div>
        </section>
    );
}

export default Counter;