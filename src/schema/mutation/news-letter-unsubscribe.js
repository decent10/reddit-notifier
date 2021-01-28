import { unSubscribe } from "../../data";
export default (root, args) => unSubscribe(+args.userId);
