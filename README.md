# urql-prisma

`npm i`

`npm run up && npm run generate`

Run `npm run dev`, navigate to _https://localhost:4000_.

Execute the following query:

```gql
// this user has an Info object

query {
  user(where:{ id: "cksr9chin0000tlmljft8yaks" }) {
    id
    infoId
    Info {
      id
    }
  }
}

//response
{
  "data": {
    "user": {
      "id": "cksr9chin0000tlmljft8yaks",
      "infoId": "1",
      "Info": {
        "id": "1"
      }
    }
  }
}
```

Next execute the following query:

```gql
// this user has an Info object

query {
  user(where:{ id: "cksr9csqe0009tlmlbezm013p" }) {
    id
    infoId
    Info {
      id
    }
  }
}

// response
{
  "errors": [
    {
      "message": "Could not find user.",
      "locations": [
        {
          "line": 5,
          "column": 5
        }
      ],
      "path": [
        "user",
        "Info"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "clientVersion": "2.29.0",
          "stacktrace": [
            "Error: Could not find user.",
            "    at User (/Users/tomnolan/code/aikido/urql-prisma/src/index.ts:15:22)",
            "    at throwIfNotFound (/Users/tomnolan/code/aikido/urql-prisma/node_modules/@prisma/client/runtime/index.js:35822:13)",
            "    at cb (/Users/tomnolan/code/aikido/urql-prisma/node_modules/@prisma/client/runtime/index.js:35923:9)",
            "    at processTicksAndRejections (internal/process/task_queues.js:93:5)"
          ]
        }
      }
    }
  ],
  "data": {
    "user": {
      "id": "cksr9csqe0009tlmlbezm013p",
      "infoId": null,
      "Info": null
    }
  }
}
```
