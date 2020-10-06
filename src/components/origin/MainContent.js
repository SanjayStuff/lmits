import React from "react";
import QuotationContent from "../quotation/QuotationContent";
import LandingContent from "../landing/LandingContent";

const MainContent = () => {
  return (
    <h3>
      {/*auth_token ? <QuotationContent /> : <LandingContent />*/}
      {/*Main Content*/}
      <LandingContent />
    </h3>
  );
};

export default MainContent;
