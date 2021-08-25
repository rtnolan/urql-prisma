import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [InfoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: InfoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InfoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: InfoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InfoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: InfoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
