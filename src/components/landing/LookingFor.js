import React from "react";
import hyperLocalImg from "../../assets/images/service/hyper_local.svg";
import courierImg from "../../assets/images/service/courier.svg";
import intraCityImg from "../../assets/images/service/intracity_delivery.svg";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const LookingFor = () => {
  return (
    <Container maxWidth={false}>
      <section className="services">
        <div className="services-div">
          <div className="services-title">
            <span className="section_title font-weight-normal">
              Our <span className="text-warning">Services</span>
            </span>
          </div>
        </div>

        <div className="s-box-container">
          <Link to="">
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={hyperLocalImg} />
              <h1 className="text-center">Hyper Local</h1>
              <p className="font-weight-normal">
                Delivery services within a small and medium geographical area.
              </p>
            </div>
          </Link>
          <Link to="">
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={courierImg} />
              <h1 className=" text-center">Courier</h1>
              <p className="font-weight-normal">
                Door to Door pickup &amp; delivery services to selected postal
                codes across India.
              </p>
            </div>
          </Link>
          <Link to="">
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={intraCityImg} />
              <h1 className="text-center">Intracity Delivery</h1>
              <p className="font-weight-normal">
                Delivery services between one city to another city at affordable
                cost.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default LookingFor;
