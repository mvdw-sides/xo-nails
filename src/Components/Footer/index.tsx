import React from "react";
import "./footer.scss";
//@ts-ignore
import Email from "react-ionicons/lib/MdMail";
//@ts-ignore
import Phone from "react-ionicons/lib/IosPhonePortrait";
//@ts-ignore
import Map from "react-ionicons/lib/IosMap";

export const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <figure className="Logo">XONails</figure>
      </div>
      <div>
        <h5>Services</h5>
        <ul>
          <li>
            <a href="#services">Skincare</a>
          </li>
          <li>
            <a href="#services">Skincare</a>
          </li>
          <li>
            <a href="#services">Skincare</a>
          </li>
          <li>
            <a href="#services">Skincare</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Social</h5>
        <ul>
          <li>
            <a href="#services">Skincare</a>
          </li>
          <li>
            <a href="#services">Skincare</a>
          </li>
          <li>
            <a href="#services">Skincare</a>
          </li>
          <li>
            <a href="#services">Skincare</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>
            <Email color="white" />
            sample@localhost.com
          </li>
          <li>
            <Phone color="white" />
            +31 pel de pinda
          </li>
          <li>
            <Map color="white" />
            Een straat 432, 3472AD,dorp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
