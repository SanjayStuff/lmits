import React from 'react';
import partnerImg from '../../assets/images/partner.svg';
import { Layout, Row, Col } from 'antd';

const PartnerWithUs = () => {
  return (
    <Layout>
      <section className="section bg-white">
        <div className="about-container">
          <Row justify="space-around">
            <Col lg={12} md={16} align="middle">
              <div className="title">
                <div className="services-title">
                  <span className="section_title font-weight-normal">
                    Parther with
                    <span className="text-warning font-weight-medium"> Us</span>
                  </span>
                </div>
                <p className="about-text text-muted">
                  Let’s jointly move your business forward with our leading
                  innovation and simple solutions.
                </p>
              </div>
            </Col>
          </Row>

          <Row justify="space-around">
            <Col md={12} align="middle">
              <div className="features-img">
                <img
                  src={partnerImg}
                  alt="LMiTS Partner"
                  className="img-fluid mx-auto"
                />
              </div>
            </Col>
            <Col md={{ span: 10, offset: 1 }}>
              <Row>
                <Col md={24}>
                  <p className="about-text text-dark font-weight-medium f-15">
                    Help us with below details in order to server you better
                  </p>
                  <div className="custom-form">
                    <form method="POST">
                      <Row>
                        <Col sm={22} xs={24}>
                          <div className="form-field">
                            <div className="form-field__control">
                              <input
                                id="name"
                                name="name"
                                type="name"
                                className="form-field__input"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="name"
                                className="form-field__label"
                              >
                                Your Name
                              </label>
                              <div className="form-field__bar" />
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={22} xs={24}>
                          <div className="form-field">
                            <div className="form-field__control">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-field__input"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="email"
                                className="form-field__label"
                              >
                                Email
                              </label>
                              <div className="form-field__bar" />
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={22} xs={24}>
                          <div className="form-field">
                            <div className="form-field__control">
                              <input
                                id="phone_number"
                                name="phone_number"
                                type="number"
                                className="form-field__input"
                                placeholder=" "
                                required
                              />
                              <label
                                htmlFor="number"
                                className="form-field__label"
                              >
                                Your Phone No.
                              </label>
                              <div className="form-field__bar" />
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={22} xs={24}>
                          <div className="form-field">
                            <div className="form-field__control">
                              <textarea
                                id="message"
                                name="message"
                                className="form-field__textarea"
                                placeholder=" "
                                required
                                defaultValue={''}
                              />
                              <label
                                htmlFor="message"
                                className="form-field__label"
                              >
                                How can we help?
                              </label>
                              <div className="form-field__bar" />
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col
                          md={22}
                          xs={24}
                          justify="space-around"
                          align="middle"
                        >
                          <button
                            type="submit"
                            id="msgSubmit"
                            name="submit"
                            className="btn btn-warning"
                          >
                            Submit
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerWithUs;
