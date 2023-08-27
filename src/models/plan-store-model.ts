export interface VehiclePlanStoreActions {
    amountPlan: number;
    increasePlanAmount: (state: { amountPlan: number }) => void;
    decreasePlanAmount: (state: { amountPlan: number }) => void;
    activateInsuranceStolenTire: (state: { amountPlan: number }) => void;
    deactivateInsuranceStolenTire: (state: { amountPlan: number }) => void;
    activateInsuranceRunRedLight: (state: { amountPlan: number }) => void;
    deactivateInsuranceRunRedLight: (state: { amountPlan: number }) => void;
    activateInsuranceRunOver: (state: { amountPlan: number }) => void;
    deactivateInsuranceRunOver: (state: { amountPlan: number }) => void;
}

export interface VehiclePlanStoreState {
  amountPlan: number;
}

export type VehiclePlanStore = VehiclePlanStoreState & VehiclePlanStoreActions 