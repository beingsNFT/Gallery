/**
 * It creates a new ApolloClient instance with the given token
 * @param token - The token you received from the login mutation.
 * @returns A new ApolloClient instance.
 */
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { const_token } from "../../utils/contants";

const beingsClient = (token) => {
  return new ApolloClient({
    uri: "https://api.beingsnft.art/",
    cache: new InMemoryCache(),
    headers: {
      authorization: token|| "",
    },
  });
};

export default beingsClient;
