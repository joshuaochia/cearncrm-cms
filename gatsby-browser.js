/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import "@fontsource/open-sans/400.css"; // Select either normal or italic.
import "@fontsource/ubuntu/700.css";
import "normalize.css";
import "./src/styles/global.css";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Link } from "gatsby";
import { PrismicProvider } from "@prismicio/react";

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment;

  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <Layout {...props}>{element}</Layout>
    </PrismicProvider>
  );
}
