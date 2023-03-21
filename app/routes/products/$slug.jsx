import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import ProductsModel from "../../db/products";
import styles from "~/styles/product.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ request, params }) {
  console.log("params", params);

  const product = ProductsModel.findOne({ _id: params.slug });

  return product;
}

function Cart() {
  const data = useLoaderData();
  const navigation = useNavigation();
  console.log("navigation", navigation);
  // console.log("data", data);

  return (
    <div className="product-container">
      <div className="product-left">
        <img src={data.image} alt={data.title} className="product-image" />
        <h1 className="product-title">{data.title}</h1>
      </div>
      <div className="product-right">
        <p>
          {data.text} <strong>${data.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Cart;
