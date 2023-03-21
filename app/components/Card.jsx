import { Form, Link } from "@remix-run/react";
import { motion } from "framer-motion";

function Card({
  data,
  carts,
  shouldShowTitle = true,
  isFilterShown,
  shouldShowAddToCart = true,
}) {
  const MAP_TITLE = {
    top: "Top Products",
    shoes: "Shoes",
  };

  return (
    <div
      className={`products__container products__container--${
        !isFilterShown ? "hidden" : ""
      }`}
    >
      {shouldShowTitle && (
        <h2 className="products__title">{MAP_TITLE[data[0].category]}</h2>
      )}
      <div className="products__list">
        {data.map((product) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="products__item"
            key={product._id}
          >
            <div
              style={{
                height: "200px",
                overflow: "hidden",
              }}
            >
              <Link to={`/products/${product._id}`}>
                <motion.img
                  layoutId={product._id}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.3,
                  }}
                  initial={{
                    x: 200,
                  }}
                  animate={{
                    x: 0,
                  }}
                  src={product.image}
                  alt={product.title}
                  className="products__image"
                />
              </Link>
            </div>
            <div className="products__info">
              <Link to={`/products/${product._id}`}>
                <h3 className="products__name">{product.title}</h3>
              </Link>
              <p className="products__price">${product.price}</p>
              <Form method="post">
                {/* we pass all values so the whole object will get into the carts */}
                {Object.keys(product).map((key) => (
                  <input
                    type="hidden"
                    name={key}
                    value={product[key]}
                    key={key}
                  />
                ))}
                {shouldShowAddToCart && (
                  <>
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={1}
                      min={1}
                      max={10}
                      className="products__quantity"
                    />
                    <button
                      type="submit"
                      className={`products__button ${
                        carts?.some(
                          (cart) =>
                            cart === product._id || cart._id === product._id
                        )
                          ? "products__button--added"
                          : ""
                      }`}
                      name="_action"
                      value="addToCart"
                    >
                      {carts?.some((cart) => cart._id === product._id)
                        ? "Add more"
                        : "Add to cart"}
                    </button>
                  </>
                )}
                <button
                  type="submit"
                  name="_action"
                  value="removeFromCart"
                  disabled={!carts?.some((cart) => cart._id === product._id)}
                >
                  Remove cart
                </button>
              </Form>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Card;
