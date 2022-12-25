import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <section className="video-section video-style-two" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/video-bg-2.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="video-text text-center">
                                <div className="video-link-two">
                                    <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-video"><i className="fas fa-play" /></a>
                                </div>
                                <p>Explore Our Cricket Goals</p>
                                <h1>For Cricket Lover,s</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;