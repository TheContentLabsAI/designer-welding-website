/** @type {import('tailwindcss').Config} */
import designTokens from './resources/design-tokens.json';

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: designTokens.colors,
      fontFamily: {
        heading: designTokens.typography.font_family_headings,
        body: designTokens.typography.font_family_body,
      },
      borderRadius: {
        DEFAULT: designTokens.ui.border_radius_default,
        sm: designTokens.ui.border_radius_small,
      },
    },
  },
  plugins: [],
}
