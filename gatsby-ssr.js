import "normalize.css";
import "./src/styles/global.css";
import "./node_modules/bootstrap/dist/css/bootstrap.css";
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
