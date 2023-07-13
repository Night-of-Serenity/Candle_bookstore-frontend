import { useSelector } from "react-redux";
import CartSummary from "../../cart/CartSummary";

export default function PriceSummary() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return <CartSummary cartItems={cartItems} isCheckout={true} />;
}
