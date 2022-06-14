import React from "react";

import { Link } from "react-router-dom";

import { LogoIcon, AffinityBank } from "../Icons";

import "./animatedLogo.css";

export const AnimatedLogo = () => (
  <Link to="/" className="link">
    <LogoIcon className="logo-icon" />
    <div className="logo-text_wrapper">
      <AffinityBank className="logo-text" />
    </div>
  </Link>
);
