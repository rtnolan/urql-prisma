import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoCreateInput } from "../../../inputs/InfoCreateInput";
import { InfoUpdateInput } from "../../../inputs/InfoUpdateInput";
import { InfoWhereUniqueInput } from "../../../inputs/InfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInfoArgs {
  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: false
  })
  where!: InfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => InfoCreateInput, {
    nullable: false
  })
  create!: InfoCreateInput;

  @TypeGraphQL.Field(_type => InfoUpdateInput, {
    nullable: false
  })
  update!: InfoUpdateInput;
}
