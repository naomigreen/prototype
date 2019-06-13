import React from "react";
import "./styles.css";

function About(props) {
  const { setCompany, defaultCompany } = props;

  return (
    <div id="about">
      <div>
        <img src={setCompany.logo || defaultCompany.logo} alt="" />
        <h1>About</h1>
      </div>
    </div>
  );
}

export default About;
