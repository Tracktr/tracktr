import { cva } from "class-variance-authority";

export const ButtonStyles = cva(["px-4", "py-2", "rounded-md"], {
  variants: {
    appearance: {
      primary: ["bg-tracktr-500", "text-black"],
      secondary: ["bg-black", "text-white"],
    },
    size: {
      small: ["text-sm"],
      medium: ["text-md"],
      large: ["text-lg"],
    },
  },
});
