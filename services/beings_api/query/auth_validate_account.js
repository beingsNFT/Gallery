/**
 * It queries the GraphQL server to see if the account exists
 * @param account - The account name to validate.
 * @returns A boolean value.
 */
import { gql } from "@apollo/client";
import beingsClient from "../config";

const authValidateAccount = async (account) => {
  const query = gql`
    query Query($account: String!) {
      AuthValidateAccount(account: $account)
    }
  `;

  const result = await beingsClient().query({
    query,
    variables: {
      account,
    },
  });

  return result.data.AuthValidateAccount;
};

export default authValidateAccount;
