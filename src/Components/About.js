import React from "react";
import AboutBackground from "../Assets/about-background.png";
import NuggetTalenan from "../Assets/nagetalenan.jpg";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img className="colored-image" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="rounded-5" src={NuggetTalenan} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Nugget Plum & Blum Tinggi Energi dan Protein
        </h1>
        <p className="primary-text">
        Nugget Plum & Blum kaya akan nutrisi khususnya energi dan protein yang bermanfaat bagi pertumbuhan dan perkembangan balita, selain itu Nugget Plum & Blum kaya akan vitamin dan mineral yang dapat meningkatkan sistem kekebalan tubuh
        </p>
      </div>
    </div>
  );
};

export default About;
