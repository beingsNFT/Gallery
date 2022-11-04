/**
 * It queries the GraphQL API for the user ranks and returns the data
 * @returns An array of objects with the following properties:
 */
import { gql } from "@apollo/client";
import { const_token } from "../../../utils/contants";
import beingsClient from "../config";

const userRanks = async () => {
  const query = gql`
    query UserRanks {
      UserRanks {
        rank
        account
        total_academy_points
        level
      }
    }
  `;

  const result = await beingsClient(localStorage.getItem(const_token)).query({
    query,
  });
  return result.data.UserRanks;
};

export default userRanks;
