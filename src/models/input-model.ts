export type InputsForLogin = {
    dni: string
    cellPhone: string
    licensePlate: string
}

export interface InputProps {
    name: string;
    label?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
}