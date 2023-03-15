import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "cart",

      maxAge: 86400,
      secrets: ["S3CR3T_K3Y"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
