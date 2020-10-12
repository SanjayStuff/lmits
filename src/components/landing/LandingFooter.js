import React from 'react';
import logo from '../../assets/images/Logo.png';
import FAppStore from '../../assets/images/footer/footer-appstore.png';
import FPlayStore from '../../assets/images/footer/footer-playstore.png';

const LandingFooter = () => {
  return (
    <>
      <section className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-4">
                <a href>
                  <img src={logo} alt="" className="logo-dark" height={26} />
                </a>
                <p className="text-muted mt-4 mb-2">
                  LMiTS is the first super application with tech enabled
                  logistics booking service provider started in India.
                </p>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item ">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-whatsapp" />
                    </a>
                  </li>
                </ul>
                <div>
                  <a href="#" className="mr-3">
                    <img src={FAppStore} alt="" height="auto" />
                  </a>
                  <a href>
                    <img src={FPlayStore} alt="" height="auto" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <h6 className="footer-list-title text-dark mb-3">
                    Our Services
                  </h6>
                  <ul className="list-unstyled company-sub-menu">
                    <li>
                      <p className="text-muted">
                        <a className="text-muted">Hyper Local</a>
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        <a className="text-muted">Courier</a>
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        <a className="text-muted">Intracity Delivery</a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h6 className="footer-list-title text-dark mb-3">Company</h6>
                  <ul className="list-unstyled company-sub-menu">
                    <li>
                      <p className="text-muted">
                        <a className="text-muted">About Us</a>
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        <a className="text-muted">Terms &amp; Conditions</a>
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        <a className="text-muted">Privacy Policy</a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h6 className="footer-list-title text-dark mb-3">
                    LMiTS Solutions Pvt.Ltd
                  </h6>
                  <p className="text-muted f-14">
                    R-22, 3rd Crosss, Nash Square, 1st Flr, Electronicity
                    Phase-1 Above Canara Bank, Bengaluru, Karnataka - 560100,
                    India
                  </p>
                  <p className="text-muted">
                    <a className="text-muted" href="mailto:support@lmits.in">
                      <i className="fa fa-envelope" /> Email: support@lmits.in
                    </a>
                  </p>
                  <p className="text-muted pb-2">
                    <a className="text-muted" href="tel:91 86200 87300">
                      <i className="fa fa-phone" /> Phone: +91 86200 87300
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="text-center text-muted">
                <p className="mb-0 f-15">2020 © LMiTS Solutions Pvt Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingFooter;
