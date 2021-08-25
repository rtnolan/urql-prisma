import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import {
  InfoCrudResolver,
  InfoRelationsResolver,
  UserCrudResolver,
  UserRelationsResolver,
} from "../prisma/generated/type-graphql";

const prisma = new PrismaClient({
  rejectOnNotFound: {
    findUnique: {
      User: (err) => new Error("Could not find user."),
    },
  },
});

// cksr9chin0000tlmljft8yaks -- user with info object
// cksr9csqe0009tlmlbezm013p -- user without info object

const createSchema = async () => {
  return await buildSchema({
    resolvers: [
      UserCrudResolver,
      UserRelationsResolver,
      InfoCrudResolver,
      InfoRelationsResolver,
    ],
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
