import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoOrderByInput } from "../../../inputs/InfoOrderByInput";
import { InfoScalarWhereWithAggregatesInput } from "../../../inputs/InfoScalarWhereWithAggregatesInput";
import { InfoWhereInput } from "../../../inputs/InfoWhereInput";
import { InfoScalarFieldEnum } from "../../../../enums/InfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInfoArgs {
  @TypeGraphQL.Field(_type => InfoWhereInput, {
    nullable: true
  })
  where?: InfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InfoOrderByInput], {
    nullable: true
  })
  orderBy?: InfoOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [InfoScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => InfoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InfoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
