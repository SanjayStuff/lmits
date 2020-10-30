import React from "react";
import logo from "../../assets/images/Logo.png";
import FAppStore from "../../assets/images/footer/footer-appstore.png";
import FPlayStore from "../../assets/images/footer/footer-playstore.png";
import { Layout, Row, Col, Typography } from "antd";
import styles from "../../styles/landing/LandingFooter.module.css";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <Layout>
      <section className=" footer bg-light">
        <div className="about-container">
          <Row>
            <Col lg={7}>
              <div className={styles.footer_logo_bottom}>
                <Link to="">
                  <img
                    src={logo}
                    alt="LMiTS Logo"
                    className="logo-dark"
                    height={26}
                  />
                </Link>

                <div className="footer-desc">
                  <p className="text-muted">
                    LMiTS is the first super application with tech enabled
                    logistics booking service provider started in India.
                  </p>
                </div>

                <ul className="list-unstyled footer-social-list ">
                  <li className="list-inline-item ">
                    <Link to="">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa fa-instagram" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="">
                      <i className="fa fa-whatsapp" />
                    </Link>
                  </li>
                </ul>
                <div className="footer-btn">
                  <Link to="" className={styles.footer_social}>
                    <img src={FAppStore} alt="" height="auto" />
                  </Link>

                  <Link to="">
                    <img src={FPlayStore} alt="" height="auto" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={17}>
              <Row>
                <Col md={8} className={styles.footer_services}>
                  <h6 className="footer-list-title text-dark mb-3">
                    Our Services
                  </h6>
                  <ul className="company-sub-menu">
                    <li>
                      <p className="text-muted mb-2">Hyper Local</p>
                    </li>
                    <li>
                      <Typography>
                        <p className="text-muted mb-2">Courier</p>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <p className="text-muted mb-2">Intracity Delivery</p>
                      </Typography>
                    </li>
                  </ul>
                </Col>
                <Col md={7}>
                  <h6 className="footer-list-title text-dark mb-3">
                    Our Company
                  </h6>
                  <ul className=" company-sub-menu">
                    <li>
                      <Typography>
                        <p className="text-muted mb-2">About Us</p>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <p className="text-muted mb-2">
                          Terms &amp; Conditions
                        </p>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <p className="text-muted mb-2">Privacy Policy</p>
                      </Typography>
                    </li>
                  </ul>
                </Col>
                <Col md={8}>
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
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="footer-copyright">
            <Col xs={24} md={24} align="middle">
              <p className="text-muted f-15">2020 © LMiTS Solutions Pvt Ltd.</p>
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  );
};

export default LandingFooter;
