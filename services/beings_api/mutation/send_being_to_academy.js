/**
 * It takes an array of tokens_id and sends them to the academy
 * @param tokens_id - The id of the being you want to send to the academy.
 */
import { gql } from "@apollo/client";
import { const_token } from "../../../utils/contants";
import beingsClient from "../config";
const sendBeingToAcademy = async (tokens_id) => {
 
  const mutation = gql`
    mutation SendBeingToAcademy($tokensId: [String]) {
      sendBeingToAcademy(tokensId: $tokensId)
    }
  `;
  const result = await beingsClient(localStorage.getItem(const_token)).mutate({
    mutation,
    variables:{
        "tokensId": tokens_id
      }
  });
  return result.data.SendBeingToAcademy;
};

export default sendBeingToAcademy;
