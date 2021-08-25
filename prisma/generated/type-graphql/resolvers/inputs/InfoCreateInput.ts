import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutInfoInput } from "../inputs/UserCreateNestedOneWithoutInfoInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInfoInput, {
    nullable: true
  })
  User?: UserCreateNestedOneWithoutInfoInput | undefined;
}
