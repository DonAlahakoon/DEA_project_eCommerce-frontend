import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card = ({ farmproducts }) => {
  const cart = useSelector((state) => state.cart);
  const img = farmproducts.original_picture_url;
  const price = farmproducts.retail_price_cents;
  const desc = farmproducts.story_html;
  const id = farmproducts.id;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(farmproducts));
    toast.success("Added to cart");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  return (
    <div>
      <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-white hover:bg-green-50 text-black border border-green-100 outline outline-green-100 hover:shadow-2xl relative">
        <div className="flex flex-col gap-6">
          <div>
            <img
              src={img}
              width={200}
              height={200}
              alt="product"
              className="mx-auto"
            />
            <Link to={`/preview/${id}`}>
              <button className="absolute bg-green-600 text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse">
                View
              </button>
            </Link>
          </div>

          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
            {desc.split(" ").slice(0, 20).join(" ") + "..."}
          </p>

          <div className="flex items-center justify-between">
            {cart.some((item) => item.id === farmproducts.id) ? (
              <button
                onClick={() => remove(farmproducts.id)}
                className="bg-red-400 text-white p-2 rounded-md text-sm"
              >
                Remove Item
              </button>
            ) : (
              <button
                onClick={add}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md text-sm"
              >
                Add to Cart
              </button>
            )}
            <span className="text-xl font-semibold">Rs. {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;