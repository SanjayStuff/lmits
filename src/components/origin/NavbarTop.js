import React from 'react';
import logo from '../../assets/images/Logo.png';
import appStoreImg from '../../assets/images/navicons/Appstore.png';
import playStoreImg from '../../assets/images/navicons/Appstore.png';
import profileImg from '../../assets/images/navicons/Appstore.png';

const NavbarTop = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
      <div className="container">
        <a href className="navbar-brand logo">
          <img src={logo} alt="LMiTS" height={20} />
        </a>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ui className="navbar-nav ml-auto navbar-center" id="mySidenav"></ui>
          <div className="nav-item">
            <a
              className="font-weight-medium pb-0 mb-0 nav-name"
              style={{ color: '#9da9bb' }}
            >
              Download
            </a>
            <a
              className="ml-2"
              href="https://www.apple.com/in/ios/app-store/"
              target="_blank"
            >
              <img src={appStoreImg} alt="LMiTS" height={25} />
            </a>
            <a href="https://play.google.com/store?hl=en_IN" target="_blank">
              <img src={playStoreImg} alt="LMiTS" height={25} />
            </a>
          </div>
          <div className="dv-desktop-menu__login-button b-header__login-button header-login-action p-2">
            <div className="dv-button dv-button-colorless dv-button--small">
              <button>Login / Sign Up</button>
            </div>
          </div>
          <div className="header_img">
            <a href="">
              <img src={profileImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
