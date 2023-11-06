import React from "react";
import footer from "../assets/images/footerlogo.png";
import { Container } from "react-bootstrap";
import youtube from "../assets/images/ytlogo.png";
import catlogo from "../assets/images/catlogo.png";
import twetter from "../assets/images/twetrlogo.png";
import aulogo from "../assets/images/aulogo.png";
import gamelogo from "../assets/images/gamelogo.png";
import mlogo from "../assets/images/mlogo.png";
import msglogo from "../assets/images/msglogo.png";
import arlogo from "../assets/images/arlogo.png";
import dmlogo from "../assets/images/dmlogo.png";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="mycontainer">
          <div className="mt_100 text-center">
            <a href="#id">
              <img src={footer} alt="logo" />
            </a>
            <p className="fs-16 fw-400 ff-ralway pt-2 join">
              Join Our Community
            </p>
            <ul className="d-flex align-items-center justify-content-center gap-25 flex-wrap list-style pt-4">
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  About
                </a>
              </li>
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  IBO Event
                </a>
              </li>
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  EEFI Tokenomics
                </a>
              </li>
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  Team
                </a>
              </li>
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  Partners
                </a>
              </li>
              <li>
                <a href="#id" className="fs-16 fw-400 ff-ralway fotr_links">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="d-flex justify-content-center gap-20 pt-4 flex-wrap list-style">
              <li>
                <a href="https://www.youtube.com/">
                  <img className="link" src={youtube} alt="yt" />
                </a>
              </li>
              <li>
                <a href="#id">
                  <img className="link" src={catlogo} alt="yt" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                  <img className="link" src={twetter} alt="yt" />
                </a>
              </li>
              <li>
                <a href="https://www.cuemath.com/a-union-b-formula/">
                  <img className="link" src={aulogo} alt="yt" />
                </a>
              </li>
              <li>
                <a href="https://discord.com/channels/@me">
                  <img className="link" src={gamelogo} alt="yt" />
                </a>
              </li>
              <li>
                <a href="https://www.imdb.com/title/tt0022100/">
                  <img className="link" src={mlogo} alt="yt" />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <img className="link" src={msglogo} alt="yt" />
                </a>
              </li>
              <li>
                <a href="#id">
                  <img className="link" src={arlogo} alt="yt" />
                </a>
              </li>
              <li>
                <a href="#id">
                  <img className="link" src={dmlogo} alt="yt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="fotr_bg mt_70">
        <div className="mycontainer d-flex align-items-center justify-content-between p-3">
          <p className="fs-14 fw-400 ff-ralway copy">@Copyright 2023</p>
          <p className="fs-14 fw-400 ff-ralway copy">Privacy policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
