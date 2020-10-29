import React from "react";
import logo from "../../assets/images/Logo.png";
import appStoreImg from "../../assets/images/navicons/Appstore.png";
import playStoreImg from "../../assets/images/navicons/Playstore.png";
import profileImg from "../../assets/images/navicons/profile.png";
import { Link, useHistory } from "react-router-dom";
import { Menu, Row, Col, Typography } from "antd";
import Avatar from "@material-ui/core/Avatar";
import styles from "../../styles/quotation/GetQuotes.module.css";

const { Text } = Typography;

const GetQuotes = () => {
  let history = useHistory();
  return !localStorage.getItem("lmits_auth_key") ? (
    <>{history.push("/")}</>
  ) : (
    <div className="header-fluid">
      <div className="header">
        <div className="logo">
          <Link to="">
            <img src={logo} alt="LMiTS Logo" height={20} />
          </Link>
        </div>

        <Menu mode="horizontal">
          <Menu.Item className="ant_text_disable nav-name">
            <Text className="font-weight-medium" style={{ color: "#303952" }}>
              Download
            </Text>
          </Menu.Item>
          <Menu.Item className="ant_text_disable nav-name">
            <Row>
              <Col>
                <Link
                  className="app-store"
                  to={{ pathname: "https://www.apple.com/in/ios/app-store/" }}
                  target="_blank"
                >
                  <img src={appStoreImg} alt="App Store" width={30} />
                </Link>
              </Col>
              <Col>
                <Link
                  className="play-store"
                  to={{ pathname: "https://play.google.com/store?hl=en_IN" }}
                  target="_blank"
                >
                  <img src={playStoreImg} alt="Play Store" width={30} />
                </Link>
              </Col>
            </Row>
          </Menu.Item>

          <Menu.Item>
            <Avatar
              src={
                localStorage.getItem("lmits_prof_img")
                  ? localStorage.getItem("lmits_prof_img")
                  : profileImg
              }
              className={styles.user_profile}
              alt="Profile"
              onClick={() => history.push("/dashboard")}
            />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default GetQuotes;
