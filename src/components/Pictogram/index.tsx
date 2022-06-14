import React from "react";

import { Link } from "react-router-dom";

import "./PictogramStyles.css";

type PictogramProps = {
  componentRef: string;
  text: JSX.Element;
  id?: number | string;
  link: string;
};

export const Pictogram = ({ componentRef, text, id, link }: PictogramProps) => (
  <>
    <li className="pictogram-list" key={id}>
      <img className="pictogram-img" src={componentRef} alt="no img" />
      <Link to={link} className="pictogram-link">
        <p className="pictogram-text"> {text}</p>
      </Link>
    </li>
  </>
);
