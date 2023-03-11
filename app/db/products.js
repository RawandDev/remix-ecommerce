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

// export async function getForms() {
//   const forms = await FormModel.find();
//   return forms;
// }

// export async function getPost(slug) {
//   const form = await FormModel.findOne({ slug }).exec();
//   return form;
// }

// export async function createPost(form) {
//   const newForm = await FormModel.create(form);
//   return newForm;
// }

// export the model so that it can be used in other parts of the app
// export const ProductsModel =
//   mongoose.models.ProductsModel || mongoose.model("Products", productsSchema);

let ProductsModel;
try {
  ProductsModel = mongoose.model("products");
} catch (error) {
  ProductsModel = mongoose.model("products", productsSchema);
}

export default ProductsModel;
