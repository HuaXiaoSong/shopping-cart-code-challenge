import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartDetailedItem from "../Cart/CartDetailedItem";
import { useSelector } from "react-redux";
import { CartItem, clearCart, selectCartState } from "../Cart/cartSlice";
import { Order } from "../../interfaces/Order";
import { useAppDispatch } from "../../app/hooks";
import { saveOrder } from "../../mock/cart";
import { AUTHENTICATED_USER } from "../Login/Login";

function CheckoutForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { open, cartItems, totalAmount, totalProductCount } =
    useSelector(selectCartState);
  const total = `$${totalAmount.toFixed(2)}`;
  const username = "customer1"; //TODO get from login state
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");

    const order: Order = {
      username: localStorage.getItem(AUTHENTICATED_USER) ?? "",
      firstName,
      lastName,
      email,
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
