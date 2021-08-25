import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  simpleResolvers: true
})
export class Info {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  User?: User | null;
}
