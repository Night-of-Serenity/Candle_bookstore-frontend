import { useState } from "react";
import scbIcon from "../../../assets/scb.png";
// import Modal from "../../../components/Modal";
import { useNavigate } from "react-router-dom";
import { submitPaymentAsync } from "../../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CheckoutForm() {
  const initialInput = {
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    paymentSlip: "",
  };
  const [input, setInput] = useState(initialInput);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const nagivate = useNavigate();

  // const modalRef = useRef();

  const handleInputChange = (e) => {
    // console.dir(e.target);
    if (e.target.name == "paymentSlip" && e.target.files[0]) {
      setInput({ ...input, [e.target.name]: e.target.files[0] });
    } else setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitPayment = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (let key in input) {
        formData.append(key, input[key]);
      }

      // console.dir(cartItems);
      formData.append("cartItems", JSON.stringify(cartItems));

      const result = await dispatch(submitPaymentAsync(formData)).unwrap();
      if (result) {
        toast.success(result);
        setInput(initialInput);
        nagivate("/");
        // modalRef.current.click();
      }
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8 text-gray-700">
        <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmitPayment}>
          <div className="col-span-3">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              value={input?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              value={input?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              value={input.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="building number, street, district, province, zipcode "
              className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
              value={input.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6 text-gray-700">
            <div className="block text-sm font-medium">Payment Account</div>
            <div className="flex justify-around items-center my-4">
              <div className="w-[100px]">
                <img src={scbIcon} />
              </div>
              <p>113-212345-8</p>
              <p>Candle Bookstore</p>
            </div>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="paymentSlip"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Slip
            </label>
            <input
              type="file"
              id="paymentSlip"
              name="paymentSlip"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
              Submit Payment
            </button>
          </div>
        </form>
        {/* <div className="invisible">
          <Modal modalBtnRef={modalRef}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl">Submit Payment Successfull!</h1>
              <p>
                click
                <Link to="/"> here </Link>
                to return to homepage
              </p>
            </div>
          </Modal>
        </div> */}
      </div>
    </div>
  );
}
