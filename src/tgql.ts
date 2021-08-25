import "reflect-metadata";
import { buildSchema } from "type-graphql";
import {
  UserCrudResolver,
  UserRelationsResolver,
} from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";

const prisma = new PrismaClient({
  rejectOnNotFound: {
    findUnique: {
      User: (err) => new Error("Could not find user."),
    },
  },
});

const createSchema = async () => {
  return await buildSchema({
    resolvers: [UserCrudResolver, UserRelationsResolver],
  });
};

const createServer = async () => {
  return new ApolloServer({
    schema: await createSchema(),
    introspection: true,
    context: ({ req, res }) => ({
      req,
      res,
      prisma,
    }),
  });
};

(async () => {
  const server = await createServer();
  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})().catch((err) => console.log(err));
