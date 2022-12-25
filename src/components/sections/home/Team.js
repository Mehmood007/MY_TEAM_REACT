import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import teamblock from '../../../data/team.json';

class Team extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]
        }
        return (
            <section className="team-section pt-0 pb-90">
                <div className="container">
                    <div className="section-title both-border text-center mb-80">
                        <span className="title-tag">Teams</span>
                        <h2>Team's Captains</h2>
                    </div>
                    <Slider {...settings} className="row team-loop team-slider-two">

                        <div className="col-12">
                            <div className="member-box">
                                <div className="member-img">
                                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320400/320467.png" alt="Shadab Khan" />
                                </div>
                                <div className="member-info">
                                    <h3>Shadab Khan</h3>
                                    <span>Captain Islamabad United</span>
                                </div>
                                <Link to={{pathname:"/team-details",
                            state:{player_id: "Shadab+Khan",cricinfo:"shadab-khan-922943"}}} className="socail-trigger">+</Link>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="member-box">
                                <div className="member-img">
                                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316500/316530.png" alt="Wahab Riaz" />
                                </div>
                                <div className="member-info">
                                    <h3>Wahab Riaz</h3>
                                    <span>Captain Peshawar Zalmi</span>
                                </div>
                                <Link to={{pathname:"/team-details",
                            state:{player_id: "Wahab+Riaz",cricinfo:"wahab-riaz-43590"}}} className="socail-trigger">+</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="member-box">
                                <div className="member-img">
                                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320400/320448.png" alt="Babar Azam" />
                                </div>
                                <div className="member-info">
                                    <h3>Babar Azam</h3>
                                    <span>Captain Karachi Kings</span>
                                </div>
                                <Link to={{pathname:"/team-details",
                            state:{player_id: "Babar+Azam",cricinfo:"babar-azam-348144"}}} className="socail-trigger">+</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="member-box">
                                <div className="member-img">
                                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/320400/320458.png" alt="Mohammad Rizawan" />
                                </div>
                                <div className="member-info">
                                    <h3>Mohammad Rizwan</h3>
                                    <span>Captain Multan Sultan</span>
                                </div>
                                <Link to={{pathname:"/team-details",
                            state:{player_id: "Mohammad+Rizwan",cricinfo:"mohammad-rizwan-323389"}}} className="socail-trigger">+</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="member-box">
                                <div className="member-img">
                                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316500/316592.png" alt="Sarfaraz Ahmed" />
                                </div>
                                <div className="member-info">
                                    <h3>Sarfaraz Ahmed</h3>
                                    <span>Captain Quetta Gladiator</span>
                                </div>
                                <Link to={{pathname:"/team-details",
                            state:{player_id: "Sarfaraz+Ahmed",cricinfo:"sarfaraz-ahmed-227760"}}} className="socail-trigger">+</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="member-box">
                                <div className="member-img">
                                    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/322200/322250.png" alt="Shaheen Shah Afridi" />
                                </div>
                                <div className="member-info">
                                    <h3>Shaheen Shah Afridi</h3>
                                    <span>Captain Lahore Qalandar</span>
                                </div>
                                <Link to={{pathname:"/team-details",
                            state:{player_id: "Shaheen+Shah+Afridi",cricinfo:"shaheen-shah-afridi-1072470"}}} className="socail-trigger">+</Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Team;