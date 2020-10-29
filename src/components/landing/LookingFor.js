import React from "react";
import hyperLocalImg from "../../assets/images/service/hyper_local.svg";
import courierImg from "../../assets/images/service/courier.svg";
import intraCityImg from "../../assets/images/service/intracity_delivery.svg";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const LookingFor = () => {
  return (
    <Container maxWidth={false}>
      <section className="services">
        <div className="serbices-div">
          <div className="services-title">
            <span className="section_title">How can we help ?</span>
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
                Door to Door pickup and delivery services to select postal codes
                across key cities in India for both domestic and international.
              </p>
            </div>
          </Link>
          <Link to="">
            <div className="s-box">
              <div className="bar" />
              <img alt={1} src={intraCityImg} />
              <h1 className="text-center">Intracity Delivery</h1>
              <p className="font-weight-normal">
                Delivery services within a city at affordable cost.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default LookingFor;
