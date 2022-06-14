import React from "react";

import background from "../../../uikit/static/passwordRecoveryBg.png";

import closeImg from "../../../uikit/static/closeImg.png";

import backArrow from "../../../uikit/static/backArrow.png";

import { Button } from "../../../uikit/Button";

import { FormButton } from "../../../uikit/FormButton";

import "./PasswordRecoveryPageBodyStyles.css";

export const RecoveryBody = () => (
  <div className="recovery-wrapper">
    <div className="recovery-img-container">
      <img src={background} alt="back" />
    </div>
    <div className="recovery-form">
      <div className="recovery-form-header">
        <div className="recovery-form-header-back-wrapper">
          <Button className="recovery-form-header-back-button">
            <img
              src={backArrow}
              alt="back"
              className="recovery-form-header-back-img"
            />
            <span className="recovery-form-header-back-text">Back</span>
          </Button>
        </div>
        <div>
          <Button>
            <img src={closeImg} alt="close" />
          </Button>
        </div>
      </div>
      <div className="recovery-form-body-wrapper">
        <h1 className="recovery-from-body-text_big">Password recovery</h1>
        <div className="recovery-form-body_progress_bar">
          <ul className="recovery-form-body_list">
            <li className="recovery-form-body_step_container">
              <div className="recovery-form-body_step-border">
                <span className="recovery-form-body_progress_text">
                  Enter passport number
                </span>
                <span className="recovery-form-progress_ellipse" />
              </div>
            </li>
            <li className="recovery-form-body_step_container">
              <div className="recovery-form-body_step-border">
                <span className="recovery-form-body_progress_text">
                  Enter sms code
                </span>
                <span className="recovery-form-progress_ellipse" />
              </div>
            </li>
            <li className="recovery-form-body_step_container">
              <div className="recovery-form-body_step-border">
                <span className="recovery-form-body_progress_text">
                  Enter password
                </span>
                <span className="recovery-form-progress_ellipse" />
              </div>
            </li>
          </ul>
        </div>
        <div className="recovery-form-content-container">
          <div className="recovery-form-content-wrapper">
            <form>
              <div className="passport-input" />
              <p>
                A text message with a code will be sent to your phone number
              </p>
              <FormButton>Continue</FormButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
