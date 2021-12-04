import { ChangeEvent } from "react";

export default interface FromState {
    value: string;
    reset: () => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
