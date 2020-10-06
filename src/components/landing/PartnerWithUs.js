import React from 'react';
import partnerImg from '../../assets/images/partner.svg';

const PartnerWithUs = () => {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="title text-center mb-5">
                <div className="services-title">
                  <span className="section_title">PARTNER WITH US</span>
                </div>
                <p className="text-muted mt-4">
                  Let’s jointly move your business forward with our leading
                  innovation and simple solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 mb-3">
              <div className="features-img">
                <img
                  src={partnerImg}
                  alt="Partner Image"
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="row">
                <div className="col-md-12 mb-1">
                  <p className="text-dark font-weight-medium f-15">
                    Help us with below details in order to server you better
                  </p>
                </div>
              </div>
              <div className="custom-form mt-lg-0">
                <form action method="POST">
                  <div className="row">
                    <div className="col-sm">
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
                          <label htmlFor="name" className="form-field__label">
                            Your Name
                          </label>
                          <div className="form-field__bar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm">
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
                          <label htmlFor="email" className="form-field__label">
                            Email
                          </label>
                          <div className="form-field__bar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm">
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
                          <label htmlFor="number" className="form-field__label">
                            Your Phone No.
                          </label>
                          <div className="form-field__bar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm">
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-3 text-center">
                      <button
                        type="submit"
                        id="msgSubmit"
                        name="submit"
                        className="btn btn-warning"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs;
