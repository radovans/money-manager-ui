// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
  chart_primary: {
    100: "#e60049",
    200: "#0bb4ff",
    300: "#50e991",
    400: "#e6d800",
    500: "#9b19f5",
    600: "#ffa300",
    700: "#dc0ab4",
    800: "#b3d4ff",
    900: "#00bfa0",
  },
  chart_secondary: {
    100: "#e6004980",
    200: "#0bb4ff80",
    300: "#50e99180",
    400: "#e6d80080",
    500: "#9b19f580",
    600: "#ffa30080",
    700: "#dc0ab480",
    800: "#b3d4ff80",
    900: "#00bfa080",
  }
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
            chart: {
              ...tokensDark.chart_primary,
            },
            chart_opacity: {
              ...tokensDark.chart_secondary,
            }
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
            chart: {
              ...tokensDark.chart_primary,
            },
            chart_opacity: {
              ...tokensDark.chart_secondary,
            }
          }),
    },
    typography: {
      fontFamily: ["Overpass", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Overpass", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Overpass", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Overpass", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Overpass", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Overpass", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Overpass", "sans-serif"].join(","),
        fontSize: 14,
      },
      fontSizeChartSmall: 12,
      fontSizeChartMedium: 13,
      fontSizeChartBig: 14,
    },
  };
};
