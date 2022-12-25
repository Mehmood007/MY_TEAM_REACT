import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

class Portfolio extends Component {
    render() {
        const articles = [{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/334500/334546.4.jpg",
                psl_edition:"PSL 7",
                title:"Haris 70 overcomes Azam Khan's 85",
                redirect:"https://www.espncricinfo.com/series/pakistan-super-league-2021-22-1292999/islamabad-united-vs-peshawar-zalmi-24th-match-1293023/match-report"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/334900/334911.4.jpg",
                psl_edition:"PSL 7",
                title:"Wiese puts Qalandars into finals",
                redirect:"https://www.espncricinfo.com/series/pakistan-super-league-2021-22-1292999/lahore-qalandars-vs-islamabad-united-eliminator-2-1293032/match-report"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/323300/323356.4.jpg",
                psl_edition:"PSL 7",
                title:"United barely defended highest total",
                redirect:"https://www.espncricinfo.com/series/psl-2020-21-2021-1238103/islamabad-united-vs-peshawar-zalmi-26th-match-1247036/match-report"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/273900/273982.4.jpg",
                psl_edition:"PSL 3",
                title:"Zalmi Wins 1 run thriller",
                redirect:"https://www.espncricinfo.com/series/psl-2017-18-1128817/peshawar-zalmi-vs-quetta-gladiators-eliminator-1-1128849/match-report"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/286600/286604.jpg",
                psl_edition:"PSL 4",
                title:"Ingram overpowers Gladiators",
                redirect:"https://www.espncricinfo.com/series/psl-2018-19-1168814/karachi-kings-vs-quetta-gladiators-15th-match-1168834/full-scorecard"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/285700/285765.4.png",
                psl_edition:"PSL 4",
                title:"Experience shines in low score thriller",
                redirect:"https://www.espncricinfo.com/series/psl-2018-19-1168814/lahore-qalandars-vs-peshawar-zalmi-25th-match-1168844/match-report"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/334600/334674.4.jpg",
                psl_edition:"PSL 7",
                title:"Qalandars defeats United easily",
                redirect:"https://www.espncricinfo.com/series/pakistan-super-league-2021-22-1292999/lahore-qalandars-vs-islamabad-united-27th-match-1293026/match-report"
            },{
                image_url:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/334100/334115.4.jpg",
                psl_edition:"PSL 7",
                title:"Gladiators easily chases 200+",
                redirect:"https://www.espncricinfo.com/series/pakistan-super-league-2021-22-1292999/quetta-gladiators-vs-lahore-qalandars-15th-match-1293014/match-report"
            }
        ]
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            speed: 900,
            centerPadding: '25%',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: '20%',
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '10%',
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '5%',
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: '0',
                    },
                },
            ]
        }
        return (
            <section className="portfolio-slider-section with-bg pt-120 pb-120">
                <div className="container-fluid">
                    <div className="section-title text-center both-border mb-80">
                        <span className="title-tag">portfolio</span>
                        <h2>case study</h2>
                    </div>
                    {/* portfolio loop */}
                    <Slider {...settings} className="row portfolio-slider-loop portfolio-slider">
                        {articles.map((item, i) => (
                            <div key={i} className="col-12">
                                <div className="portfolio-box">
                                    <div className="portfolio-img-wrap">
                                        <div className="portfolio-img" style={{ backgroundImage: "url("+item.image_url+")" }}>
                                        </div>
                                    </div>
                                    <div className="portfolio-desc">
                                            <span className="portfolio-cat" key={i}>{item.psl_edition}</span>
                                        
                                        <h2><Link>{item.title}</Link></h2>
                                        <a href={item.redirect} className="portfolio-link">
                                            <i className="fal fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Portfolio;