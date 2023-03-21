import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "../session";
import styles from "~/styles/home.css";
import imgSrc from "~/assets/nike.jpg";
import ProductsModel from "../db/products";
import Card from "../components/Card";
import cardStyles from "~/styles/card.css";
import { motion } from "framer-motion";

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
  const { _action } = Object.fromEntries(formData.entries());

  // if (_action === "addProduct") {
  //   const form = await ProductsModel.create({
  //     title: "Title lorem ipsum",
  //     text: "Text lorem ipsum",
  //     price: 100,
  //     category: "top",
  //     image: "https://picsum.photos/200/300",
  //     createdAt: new Date(),
  //   });

  //   return json(form);
  // }

  if (_action === "addToCart") {
    const session = await getSession(request.headers.get("Cookie"));
    const form = Object.fromEntries(formData.entries());

    const cart = session.get("cart") || [];
    console.log(cart.filter((item) => item._id === form._id));
    if (cart.filter((item) => item._id === form._id).length) {
      console.log("if", form, form._id);
      // add quantity to the product
      cart.map((item) => {
        if (item._id === form._id) {
          item.quantity = parseInt(item.quantity) + parseInt(form.quantity);
        }

        return item;
      });
    } else {
      console.log("else", form, form._id);
      cart.push(form);
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

  if (_action === "removeFromCart") {
    const session = await getSession(request.headers.get("Cookie"));
    const form = Object.fromEntries(formData.entries());

    const cart = session.get("cart") || [];
    const updatedCart = cart.filter((item) => item._id !== form._id);

    // if (updatedCart.length) {
    // }
    session.set("cart", updatedCart);

    return json(
      { cart: updatedCart },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  }

  return null;
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: cardStyles },
  ];
}

export default function Index() {
  const data = useLoaderData();

  console.log(data);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
    </motion.div>
  );
}
