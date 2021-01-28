import { subscribe } from "../../data";
export default (root, args) => subscribe(+args.userId);
