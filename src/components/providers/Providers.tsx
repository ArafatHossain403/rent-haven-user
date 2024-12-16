"use client";

import { apolloClient } from "@/config/apollo.config";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";

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
   
                    {children}
          </ApolloProvider>
        </QueryClientProvider>

    </>
  );
};

export default Providers;
