import React from "react";
import "./slider.scss";
import { Link } from "react-router-dom";

import MainPage from "../Assets/Main Shot Web Page 1.png";

const Slide = ({ image }: { image: string }) => {
  return (
    <div
      className="Slide"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="Content">
        <h2>XO Nails</h2>
        <p>
          Zin in een uurtje relaxen of toe aan frisse sterke nagels?
          Bij ons kun jij terecht voor jouw nagelverzorging en advies.
        </p>
        <button> Druk hier </button>
      </div>
    </div>
  );
};

export const Slider = () => {
  return (
    <div className="Slider">
      <div className="Menu">
        <div>
          <Link to="/">
            <figure className="Logo">XONails</figure>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/detail">Over ons</Link>
            </li>
            <li>
            <a href="/#services">Onze expertise</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <Slide image="../Assets/Main Shot Web Page 1.png"></Slide>
    </div>
  );
};

export default Slider;
