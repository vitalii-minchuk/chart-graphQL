import { GraphQLContext } from "./../../util/types";
const resolvers = {
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantIds: string[] },
      context: GraphQLContext
    ) => {
      console.log("11111111111", args);
    },
  },
};

export default resolvers;
