import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const PreviewCard = ({ farmproducts }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const add = () => {
    const farmproductsInCart = cart.some((item) => item.id === farmproducts.id);
    if (farmproductsInCart) {
      toast.error("You've Already Added This Item");
    } else {
      dispatch(addToCart(farmproducts));
      toast.success("Added to cart");
    }
  };

  const { original_picture_url: img, retail_price_cents: price, story_html: desc, name, product_name: brand, ProductName } = farmproducts;

  return (
    <div>
      <main className="grid place-items-center min-h-[1300px] md:min-h-screen bg-green-50">
        <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-xl shadow-xl hover:shadow-2xl w-3/4 md:max-w-2xl">
          <div className="text-gray-700 flex flex-col justify-between">
            <img
              src={img}
              alt="product"
              className="mx-auto md:h-[350px] md:w-[350px] object-cover"
            />
          </div>
          <main className="text-gray-700">
            <small className="uppercase text-green-600">
              {ProductName[0]}'s {brand}
            </small>
            <h3 className="uppercase text-black text-2xl font-semibold">
              {name}
            </h3>
            <h3 className="text-2xl font-semibold mb-7 text-green-600">
              Rs. {price}
            </h3>
            <small className="text-black text-sm">
              {desc}
            </small>
            <div className="flex gap-0.5 mt-4">
              <button
                id="addToCartButton"
                className="bg-green-600 hover:bg-green-700 focus:outline-none transition text-white uppercase px-8 py-3"
                onClick={add}
              >
                add to cart
              </button>
              <button
                id="likeButton"
                className="bg-green-600 hover:bg-green-700 focus:outline-none transition text-white uppercase p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-suit-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
              </button>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default PreviewCard;