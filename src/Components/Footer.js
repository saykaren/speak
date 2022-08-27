import React from "react";
import sayKarenLogo from "../Assets/sayKarenWhite.png";
import headphones from "./../Assets/headphones.png";
import code from "./../Assets/code.png";

const Footer = () => (
  <footer id="footer" className="footerDetails">
    <section className="music">
      <a
        href="https://open.spotify.com/playlist/5CcMpyH0f05YXqwNrHEvHz"
        target="_blank"
        rel="noopener noreferrer"
        className="footer_icon"
      >
        <img src={headphones} alt="music" />
      </a>
      <a
        href="https://github.com/saykaren/speak"
        target="_blank"
        rel="noopener noreferrer"
        className="footer_icon"
      >
        <img src={code} alt="code" />
      </a>
    </section>
    <section className="footerDetails">
      Website created by:
      <a href="http://saykaren.com" target="_blank" rel="noopener noreferrer">
        <img
          src={sayKarenLogo}
          className="footerSayKaren"
          id="sayKarenLogo"
          alt="sayKaren.com"
        />
      </a>
    </section>
  </footer>
);

export default Footer;
