"use client";

import { apolloClient } from "@/config/apollo.config";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../allbars/Navbar.component";
import MainFooter from "../footer/MainFooter.component";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={apolloClient}>
          <Navbar />
          {children}
          <MainFooter />
        </ApolloProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
