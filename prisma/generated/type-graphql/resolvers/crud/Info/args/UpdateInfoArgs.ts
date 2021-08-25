import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoUpdateInput } from "../../../inputs/InfoUpdateInput";
import { InfoWhereUniqueInput } from "../../../inputs/InfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateInfoArgs {
  @TypeGraphQL.Field(_type => InfoUpdateInput, {
    nullable: false
  })
  data!: InfoUpdateInput;

  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: false
  })
  where!: InfoWhereUniqueInput;
}
