/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#341100",
        "on-primary": "#ffffff",
        "primary-container": "#131b2e",
        "on-primary-fixed-variant": "#3f465c",
        "inverse-on-surface": "#eff1f3",
        "primary-fixed": "#dae2fd",
        "tertiary-fixed-dim": "#b9c7e0",
        "tertiary": "#000000",
        "surface-variant": "#e0e3e5",
        "surface-bright": "#f7f9fb",
        "on-error-container": "#93000a",
        "on-background": "#191c1e",
        "on-primary-fixed": "#131b2e",
        "on-tertiary-fixed-variant": "#3a485c",
        "surface-container-high": "#e6e8ea",
        "primary-fixed-dim": "#bec6e0",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#7c839b",
        "outline": "#76777d",
        "on-secondary-fixed-variant": "#783200",
        "surface-dim": "#d8dadc",
        "secondary": "#9d4300",
        "secondary-fixed": "#ffdbca",
        "on-surface-variant": "#45464d",
        "on-error": "#ffffff",
        "on-secondary-container": "#5c2400",
        "tertiary-fixed": "#d5e3fd",
        "on-surface": "#191c1e",
        "primary": "#000000",
        "surface": "#f7f9fb",
        "error": "#ba1a1a",
        "surface-tint": "#565e74",
        "outline-variant": "#c6c6cd",
        "on-tertiary-fixed": "#0d1c2f",
        "inverse-surface": "#2d3133",
        "on-tertiary-container": "#76859b",
        "surface-container-highest": "#e0e3e5",
        "tertiary-container": "#0d1c2f",
        "surface-container-low": "#f2f4f6",
        "secondary-container": "#fd761a",
        "on-secondary": "#ffffff",
        "background": "#f7f9fb",
        "surface-container": "#eceef0",
        "secondary-fixed-dim": "#ffb690",
        "inverse-primary": "#bec6e0"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "stack-lg": "48px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "base": "8px",
        "gutter": "24px"
      },
      fontFamily: {
        "display-lg": ["Montserrat"],
        "caption": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "body-lg": ["Hanken Grotesk"],
        "headline-md": ["Montserrat"],
        "label-bold": ["Hanken Grotesk"],
        "display-lg-mobile": ["Montserrat"]
      },
      fontSize: {
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "caption": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "label-bold": ["14px", {"lineHeight": "20px", "fontWeight": "700"}],
        "display-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}