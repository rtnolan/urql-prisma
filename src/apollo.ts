import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";

const prisma = new PrismaClient({
  rejectOnNotFound: {
    findUnique: {
      User: (err) => new Error("Could not find user."),
    },
  },
});
const schema = gql`
  type AffectedRowsOutput {
    count: Int!
  }

  type AggregateUser {
    _count: UserCountAggregate
    _max: UserMaxAggregate
    _min: UserMinAggregate
  }

  type Info {
    id: String!
  }

  input InfoCreateNestedOneWithoutUserInput {
    connect: InfoWhereUniqueInput
    connectOrCreate: InfoCreateOrConnectWithoutUserInput
    create: InfoCreateWithoutUserInput
  }

  input InfoCreateOrConnectWithoutUserInput {
    create: InfoCreateWithoutUserInput!
    where: InfoWhereUniqueInput!
  }

  input InfoCreateWithoutUserInput {
    id: String
  }

  input InfoRelationFilter {
    is: InfoWhereInput
    isNot: InfoWhereInput
  }

  input InfoUpdateOneWithoutUserInput {
    connect: InfoWhereUniqueInput
    connectOrCreate: InfoCreateOrConnectWithoutUserInput
    create: InfoCreateWithoutUserInput
    delete: Boolean
    disconnect: Boolean
    update: InfoUpdateWithoutUserInput
    upsert: InfoUpsertWithoutUserInput
  }

  input InfoUpdateWithoutUserInput {
    id: StringFieldUpdateOperationsInput
  }

  input InfoUpsertWithoutUserInput {
    create: InfoCreateWithoutUserInput!
    update: InfoUpdateWithoutUserInput!
  }

  input InfoWhereInput {
    AND: [InfoWhereInput!]
    NOT: [InfoWhereInput!]
    OR: [InfoWhereInput!]
    User: UserRelationFilter
    id: StringFilter
  }

  input InfoWhereUniqueInput {
    id: String
  }

  type Mutation {
    createUser(data: UserCreateInput!): User!
    deleteManyUser(where: UserWhereInput): AffectedRowsOutput!
    deleteUser(where: UserWhereUniqueInput!): User
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): AffectedRowsOutput!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    upsertUser(
      create: UserCreateInput!
      update: UserUpdateInput!
      where: UserWhereUniqueInput!
    ): User!
  }

  input NestedIntFilter {
    equals: Int
    gt: Int
    gte: Int
    in: [Int!]
    lt: Int
    lte: Int
    not: NestedIntFilter
    notIn: [Int!]
  }

  input NestedIntNullableFilter {
    equals: Int
    gt: Int
    gte: Int
    in: [Int!]
    lt: Int
    lte: Int
    not: NestedIntNullableFilter
    notIn: [Int!]
  }

  input NestedStringFilter {
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringFilter
    notIn: [String!]
    startsWith: String
  }

  input NestedStringNullableFilter {
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringNullableFilter
    notIn: [String!]
    startsWith: String
  }

  input NestedStringNullableWithAggregatesFilter {
    _count: NestedIntNullableFilter
    _max: NestedStringNullableFilter
    _min: NestedStringNullableFilter
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringNullableWithAggregatesFilter
    notIn: [String!]
    startsWith: String
  }

  input NestedStringWithAggregatesFilter {
    _count: NestedIntFilter
    _max: NestedStringFilter
    _min: NestedStringFilter
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringWithAggregatesFilter
    notIn: [String!]
    startsWith: String
  }

  type Query {
    aggregateUser(
      cursor: UserWhereUniqueInput
      orderBy: [UserOrderByInput!]
      skip: Int
      take: Int
      where: UserWhereInput
    ): AggregateUser!
    findFirstUser(
      cursor: UserWhereUniqueInput
      distinct: [UserScalarFieldEnum!]
      orderBy: [UserOrderByInput!]
      skip: Int
      take: Int
      where: UserWhereInput
    ): User
    groupByUser(
      by: [UserScalarFieldEnum!]!
      having: UserScalarWhereWithAggregatesInput
      orderBy: [UserOrderByInput!]
      skip: Int
      take: Int
      where: UserWhereInput
    ): [UserGroupBy!]!
    user(where: UserWhereUniqueInput!): User
    users(
      cursor: UserWhereUniqueInput
      distinct: [UserScalarFieldEnum!]
      orderBy: [UserOrderByInput!]
      skip: Int
      take: Int
      where: UserWhereInput
    ): [User!]!
  }

  enum SortOrder {
    asc
    desc
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input StringFilter {
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringFilter
    notIn: [String!]
    startsWith: String
  }

  input StringNullableFilter {
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringNullableFilter
    notIn: [String!]
    startsWith: String
  }

  input StringNullableWithAggregatesFilter {
    _count: NestedIntNullableFilter
    _max: NestedStringNullableFilter
    _min: NestedStringNullableFilter
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringNullableWithAggregatesFilter
    notIn: [String!]
    startsWith: String
  }

  input StringWithAggregatesFilter {
    _count: NestedIntFilter
    _max: NestedStringFilter
    _min: NestedStringFilter
    contains: String
    endsWith: String
    equals: String
    gt: String
    gte: String
    in: [String!]
    lt: String
    lte: String
    not: NestedStringWithAggregatesFilter
    notIn: [String!]
    startsWith: String
  }

  type User {
    Info: Info
    email: String!
    id: String!
    infoId: String
  }

  type UserCountAggregate {
    _all: Int!
    email: Int!
    id: Int!
    infoId: Int!
  }

  input UserCreateInput {
    Info: InfoCreateNestedOneWithoutUserInput
    email: String!
    id: String
  }

  type UserGroupBy {
    _count: UserCountAggregate
    _max: UserMaxAggregate
    _min: UserMinAggregate
    email: String!
    id: String!
    infoId: String
  }

  type UserMaxAggregate {
    email: String
    id: String
    infoId: String
  }

  type UserMinAggregate {
    email: String
    id: String
    infoId: String
  }

  input UserOrderByInput {
    email: SortOrder
    id: SortOrder
    infoId: SortOrder
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  enum UserScalarFieldEnum {
    email
    id
    infoId
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    email: StringWithAggregatesFilter
    id: StringWithAggregatesFilter
    infoId: StringNullableWithAggregatesFilter
  }

  input UserUpdateInput {
    Info: InfoUpdateOneWithoutUserInput
    email: StringFieldUpdateOperationsInput
    id: StringFieldUpdateOperationsInput
  }

  input UserUpdateManyMutationInput {
    email: StringFieldUpdateOperationsInput
    id: StringFieldUpdateOperationsInput
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    Info: InfoRelationFilter
    NOT: [UserWhereInput!]
    OR: [UserWhereInput!]
    email: StringFilter
    id: StringFilter
    infoId: StringNullableFilter
  }

  input UserWhereUniqueInput {
    email: String
    id: String
    infoId: String
  }
`;

const resolvers = {
  Query: {
    user: async (parent: any, args: any, ctx: any) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: args.where.id },
        include: { Info: true },
      });
      return user;
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any, ctx: any) => {
      return await ctx.prisma.user.create({
        data: {
          email: args.data.email,
          Info: args.data.Info
            ? {
                create: {
                  id: args.data.Info?.create.id,
                },
              }
            : {},
        },
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  introspection: true,
  context: ({ req, res }) => ({
    req,
    res,
    prisma,
  }),
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});