import React, { DOMAttributes } from "react";

import classNames from "classnames";

import "./FormButtonStyle.css";

interface IFormButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const FormButton: React.FC<IFormButtonProps> = ({
  className,
  children,
  disabled,
  onClick,
}) => (
  <button
    className={classNames("form-button", className, {
      button__disabled: disabled,
    })}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
