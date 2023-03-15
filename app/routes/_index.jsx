import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "../session";
import styles from "~/styles/home.css";
import imgSrc from "~/assets/nike.jpg";
import ProductsModel from "../db/products";
import Card from "../components/Card";
import cardStyles from "~/styles/card.css";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const [top, shoes] = await Promise.all([
    await ProductsModel.find({ category: "top" }).limit(3),
    await ProductsModel.find({ category: "shoes" }).limit(3),
  ]);

  const carts = session.get("cart") || [];

  return json({ top, shoes, carts });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
  const form = Object.fromEntries(formData.entries());

  const cart = session.get("cart") || [];
  console.log(form);
  if (cart.includes(form._id)) {
    const index = cart.indexOf(form._id);
    if (index > -1) {
      console.log("splice");
      cart.splice(index, 1);
    }
  } else {
    cart.push(form._id);
  }

  session.set("cart", cart);

  return json(
    { cart },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: cardStyles },
  ];
}

export default function Index() {
  const data = useLoaderData();

  return (
    <div>
      <section className="container">
        <img className="hero-image" src={imgSrc} alt="plant" />
        <div className="container__content">
          <h1 className="container__title">
            Incredible Selection, Unbeatable Prices – Get Ready to Fall in Love
            with
            <span> Recommerce</span>
          </h1>
          <Link to="/products" className="container__button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="products">
        <Card data={data.top} carts={data.carts} />
        <Card data={data.shoes} carts={data.carts} />
      </section>
    </div>
  );
}
