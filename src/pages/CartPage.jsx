import { useSelector } from "react-redux";
import CartListItem from "../features/cart/cartListItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <section className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>
            <div className="mt-8">
              <ul className="space-y-4">
                {cartItems?.length !== 0 &&
                  cartItems?.map((item) => (
                    <CartListItem
                      key={item?.id}
                      bookId={item?.id}
                      title={item?.title}
                      quantity={item?.CartItems[0]?.quantity}
                      author={item?.author}
                      bookCover={item?.bookCover}
                      price={item?.price}
                      discount={item?.discount}
                    />
                  ))}
              </ul>
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>
                        {cartItems?.length &&
                          cartItems
                            ?.reduce((sum, item) => {
                              return (
                                sum + item?.price * item?.CartItems[0]?.quantity
                              );
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

                  <div className="flex justify-end">
                    <Link
                      to="/checkout"
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
