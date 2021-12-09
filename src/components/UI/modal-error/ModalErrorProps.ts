import { HTMLProps } from "react";

export interface ModalErrorObj {
    title: string;
    message: string;
}

export interface ModalErrorPrpps extends HTMLProps<object> {
    title: string;
    errors: ModalErrorObj[];
    show: boolean;
    onClose: () => void;
}