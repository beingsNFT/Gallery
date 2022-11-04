/**
 * It takes a discord_id and a token, and adds the token to the discord_id
 * @param discord_id - The discord id of the user you want to add the role to.
 * @param token - The token you get from the discord oauth2 flow
 * @returns The discord_id of the user that was added to the database.
 */
import { gql } from "@apollo/client";

import beingsClient from "../config";

const addDiscordUserRole = async (discord_id, token) => {
  const mutation = gql`
    mutation AddDiscordUserRole($addDiscordUserRoleId: String, $token: String) {
      AddDiscordUserRole(id: $addDiscordUserRoleId, token: $token)
    }
  `;



  const result = await beingsClient().mutate({
    mutation,
    variables: {
      addDiscordUserRoleId: discord_id,
      token: token,
    },
  });
  return result.data.AddDiscordUserRole;
};

export default addDiscordUserRole;
