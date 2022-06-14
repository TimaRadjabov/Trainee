import React from "react";

import classNames from "classnames";

import "./InputStyles.css";

export const Input = ({
  className,
  ...props
}: React.HTMLProps<HTMLInputElement>) => (
  <input className={classNames("input", className)} {...props} />
);
