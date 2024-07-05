"use client";

import { twMerge } from "tailwind-merge";
import { ButtonType } from "./button.props";
import { ButtonStyles } from "./button.styles";

export const Button = ({
  appearance = "primary",
  size = "medium",
  children,
  ...props
}: ButtonType): JSX.Element => {
  return (
    <button
      type={props.type || "button"}
      className={twMerge(
        ButtonStyles({
          appearance: appearance || "primary",
          size: size || "medium",
        })
      )}
      {...props}
    >
      {children}
    </button>
  );
};
