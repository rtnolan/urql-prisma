import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutInfoInput } from "../inputs/UserCreateOrConnectWithoutInfoInput";
import { UserCreateWithoutInfoInput } from "../inputs/UserCreateWithoutInfoInput";
import { UserUpdateWithoutInfoInput } from "../inputs/UserUpdateWithoutInfoInput";
import { UserUpsertWithoutInfoInput } from "../inputs/UserUpsertWithoutInfoInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutInfoInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutInfoInput, {
    nullable: true
  })
  create?: UserCreateWithoutInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInfoInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutInfoInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutInfoInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutInfoInput, {
    nullable: true
  })
  update?: UserUpdateWithoutInfoInput | undefined;
}
