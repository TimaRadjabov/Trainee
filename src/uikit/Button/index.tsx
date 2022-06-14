import React from "react";

import "./ButtonStyles.css";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  value?: string | number;
};

export const Button = ({
  children,
  className,
  onClick,
  value,
}: ButtonProps) => (
  <button
    className={`button ${className}`}
    type="button"
    onClick={onClick}
    value={value}
  >
    {children}
  </button>
);
