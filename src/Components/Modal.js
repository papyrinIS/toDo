import ReactDOM from "react-dom";
import React from "react";
import styles from"./Modal.module.css"


const Modal = ({ children }) => (
    ReactDOM.createPortal(
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                {children}
            </div>
            <div className={styles.overlay}></div>
        </div>,
        document.getElementById('modal-root')
    )
);




export default Modal;