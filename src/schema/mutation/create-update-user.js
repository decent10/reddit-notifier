import { pick } from "lodash/fp";
import { USERS, addUser, updateUser } from "../../data";

export default (root, args) => {
  const newUser = {
    ...(args.name ? pick("name", args) : {}),
    ...(args.email ? pick("email", args) : {}),
    ...(args.favorites ? pick("favorites", args) : {}),
  };
  if (args.id) {
    return updateUser({ ...newUser, id: +args.id });
  }
  newUser.id = USERS.length + 1;
  newUser.subscribe = true;
  newUser.favorites = [];
  return addUser(newUser);
};
