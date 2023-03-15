import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Navbar from "./components/Navbar";
import { getSession } from "./session";
import styles from "./styles/globals.css";
import navbarStyles from "./styles/navbar.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: navbarStyles,
    },
  ];
}

export async function loader({ request }) {
  // get cart from session
  const session = await getSession(request.headers.get("Cookie"));
  const cart = session.get("cart") || [];

  return json(cart);
}

export default function App() {
  const carts = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar carts={carts} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
