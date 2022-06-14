import React from "react";

import { Outlet } from "react-router";

import { AnimatedLogo } from "../AnimatedLogo";

import { Pictogram } from "../Pictogram";

import { LanguageButtons } from "../LanguageButtons";

import { pictogramData } from "../Pictogram/PictogramData";

import "./headerStyles.css";

export const Header = () => (
  <>
    <div className="header-wrapper">
      <AnimatedLogo />
      <ul className="header-wrapper_pictogram">
        {pictogramData.map((pict) => (
          <Pictogram
            componentRef={pict.componentRef}
            text={pict.text}
            key={pict.id}
            link={pict.link}
          />
        ))}
      </ul>
      <LanguageButtons />
    </div>
    <Outlet />
  </>
);
