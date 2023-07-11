import { useRef } from "react";
import scbIcon from "../../../assets/scb.png";
import Modal from "../../../components/Modal";

export default function CheckoutForm() {
  const modalRef = useRef();

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    modalRef.current.click();
  };
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <form className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="Phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="Phone"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="Address"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              placeholder="building number, street, district, province, zipcode "
              className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
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
              htmlFor="Slip"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Slip
            </label>
            <input
              type="file"
              id="slip"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <button
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
              onClick={handleSubmitPayment}
            >
              Submit Payment
            </button>
          </div>
        </form>
        <div className="invisible">
          <Modal modalBtnRef={modalRef}>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl">Submit Payment Successfull!</h1>
              <p>click here to return to homepage</p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
