import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "../configs/theme";

import "../styles/globals.scss";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { queryClient } from "../configs/react-query";
import { QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/client";
import { client } from "../configs/apollo";

import { Provider } from "react-redux";
import store from "../redux/store";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
