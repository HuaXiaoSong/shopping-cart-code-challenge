import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CartDetailedItem from "../Cart/CartDetailedItem";
import { useSelector } from "react-redux";
import { CartItem, clearCart, selectCartState } from "../Cart/cartSlice";
import { Order } from "../../interfaces/Order";
import { useAppDispatch } from "../../app/hooks";
import { saveOrder } from "../../mock/cart";
import { AUTHENTICATED_USER } from "../Login/Login";
import { CheckoutForm, CheckoutInfo } from "./CheckoutForm";

function Checkout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useSelector(selectCartState);
  const total = `$${totalAmount.toFixed(2)}`;
  const handleSubmit = async (info: CheckoutInfo) => {
    const order: Order = {
      ...info,
      username: localStorage.getItem(AUTHENTICATED_USER) ?? "",
    };

    await saveOrder(order);
    dispatch(clearCart());
    navigate("/products");
  };
  if (cartItems?.length === 0) {
    return (
      <div className="flex">
        <div className="m-auto w-1/3">
          <div className="flex justify-center my-6">cart is empty</div>
          <div className="flex mb-2">
            <Link
              to="/products"
              className="m-auto w-full bg-black cursor-pointer hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 border border-black hover:border-yellow-500"
            >
              <a className="flex justify-center" href="#">
                Continue Shopping
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 p-20">
      <div className="col-span-6 py-4 flex flex-col">
        <div className="flex-grow flex flex-col">
          {cartItems?.length > 0 &&
            cartItems.map((cartItem: CartItem, index: number) => (
              <CartDetailedItem cartItem={cartItem} key={index}></CartDetailedItem>
            ))}
          <div className="">
            <div className="flex justify-around my-4 font-bold">
              <div>TOTAL</div>
              <div className="text-yellow-500 text-lg font-bold">{total}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <h2 className="text-lg font-bold mb-4">Checkout</h2>
        <CheckoutForm submitForm={handleSubmit} />
      </div>
    </div>
  );
}

export default Checkout;
