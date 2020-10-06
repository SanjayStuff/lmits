import React from 'react';
import supportImg from '../../assets/images/support.svg';

const Support = () => {
  return (
    <>
      <section className="support-section container my-4">
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="px-3 my-5">
              <div className="px-3 text-center pb-3">
                <h5 className="text-dark font-weight-bold">Call Us</h5>
                <h6 className="font-weight-medium f-13 my-3">
                  9AM to 6PM: Monday to Friday
                </h6>
                <a href="tel:8620087300" className="text-muted">
                  <h5 className="text-dark font-weight-medium">
                    +91 86200 87300
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="px-0">
              <div className="px-0 text-center pb-5">
                <img src={supportImg} alt="" width="80%" />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="px-3 my-5">
              <div className="px-3 text-center pb-3">
                <h5 className="text-dark font-weight-bold">Support</h5>
                <h6 className="font-weight-medium f-13 my-3">
                  Our customer care is available to help you.
                </h6>
                <a href="mailto:support@lmits.in" className="text-muted">
                  <h5 className="text-dark font-weight-medium">
                    support@lmits.in
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
