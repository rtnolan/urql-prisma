import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInfoArgs } from "./args/AggregateInfoArgs";
import { Info } from "../../../models/Info";
import { AggregateInfo } from "../../outputs/AggregateInfo";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Info)
export class AggregateInfoResolver {
  @TypeGraphQL.Query(_returns => AggregateInfo, {
    nullable: false
  })
  async aggregateInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInfoArgs): Promise<AggregateInfo> {
    return getPrismaFromContext(ctx).info.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
