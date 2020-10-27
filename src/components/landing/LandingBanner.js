import React from 'react';
import { Container } from '@material-ui/core';
import { Row, Col } from 'antd';
import styles from '../../styles/LandingBanner.module.css';

const LandingBanner = () => {
  return (
    <Container maxWidth={false}>
      <section className="section homepage-search-block">
        <div className="banner-overlay" />
        <div className={`about-container ${styles.about_con_padd}`}>
          <Row justify="space-around">
            <Col span={24} align="middle">
              <div className="homepage-search-title service-title">
                <h1 className="font-weight-normal">
                  <span className="font-weight-bold">Easy Booking</span> Fast
                  Delivery
                </h1>
              </div>

              <div className="homepage-search-form">
                <form>
                  <Row justify="space-around" align="middle">
                    <Col span={12} xs={18} sm={16} md={14} lg={14} xl={10}>
                      <input
                        disabled
                        placeholder="Enter your pickup location"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Container>
  );
};

export default LandingBanner;
