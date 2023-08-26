import React from 'react'

interface ButtonProps {
    isDirty: boolean;
    isValid: boolean;
    children: React.ReactNode;
    type: TypeButtonInput;
    className?: string;
}

type TypeButtonInput = "button" | "submit" | "reset" | undefined;

const Button : React.FC<ButtonProps> = ( {isDirty, isValid, children, type, className=''}) => {
    return (
        <div>
            <button
                type={type}
                disabled={!isDirty || !isValid }
                className={`${className} btn btn-primary`}>
                <p>{children}</p>    
            </button>

            {/* <div className="w-72 h-14 justify-center items-center inline-flex">
                <div className="w-72 h-14 bg-rose-600 rounded-lg" />
            </div> */}
        </div>
    )
}

export default Button;