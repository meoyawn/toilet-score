import forms from "@tailwindcss/forms"
import typo from "@tailwindcss/typography"
import { type Config } from "tailwindcss"

// noinspection JSUnusedGlobalSymbols
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [typo, forms],
} satisfies Config
