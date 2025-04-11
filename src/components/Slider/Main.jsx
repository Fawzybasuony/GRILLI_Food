/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Main() {
  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {/* Slide 1 */}
        <li className="slider-item active" data-hero-slider-item>
          <div className="slider-bg">
            <img
              src="./assets/images/hero-slider-3.jpg"
              width="1880"
              height="950"
              alt=""
              className="img-cover"
            />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            Traditional & Hygienic
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            Where Flavor Meets Joy
            <br />
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Gather with family and experience the delight of every mouthwatering
            bite!
          </p>
          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>
      </ul>

      <a href="#" className="hero-btn has-after">
        <img
          src="./assets/images/hero-icon.png"
          width="48"
          height="48"
          alt="booking icon"
        />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
}
