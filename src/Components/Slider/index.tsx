import React from "react";
import "./slider.scss";
import { Link } from "react-router-dom";

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
        <h2>Chocolate bar donut</h2>
        <p>
          Bonbon toffee lollipop chocolate cake cake caramels. Liquorice
          chocolate bar ice cream lemon drops cotton candy chupa chups danish
          carrot cake.
        </p>
        <button> press me </button>
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
              <Link to="/detail">About us</Link>
            </li>
            <li>
            <a href="/#services">onze services</a>
            </li>
            <li>
              <a href="/#contact">contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <Slide image="https://images.unsplash.com/photo-1513387785954-4e2600cd1f0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"></Slide>
    </div>
  );
};

export default Slider;
