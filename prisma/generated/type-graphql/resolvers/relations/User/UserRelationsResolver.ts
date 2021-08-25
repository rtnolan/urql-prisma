import * as TypeGraphQL from "type-graphql";
import { Info } from "../../../models/Info";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Info, {
    nullable: true
  })
  async Info(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Info | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Info({});
  }
}
