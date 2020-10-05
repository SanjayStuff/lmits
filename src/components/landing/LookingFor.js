import React from 'react';
import hyperLocalImg from '../../assets/images/service/hyper_local.svg';
import courierImg from '../../assets/images/service/courier.svg';
import intraCityImg from '../../assets/images/service/intracity_delivery.svg';

const LookingFor = () => {
  return (
    <>
      <section className="services">
        <div className="s-heading mt-5 pt-5 mb-0">
          <div className="services-title">
            <span className="section_title">What are you looking for ?</span>
          </div>
        </div>
        <div className="s-box-container">
          <a>
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={hyperLocalImg} />
              <h1 className="mt-2 text-center">Hyper Local</h1>
              <p>
                Delivery services within a small and medium geographical area.
              </p>
            </div>
          </a>
          <a>
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={courierImg} />
              <h1 className="mt-2 text-center">Courier</h1>
              <p>
                Door to Door pickup and delivery services to select postal codes
                across key cities in India for both domestic and international.
              </p>
            </div>
          </a>
          <a>
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={intraCityImg} />
              <h1 className="mt-2 text-center">Intracity Delivery</h1>
              <p>Delivery services within a city at affordable cost.</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default LookingFor;
