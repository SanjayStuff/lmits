import React from 'react';
import LandingBanner from './LandingBanner';
import LookingFor from './LookingFor';
import AboutUs from './AboutUs';
import PartnerWithUs from './PartnerWithUs';
import Partners from './Partners';
import LandingFooter from './LandingFooter';

const LandingContent = () => {
  return (
    <>
      <LandingBanner />
      <LookingFor />
      <AboutUs />
      <PartnerWithUs />
      <Partners />
      <LandingFooter />
    </>
  );
};

export default LandingContent;
