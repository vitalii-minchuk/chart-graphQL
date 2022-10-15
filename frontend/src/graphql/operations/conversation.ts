/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Mutation: {
    createConversation: gql`
      mutation CreateConversation($participantIds: [String]!) {
        createConversation(participantIds: $participantIds) {
          conversationId: String
        }
      }
    `,
  },
};
