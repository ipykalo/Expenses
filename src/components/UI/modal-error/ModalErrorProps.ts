import { HTMLProps } from "react";

export default interface ModalErrorPrpps extends HTMLProps<object> {
    title: string;
    message: string;
    onClose: () => void;
}