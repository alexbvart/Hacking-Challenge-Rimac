import { CheckboxProps } from "../../models/input-model";
import {Switch} from "@nextui-org/react";

export const Checkbox: React.FC<CheckboxProps> = ({
    name,
    label = '',
    disabled = false,
    // required = false,
    onChange,
    checked,
    isSelected

}) => {

    return (
        <>
             <Switch 
                name={name}
                color="success" 
                isDisabled={disabled}  
                defaultSelected={checked}
                onChange={onChange}
                isSelected={isSelected}
                className=" min-w-full w-full flex flex-row-reverse justify-between gap-4 overflow-x-hidden"
                >
                    <span className="w-full">{label}</span>
            </Switch>
        </>
    );
};

export default Checkbox;