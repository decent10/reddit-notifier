import { addFavorites } from "../../data";

export default (root, args) => addFavorites(+args.userId, args.favorites);
