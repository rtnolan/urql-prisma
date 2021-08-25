import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoOrderByInput } from "../../../inputs/InfoOrderByInput";
import { InfoWhereInput } from "../../../inputs/InfoWhereInput";
import { InfoWhereUniqueInput } from "../../../inputs/InfoWhereUniqueInput";
import { InfoScalarFieldEnum } from "../../../../enums/InfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstInfoArgs {
  @TypeGraphQL.Field(_type => InfoWhereInput, {
    nullable: true
  })
  where?: InfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InfoOrderByInput], {
    nullable: true
  })
  orderBy?: InfoOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: true
  })
  cursor?: InfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [InfoScalarFieldEnum], {
    nullable: true
  })
  distinct?: "id"[] | undefined;
}
