import { GraphQLContext } from "./../../util/types";
const resolvers = {
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantIds: string[] },
      context: GraphQLContext
    ) => {},
  },
};

export default resolvers;
