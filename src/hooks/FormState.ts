import { ChangeEvent, useState } from "react";
import FromState from "../interfaces/FormState";

export const useFormState = (defValue: string): FromState => {
    const [value, setValue] = useState(defValue);

    return {
        value,
        reset: () => setValue(''),
        onChange: (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event?.target?.value);
        }
    }
}
