import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/mui_imports/theme";
import createEmotionCache from "../src/mui_imports/createEmotionCache";
import store from "../src/store/configureStore";
import { Provider } from "react-redux";
import NavbarContainer from "../src/common/Navbar/NavbarContainer";
import LayoutContainer from "../src/common/Layout/LayoutContainer";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Main Page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <LayoutContainer>
            <Component {...pageProps} />
          </LayoutContainer>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
