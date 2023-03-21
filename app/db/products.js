import { mongoose } from "./db";

const productsSchema = new mongoose.Schema({
  // id: mongoose.Schema.Types.ObjectId,
  id: String,
  title: String,
  text: String,
  image: String,
  price: Number,
  category: String,
  createdAt: Date,
  updatedAt: Date,
});

let ProductsModel;
try {
  ProductsModel = mongoose.model("products");
} catch (error) {
  ProductsModel = mongoose.model("products", productsSchema);
}

export default ProductsModel;
