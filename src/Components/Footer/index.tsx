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
        <h5>Diensten</h5>
        <ul>
          <li>
            <a href="Nagel stijlen">Skincare</a>
          </li>
          <li>
            <a href="Nagel verzorging">Skincare</a>
          </li>
          <li>
            <a href="Gel coat">Skincare</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Socials</h5>
        <ul>
          <li>
            <a href="Instagram">Skincare</a>
          </li>
          <li>
            <a href="Facebook">Skincare</a>
          </li>
          <li>
            <a href="TikTok">Skincare</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>
            <Email color="white" />
            hanne.kleinjan@hotmail.com
          </li>
          <li>
            <Phone color="white" />
            +31 6 - 25 38 64 81
          </li>
          <li>
            <Map color="white" />
            Voorstraat 12, Den Ham (OV)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
