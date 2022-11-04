/**
 * It queries the GraphQL API for a user's Discord information
 * @param discord_id - The discord user id
 * @returns The discord user's name, verified status, and image.
 */
import { gql } from "@apollo/client";
import { const_token } from "../../../utils/contants";
import beingsClient from "../config";

const discordUser = async (discord_id) => {
  const query = gql`
    query DiscordUser($discordUserId: String) {
      DiscordUser(id: $discordUserId) {
        name
        verified
        img
      }
    }
  `;

  const result = await beingsClient().query({
    query,
    variables: {
        discordUserId: discord_id,
    },
  });
  return result.data.DiscordUser;
};

export default discordUser;
