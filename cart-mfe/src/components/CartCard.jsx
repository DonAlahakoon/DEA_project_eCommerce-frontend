import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  const increase = (id) => {
    dispatch(increaseQty(id));
  };

  const decrease = (id) => {
    if (item.qty === 1) {
      dispatch(removeFromCart(id));
    } else dispatch(decreaseQty(id));
  };

  return (
    <div>
      <div className="h-80 w-[310px] md:h-72 md:w-[600px] bg-white border border-green-100 rounded-2xl hover:shadow-lg hover:bg-green-50 mt-[40px] md:mt-[20px] transition-all duration-300">
        <div className="">
          <div>
            <img
              src={item.original_picture_url}
              alt=""
              width={150}
              height={150}
              className="mx-auto mt-4"
            />
          </div>
          <div className="flex justify-between text-gray-800">
            <div className="flex flex-col ml-[20px] gap-y-2 overflow-y-hidden">
              <div className="text-xs font-bold tracking-normal mr-1 md:text-sm sm:block">
                {item.story_html.split(" ").slice(0, 28).join(" ") + "..."}
              </div>

              <div className="flex justify-evenly gap-x-8 mt-2 md:gap-x-0 md:justify-evenly">
                <div className="mt-[10px] font-bold text-green-600">
                  Rs. {item.retail_price_cents}
                </div>
                <div>
                  <div className="flex gap-x-6">
                    <p className="flex">
                      <button
                        className="p-1 mr-2 bg-green-100 hover:bg-green-200 border border-green-300 rounded-lg font-bold w-[30px] transition-colors duration-300"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{item.qty}</span>
                      <button
                        className="p-1 ml-2 bg-green-100 hover:bg-green-200 border border-green-300 rounded-lg font-bold w-[30px] transition-colors duration-300"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>
                    </p>
                    <div className="text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 ml-2">
                      <AiFillDelete onClick={() => remove(item.id)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;