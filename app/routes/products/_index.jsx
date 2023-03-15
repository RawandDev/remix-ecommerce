import { json, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import React from "react";
import Filter from "../../components/Filter";
import SidebarFilter from "../../components/SidebarFilter";
import ProductsModel from "../../db/products";
import { commitSession, getSession } from "../../session";
import sidebarFilterStyles from "~/styles/sidebar-filters.css";
import porductsStyles from "~/styles/products.css";

export function links() {
  return [
    { rel: "stylesheet", href: sidebarFilterStyles },
    { rel: "stylesheet", href: porductsStyles },
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

  console.log(category);

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

  // console.log(_action);

  if (_action === "addProduct") {
    const form = await ProductsModel.create({
      title: "Title lorem ipsum",
      text: "Text lorem ipsum",
      price: 100,
      category: "top",
      image: "https://picsum.photos/200/300",
      createdAt: new Date(),
    });

    return json(form);
  }
  const session = await getSession(request.headers.get("Cookie"));

  if (_action === "addToCart") {
    const form = Object.fromEntries(formData.entries());
    const cart = session.get("cart") || [];
    if (cart.includes(form._id)) {
      const index = cart.indexOf(form._id);
      if (index > -1) {
        cart.splice(index, 1);
      }
    } else {
      cart.push(form._id);
    }

    session.set("cart", cart);

    return redirect("/products", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return null;
}

function Products() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="wrapper">
      {/* <Filter /> */}

      <SidebarFilter />
      <div className="container">
        {data.form.map((item) => {
          return (
            <div className="card" key={item._id}>
              <h2>
                <Link to={`/products/${item._id}`}>{item.title}</Link>
              </h2>
              <p>{item.text}</p>
              <p>{item.price}</p>
              <p
                style={{
                  backgroundColor: "green",
                }}
              >
                {item.category} | Gender {item.gender}
              </p>
              <p>{item.createdAt}</p>
              <Form method="post">
                <input type="hidden" name="_id" value={item._id} />
                <button
                  type="submit"
                  name="_action"
                  value="addToCart"
                  style={{
                    backgroundColor: data.addedToCartProducts?.some(
                      (product) => product._id === item._id
                    )
                      ? "red"
                      : "green",
                  }}
                >
                  Add to cart
                </button>
              </Form>
            </div>
          );
        })}
        <Form method="post">
          <button type="submit" name="_action" value="addProduct">
            Submit
          </button>
        </Form>
      </div>

      {/* <Outlet /> */}
    </div>
  );
}

export default Products;
