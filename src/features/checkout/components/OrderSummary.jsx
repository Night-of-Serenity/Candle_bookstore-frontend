import CheckoutUser from "./CheckoutUser";
import OrderItemsSummary from "./OrderItemsSummary";
import PriceSummary from "./PriceSummary";

export default function OrderSummary() {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-2xl space-y-8 px-4 lg:px-8">
        <CheckoutUser />
        <OrderItemsSummary />
        <PriceSummary />
      </div>
    </div>
  );
}
