import { useEffect } from 'react'
import Checkbox from '../../../../components/Input/Checkbox'
import { useVehiclePlanStore } from '../../../../store/vehiclePlan'
import { TOGGLE_AMOUNT_RUN_RED_LIGHT } from '../../../../utilities/constants'
import {Accordion, AccordionItem} from "@nextui-org/react";

const CoveragesToggles = () => {

    const amountPlan = useVehiclePlanStore( state => state.amountPlan )

    const updateCoveragePlan = useVehiclePlanStore( state => state.updateCoveragePlan )

    const onToggleCoverageRunRedLight = useVehiclePlanStore( state => state.onToggleCoverageRunRedLight )
    const toggleCoverageRunRedLight = useVehiclePlanStore( state => state.toggleCoverageRunRedLight )

    const disablerunOver =  amountPlan >= TOGGLE_AMOUNT_RUN_RED_LIGHT

    const onChangeCheck = (e: any) => {
        
        const {name, checked} = e.target ;      

        // console.log("check",{name,checked}, "store",{toggleCoverageRunRedLight});
        
        if (name == 'redLightRunning' ) {
            //si boton 'redLightRunning' esta desincronizado no hace nada
            checked != toggleCoverageRunRedLight && onToggleCoverageRunRedLight()
            checked != toggleCoverageRunRedLight && updateCoveragePlan(name, checked)
            // checked != toggleCoverageRunRedLight && checked = toggleCoverageRunRedLight
        }
        if(name == 'stolenTire' || name == 'runOver' ){
            updateCoveragePlan(name, checked)
        }

    }

    useEffect(() => {

        // console.log((disablerunOver ? '+16' : '-16'), {toggleCoverageRunRedLight});

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

    return (

        <div>
            <Accordion selectionMode="multiple" fullWidth variant='light'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                    <Checkbox name='stolenTire'  label='Llanta robada' type='checkbox' onChange={onChangeCheck}  />
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                    <Checkbox  name='redLightRunning'  label='Choque y/o pasarte la luz roja' type='checkbox'  onChange={onChangeCheck} disabled={disablerunOver} isSelected={toggleCoverageRunRedLight} />
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    <Checkbox name='runOver'  label='Atropello en la vía Evitamiento'  type='checkbox' onChange={onChangeCheck}/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CoveragesToggles