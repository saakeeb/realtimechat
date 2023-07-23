import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:4000/",
  cache: new InMemoryCache(),
});

const Chat = () => {
  return (
    <>
      <h1>Chat Property</h1>
    </>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
