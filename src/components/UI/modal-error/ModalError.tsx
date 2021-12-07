import React from "react";
import styles from "./ModalError.module.css";
import ModalErrorPrpps from "./ModalErrorProps";

const ModalError = (props: ModalErrorPrpps) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <div className={styles.modal}>
                <header>
                    <h3>{props.title}</h3>
                </header>
                <main>
                    <p>{props.message}</p>
                </main>
                <footer>
                    <button onClick={props.onClose}>Ok</button>
                </footer>
            </div>
        </div>
    )
}

export default ModalError;