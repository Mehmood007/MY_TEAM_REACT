import React, { Component } from 'react';
import Slider from 'react-slick';
import { Rating } from '../../../helper/helper';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const remarks = [
            {name:"Javed Afridi",designation:"Owner Peshawar Zalmi", rating:5,comment:"MY TEAM is an amazing Project. We have been using it since second season of PSL. Only twice we have failed to reach finals since season 2.",image:"https://www.thecorrespondent.pk/wp-content/uploads/2021/03/Javed-Afridi.jpg"},
            {name:"Salman Iqbal",designation:"Owner Karachi Kings", rating:4,comment:"MY TEAM has added significant value to Karachi Kings. It has been very helpful for management department from drafting to Playing XI.",image:"https://www.oyeyeah.com/wp-content/uploads/2022/02/Karachi-Kings-owner-salman-iqbal.jpg"},
            {name:"Aqib Javed",designation:"Coach Lahore Qalandars", rating:5,comment:"We have subscribed to MY TEAM for last two seasons and it has proven real worth. Since that we have been one of the strongest opponent ot defeat.",image:"https://geosuper.tv/assets/uploads/updates/2020-04-18/4867_4920669_updates.jpg"},
            {name:"Andy Flower",designation:"Coach Multan Sultan", rating:5,comment:"Multan Sultan have always relied upon experienced players and MY TEAM is best option to analyse stats of experience players and go for the best ones.",image:"https://i.dawn.com/primary/2021/07/60e785a651e98.jpg"},
            {name:"Nadeem Omer",designation:"Owner Quetta Gladiators", rating:4,comment:"Quetta Gladiators make look week on the paper but is strong on the field thanks to MY TEAM for it suggestions.",image:"https://theazb.com/wp-content/uploads/2021/09/Galle-Gladiators.jpg"},
            {name:"Ali Naqvi",designation:"Owner Islamabad United", rating:5,comment:"Our management has been most inconsistent throught season but we have highest win rate beacuase we use MY TEAM consistently since season 1.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXY0Bi47CQhXJY-iiyTE68l9KzSQBVoDdTBw&usqp=CAU"}
        ]
        const settings = {
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settingsThumb = {
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
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
            <section className="testimonial-section pt-120 pb-120">
                <div className="container">
                    {/* testimonial Content Slider*/}
                    <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="testimonial-slider mb-45">
                        {remarks.map((item, i) => (
                            <div key={i}>
                                <div className="single-testimonial">
                                    <div className="author-img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="desc">
                                        <div className="rateing mb-20">
                                            {Rating(item.rating)}
                                        </div>
                                        <h2>{item.comment}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* Author Info Slider */}
                    <div className="row no-gutters justify-content-center">
                        <div className="col-lg-9">
                            <Slider {...settingsThumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} className="testimonial-author-slider">
                                {remarks.map((item, i) => (
                                    <div key={i}>
                                        <div className="single-slider">
                                            <h4>{item.name}</h4>
                                            <span>{item.designation}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;