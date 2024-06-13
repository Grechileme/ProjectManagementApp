import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef (function Modal({children, buttonCapture}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal (
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>
                    {buttonCapture}
                </button>
            </form>
        </dialog>
    , document.getElementById('modal-root'));
});

export default Modal;