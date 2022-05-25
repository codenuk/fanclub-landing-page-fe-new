import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";

declare module "@mui/material" {
  interface Theme {
    customTheme: {
      constants: {
        NAVBAR_HEIGHT: number;
        FOOTER_HEIGHT: number;
      };
      colors: {
        hoverBackground: {
          main: string;
        };
        footerBackground: {
          main: string;
        };
        settingBackground: {
          main: string;
        };
        walletBadgeBackground: {
          main: string;
        };
        walletBadgeText: {
          main: string;
        };
      };
    };
  }

  interface ThemeOptions {
    customTheme?: {
      constants?: {
        NAVBAR_HEIGHT: number;
        FOOTER_HEIGHT: number;
      };
      colors?: {
        hoverBackground?: {
          main?: string;
        };
        footerBackground?: {
          main?: string;
        };
        settingBackground?: {
          main?: string;
        };
        walletBadgeBackground: {
          main?: string;
        };
        walletBadgeText: {
          main?: string;
        };
      };
    };
  }
}

const theme = createTheme({
  customTheme: {
    constants: {
      NAVBAR_HEIGHT: 100,
      FOOTER_HEIGHT: 234,
    },
    colors: {
      hoverBackground: { main: "#e5e5e5" },
      footerBackground: {
        main: "#343435",
      },
      settingBackground: {
        main: "#F5F4F6",
      },
      walletBadgeBackground: {
        main: "#ECF6FE",
      },
      walletBadgeText: {
        main: "#777777",
      },
    },
  },
  palette: {
    primary: {
      main: "#20054C",
    },
    secondary: {
      main: "#FC01A2",
    },
    warning: {
      main: "#F7AF1D",
    },
    success: {
      main: "#28C76F",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow:
            "0px 3px 5px rgba(176, 190, 197, 0.32), 0px 8px 24px rgba(176, 190, 197, 0.32);",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto, 'Kanit'",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Roboto, 'Kanit'",
        },
      },
      defaultProps: {
        disableElevation: true,
        color: "primary",
        variant: "contained",
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: "22px",
          backgroundColor: "#F5F4F6",

          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
        },
      },
    },
  },
});

export default theme;
