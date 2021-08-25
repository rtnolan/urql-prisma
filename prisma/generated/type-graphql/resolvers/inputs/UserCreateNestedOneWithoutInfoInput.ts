import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInfoInput } from "../inputs/UserCreateOrConnectWithoutInfoInput";
import { UserCreateWithoutInfoInput } from "../inputs/UserCreateWithoutInfoInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutInfoInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInfoInput, {
    nullable: true
  })
  create?: UserCreateWithoutInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInfoInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
