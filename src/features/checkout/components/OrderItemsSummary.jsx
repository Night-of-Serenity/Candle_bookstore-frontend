import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function OrderItemsSummary() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div>
      <div className="flow-root">
        <ul className="-my-4 divide-y divide-gray-100">
          {cartItems.length > 0 &&
            cartItems.map((item) => <OrderItem key={item.id} book={item} />)}
        </ul>
      </div>
    </div>
  );
}
