
import React, { Component } from 'react';
import $ from 'jquery'
import 'magnific-popup'

class Video extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup()
    }
    render() {
        return (
            <section className="video-section">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-5 col-md-8">
                            <div className="video-text pl-30">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">intro video</span>
                                    <h2>Let’s make an Cricket tour.</h2>
                                </div>
                                <p>Forms of cricket range from Twenty20, with each team batting for a single innings of 20 overs, to
                        Test matches played over five days.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video-wrap */}
                <div className="video-wrap">
                    <div className="video-bg" style={{ backgroundImage: "url(https://www.geosuper.tv/assets/uploads/updates/2022-02-09/13479_9748344_updates.jpg)" }}>
                        <div className="video-link">
                            <a rel={'external'} href={"https://www.youtube.com/watch?v=A7ujs5ACtlo"} className="popup-video">play</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;