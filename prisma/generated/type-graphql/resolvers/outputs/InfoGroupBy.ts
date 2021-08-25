import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InfoCountAggregate } from "../outputs/InfoCountAggregate";
import { InfoMaxAggregate } from "../outputs/InfoMaxAggregate";
import { InfoMinAggregate } from "../outputs/InfoMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  simpleResolvers: true
})
export class InfoGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => InfoCountAggregate, {
    nullable: true
  })
  _count!: InfoCountAggregate | null;

  @TypeGraphQL.Field(_type => InfoMinAggregate, {
    nullable: true
  })
  _min!: InfoMinAggregate | null;

  @TypeGraphQL.Field(_type => InfoMaxAggregate, {
    nullable: true
  })
  _max!: InfoMaxAggregate | null;
}
