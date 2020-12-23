import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import fs from "fs";

const typeDefs = fs.readFileSync("src/schema.graphql", "utf8").toString();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
