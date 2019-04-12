import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose, open }) =>
    open
        ? ReactDOM.createPortal(
            <div className="modal">
                <div className="modal_close" onClick={onClose}>
                    &times;
          </div>
                {children}
            </div>,
            document.body
        )
        : null;

        export default Modal;