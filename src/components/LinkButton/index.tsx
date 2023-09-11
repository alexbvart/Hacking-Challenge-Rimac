import React from 'react'
import { LinkButtonProps } from '../../models/button-model';
import {Button as NUXButton} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const LinkButton : React.FC<LinkButtonProps> = ( {children, className='rounded-lg', href}) => {

    return (
            <NUXButton
                className={`${className} w-48 h-14 bg-primary `}
            >
                <Link to={href} className='text-white text-sm font-medium uppercase'>{children}</Link>    
            </NUXButton>
    )
}

export default LinkButton;