import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const appConfig = defineConfig({
  globalCss: {
    "html, body, #root": {
      minHeight: "100%",
    },
    body: {
      bg: "gray.50",
      color: "gray.900",
    },
  },

  theme: {
    semanticTokens: {
      colors: {
        app: {
          background: {
            value: "{colors.gray.50}",
          },
          surface: {
            value: "{colors.white}",
          },
          border: {
            value: "{colors.gray.200}",
          },
          text: {
            value: "{colors.gray.900}",
          },
          muted: {
            value: "{colors.gray.600}",
          },
          primary: {
            value: "{colors.blue.500}",
          },
          primaryHover: {
            value: "{colors.blue.600}",
          },
          selected: {
            value: "{colors.blue.50}",
          },
        },
      },

      radii: {
        appCard: {
          value: "{radii.2xl}",
        },
        appControl: {
          value: "{radii.lg}",
        },
      },

      shadows: {
        appCard: {
          value: "0 8px 30px rgba(15, 23, 42, 0.06)",
        },
      },
    },

    textStyles: {
      appPageTitle: {
        value: {
          fontSize: "2xl",
          fontWeight: "700",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        },
      },

      appSectionTitle: {
        value: {
          fontSize: "md",
          fontWeight: "600",
          lineHeight: "1.4",
        },
      },

      appBody: {
        value: {
          fontSize: "md",
          fontWeight: "400",
          lineHeight: "1.6",
        },
      },

      appLabel: {
        value: {
          fontSize: "sm",
          fontWeight: "600",
          lineHeight: "1.4",
        },
      },
    },

    layerStyles: {
      appPanel: {
        value: {
          bg: "app.surface",
          borderWidth: "1px",
          borderColor: "app.border",
          borderRadius: "appCard",
          boxShadow: "appCard",
        },
      },
    },
  },
});

export const appSystem = createSystem(defaultConfig, appConfig);
