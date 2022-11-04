/**
 * It queries the GraphQL API for the user's academy data
 * @returns The user's academy data.
 */
import { gql } from "@apollo/client";
import { const_token } from "../../../utils/contants";
import beingsClient from "../config";

const userAcademyData = async () => {
  const query = gql`
   query UserProfile {
  UserProfile {
    account
    total_academy_points
    exp
    level
    beings {
      being_on_academy
      being_id
      being_academy_points_earned
      being_rare
      being_type_name
    }
  }
}
  `;

  const result = await beingsClient(localStorage.getItem(const_token)).query({
    query,
  });
  return result.data.UserProfile;
};

export default userAcademyData;
