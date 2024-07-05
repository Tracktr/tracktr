import type { Config } from "tailwindcss";

import sharedConfig from "@tracktr/tailwind-config/index";

const config = {
  ...sharedConfig,
  content: ["*.{ts,tsx}"],
} satisfies Config;

export default config;
