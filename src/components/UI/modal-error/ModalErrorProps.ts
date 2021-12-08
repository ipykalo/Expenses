import { HTMLProps } from "react";

export interface ModalErrorObj {
    title: string;
    message: string;
}

export interface ModalErrorPrpps extends HTMLProps<object> {
    errors: ModalErrorObj[];
    show: boolean;
    onClose: () => void;
}