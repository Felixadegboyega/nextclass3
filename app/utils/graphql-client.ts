import { InMemoryCache, HttpLink, ApolloClient } from "@apollo/client";

export const graphqlClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({ uri: "/api/graphql" })
})