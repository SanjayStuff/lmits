import React from 'react';
import aboutImg from '../../assets/images/about.svg';

const AboutUs = () => {
  return (
    <>
      <section className="section bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 features-img">
              <img
                src={aboutImg}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="row">
                <div className="title text-center mb-5 pl-3">
                  <h3 className="font-weight-normal text-left text-dark mb-3">
                    About
                    <span className="text-warning font-weight-medium"> Us</span>
                  </h3>
                  <p className="text-muted font-weight-normal text-left">
                    Logistics is the process of planning and executing the
                    efficient transportation and storage of goods from the point
                    of origin to the point of consumption. The goal of LMiTS is
                    to meet customer requirements in a timely, cost-effective
                    and ease of access with us innovative technology.
                  </p>
                  <div className="row pl-3">
                    <a href="" className="mt-3 font-weight-normal read-more">
                      Read more <span className="right-icon">→</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <h6 className="text-dark f-20 mb-3">Our Vision</h6>
                  <p className="text-muted font-weight-normal">
                    We aim to simplify the logistics industry process. Our
                    vision is to enable the LMiTS Solutions &amp; technology in
                    all the logistics process grounded worldwide as a trusted
                    partner to all our clients. We envision to surpass our
                    success &amp; customer loyalty level year by year.
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-dark f-18 mb-3">Our Mission</h6>
                  <p className="text-muted font-weight-normal">
                    To promote teamwork &amp; create a work environment
                    encouraging the workforce to continuously strive for quality
                    &amp; excellence, providing high-quality service to
                    customers under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
