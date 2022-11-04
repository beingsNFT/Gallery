/**
 * It takes an account name as a string, and returns a boolean
 * @param account - The account you want to register.
 * @returns The result of the mutation.
 */
import { gql } from "@apollo/client";
import beingsClient from "../config";
const register = async (account) => {
  const mutation = gql`
    mutation Register($account: String!) {
      Register(account: $account)
    }
  `;
  const result = await beingsClient().mutate({
    mutation,
    variables: {
     account: account.toString().toLowerCase(),
    },
  });
  return result.data.Register;
};

export default register;
