import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InfoCreateWithoutUserInput } from "../inputs/InfoCreateWithoutUserInput";
import { InfoUpdateWithoutUserInput } from "../inputs/InfoUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => InfoUpdateWithoutUserInput, {
    nullable: false
  })
  update!: InfoUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => InfoCreateWithoutUserInput, {
    nullable: false
  })
  create!: InfoCreateWithoutUserInput;
}
