import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutInfoInput } from "../inputs/UserUpdateOneWithoutInfoInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutInfoInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutInfoInput | undefined;
}
