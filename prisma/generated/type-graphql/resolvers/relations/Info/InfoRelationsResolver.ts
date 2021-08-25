import * as TypeGraphQL from "type-graphql";
import { Info } from "../../../models/Info";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Info)
export class InfoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() info: Info, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).info.findUnique({
      where: {
        id: info.id,
      },
    }).User({});
  }
}
