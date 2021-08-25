require("isomorphic-fetch");
const { gql, createClient } = require("@urql/core");

const client = createClient({ url: "http://localhost:4000/graphql" });

// const mutation = gql`
//   mutation Mutation($createUserData: UserCreateInput!) {
//     createUser(data: $createUserData) {
//       id
//     }
//   }
// `;

let userId;

// client.mutation(mutation, {
//   createUserData: {
//     email: "<whatever>",
//   },
// }).toPromise().then((result) => { userId = result.data.createUser.id; });

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

// cksr9chin0000tlmljft8yaks - has Info Object
// cksr9csqe0009tlmlbezm013p - no Info Object

userId = "cksr9csqe0009tlmlbezm013p";

client
  .query(query, {
    userWhere: {
      id: userId,
    },
  })
  .toPromise()
  .then((result) => {
    console.log("result", result);
  });
