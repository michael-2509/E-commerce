import React from "react";

import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import classes from "./Footer.module.css";

import Logo from "../../Assets/icons/logo.svg";

const Facebook = styled(FaFacebookSquare)`
  font-size: 2em;
  margin-right: 30px;
`;

const Twitter = styled(FaTwitter)`
  font-size: 2em;
  margin-right: 30px;
`;

const Instagram = styled(FaInstagram)`
  font-size: 2em;
  margin-right: 30px;
`;

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-left"]}>
        <img src={Logo} alt="logo" />
        <div>
          {" "}
          <p>Home</p>
          <p>Speaker</p>
          <p>HeadPhone</p>
          <p>Earphone</p>
        </div>
      </div>
      <div>
        <div className={classes["footer-right"]}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <p className={classes.mobile}>Copyright 2021. All Rights Reserved</p>
          <div className={classes["footer-icons"]}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <p className={classes.desktop}>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
