import React from "react";
import "./style.scss";

import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import face from "images/icon-192x192.png";
import faceWebp from "webp/icon-192x192.webp";

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

  const SocialIcon = ({ icon, link }) => (
    <a href={link}>
      <FontAwesomeIcon className="social-icon" icon={icon} />
    </a>
  );

  const { facebook, instagram, linkedIn, twitter } = links.external.social;

  return (
    <footer
      className={`position-relative bg-light overflow-hidden shadow-2 p-3 flex-center-col ${className}`}
      style={styles.footer}
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
          <SocialIcon link={facebook} icon={faFacebookF} />
          <SocialIcon link={instagram} icon={faInstagram} />
        </div>
        <div>
          <SocialIcon link={linkedIn} icon={faLinkedinIn} />
          <SocialIcon link={twitter} icon={faTwitter} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
