import React, {useEffect} from 'react'

import { MAX_AMOUNT_VEHICLE_PLAN, MIN_AMOUNT_VEHICLE_PLAN, STEP_AMOUNT_VEHICLE_PLAN, TOGGLE_AMOUNT_RUN_RED_LIGHT } from '../../../../utilities/constants';
import Checkbox from '../../../../components/Input/Checkbox';
import { useVehiclePlanStore } from '../../../../store/vehiclePlan';
import { updatePlanAmountType } from '../../../../models/plan-store-model';

const FormPlan = () => {

    const amountPlan = useVehiclePlanStore( state => state.amountPlan )
    const updatePlanAmount = useVehiclePlanStore( state => state.updatePlanAmount )


    const ammuntCoverage = useVehiclePlanStore( state => state.ammuntCoverage )
    const updateCoveragePlan = useVehiclePlanStore( state => state.updateCoveragePlan )

    const onToggleCoverageRunRedLight = useVehiclePlanStore( state => state.onToggleCoverageRunRedLight )
    const toggleCoverageRunRedLight = useVehiclePlanStore( state => state.toggleCoverageRunRedLight )


    const disableAddAmount = () => amountPlan <= MIN_AMOUNT_VEHICLE_PLAN
    const disableSubtractAmount = () => amountPlan >= MAX_AMOUNT_VEHICLE_PLAN
    const disablerunOver =  amountPlan >= TOGGLE_AMOUNT_RUN_RED_LIGHT
    const selectVehicleInsurancePlan = () => {}


    const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;

        console.log("check",{name,checked}, "store",{toggleCoverageRunRedLight});
        
        if (name == 'redLightRunning' ) {
            //si boton 'redLightRunning' esta desincronizado no hace nada
            checked != toggleCoverageRunRedLight && onToggleCoverageRunRedLight()
            checked != toggleCoverageRunRedLight && updateCoveragePlan(name, checked)
        }
        if(name == 'stolenTire' || name == 'runOver' ){
            updateCoveragePlan(name, checked)
        }

    }

    useEffect(() => {

        console.log((disablerunOver ? '+16' : '-16'), {toggleCoverageRunRedLight});

        //si 16 + encendido = apagamos ✅
        if (disablerunOver) {
            toggleCoverageRunRedLight && updateCoveragePlan('redLightRunning', !toggleCoverageRunRedLight)
            toggleCoverageRunRedLight && onToggleCoverageRunRedLight()
            //si +16 + apagado = nada
        }else{
            // -16 +encendido = encendido✅
            toggleCoverageRunRedLight && updateCoveragePlan('redLightRunning', !toggleCoverageRunRedLight)
            toggleCoverageRunRedLight && onToggleCoverageRunRedLight()
        }
      return () => {
        
      }
    }, [disablerunOver])
    

    const onChangeAmount = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        // Comprueba si name es un valor válido de updatePlanAmountType
        if (name === 'increasePlanAmount' || name === 'decreasePlanAmount') {
            updatePlanAmount(name as updatePlanAmountType)
        }
    }

    return (
        <>  
                <button name='decreasePlanAmount' disabled={disableAddAmount()} onClick={onChangeAmount}>-100</button>
                <input type="number"  value={amountPlan} step={STEP_AMOUNT_VEHICLE_PLAN} min={MIN_AMOUNT_VEHICLE_PLAN} max={MAX_AMOUNT_VEHICLE_PLAN} disabled />
                <button name='increasePlanAmount'disabled={disableSubtractAmount()} onClick={onChangeAmount}>+100</button>

                <button onClick={selectVehicleInsurancePlan}> LO QUIERO</button>

                <br></br>
                <br></br>

                <Checkbox name='stolenTire'  label='Llanta robada' type='checkbox' onChange={onChangeCheck} />
                <br /> {toggleCoverageRunRedLight ? 'encendido' : 'apagado'}
                <Checkbox  name='redLightRunning'  label='Choque y/o pasarte la luz roja' type='checkbox'  onChange={onChangeCheck} disabled={disablerunOver} checked={toggleCoverageRunRedLight} />
                <Checkbox name='runOver'  label='Atropello en la vía Evitamiento'  type='checkbox' onChange={onChangeCheck}/>
                <p>{ammuntCoverage}</p>

        </>
  )
}

export default FormPlan