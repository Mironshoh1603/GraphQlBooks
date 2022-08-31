const env = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
