require("isomorphic-fetch");
const { gql, createClient } = require("@urql/core");

const client = createClient({ url: "http://localhost:4000/graphql" });

const mutation = gql`
  mutation Mutation($createUserData: UserCreateInput!) {
    createUser(data: $createUserData) {
      id
    }
  }
`;

const query = gql`
  query Query($userWhere: UserWhereUniqueInput!) {
    user(where: $userWhere) {
      id
      Info {
        id
      }
    }
  }
`;

client
  .mutation(mutation, {
    createUserData: {
      email: "testuser5@test.com",
    },
  })
  .toPromise()
  .then((result) => {
    const userId = result.data.createUser.id;
    console.log("id ", userId);
    client
      .query(query, {
        userWhere: {
          id: userId,
        },
      })
      .toPromise()
      .then((result) => {
        console.log(result);
      });
  });
