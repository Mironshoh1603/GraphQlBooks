const env = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");
require("./config/database");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // graphiql: true,
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
