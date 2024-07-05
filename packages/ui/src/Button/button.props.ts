import { ReactNode } from "react";
import { ButtonStyles } from "./button.styles";
import { VariantProps } from "class-variance-authority";

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  children: ReactNode;
  appearance?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}
