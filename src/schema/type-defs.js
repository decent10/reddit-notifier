import { gql } from "apollo-server";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every user in our data source.

  type User {
    id: ID!
    name: String!
    email: String!
    favorites: [String]
    subscribe: Boolean
    redditPosts: [RedditPost]
  }
  type Channel {
    id: Int
    name: String
  }
  type RedditPost {
    title: String
    image: String
    url: String
    subReddit: String
    votes: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more user (defined above).
  type Query {
    users: [User]
    user(id: Int): User
  }
  type Mutation {
    creatUpdateUser(
      id: ID
      email: String
      name: String
      favorites: [String]
    ): User
    addFavorites(userId: ID!, favorites: [String]!): User
    removeFavorite(userId: ID!, favorite: String!): User
    subscribe(userId: ID!): User
    unSubscribe(userId: ID!): User
  }
`;

export { typeDefs };
