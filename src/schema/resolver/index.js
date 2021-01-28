import { Query } from "../query";
import Mutation from "../mutation";

import { User } from "./user";

// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query,
  Mutation,
  User,
};
export default resolvers;
