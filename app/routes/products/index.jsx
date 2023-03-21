import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import SidebarFilter from "../../components/SidebarFilter";
import ProductsModel from "../../db/products";
import { commitSession, getSession } from "../../session";
import sidebarFilterStyles from "~/styles/sidebar-filters.css";
import porductsStyles from "~/styles/products.css";
import Card from "../../components/Card";
import cardStyles from "~/styles/card.css";

export function links() {
  return [
    { rel: "stylesheet", href: sidebarFilterStyles },
    { rel: "stylesheet", href: porductsStyles },
    { rel: "stylesheet", href: cardStyles },
  ];
}

export async function loader({ request }) {
  const form = await ProductsModel.find();
  const url = new URL(request.url);
  // we can have multiple query params such as ?category=top&category=bottom
  const category = url.searchParams.getAll("category");
  const min = url.searchParams.get("min");
  const max = url.searchParams.get("max");
  const price = min || max ? { $gte: min || 0, $lte: max || 999999 } : null;
  const gender = url.searchParams.get("gender");
  const session = await getSession(request.headers.get("Cookie"));

  const cart = session.get("cart") || [];

  if (category || price) {
    const filteredData = await ProductsModel.find({
      category: category.length ? { $in: category } : { $exists: true },
      price: price || { $exists: true },
      gender: gender || { $exists: true },
    });

    return json({ form: filteredData, addedToCartProducts: cart });
  }
  return json({ form, addedToCartProducts: cart });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData.entries());

  if (_action === "addToCart") {
    const session = await getSession(request.headers.get("Cookie"));
    const form = Object.fromEntries(formData.entries());

    const cart = session.get("cart") || [];
    if (cart.filter((item) => item._id === form._id).length) {
      cart.map((item) => {
        if (item._id === form._id) {
          item.quantity = parseInt(item.quantity) + parseInt(form.quantity);
        }

        return item;
      });
    } else {
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

function Products() {
  const data = useLoaderData();
  const [isFilterShown, setIsFilterShown] = React.useState(true);

  return (
    <div className="wrapper">
      <SidebarFilter
        isFilterShown={isFilterShown}
        setIsFilterShown={setIsFilterShown}
      />
      <Card
        data={data.form}
        carts={data.addedToCartProducts}
        shouldShowTitle={false}
        isFilterShown={isFilterShown}
      />
      {/* <Form method="post">
        <button type="submit" name="_action" value="addProduct">
          Submit
        </button>
      </Form> */}
    </div>
  );
}

export default Products;
