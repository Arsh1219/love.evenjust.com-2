import React from "react";
import Head from "next/head";

const SEO = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <title>
        {title ? title : "Love Calculator Prank - Know Friend's Crush's Name"}
      </title>
      <meta
        property="og:title"
        content={
          title ? title : "Love Calculator Prank - Know Friend's Crush's Name"
        }
      />
      <meta
        name="description"
        content={
          description
            ? description
            : "Online Love calculator prank to know anyone's crush's name. Best love calculator prank website to know friend's crush's name using link."
        }
      />
      <meta
        property="og:description"
        content={
          description
            ? description
            : "Online Love calculator prank to know anyone's crush's name. Best love calculator prank website to know friend's crush's name using link."
        }
      />
      <meta property="og:image" content="/og.png" />
    </Head>
  );
};

export default SEO;
