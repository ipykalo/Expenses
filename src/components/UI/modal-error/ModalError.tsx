import React from "react";
import styles from "./ModalError.module.css";
import { ModalErrorPrpps } from "./ModalErrorProps";

const ModalError = (props: ModalErrorPrpps) => {
    if (!props.show) {
        return null;
    }

    return (
        <div>
            <div className={styles.backdrop} onClick={props.onClose}></div>
            <div className={styles.modal}>
                <header>
                    <h3>{props.errors[0].title}</h3>
                </header>
                <main>
                    {props.errors.map(i => <p key={i.message}>{i.message}</p>)}
                </main>
                <footer>
                    <button onClick={props.onClose}>Ok</button>
                </footer>
            </div>
        </div>
    )
}

export default ModalError;