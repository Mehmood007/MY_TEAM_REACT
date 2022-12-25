import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Backtotop from './Backtotop';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Backtotop />
                <footer className="sigma_footer sigma_footer-dark">
                    <div className="container">
                        <div className="sigma_footer-middle text-center">
                            <div className="sigma_footer-logo">
                                <img src={process.env.PUBLIC_URL + "/assets/img/logo-white.png"} alt="logo" />
                            </div>
                            <ul className="sigma_footer-links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/team">Members</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contacts</Link>
                                </li>
                            </ul>
                            <ul className="sigma_social-icons">
                                <li>
                                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fab fa-twitter" /></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fab fa-instagram" /></Link>
                                </li>
                            </ul>
                            <div className="sigma_footer-copyright">
                                <p className="mb-0"> © Website -
          <Link to="#">2021</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;