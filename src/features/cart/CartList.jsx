/* eslint-disable react/prop-types */
import CartListItem from "../../features/cart/CartListItem";

export default function CartList({ cartItems }) {
  return (
    <ul className="space-y-4">
      {cartItems?.length > 0 &&
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
  );
}
