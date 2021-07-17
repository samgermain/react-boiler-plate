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
  const styles = {
    bottomBlurb: {
      marginTop: "20px",
      fontSize: "0.7em",
    },
    copyright: {
      padding: "10px",
    },

    icon: {
      width: 25,
    },
    socialIcons: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      right: 0,
      top: "50%",
    },
    tag: {
      height: 40,
    },
  };

  const SocialIcon = ({ icon, link, ...props }) => (
    <a href={link} {...props}>
      <FontAwesomeIcon className="social-icon" icon={icon} />
    </a>
  );

  const { facebook, instagram, linkedIn, twitter } = links.external.social;

  return (
    <footer
      className={`position-relative bg-light overflow-hidden shadow-2 p-3 flex-center-col ${className}`}
      style={styles.footer}
      {...props}
    >
      <FooterNav links={links.internal.nav} />

      <div
        className={`flex-center-col ${className}`}
        style={styles.bottomBlurb}
      >
        <span
          style={styles.copyright}
        >{`© Me ${new Date().getFullYear()}`}</span>
        <span className="flex-center-row" style={styles.tag}>
          <span>
            Website designed by
            <a href="https://samgermain.com">
              {" Sam Germain"}
              <Image
                webp={faceWebp}
                other={face}
                style={{ width: 30 }}
                alt="Picture of Sam Germain"
              />
            </a>
          </span>
        </span>
      </div>
      <div
        className="flex-center-sm-row mr-sm-5 mr-2 position-absolute"
        style={styles.socialIcons}
      >
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
