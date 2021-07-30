import React from "react";
import "./style.scss";
import { Head, Carousel, ShareButtons } from "components";

const metadata = {
  description: "About page",
  title: "About",
  shareImage:
    "https://suddenlysask.com/static/cc701b5ed9329f7c62ace15b5dfec7e6/d00b9/cat.webp",
  path: "/about",
};

export default () => (
  <div className="w-100 h-100 flex-center-col">
    <Head metadata={metadata} />
    <Carousel className="mt-3">
      <img
        className="c-image"
        alt="A cat"
        src="https://suddenlysask.com/static/cc701b5ed9329f7c62ace15b5dfec7e6/d00b9/cat.webp"
      />
      <img
        className="c-image"
        alt="A bird"
        src="https://suddenlysask.com/static/cd1501538c7d4b269a999c6bb8521bdb/4efd5/blue-song-bird.webp"
      />
      <img
        className="c-image"
        alt="Some dogs"
        src="https://suddenlysask.com/static/0690cbd4689de5b54db2cb4e26dfbd3f/d00b9/cover.webp"
      />
    </Carousel>
    <ShareButtons
      path="about"
      title="about"
      description="About page for an empty website"
      className="my-3"
    />
  </div>
);
