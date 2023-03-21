import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Card from "../../components/Card";
import { commitSession, getSession } from "../../session";
import cardStyles from "~/styles/card.css";

export function links() {
  return [{ rel: "stylesheet", href: cardStyles }];
}

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const carts = session.get("cart") || [];
  return json({ carts });
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

function Cart() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.carts.length ? (
        <Card
          data={data.carts}
          shouldShowTitle={false}
          carts={data.carts}
          shouldShowAddToCart={false}
        />
      ) : (
        <div>
          <h1>Cart is empty</h1>
          <Link to="/products">Go to products</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
