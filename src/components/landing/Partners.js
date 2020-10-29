import React from "react";
import EcourierzImg from "../../assets/images/partner/Ecourierz.png";
import TelyportImg from "../../assets/images/partner/Telyport.png";
import VamashipImg from "../../assets/images/partner/Vamaship.png";
import WefastImg from "../../assets/images/partner/Wefast.png";
import { Layout, Row, Col } from "antd";

const Partners = () => {
  return (
    <Layout className="bg-white">
      <section className="section">
        <Row justify="space-around">
          <Col lg={12} md={16} align="middle">
            <div className="services-title">
              <span className="section_title font-weight-normal">
                Our <span className="text-warning">Partners</span>
              </span>
            </div>
          </Col>
        </Row>

        <Row justify="space-around" align="middle">
          <div className="wrapper ">
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
        </Row>
      </section>
    </Layout>
  );
};

export default Partners;
