import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalError.module.css";
import { ModalErrorPrpps } from "./ModalErrorProps";

const ModalError = (props: ModalErrorPrpps) => {
    if (!props.show) {
        return null;
    }

    return (
        ReactDOM.createPortal(
            <Fragment>
                <div className={styles.backdrop} onClick={props.onClose}>
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
            </Fragment>,
            document.getElementById('modal-root') as Element
        )
    )
}

export default ModalError;