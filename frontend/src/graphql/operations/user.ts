/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Query: {},
  Mutation: {
    createUsername: gql`
      mutation CreateUsername($username: String!) {
        createUsername(username: $username) {
          success
          error
        }
      }
    `,
  },
};
