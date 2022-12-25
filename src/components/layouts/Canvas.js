import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import instapost from '../../data/instapost.json';

class Canvas extends Component {
    render() {
        return (
            <Fragment>
                <div className="widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul>
                        <li>
                            <i className="far fa-map-marker-alt" />
        305 Royal Track Suite 019, USA
      </li>
                        <li>
                            <i className="far fa-phone" />
                            <Link to="#">+10910-910920</Link>
                        </li>
                        <li>
                            <i className="far fa-envelope-open" />
                            <Link to="#">example@example.com</Link>
                        </li>
                    </ul>
                </div>
                {/* Instagram Feeds Widget */}
                <div className="widget instagram-feed-widget mb-40">
                    <h5 className="widget-title">Instagram Feeds</h5>
                    <ul>
                        {instapost.slice(0, 9).map((item, i) => (
                            <li key={i}><img src={process.env.PUBLIC_URL + "/" + item.img} alt="img" /></li>
                        ))}
                    </ul>
                </div>
                <div className="widget social-widget">
                    <h4 className="widget-title">Follow Us</h4>
                    <ul>
                        <li>
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#"><i className="fab fa-twitter" /></Link>
                            <Link to="#"><i className="fab fa-instagram" /></Link>
                            <Link to="#"><i className="fab fa-behance" /></Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Canvas;