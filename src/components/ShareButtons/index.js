import React from "react";
import "./style.scss";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faRedditAlien,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { metadata } from "data";

const ShareButtons = ({
  path,
  title,
  description,
  className = "",
  ...props
}) => {
  const butCls = "m-md-1 m-p5";
  const url = `${metadata.baseUrl}/${path}`;

  const FaIcon = ({ icon }) => {
    return (
      <div className="fa-circle-container">
        <FontAwesomeIcon className="fa-circle" size={"2x"} icon={icon} />
      </div>
    );
  };

  return (
    <div className={`${className} d-flex`} {...props}>
      <FacebookShareButton className={butCls} url={url}>
        <FaIcon icon={faFacebookF} />
      </FacebookShareButton>

      <TwitterShareButton
        className={butCls}
        url={url}
        title={title}
        //hashtags={["Hash Tag 1", "Hash Tag 2"]}
      >
        <FaIcon icon={faTwitter} />
      </TwitterShareButton>

      <LinkedinShareButton
        className={butCls}
        url={url}
        title={title}
        summary={description} //Doesn't show up
        source={url}
      >
        <FaIcon icon={faLinkedinIn} />
      </LinkedinShareButton>

      <RedditShareButton className={butCls} url={url} title={title}>
        <FaIcon icon={faRedditAlien} />
      </RedditShareButton>

      <WhatsappShareButton className={butCls} url={url} title={title}>
        <FaIcon icon={faWhatsapp} />
      </WhatsappShareButton>

      <EmailShareButton
        className={butCls}
        url={url}
        subject={title}
        body={description}
        separator={"\n\n"}
      >
        <FaIcon icon={faEnvelopeOpen} />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
