import { useSelector } from "react-redux";

import CartList from "../features/cart/CartList";
import CartSummary from "../features/cart/CartSummary";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <section className="w-full py-12">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Your Cart
        </h1>
      </header>
      <div className="w-full bg-white mt-8 py-10">
        <div className="mx-auto max-w-6xl">
          <CartList cartItems={cartItems} />
          <CartSummary cartItems={cartItems} />
        </div>
      </div>
    </section>
  );
}
