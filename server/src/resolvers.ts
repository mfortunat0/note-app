import { IResolvers } from "apollo-server";

const resolvers: IResolvers = {
  Query: {
    message: () => "Hello",
  },
};

export default resolvers;
