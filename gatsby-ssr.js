import React from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import "normalize.css";
import "./src/styles/global.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
