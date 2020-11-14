import React from "react";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Compost For All</h1>
    <p className="lead">
      Dedicated to expanding access to and education of composting.
    </p>
  </div>
);

export default Hero;
