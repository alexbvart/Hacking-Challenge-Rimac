import { useFormContext } from "react-hook-form"
import { InputProps } from "../../models/input-model";
import { formValidation } from "./formValidation";
import {Input as NUIButton} from "@nextui-org/react";

export const Input: React.FC<InputProps> = ({
    name,
    label = '',
    type,
    value,
    disabled = false,
    required = false,
    min  ,
    max ,
    step ,
}) => {

    const {register, formState : {errors} } = useFormContext();

    return (
        <div>

            <NUIButton
                size="lg"
                variant="bordered"
                radius="sm"
                placeholder={label}
                isRequired={required}
                required={required}
                disabled={disabled}
                type={type}
                id={name}
                {...register(name)}
                min={min}
                max={max}
                step={step}
                value={value}
                className=""
                errorMessage={formValidation(errors, name)}
            />
        </div>
    );
};

export default Input;