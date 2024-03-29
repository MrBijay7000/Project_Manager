// import { forwardRef, useImperativeHandle, useRef } from "react";

// import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       opne() {
//         dialog.current.showModal();
//       },
//     };
//   });

//   return createPortal(
//     <dialog ref={dialog}>
//       {children}
//       <form method="dialog">
//         <button>{buttonCaption}</button>
//       </form>
//     </dialog>,
//     document.getElementById("modal-root")
//   );
// });

// export default Modal;
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        // Fix the typo here: "opne" to "open"
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
