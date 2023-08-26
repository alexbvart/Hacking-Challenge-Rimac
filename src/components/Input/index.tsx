import { useFormContext } from "react-hook-form"
import { InputProps } from "../../models/input-model";
import { formValidation } from "./formValidation";

export const Input: React.FC<InputProps> = ({
    name,
    label = '',
    type,
    disabled = false,
    required = false,
}) => {

    const {register, formState : {errors} } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}
            <input
                required={required}
                disabled={disabled}
                type={type}
                id={name}
                {...register(name)}
            />
            </label>
            {errors && formValidation(errors, name)}
        </div>
    );
};

export default Input;