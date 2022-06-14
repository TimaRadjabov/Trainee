import React from "react";

import { AppleMobileIcon, AndroidMobileIcon } from "../../../components/Icons";

import "./RecoveryFooterStyles.css";

export const RecoveryFooter = () => (
  <div className="recovery-footer-wrapper">
    <div className="recovery-footer-affinity-text">© 2022 Affinity Bank</div>
    <div className="recovery-footer-links-wrapper">
      <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
        <AndroidMobileIcon />
      </a>
      <a href="https://www.apple.com/store" target="_blank" rel="noreferrer">
        <AppleMobileIcon />
      </a>
      <span>Mobile application</span>
    </div>
  </div>
);
