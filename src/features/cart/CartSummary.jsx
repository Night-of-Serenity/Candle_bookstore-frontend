/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CartSummary({ cartItems, isCheckout = false }) {
  return (
    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
      <div className="w-screen max-w-lg space-y-4">
        <dl className="space-y-0.5 text-sm text-gray-700">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>
              {cartItems?.length > 0 &&
                cartItems
                  ?.reduce((sum, item) => {
                    return sum + item?.price * item?.CartItems[0]?.quantity;
                  }, 0)
                  .toFixed(2)}
              $
            </dd>
          </div>
          <div className="flex justify-between">
            <dt>Discount</dt>
            <dd>
              -
              {cartItems
                ?.reduce(
                  (sum, item) =>
                    sum +
                    item?.price *
                      item?.CartItems[0]?.quantity *
                      (item?.discount || 0),
                  0
                )
                .toFixed(2)}
              $
            </dd>
          </div>
          <div className="flex justify-between !text-base font-medium">
            <dt>Total</dt>
            <dd>
              {cartItems
                ?.reduce((sum, item) => {
                  return (
                    sum +
                    item.price *
                      item?.CartItems[0]?.quantity *
                      (1 - (item?.discount || 0))
                  );
                }, 0)
                .toFixed(2)}
              $
            </dd>
          </div>
        </dl>

        {!isCheckout && (
          <div className="flex justify-end">
            <Link
              to="/checkout"
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
