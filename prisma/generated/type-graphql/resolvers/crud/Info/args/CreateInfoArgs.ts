import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoCreateInput } from "../../../inputs/InfoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateInfoArgs {
  @TypeGraphQL.Field(_type => InfoCreateInput, {
    nullable: false
  })
  data!: InfoCreateInput;
}
