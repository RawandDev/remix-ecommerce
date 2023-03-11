import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import React from "react";
import Filter from "../../components/Filter";
import ProductsModel from "../../db/products";
import { commitSession, getSession } from "../../session";

export async function loader({ request }) {
  const form = await ProductsModel.find();
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const price = url.searchParams.get("price");
  if (category || price) {
    const filteredData = await ProductsModel.find({
      category: category,
      price: price || { $gt: 0 },
    });

    return json(filteredData);
  }
  const session = await getSession(request.headers.get("Cookie"));

  const cart = session.get("cart") || [];
  const addedToCartProducts = await ProductsModel.find({ _id: { $in: cart } });
  return json({ form, addedToCartProducts });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData.entries());

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
      // remove from cart
      const index = cart.indexOf(form._id);
      if (index > -1) {
        cart.splice(index, 1);
      }
    } else {
      // add to cart
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

  return (
    <div>
      <Filter />
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
                {item.category}
              </p>
              <p>{item.createdAt}</p>
              <Form method="post">
                <input type="hidden" name="_id" value={item._id} />
                <button
                  type="submit"
                  name="_action"
                  value="addToCart"
                  style={{
                    backgroundColor: data.addedToCartProducts.some(
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
    </div>
  );
}

export default Products;
