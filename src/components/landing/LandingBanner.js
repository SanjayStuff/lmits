import React from 'react';

const LandingBanner = () => {
  return (
    <section className="pt-5 pb-5 homepage-search-block position-relative">
      <div className="banner-overlay" />
      <div className="container text-center mb-4">
        <div className="row ">
          <div className="col-md-12 text-center">
            <div className="homepage-search-title pt-5 mt-5">
              <h1 className="mb-2 font-weight-normal">
                <span className="font-weight-bold">Easy Booking</span> Fast
                Delivery
              </h1>
              <h5 className="mb-5 text-secondary font-weight-normal" />
            </div>

            <div className="homepage-search-form ">
              <form className="form-noborder">
                <div className="form-row d-flex justify-content-center">
                  <div className="col-lg-7 col-md-7 col-sm-12 ">
                    <input
                      data-toggle="modal"
                      data-target="#pickup-map-modal"
                      type="text"
                      placeholder="Enter your pickup location"
                      className="form-control form-control-lg"
                    />
                    <a className="locate-me">
                      <i
                        className="fa fa-map-marker"
                        style={{ color: '#000' }}
                      ></i>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
