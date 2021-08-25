import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InfoWhereInput } from "../inputs/InfoWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoRelationFilter {
  @TypeGraphQL.Field(_type => InfoWhereInput, {
    nullable: true
  })
  is?: InfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => InfoWhereInput, {
    nullable: true
  })
  isNot?: InfoWhereInput | undefined;
}
