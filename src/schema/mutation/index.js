import creatUpdateUser from "./create-update-user";
import addFavorites from "./add-favorites";
import removeFavorite from "./remove-favorite";
import subscribe from "./news-letter-subscribe";
import unSubscribe from "./news-letter-unsubscribe";
import sendEmail from "./send-email";

const Mutation = {
  creatUpdateUser,
  addFavorites,
  removeFavorite,
  unSubscribe,
  subscribe,
  sendEmail,
};
export default Mutation;
