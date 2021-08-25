import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoWhereInput {
  @TypeGraphQL.Field(_type => [InfoWhereInput], {
    nullable: true
  })
  AND?: InfoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InfoWhereInput], {
    nullable: true
  })
  OR?: InfoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InfoWhereInput], {
    nullable: true
  })
  NOT?: InfoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;
}
