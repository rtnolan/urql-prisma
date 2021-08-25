# urql-prisma

`npm i`

`npm run up && npm run generat`

Run server with no TypeGraphQL: `npm run apollo`
Run server with TypeGraphQL: `npm run tgql`

In another terminal tab run: `node gql.js`, in this file there's two ids for User's, one which has an Info object, the other deos not. For the User that does not have an Info object the server with TypeGraphQL returns an Error when the Prisma Client is configured to throw an Error if a given Model isn't found even though it's for a relation.
