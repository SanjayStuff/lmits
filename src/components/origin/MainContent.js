import React from "react";
import QuotationContent from "../quotation/QuotationContent";
import LandingContent from "../landing/LandingContent";

const MainContent = () => {
  return (
    <>
      auth_token ? <QuotationContent /> : <LandingContent />
    </>
  );
};

export default MainContent;
