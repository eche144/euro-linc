import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://lightroastcomics.com/graphql",
    cache: new InMemoryCache(),
});

export default client;