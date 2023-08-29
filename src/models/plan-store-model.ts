export type  updatePlanAmountType = 'increasePlanAmount' | 'decreasePlanAmount' 
export type  updateCoveragePlanType  = 'stolenTire' | 'redLightRunning' | 'runOver'

export interface VehiclePlanStore {
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
