import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();
  const chakraTheme = extendTheme({
    colors: {
      gray: {
        50: "rgba(247, 250, 252, 0.24)",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "rgba(159, 173, 191, 0.4)",
        500: "#718096",
        600: "#4a5568",
        700: "#2c3748",
        800: "#1a202c",
        900: "#171923",
      },
    },
  });
  const emotionCache = createCache({
    key: "emotion-cache",
    prepend: true,
  });

  return (
    <React.Fragment>
      <Head>
        <title>MPPL</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
