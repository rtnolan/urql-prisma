import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoWhereInput } from "../../../inputs/InfoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInfoArgs {
  @TypeGraphQL.Field(_type => InfoWhereInput, {
    nullable: true
  })
  where?: InfoWhereInput | undefined;
}
