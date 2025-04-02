// src/pages/About.jsx
import React from 'react';
import '../pages/about.css';

function About() {
    return (
        <div className="about-container container mt-5">
            <div className="about-header text-center bg-success text-white py-3 rounded-top">
                <h2>SUBSCRIPTION PLAN</h2>
                <p>Start for free now and upgrade when business is ready. Use our plans to kickstart your business.</p>
            </div>
            <div className="about-toggle d-flex justify-content-center my-3">
                <button className="btn btn-outline-light bg-success text-white mx-2">MONTHLY</button>
                <button className="btn btn-outline-light bg-light text-dark mx-2">YEARLY</button>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="about-card card shadow text-center">
                        <div className="card-body">
                            <h5>FREE</h5>
                            <h3>$0<span className="text-muted">/mon</span></h3>
                            <p>Free Membership</p>
                            <p>30GB Storage</p>
                            <p>1 Personal Email</p>
                            <button className="btn btn-success">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="about-card card shadow text-center border border-success">
                        <div className="card-body">
                            <h5 className="text-success">INTERMEDIATE</h5>
                            <h3 className="text-success">$49<span className="text-muted">/mon</span></h3>
                            <p>Free Membership</p>
                            <p>100GB Storage</p>
                            <p>2 Personal Emails</p>
                            <p>1 FTP Account</p>
                            <button className="btn btn-success">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="about-card card shadow text-center">
                        <div className="card-body">
                            <h5>PROFESSIONAL</h5>
                            <h3>$99<span className="text-muted">/mon</span></h3>
                            <p>Unlimited Storage</p>
                            <p>2 FTP Accounts</p>
                            <p>2 Personal Emails</p>
                            <p>Host Security</p>
                            <button className="btn btn-success">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
