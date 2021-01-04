import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import fs from "fs";
import path from "path";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "../schema.graphql"), "utf8")
  .toString();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();

export default server;
