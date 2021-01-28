import { removeFavorite } from "../../data";

export default (root, args) => removeFavorite(+args.userId, args.favorite);
