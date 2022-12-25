import React from 'react';
import Contactform from '../../../helper/contactform';

class Content extends Contactform {
    render() {
        return (
            <section className="contact-section with-map-bg pt-120 pb-120">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="row no-gutters align-items-center align-items-lg-start justify-content-center">
                            <div className="col-lg-5 col-md-5">
                                <div className="contact-info-list">
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-home" />
                                        </div>
                                        <div className="content">
                                            <h4>Office Address</h4>
                                            <p>Comsats University Islamabad<br/>Park Road, Islamabad</p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-call" />
                                        </div>
                                        <div className="content">
                                            <h4>Phone Number</h4>
                                            <p>+92 315 9422522 <br /> +92 332 3444222</p>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="icon">
                                            <i className="pe-7s-comment" />
                                        </div>
                                        <div className="content">
                                            <h4>Email address</h4>
                                            <p>sp19-bcs-067@student.comsats.edu.pk <br /> sp19-bcs-069@student.comsats.edu.pk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="contact-form">
                                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                        <div className="row padding-custom">
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-user" />
                                                    </div>
                                                    <input type="text" placeholder="Your Full name" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-phone" />
                                                    </div>
                                                    <input type="text" placeholder="Your Phone" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <input type="email" placeholder="Your email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="input-group mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-list" />
                                                    </div>
                                                    <input type="text" placeholder="Your Subject" name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-10">
                                                    <div className="icon">
                                                        <i className="fal fa-edit" />
                                                    </div>
                                                    <textarea placeholder="Enter message" name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="main-btn btn-filled">Submit Query</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-maps">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13284.823618856048!2d73.1565933!3d33.6518263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6b55e05d462beb1!2sCOMSATS%20University%20Islamabad!5e0!3m2!1sen!2s!4v1667648068923!5m2!1sen!2s">
                        </iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;