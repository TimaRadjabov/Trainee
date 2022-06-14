import React, { useState } from "react";

import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";

import { TabNav } from "../../uikit/TabNav";

import { FormButton } from "../../uikit/FormButton";

import { AuthorizationFormByPhone } from "../../pages/LoginPage/AuthorizationFormByPhone";

import { AuthorizationFormByID } from "../../pages/LoginPage/AuthorizationFormByID";

import "./AuthorizationFormStyle.css";


export const AuthorizationForm: React.FC = () => {
  const byEmail = "By phone";
  const byID = "By passport";
  const [selected, setSelected] = useState("By phone");
  const toggleSelected = (tab: string) => {
    setSelected(tab);
  };
  const config = [byEmail, byID];
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-title"><FormattedMessage  id="logInTitle"/></div>
        <TabNav tabs={config} selected={selected} setSelected={toggleSelected}>
          {selected === byEmail ? <AuthorizationFormByPhone /> : null}
          {selected === byID ? <AuthorizationFormByID /> : null}
        </TabNav>
        <div className="form-links">
          <Link to="/"><FormattedMessage  id="demoMode"/></Link>
          <Link to="/"><FormattedMessage  id="forgotPassword"/></Link>
        </div>
        <FormButton className=" button-style registration"><FormattedMessage  id="signUp"/></FormButton>
      </div>
    </div>
  );
};
