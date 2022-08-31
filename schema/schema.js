const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const _ = require("lodash");
// dummy data
var books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const bookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: bookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // ,lfkekflfkeklm
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
