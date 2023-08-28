export type InputsForLogin = {
    dni: string
    cellPhone: string
    licensePlate: string
}

export type InputsForPlan = {
    amount : number,
    stolenTire: boolean,
    runOver: boolean,
    redLightRunning: boolean,
}

export interface InputProps {
    name: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    min?: number;
    max?:number;
    step?: number;
    value?: any
    // onClick?: React.MouseEventHandler<HTMLInputElement>;
    // onChange?: React.ChangeEventHandler<HTMLInputElement>;
}


export interface CheckboxProps {
    name: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    // onClick?: React.MouseEventHandler<HTMLInputElement>;
    onChange?: React.FormEventHandler<HTMLLabelElement>  ;
    checked?: boolean;
    isSelected?:boolean
}


