import { create } from 'zustand'
import { BASE_AMOUNT_VEHICLE_PLAN, BASE_COVERAGE, RUN_OVER, RUN_RED_LIGHT, STEP_AMOUNT_VEHICLE_PLAN, STOLEN_TIREE } from '../utilities/constants'
import { VehiclePlanStore, updateCoveragePlanType, updatePlanAmountType } from '../models/plan-store-model'

export const useVehiclePlanStore = create<VehiclePlanStore>((set) => {  
    return {
        amountPlan: BASE_AMOUNT_VEHICLE_PLAN ,
        updatePlanAmount : (name: updatePlanAmountType) => {
            
            set((state) => {
                switch (name) {

                    case 'increasePlanAmount':
                        return  { amountPlan: state.amountPlan + STEP_AMOUNT_VEHICLE_PLAN }
        
                    case 'decreasePlanAmount':
                        return  { amountPlan: state.amountPlan - STEP_AMOUNT_VEHICLE_PLAN }
                }
            })
        }, 

        
        toggleCoverageRunRedLight: false,
        onToggleCoverageRunRedLight:  () => set((state: { toggleCoverageRunRedLight: boolean }) => ({ toggleCoverageRunRedLight:  !state.toggleCoverageRunRedLight })),
        
        
        ammuntCoverage: BASE_COVERAGE,
        updateCoveragePlan : (name:updateCoveragePlanType, checked:boolean) => {

            set((state) => {
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