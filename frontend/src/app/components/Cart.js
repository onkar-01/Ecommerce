import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { increment, decrement, removeFromCart } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const state = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch(increment(id));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Removed from cart");
  };

  const decrementHandler = (id) => {
    dispatch(decrement(id));
  };
  return (
    <div className="cart">
      <main className="mt-[50px]">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              id={item.id}
              price={item.price}
              imgSrc={item.image}
              quantity={item.quantity}
              increment={(id) => {
                incrementHandler(id);
              }}
              decrement={(id) => {
                decrementHandler(id);
              }}
              deletehandler={(id) => {
                removeFromCartHandler(id);
              }}
            />
          ))
        ) : (
          <h1>Cart is empty</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${state.subTotal}</h2>
        <h2>Shipping: ${state.shipping}</h2>
        <h2>Tax: ${state.tax}</h2>
        <h2>Total: ${state.total}</h2>
        <button class="text-white text-[3xl] w-[80%] mt-[4rem] mx-auto h-[70px] bg-[#ff742e] hover:bg-[#ff742ebc] focus:ring-4 focus:outline-none focus:ring-[#ff742e3b] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          Proceed to checkout
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </aside>
    </div>
  );
};

const CartItem = ({
  name,
  id,
  price,
  imgSrc,
  quantity,
  increment,
  decrement,
  deletehandler,
}) => (
  <div className="cartItem w-[90%] border-2 border-[#ff742e] rounded-md shadow-md">
    <Image
      loader={() => imgSrc}
      src={imgSrc}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <article>
      <h4>{name}</h4>
      <h4>${price}</h4>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete
      onClick={() => {
        deletehandler(id);
      }}
    />
  </div>
);

export default Cart;
