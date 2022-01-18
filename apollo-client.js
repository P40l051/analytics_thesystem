import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/p40l051/the-system",
    cache: new InMemoryCache(),
});

export default client;


