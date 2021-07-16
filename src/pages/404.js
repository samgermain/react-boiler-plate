import React from "react";
import { Head } from "components";

const Four = () => {
  const metadata = {
    title: "404 - Not Found",
    path: "/404",
  };

  return (
    <>
      <Head metadata={metadata} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
};

export default Four;
