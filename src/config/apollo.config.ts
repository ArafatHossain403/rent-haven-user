import { getApiUrl } from "@/helpers/functions";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: getApiUrl(),
});

const wsLink = () => {
  return new GraphQLWsLink(
    createClient({
      url:
        process.env.NEXT_PUBLIC_WS_SERVER_URL || "ws://localhost:3000/graphql",
      // keepAlive: 10_000,
      shouldRetry: (errOrCloseEvent: any) => {
        return true;
      },
      retryAttempts: 20,
    })
  );
};

export const apolloClient = new ApolloClient({
  link: typeof window === "undefined" ? httpLink : wsLink(),
  cache: new InMemoryCache(),
});
