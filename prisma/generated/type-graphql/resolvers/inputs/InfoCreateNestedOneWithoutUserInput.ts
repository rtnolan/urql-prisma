import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InfoCreateOrConnectWithoutUserInput } from "../inputs/InfoCreateOrConnectWithoutUserInput";
import { InfoCreateWithoutUserInput } from "../inputs/InfoCreateWithoutUserInput";
import { InfoWhereUniqueInput } from "../inputs/InfoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => InfoCreateWithoutUserInput, {
    nullable: true
  })
  create?: InfoCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => InfoCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: InfoCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: true
  })
  connect?: InfoWhereUniqueInput | undefined;
}
