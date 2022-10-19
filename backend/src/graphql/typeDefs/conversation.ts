import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Mutation {
    createConversation(participantIds: [String]): CreateConversationResponse
  }

  type CreateConversationResponse {
    conversationId: String
  }

  type User {
    id: String
    name: String
    username: String
    image: String
    emailVerified: Boolean
    email: String
  }

  type Participant {
    id: String
    user: User
    hasSeenLatestMessage: Boolean
  }

  type Conversation {
    id: String
    latestMessage: Message
    participants: [Participant]
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    conversations: [Conversation]
  }
`;

export default typeDefs;
