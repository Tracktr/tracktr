"use client";

import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
}

const ButtonStyles = cva(["bg-blue-500", "text-white", "px-4", "py-2"]);

export const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button className={twMerge(ButtonStyles())}>{children}</button>;
};
