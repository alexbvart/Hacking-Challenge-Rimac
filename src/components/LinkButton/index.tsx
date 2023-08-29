import React from 'react'
import { LinkButtonProps } from '../../models/button-model';
import {Button as NUXButton} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const LinkButton : React.FC<LinkButtonProps> = ( {children, className='rounded-lg', href}) => {

    const navigate = useNavigate()
    const selectVehicleInsurancePlan = () => { navigate(href); }

    return (
            <NUXButton
                className={`${className} w-48 h-14 bg-rose-600 `}
                onClick={selectVehicleInsurancePlan}
            >
                <p className='text-white text-sm font-medium uppercase'>{children}</p>    
            </NUXButton>
    )
}

export default LinkButton;