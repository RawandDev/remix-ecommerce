import { useLoaderData } from "@remix-run/react";
import ProductsModel from "../../db/products";
import styles from "~/styles/product.css";
import { motion } from "framer-motion";

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

  return (
    <div className="product-wrapper">
      <div className="product-left">
        <motion.div>
          <motion.img
            layoutId={data._id}
            transition={{
              duration: 0.3,
            }}
            src={data.image}
            alt={data.title}
            className="product-image"
          />
        </motion.div>
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
