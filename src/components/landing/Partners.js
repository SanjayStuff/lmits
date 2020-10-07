import React from 'react';
import EcourierzImg from '../../assets/images/partner/Ecourierz.png';
import TelyportImg from '../../assets/images/partner/Telyport.png';
import VamashipImg from '../../assets/images/partner/Vamaship.png';
import WefastImg from '../../assets/images/partner/Wefast.png';

const Partners = () => {
  return (
    <>
      <section className="section">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="title text-center ">
              <div className="services-title">
                <span className="section_title">Our Partners</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="wrapper align-items-center mb-5 pb-3 mt-5">
              <div className="slider">
                <div className="slides">
                  <img src={VamashipImg} alt="" />
                  <img src={WefastImg} alt="" height="100px" />
                  <img src={EcourierzImg} alt="" />
                  <img src={TelyportImg} alt="" />
                </div>
                <div className="slides">
                  <img src={VamashipImg} alt="" />
                  <img src={WefastImg} alt="" height="100px" />
                  <img src={EcourierzImg} alt="" />
                  <img src={TelyportImg} alt="" />
                </div>
                <div className="slides">
                  <img src={VamashipImg} alt="" />
                  <img src={WefastImg} alt="" height="100px" />
                  <img src={EcourierzImg} alt="" />
                  <img src={TelyportImg} alt="" />
                </div>
                <div className="slides">
                  <img src={VamashipImg} alt="" />
                  <img src={WefastImg} alt="" height="100px" />
                  <img src={EcourierzImg} alt="" />
                  <img src={TelyportImg} alt="" />
                </div>
                <div className="slides">
                  <img src={VamashipImg} alt="" />
                  <img src={WefastImg} alt="" height="100px" />
                  <img src={EcourierzImg} alt="" />
                  <img src={TelyportImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
