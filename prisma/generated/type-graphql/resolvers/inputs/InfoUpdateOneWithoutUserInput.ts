import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InfoCreateOrConnectWithoutUserInput } from "../inputs/InfoCreateOrConnectWithoutUserInput";
import { InfoCreateWithoutUserInput } from "../inputs/InfoCreateWithoutUserInput";
import { InfoUpdateWithoutUserInput } from "../inputs/InfoUpdateWithoutUserInput";
import { InfoUpsertWithoutUserInput } from "../inputs/InfoUpsertWithoutUserInput";
import { InfoWhereUniqueInput } from "../inputs/InfoWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class InfoUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => InfoCreateWithoutUserInput, {
    nullable: true
  })
  create?: InfoCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => InfoCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: InfoCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => InfoUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: InfoUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => InfoWhereUniqueInput, {
    nullable: true
  })
  connect?: InfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => InfoUpdateWithoutUserInput, {
    nullable: true
  })
  update?: InfoUpdateWithoutUserInput | undefined;
}
