import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [CartItemSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Cart || mongoose.model("Cart", CartItemSchema);
