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
                            <h3>{props.title}</h3>
                        </header>
                        <main>
                            {props.errors.map(i => (
                                <div key={i.title + ':' + i.message}>
                                    <p>
                                        <span>{i.title}: </span>
                                        {i.message}
                                    </p>
                                </div>
                            ))}
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