/**
 * It takes an account, generates a hash from it, and then sends it to the server to be authenticated
 * @param account - The account name of the user.
 * @returns The token is being returned.
 */
import { gql } from "@apollo/client";
import generateHash from "../../../utils/generate_hash";
import beingsClient from "../config";
const login = async (account) => {
    const account_id =  generateHash(account);
  const mutation = gql`
    mutation Login($account: String!, $account_id: String) {
      Login(account: $account, account_id: $account_id) {
        token
      }
    }
  `;
  const result = await beingsClient().mutate({
    mutation,
    variables: {
      account: account,
      account_id: account_id,
    },
  });
  return result.data.Login;
};

export default login;
