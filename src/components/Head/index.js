/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { metadata } from "data";

export default ({ metadata }) => {
  let { description, title, shareImage, path } = metadata;

  // const image = metadata.image
  const url = `${metadata.baseUrl}/${path}`;

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <link rel="canonical" href={url} />
      {/* <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Montserrat|Helvetica+Neue|Helvetica|Arial&display=swap"
      /> */}
      <meta charSet="utf-8" />

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="theme-color" content={metadata.themeColor || "#fff"} />
      <meta name="author" content={metadata.author} />
      <meta name="author:description" content={metadata.authorDescription} />

      <meta name="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={shareImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={metadata.author} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};
