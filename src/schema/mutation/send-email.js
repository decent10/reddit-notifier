import { sendgrid } from "../../core/sendgrid";

export const sendTransactionalEmail = async (
  to,
  data = { Name: "Rashid Ahmad", tag: "News", url: "www.google.com" }
) => {
  try {
    const msg = {
      from: "decent10cs@gmail.com",
      template_id: "d-5a324b7824ff49fb9c95866f06e3511c",
      personalizations: [
        {
          to: [
            {
              email: to,
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

export default (root, args) => {
  console.log(args);
  return sendTransactionalEmail(args.email);
};
