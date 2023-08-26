export type TypeButtonInput = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
    isDirty: boolean;
    isValid: boolean;
    children: React.ReactNode;
    type: TypeButtonInput;
    className?: string;
}