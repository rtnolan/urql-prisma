import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InfoUpdateManyMutationInput } from "../../../inputs/InfoUpdateManyMutationInput";
import { InfoWhereInput } from "../../../inputs/InfoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInfoArgs {
  @TypeGraphQL.Field(_type => InfoUpdateManyMutationInput, {
    nullable: false
  })
  data!: InfoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InfoWhereInput, {
    nullable: true
  })
  where?: InfoWhereInput | undefined;
}
