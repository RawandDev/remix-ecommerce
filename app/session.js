import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "cart",

      maxAge: 86400,
      secrets: [process.env.SESSION_SECRET],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
