import {cleanup,  fireEvent,   render, renderHook, screen, } from '@testing-library/react'

import CoveragesToggles from "../features/Plan/components/CoverageToggles";
import { useVehiclePlanStore } from '../store/vehiclePlan';
import { act } from 'react-dom/test-utils';
import { BASE_COVERAGE, RUN_OVER, STOLEN_TIREE } from '../utilities/constants';


vi.mock('useNavigate')


describe("<CoveragesToggles/>", ()=>{
    
    afterEach(cleanup)
    beforeEach(()=>{
        render( 
        <>
            <CoveragesToggles />
        </>);
    })


    // ROLES
    // button:

    // Name "Llanta robada":
    // Name "Choque y/o pasarte la luz roja":
    // Name "Atropello en la vía Evitamiento":
    
    it('should render the correct label for each Checkbox component', () => {
        const stolenTireLabel = screen.getByRole('button', { name: /Llanta robada/i });
        const redLightRunningLabel = screen.getByRole('button', { name: 'Choque y/o pasarte la luz roja' });
        const runOverLabel = screen.getByRole('button', { name: /Atropello en la vía Evitamiento/i });
    
        // Assert
        expect(stolenTireLabel).toBeInTheDocument();
        expect(redLightRunningLabel).toBeInTheDocument();
        expect(runOverLabel).toBeInTheDocument();
    });

    it('should not change state when redLightRunning checkbox is disabled', () => {
        // Arrange
        const redLightRunningCheckbox = screen.getByRole('button', { name: 'Choque y/o pasarte la luz roja' });
        const initialToggleCoverageRunRedLight = useVehiclePlanStore.getState().toggleCoverageRunRedLight;
  
        // Act
        fireEvent.click(redLightRunningCheckbox);
  
        // Assert
        expect(useVehiclePlanStore.getState().toggleCoverageRunRedLight).toBe(initialToggleCoverageRunRedLight);
    });

    it('should update state correctly when a Checkbox /LLANTA ROBADA/ is checked or unchecked', () => {
        const { result } = renderHook(() => useVehiclePlanStore());

        act(() => {
            result.current.updateCoveragePlan('stolenTire', true);
        });
        expect(result.current.ammuntCoverage).toBe(BASE_COVERAGE + STOLEN_TIREE);

        act(() => {
            result.current.updateCoveragePlan('stolenTire', false);
        });
        expect(result.current.ammuntCoverage).toBe(BASE_COVERAGE);
    });

    it('should update the status correctly when all three checkboxes are checked or unchecked', () => {
        const { result } = renderHook(() => useVehiclePlanStore());

        act(() => {
            result.current.updateCoveragePlan('stolenTire', true);  // 20 + 15 = 35
            result.current.updateCoveragePlan('stolenTire', false); // 35 - 15 = 20
            result.current.updateCoveragePlan('runOver', true);     // 20 + 50 = 70
            result.current.updateCoveragePlan('stolenTire', true);  // 70 + 15 = 85
        });
        expect(result.current.ammuntCoverage).toBe(BASE_COVERAGE + STOLEN_TIREE - STOLEN_TIREE + RUN_OVER + STOLEN_TIREE);

        act(() => {
            result.current.updateCoveragePlan('runOver', false);   // 85 - 50 = 35
            result.current.updateCoveragePlan('redLightRunning', true); // 35 + 20 = 55

        });
        expect(result.current.ammuntCoverage).toBe(55);
    });


})