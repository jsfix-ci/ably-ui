module.exports = {
  purge: [
    "./src/**/*.html.erb",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.json",
  ],
  darkMode: false,
  theme: {
    screens: {
      // CSS custom properties can't be used in media queries
      xs: "375px",
      sm: "600px",
      md: "1040px",
      lg: "1280px",
      xl: "1440px",
    },
    fontSize: {
      title: ["var(--fs-title)", "var(--lh-tight)"],
      h1: ["var(--fs-h1)", "var(--lh-tight)"],
      h2: ["var(--fs-h2)", "var(--lh-tight)"],
      h3: ["var(--fs-h3)", "var(--lh-tight)"],
      h4: ["var(--fs-h4)", "var(--lh-tight)"],
      p1: ["var(--fs-p1)", "var(--lh-relaxed)"],
      p2: ["var(--fs-p2)", "var(--lh-relaxed)"],
      p3: ["var(--fs-p3)", "var(--lh-relaxed)"],
      standfirst1: ["var(--fs-standfirst1)", "var(--lh-snug)"],
      standfirst2: ["var(--fs-standfirst2)", "var(--lh-snug)"],
      "sub-header": ["var(--fs-sub-header)", "var(--lh-normal)"],
      overline1: ["var(--fs-overline1)", "var(--lh-normal)"],
      overline2: ["var(--fs-overline2)", "var(--lh-normal)"],
      btn1: ["var(--fs-btn1)", "var(--lh-tight)"],
      btn2: ["var(--fs-btn2)", "var(--lh-tight)"],
      menu1: ["var(--fs-menu1)", "var(--lh-tight)"],
      menu2: ["var(--fs-menu2)", "var(--lh-tight)"],
      menu3: ["var(--fs-menu3)", "var(--lh-snug)"],
    },
    colors: {
      transparent: "transparent",
      "cool-black": "var(--color-cool-black)",
      "active-orange": "var(--color-active-orange)",
      "red-orange": "var(--color-red-orange)",
      white: "var(--color-white)",
      "electric-cyan": "var(--color-electric-cyan)",
      "zingy-green": "var(--color-zingy-green)",
      "bright-red": "var(--color-bright-red)",
      "jazzy-pink": "var(--color-jazzy-pink)",
      "light-grey": "var(--color-light-grey)",
      "mid-grey": "var(--color-mid-grey)",
      "dark-grey": "var(--color-dark-grey)",
      "charcoal-grey": "var(--color-charcoal-grey)",
      "gui-default": "var(--color-gui-default)",
      "gui-alt": "var(--color-cool-black)",
      "gui-hover": "var(--color-gui-hover)",
      "gui-focus": "var(--color-gui-focus)",
      "gui-viewed": "var(--color-gui-viewed)",
      "gui-unavailable": "var(--color-gui-unavailable)",
      "gui-error": "var(--color-gui-error)",
      "icon-linkedin": "var(--icon-color-linkedin)",
      "icon-twitter": "var(--icon-color-twitter)",
      "icon-glassdoor": "var(--icon-color-glassdoor)",
      "icon-github": "var(--icon-color-github)",
    },
    fontFamily: {
      sans: ["NEXT Book", "Arial", "Helvetica", "sans-serif"],
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    padding: (theme) => ({
      btn: "var(--spacing-btn)",
      "btn-small": "var(--spacing-btn-small)",
      "menu-row": "var(--spacing-menu-row)",
      "menu-row-snug": "var(--spacing-menu-row-snug)",
      "menu-row-title": "var(--spacing-menu-row-title)",
      media: "var(--spacing-media)",
      input: "var(--spacing-input)",
      overline: "var(--spacing-overline)",
      ...theme("spacing"),
    }),
    spacing: {
      0: "var(--spacing-0)",
      1: "var(--spacing-1)",
      4: "var(--spacing-4)",
      8: "var(--spacing-8)",
      12: "var(--spacing-12)",
      14: "var(--spacing-14)",
      16: "var(--spacing-16)",
      20: "var(--spacing-20)",
      24: "var(--spacing-24)",
      32: "var(--spacing-32)",
      40: "var(--spacing-40)",
      48: "var(--spacing-48)",
      64: "var(--spacing-64)",
      72: "var(--spacing-72)",
      80: "var(--spacing-80)",
      88: "var(--spacing-88)",
      96: "var(--spacing-96)",
    },
    maxWidth: (theme, { breakpoints }) => ({
      ...breakpoints(theme("screens")),
    }),
    boxShadow: {
      subtle: "0px 1px 0px var(--color-mid-grey)",
      container: "0px 40px 40px rgba(0, 0, 0, 0.1)",
      "container-subtle": "0px 16px 64px rgba(0, 0, 0, 0.1)",
      input: "0px 0px 8px 0px rgba(8, 103, 196, 1)", //color-gui-hover at 50% opacity
    },
    letterSpacing: {
      "tighten-0.025": "var(--ls-tighten-0_025)",
      "tighten-0.02": "var(--ls-tighten-0_02)",
      "tighten-0.01": "var(--ls-tighten-0_01)",
      "tighten-0.005": "var(--ls-tighten-0_005)",
      "tighten-0.0025": "var(--ls-tighten-0_0025)",
      "widen-0.1": "var(--ls-widen-0_1)",
      "widen-0.15": "var(--ls-widen-0_15)",
    },
    borderRadius: {
      none: "0",
      sm: "1px",
      DEFAULT: "0.375rem",
    },
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
    },
    extend: {
      transitionProperty: {
        input: "background-color, box-shadow",
        filter: "filter",
      },
      outline: {
        "gui-focus": "4px solid var(--color-gui-focus)",
      },
      width: {
        "extend-8": "calc(100% + var(--spacing-8))",
      },
      borderWidth: {
        btn: "1.5px",
      },
      translate: {
        "double-full": "200%",
        "-double-full": "-200%",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover", "focus", "active", "group-focus", "disabled"],
      textColor: ["hover", "focus", "active", "group-focus", "disabled"],
      display: ["group-focus"],
      backgroundColor: ["hover", "focus", "active", "group-focus", "disabled"],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-filters")],
};
