module.exports = {
  variants: {
    width: ["responsive", "hover"],
    display: ["responsive", "hover", "group-hover"],
    margin: ["responsive", "hover", "group-hover", "last"],
    textColor: ["responsive", "hover", "group-hover"],
    rotate: ["group-hover"],
    translate: ["responsive", "hover", "group-hover"],
    backgroundColor: ["hover", "group-hover"]
  },
  theme: {
    extend: {
      colors: {
        "dracula-background": "#282a36",
        "dracula-current-line": "#44475a",
        "dracula-selection": "#44475a",
        "dracula-foreground": "#f8f8f2",
        "dracula-comment": "#6272a4",
        "dracula-cyan": "#8be9fd",
        "dracula-green": "#50fa7b",
        "dracula-orange": "#ffb86c",
        "dracula-pink": "#ff79c6",
        "dracula-purple": "#bd93f9",
        "dracula-red": "#ff5555",
        "dracula-yellow": "#f1fa8c"
      },
      spacing: {
        "999": "999px"
      }
    }
  },
  purge: [
    "./src/**/*.vue",
    "./node_modules/vue-tailwind/src/themes/default/TCard.js",
    "./node_modules/vue-tailwind/src/themes/default/TInput.js",
    "./node_modules/vue-tailwind/src/themes/default/TInputGroup.js",
    "./node_modules/vue-tailwind/src/themes/default/TTextarea.js"
  ]
};
