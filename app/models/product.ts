import { model, models, Schema } from "mongoose";

interface IProduct {
	title: string,
	price: number,
	// slug: string
}

const productSchema = new Schema<IProduct>({
	title: {
		type: String,
		required: true,
		unique: true
	},
	price: {
		type: Number,
		required: true,
	}
})

const ProductModel = models.Product<IProduct> || model("Product", productSchema);

export default ProductModel