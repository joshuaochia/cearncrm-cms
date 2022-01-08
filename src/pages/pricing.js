import React from "react";
import Layout from "../components/Layout/Layout";
import ThreePricing from "../components/Pricing/ThreePricing";
import ComparePricing from "../components/Pricing/ComparePricing";

const Pricing = () => {
  return (
    <div>
      <ThreePricing />
      <ComparePricing />
    </div>
  );
};
Pricing.Layout = Layout;
export default Pricing;
