import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import {
  getAccessToken,
  getRefreshToken,
  resetToken,
  setAccessToken,
} from "../services/cookie.service";
import { refreshToken as refreshTokenService } from "../services/auth.service";
import { queryClient } from "./react-query";

const endpoint = process.env["NEXT_PUBLIC_API_ENDPOINT"];

const httpLink = createHttpLink({
  uri: `${endpoint}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation, response }: any) => {
    if (graphQLErrors) {
      return forward(operation);
    }
    if (networkError) {
      if (networkError.statusCode === 403) {
        const refreshToken = getRefreshToken();
        const retryObservable = new Observable((subscriber) => {
          if (subscriber.closed || !refreshToken) {
            return;
          }
          refreshTokenService(refreshToken)
            .then((result) => {
              if (!result) {
                operation.setContext({
                  response: {
                    errors: null,
                  },
                });
                subscriber.complete();
                resetToken();
              } else {
                const accessToken = result?.accessToken;
                if (accessToken) {
                  setAccessToken(accessToken);

                  const oldHeaders = operation.getContext().headers;
                  operation.setContext({
                    headers: {
                      ...oldHeaders,
                      authorization: `Bearer ${accessToken}`,
                    },
                  });
                  subscriber.next(operation);
                  subscriber.complete();
                }
              }
            })
            .catch(() => {
              resetToken();
              client.clearStore();
              queryClient.clear();
              return;
            });
        });
        return retryObservable.flatMap((newOperation) =>
          forward(newOperation as any)
        );
      }
    }
  }
);

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
});

export { client };
