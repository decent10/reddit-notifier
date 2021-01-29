import * as cron from "node-cron";
import axios from "axios";
import numeral from "numeral";
import { flatten } from "lodash/fp";
import { sendgrid } from "./sendgrid";
import { USERS } from "../data";

export const sendTransactionalEmail = async (data) => {
  try {
    const msg = {
      from: "decent10cs@gmail.com",
      template_id: "d-ff86fcb07714452f919061a2b367b42a",
      personalizations: [
        {
          to: [
            {
              email: data.to,
            },
          ],
          dynamicTemplateData: data,
        },
      ],
    };
    let res = await sendgrid.send(msg);
    console.log(res);
    return "succuss";
  } catch (error) {
    console.log(error);
  }
};
const prepareEmails = (data) => ({
  from: "decent10cs@gmail.com",
  template_id: "d-5a324b7824ff49fb9c95866f06e3511c",
  personalizations: [
    {
      to: [
        {
          email: data.email,
        },
      ],
      dynamicTemplateData: data,
    },
  ],
});

const prepareUserData = async (user) => {
  const requests = user.favorites.map((fav) =>
    axios.get(
      `https://www.reddit.com/r/${fav}/top/.json?t=day&sort=top&limit=3`
    )
  );
  try {
    const responses = await axios.all(requests);

    const response = responses.map((res) => res.data);

    const responseArr = flatten(response.map((res) => res.data.children));

    const posts = responseArr.map((res) => {
      return {
        title: res.data.title,
        subReddit: res.data.subreddit,
        url: res.data.url_overridden_by_dest,
        image: "",
        votes: numeral(res.data.ups).format("0 a"),
      };
    });
    return sendTransactionalEmail({
      name: user.name,
      to: user.email,
      posts: posts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const scheduleEmail = () => {
  //cron.schedule("00 8 * * *", () => {
  let users = USERS.filter((user) => user.subscribe);
  users.map((user) => prepareUserData(user));
  // });
};
