import { create } from 'zustand'
import { BASE_AMOUNT_VEHICLE_PLAN, BASE_COVERAGE, MIN_AMOUNT_VEHICLE_PLAN, RUN_OVER, RUN_RED_LIGHT, STEP_AMOUNT_VEHICLE_PLAN, STOLEN_TIREE } from '../utilities/constants'


type  updatePlanAmountType = 'increasePlanAmount' | 'decreasePlanAmount'
type  updateCoveragePlanType  = 'stolenTire' | 'redLightRunning' | 'runOver'

interface VehiclePlanStore {
    amountPlan: number;
    updatePlanAmount: (name: updatePlanAmountType) => void;
    ammuntCoverage: number;
    toggleCoverageRunRedLight: boolean;
    onToggleCoverageRunRedLight: () => void;
    updateCoveragePlan: (
      name: updateCoveragePlanType,
      checked: boolean
    ) => void;
}


export const useVehiclePlanStore = create<VehiclePlanStore>((set,get) => {  
    return {
        amountPlan: BASE_AMOUNT_VEHICLE_PLAN,

        updatePlanAmount : (name:string) => {
            
            return set((state: { amountPlan: number }) => {
                switch (name) {

                    case 'increasePlanAmount':
                        return  { amountPlan: state.amountPlan + STEP_AMOUNT_VEHICLE_PLAN }
        
                    case 'decreasePlanAmount':
                        return  { amountPlan: state.amountPlan - STEP_AMOUNT_VEHICLE_PLAN }
                        
                }
            })
        }, 

        ammuntCoverage: BASE_COVERAGE,

        toggleCoverageRunRedLight: false,
        onToggleCoverageRunRedLight:  () => set((state: { toggleCoverageRunRedLight: boolean }) => ({ toggleCoverageRunRedLight:  !state.toggleCoverageRunRedLight })),


        updateCoveragePlan : (name:string, checked:boolean) => {

            console.log("valores en estado",{name,checked});
            
            
            return set((state: { ammuntCoverage: number }) => {
                switch (name) {

                    case 'stolenTire':
                        return  (checked) ? { ammuntCoverage: state.ammuntCoverage + STOLEN_TIREE } : { ammuntCoverage: state.ammuntCoverage - STOLEN_TIREE };
        
                    case 'redLightRunning':
                        return  (checked) ? { ammuntCoverage: state.ammuntCoverage + RUN_RED_LIGHT } : { ammuntCoverage: state.ammuntCoverage - RUN_RED_LIGHT };
                        
                    case 'runOver':
                        return  (checked) ? { ammuntCoverage: state.ammuntCoverage + RUN_OVER } : { ammuntCoverage: state.ammuntCoverage - RUN_OVER };
                }
            })
        } 
    }
    
})