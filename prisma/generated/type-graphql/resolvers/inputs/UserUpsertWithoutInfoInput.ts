import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutInfoInput } from "../inputs/UserCreateWithoutInfoInput";
import { UserUpdateWithoutInfoInput } from "../inputs/UserUpdateWithoutInfoInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutInfoInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutInfoInput, {
    nullable: false
  })
  update!: UserUpdateWithoutInfoInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutInfoInput, {
    nullable: false
  })
  create!: UserCreateWithoutInfoInput;
}
