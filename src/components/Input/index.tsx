import { useFormContext } from "react-hook-form"
import { InputProps } from "../../models/input-model";
import { formValidation } from "./formValidation";

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
            <label htmlFor={name}>{label}
            <input
                required={required}
                disabled={disabled}
                type={type}
                id={name}
                {...register(name)}
                min={min}
                max={max}
                step={step}
                value={value}
            />
            </label>
            
            {/* <div className="w-72 h-14 relative">
                <div className="w-72 h-14 left-0 top-0 absolute bg-white rounded border border-slate-300" />
                <div className="w-64 left-[16px] top-[16px] absolute text-indigo-300 text-base font-normal leading-normal">Celular</div>
            </div> */}
            {errors && formValidation(errors, name)}
        </div>
    );
};

export default Input;