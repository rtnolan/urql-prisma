import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoWhereUniqueInput } from "../../../inputs/InfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInfoArgs {
  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: false
  })
  where!: InfoWhereUniqueInput;
}
