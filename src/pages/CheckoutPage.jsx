import CheckoutForm from "../features/checkout/components/CheckoutForm";
import OrderSummary from "../features/checkout/components/OrderSummary";

export default function CheckoutPage() {
  return (
    <section className="my-auto w-full">
      {/* <h1 className="sr-only">Checkout</h1> */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <OrderSummary />
        <CheckoutForm />
      </div>
    </section>
  );
}
