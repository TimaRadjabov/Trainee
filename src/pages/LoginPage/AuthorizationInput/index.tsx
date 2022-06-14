import React, { forwardRef, InputHTMLAttributes, useState } from "react";

import classNames from "classnames";

import { Field, useField } from "formik";

import vector from "../../../uikit/static/Vector.png";

import close from "../../../uikit/static/close.png";

import open from "../../../uikit/static/open.png";

import "./AuthorizationInputStyles.css";
import { FormattedMessage } from "react-intl";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  name: string;
}
export const AuthorizationInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, name, type, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [warningCapsLock, setWarmingCapsLock] = useState(false);
    const [warningNumLock, setWarmingNumLock] = useState(true);
    const [maskPassword, setMaskPassword] = useState(false);
    const [passwordMask, setPasswordMask] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordType, setPasswordType] = useState("password");

    const [field, meta] = useField(name);

    const handleFocus = (e: React.SyntheticEvent<EventTarget>): void => {
      setFocused(true);
    };
    const handleBlur = (e: React.SyntheticEvent<EventTarget>): void => {
      setFocused(false);
    };

    const handleButtonLock = (
      e: KeyboardEvent,
      lock: string,
      setWarning: (bool: boolean) => void
    ): void => {
      if (e.getModifierState(lock)) {
        setWarning(true);
      } else {
        setWarning(false);
      }
    };

    const handleLock = (e: KeyboardEvent) => {
      handleButtonLock(e, "CapsLock", setWarmingCapsLock);
      handleButtonLock(e, "NumLock", setWarmingNumLock);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "password") {
        setPasswordMask(Array(e.target.value.length).fill("*").join(""));
        setPasswordValue(e.target.value);
      }
    };

    const handlePasswordClick = () => {
      if (type === "password") {
        setMaskPassword(true);
      }
    };
    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
        return;
      }
      setPasswordType("password");
    };

    console.log(field.value.length);

    return (
      <div className="input-block">
        <label
          htmlFor={name}
          className={
            focused || field.value.length !== 0 ? "label-active" : "label"
          }
        >
          {label}
        </label>
        <Field
          className={classNames(
            meta.error ? "input input-error" : "input",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          onKeyUp={handleLock}
          onClick={handlePasswordClick}
          name={name}
          type={type}
          innerRef={ref}
          {...props}
          autoComplete="off"
        />
        {maskPassword ? (
          <span
            className={
              focused || field.value.length !== 0
                ? "password-mask"
                : "password-null"
            }
          >
            {passwordType === "password" ? passwordMask : passwordValue}
          </span>
        ) : null}
        <button type="button" className="btn" onClick={togglePassword}>
          {passwordType === "password" &&
          field.name === "password" &&
          !meta.error ? (
            <img src={close} alt="eye" />
          ) : passwordType === "text" &&
            field.name === "password" &&
            !meta.error ? (
            <img src={open} alt="eye" />
          ) : null}
        </button>
        {meta.error ? (
          <>
            <img
              className={
                (focused || field.value.length !== 0) && field.name === "phone"
                  ? "phone-mask-error"
                  : ""
              }
              src={vector}
              alt="error"
            />
            <p className="error">{meta.error}</p>
          </>
        ) : null}
        {warningCapsLock ? (
          <p className="error"><FormattedMessage id="capsLock" /></p>
        ) : !warningNumLock ? (
          <p className="error"><FormattedMessage id="numLock" /></p>
        ) : null}
      </div>
    );
  }
);
