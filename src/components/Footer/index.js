import React from "react";
import "./style.scss";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import face from "images/face-icon.png";
import faceWebp from "webp/face-icon.webp";

import { links, metadata } from "data";
import { FooterNav } from "components/Nav";
import { Image } from "components";

const Footer = ({ className = "", ...props }) => {
  const SocialIcon = ({ icon, link, ...props }) => (
    <a href={link} {...props}>
      <FontAwesomeIcon className="social-icon" icon={icon} />
    </a>
  );

  const { facebook, instagram, linkedIn, twitter } = links.external.social;

  return (
    <footer
      className={`position-relative bg-light overflow-hidden shadow-2 p-3 flex-center-col ${className}`}
      {...props}
    >
      <FooterNav links={links.internal.nav} />

      <div className={`flex-center-col h6 mt-4 ${className}`}>
        <span className="p-3">{`© Me ${new Date().getFullYear()}`}</span>
        <span className="flex-center-row">
          <span>Website designed by</span>
          <div style={{ width: 3 }}></div>
          <a className="flex-center-row" href={metadata.authorLink}>
            {metadata.author}
            <Image
              webp={faceWebp}
              other={face}
              className="icon"
              alt="Picture of Sam Germain"
            />
          </a>
        </span>
      </div>
      <div className="mr-sm-5 mr-2 social-icons">
        <div>
          <SocialIcon
            aria-label="Facebook social media page"
            link={facebook}
            icon={faFacebookF}
          />
          <SocialIcon
            aria-label="Instagram social media page"
            link={instagram}
            icon={faInstagram}
          />
        </div>
        <div>
          <SocialIcon
            aria-label="LinkedIn social media page"
            link={linkedIn}
            icon={faLinkedinIn}
          />
          <SocialIcon
            aria-label="Twitter social media page"
            link={twitter}
            icon={faTwitter}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
