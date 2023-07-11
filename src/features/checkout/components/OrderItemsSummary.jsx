import OrderItem from "./OrderItem";

export default function OrderItemsSummary() {
  return (
    <div>
      <div className="flow-root">
        <ul className="-my-4 divide-y divide-gray-100">
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ul>
      </div>
    </div>
  );
}
