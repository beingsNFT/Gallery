/**
 * It takes an array of tokens_id and returns a boolean value
 * @param tokens_id - The token of the being you want to remove from the academy.
 */
import { gql } from "@apollo/client";
import { const_token } from "../../../utils/contants";

import beingsClient from "../config";
const outBeingFromAcademy = async (tokens_id) => {
 
  const mutation = gql`
    mutation OutBeingFromAcademy($tokensId: [String]) {
  outBeingFromAcademy(tokensId: $tokensId)
}
  `;
  const result = await beingsClient(localStorage.getItem(const_token)).mutate({
    mutation,
    variables:{
        "tokensId": tokens_id
      }
  });
  return result.data.OutBeingFromAcademy;
};

export default outBeingFromAcademy;
