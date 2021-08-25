import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InfoCreateWithoutUserInput } from "../inputs/InfoCreateWithoutUserInput";
import { InfoWhereUniqueInput } from "../inputs/InfoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: false
  })
  where!: InfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => InfoCreateWithoutUserInput, {
    nullable: false
  })
  create!: InfoCreateWithoutUserInput;
}
