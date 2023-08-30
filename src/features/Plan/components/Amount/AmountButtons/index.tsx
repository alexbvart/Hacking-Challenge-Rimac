import {Button, ButtonGroup} from "@nextui-org/react";
import { MAX_AMOUNT_VEHICLE_PLAN, MIN_AMOUNT_VEHICLE_PLAN } from "../../../../../utilities/constants";
import { useVehiclePlanStore } from "../../../../../store/vehiclePlan";
import { updatePlanAmountType } from "../../../../../models/plan-store-model";
const AmountButtons = () => {

    const amountPlan = useVehiclePlanStore( state => state.amountPlan )
    const updatePlanAmount = useVehiclePlanStore( state => state.updatePlanAmount )

    const disableAddAmount =  amountPlan <= MIN_AMOUNT_VEHICLE_PLAN
    const disableSubtractAmount =  amountPlan >= MAX_AMOUNT_VEHICLE_PLAN

    const onChangeAmount = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        // Comprueba si name es un valor válido de updatePlanAmountType
        if (name === 'increasePlanAmount' || name === 'decreasePlanAmount') {
            updatePlanAmount(name as updatePlanAmountType)
        }
    }

  return (
    <div>
        <ButtonGroup className="w-full bg-white rounded border border-slate-300" radius="sm" fullWidth>
            <Button name='decreasePlanAmount' isDisabled ={disableAddAmount} onClick={onChangeAmount} className=" w-1/4 bg-white" >-</Button>
            <span className="w-2/4 text-center fb-base px-1"> $ {amountPlan}.00 </span>
            {/* <input type="number"  value={amountPlan} step={STEP_AMOUNT_VEHICLE_PLAN} min={MIN_AMOUNT_VEHICLE_PLAN} max={MAX_AMOUNT_VEHICLE_PLAN} disabled className=" text-center text-gray-600 text-base " /> */}
            <Button name='increasePlanAmount'isDisabled ={disableSubtractAmount} onClick={onChangeAmount} className="w-1/4 bg-white">+</Button>
        </ButtonGroup>
    </div>
  )
}

export default AmountButtons