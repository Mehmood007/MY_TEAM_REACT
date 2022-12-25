import React from 'react';

function Abouttext(props) {
    return (
        <section className="about-section about-style-three pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-tile-gallery-two">
                            <img src="https://battingwithbimal.com/wp-content/uploads/2021/03/154692934_3801141903285769_7023548833474020481_o.jpg" alt="Haris Rauf celibiration" className="image-one" />
                            <img src="https://i.dawn.com/primary/2018/03/5ab1680edd39f.jpg" alt="Haider Ali Shot" className="image-two" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text pl-30">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About us</span>
                                <h2>We provide best stats</h2>
                            </div>
                            <p> There is no other resource which provides such detailed and summerized selfexplained stats. We show stats graphically as well as in table form. All of the stats are kept upto date and players can be compared at different prespectives. </p>
                            <div className="about-extra">
                                Stats may be misleading because it depends upon different factors. If all factors are kept same then stats may provide optimal results.
            <div className="experience-tag">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/experience-tag.png"} alt="img" />
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