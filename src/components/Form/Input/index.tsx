import { useFormContext } from "react-hook-form"


interface InputProps {
    name: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    // trigger: any; // Utiliza el tipo correcto para 'trigger'
}

const formValidation = (errors:any, errorKey:string) => {
    
  return errors[errorKey] ? (
    // <Typography color='red'>{errors[errorKey].message}</Typography>
    <span color='red'>{errors[errorKey].message}</span>
  ) : (
    ''
  );
};

export const Input: React.FC<InputProps> = ({
  name,
  label = '',
  type,
  disabled = false,
  required = false,
//   trigger,
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
                // {...(trigger ? { onChange: () => trigger && trigger() } : {})}
            />
            </label>
            {errors && formValidation(errors, name)}
        </div>
    );
};

export default Input;