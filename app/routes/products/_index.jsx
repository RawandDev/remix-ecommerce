import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
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
  const addedToCartProducts = await ProductsModel.find({ _id: { $in: cart } });

  // console.log(category);

  if (category || price) {
    const filteredData = await ProductsModel.find({
      category: category.length ? { $in: category } : { $exists: true },
      price: price || { $exists: true },
      gender: gender || { $exists: true },
    });

    return json({ form: filteredData, addedToCartProducts });
  }
  return json({ form, addedToCartProducts });
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
    console.log(form);
    if (cart.includes(form._id)) {
      const index = cart.indexOf(form._id);
      if (index > -1) {
        cart.splice(index, 1);
      }
    } else {
      cart.push(form._id);
    }

    return json(
      { cart },
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

  console.log(data);

  return (
    <div className="wrapper">
      <SidebarFilter />
      <Card
        data={data.form}
        carts={data.addedToCartProducts}
        shouldShowTitle={false}
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
