/* eslint-disable react/prop-types */
export default function Modal({ modalBtnRef, children }) {
  // console.log(window.my_modal_2);
  return (
    <>
      <button
        ref={modalBtnRef}
        className="btn"
        onClick={() => window.my_modal_2.showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box bg-white">
          {children}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
