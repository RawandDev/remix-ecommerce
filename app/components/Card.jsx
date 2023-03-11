import { Form, Link } from "@remix-run/react";

function Card({ data, carts }) {
  const MAP_TITLE = {
    top: "Top Products",
    shoes: "Shoes",
  };

  return (
    <div className="products__container">
      <h2 className="products__title">{MAP_TITLE[data[0].category]}</h2>
      <div className="products__list">
        {data.map((product) => (
          <div className="products__item" key={product._id}>
            <Link to={`/products/${product._id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="products__image"
              />
            </Link>
            <div className="products__info">
              <Link to={`/products/${product._id}`}>
                <h3 className="products__name">{product.title}</h3>
              </Link>
              <p className="products__price">${product.price}</p>

              <Form method="post">
                <input type="hidden" name="id" value={product._id} />
                <button
                  type="submit"
                  className="products__button"
                  style={{
                    backgroundColor: carts.some((cart) => cart === product._id)
                      ? "red"
                      : "green",
                  }}
                >
                  Add to cart
                </button>
              </Form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
