import axios from "axios";
import numeral from "numeral";
import { flatten } from "lodash/fp";

const User = {
  redditPosts: async (root) => {
    const requests = root.favorites.map((fav) =>
      axios.get(
        `https://www.reddit.com/r/${fav}/top/.json?t=day&sort=top&limit=3`
      )
    );
    try {
      const responses = await axios.all(requests);

      const response = responses.map((res) => res.data);

      const responseArr = flatten(response.map((res) => res.data.children));

      const result = responseArr.map((res) => {
        return {
          title: res.data.title,
          subReddit: res.data.subreddit,
          url: res.data.url_overridden_by_dest,
          image: "",
          votes: numeral(res.data.ups).format("0 a"),
        };
      });
      // const result1 = res2.data.data.children.map((res, index) => {
      //   return {
      //     title: res.data.title,
      //     subReddit: res.data.subreddit,
      //     url: res.data.url_overridden_by_dest,
      //     image: "",
      //     votes: res.data.ups,
      //   };
      // });
      // const result2 = res3.data.data.children.map((res, index) => {
      //   return {
      //     title: res.data.title,
      //     subReddit: res.data.subreddit,
      //     url: res.data.url_overridden_by_dest,
      //     image: "",
      //     votes: res.data.ups,
      //   };
      // });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};

export { User };
