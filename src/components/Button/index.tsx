import React from 'react'
import { ButtonProps } from '../../models/button-model';
import {Button as NUXButton} from "@nextui-org/react";

const Button : React.FC<ButtonProps> = ( {isDirty, isValid, children, type, className='rounded-lg'}) => {

    const isDisable = (!isDirty || !isValid)
    return (
        <div>
            <NUXButton
                type={type}
                // disabled={!isDirty || !isValid}
                {... ( (isDisable) ? { disabled: (isDisable) } : {} )}
                className={`${className} w-48 h-14 ${isDisable ? 'bg-rose-400' :'bg-rose-600'} `}
            >
                <p className='text-white text-sm font-medium uppercase'>{children}</p>    
            </NUXButton>
        </div>
    )
}

export default Button;