import React from "react";
import Layout from "../components/Layout/Layout";
import ThreePricing from "../components/Pricing/ThreePricing";
import ComparePricing from "../components/Pricing/ComparePricing";
import { graphql } from "gatsby";

const Pricing = ({ data }) => {
  if (!data.prismicPricing.data) return null;
  const { data: queryData } = data.prismicPricing;

  const {
    pricing_title: pricingTitle,
    pricing_title_description: pricingTitleDescription,
    all_pricing: allPricing,
    compare_pricing_title: comparePricingTitle,
    compare_pricing_title_description: comparePricingDescription,
    compare_pricing_table: comparePricingTable,
  } = queryData;

  return (
    <div>
      <ThreePricing
        title={pricingTitle}
        description={pricingTitleDescription}
        items={allPricing}
      />
      <ComparePricing
        title={comparePricingTitle}
        description={comparePricingDescription}
        items={comparePricingTable}
      />
    </div>
  );
};

export const query = graphql`
  query PricingQuery {
    prismicPricing {
      data {
        pricing_title {
          text
        }
        pricing_title_description {
          text
        }
        all_pricing {
          cost {
            text
          }
          feature_1 {
            text
          }
          feature_3 {
            text
          }
          feature_2 {
            text
          }
          feature_4 {
            text
          }
          feature_5 {
            text
          }
          feature_6 {
            text
          }
          feature_7 {
            text
          }
          feature_8 {
            text
          }
          title {
            text
          }
        }
        compare_pricing_title {
          text
        }
        compare_pricing_title_description {
          text
        }
        compare_pricing_table {
          free
          premium
          standard
          category {
            text
          }
        }
      }
    }
  }
`;
Pricing.Layout = Layout;
export default Pricing;
