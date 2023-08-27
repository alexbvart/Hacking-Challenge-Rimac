import { CheckboxProps } from "../../models/input-model";

export const Checkbox: React.FC<CheckboxProps> = ({
    name,
    label = '',
    type='checkbox',
    disabled = false,
    required = false,
    onChange,
    checked
}) => {

    return (
        <>
            <label htmlFor={name}>{label}
            <input
                name={name}
                required={required}
                disabled={disabled}
                type={type}
                id={name}
                onChange={onChange}
                defaultChecked={checked}
            />
            </label>
        </>
    );
};

export default Checkbox;