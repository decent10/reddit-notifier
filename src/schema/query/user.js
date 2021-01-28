import { USERS } from "../../data";

export default (root, args) => USERS.find((user) => user.id === args.id);
