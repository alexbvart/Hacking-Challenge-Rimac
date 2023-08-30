import {afterEach} from 'vitest'
import {cleanup,  fireEvent,   render, screen } from '@testing-library/react'
import AmountButtons from '../features/Plan/components/Amount/AmountButtons'

/**
 * @vitest-environment jsdom
 */

describe('<AmountButtons/>', () => {

    afterEach(cleanup)
    beforeEach(()=>{
        render( <AmountButtons/>);
    })

    it('should increase the amount plan when "+" button is clicked', async () => {
        const amountPlan = screen.getByText('$ 14000.00');
        const increaseButton = screen.getByRole('button', { name: '+' });

        fireEvent.click(increaseButton);
        fireEvent.click(increaseButton);

        expect(amountPlan).toHaveTextContent('$ 14200.00');
        expect(amountPlan).toBeInTheDocument();
    });

    it('should decrease the amount plan when "-" button is clicked', async () => {
        const decreaseButton = screen.getByRole('button', { name: '-' });
        const amountPlan = screen.getByText(/14200/i);

        fireEvent.click(decreaseButton);

        expect(amountPlan).toHaveTextContent('14100');
        expect(amountPlan).toBeInTheDocument();
    });

    it('should increase the value of the plan amount +100, n times each time the "+" button is pressed', () => {
        const decreaseButton = screen.getByRole('button', { name: '+' });

        screen.debug()
        const amountPlanValue = screen.getByText('$ 14100.00');
    
        fireEvent.click(decreaseButton);
        expect(amountPlanValue).toHaveTextContent('$ 14200.00');
    
        fireEvent.click(decreaseButton);
        expect(amountPlanValue).toHaveTextContent('$ 14300.00');
    
        fireEvent.click(decreaseButton);
        expect(amountPlanValue).toHaveTextContent('$ 14400.00');
    });

    it('should decrease -100 until the amount is 12500.00 and disable the "-" button.', () => {
        const decreaseButton = screen.getByRole('button', { name: '-' });

        const amountPlanValue = screen.getByText('$ 14400.00');
        
        fireEvent.click(decreaseButton); //14300
        fireEvent.click(decreaseButton); //14200
        fireEvent.click(decreaseButton); //14100
        fireEvent.click(decreaseButton); //14000
        expect(amountPlanValue).toHaveTextContent('$ 14000.00');
        fireEvent.click(decreaseButton); //13900
        fireEvent.click(decreaseButton); //13800
        fireEvent.click(decreaseButton); //13700
        fireEvent.click(decreaseButton); //13600
        fireEvent.click(decreaseButton); //13500
        fireEvent.click(decreaseButton); //13400
        fireEvent.click(decreaseButton); //13300
        fireEvent.click(decreaseButton); //13200
        fireEvent.click(decreaseButton); //13100
        fireEvent.click(decreaseButton); //13000
        expect(amountPlanValue).toHaveTextContent('$ 13000.00');
        fireEvent.click(decreaseButton); //12900
        fireEvent.click(decreaseButton); //12800
        fireEvent.click(decreaseButton); //12700
        fireEvent.click(decreaseButton); //12600
        fireEvent.click(decreaseButton); //12500
        expect(amountPlanValue).toHaveTextContent('$ 12500.00');
        
        //the "-" button should be disabled.
        expect(decreaseButton).toBeDisabled()
        fireEvent.click(decreaseButton); //12400
        expect(amountPlanValue).toHaveTextContent('$ 12500.00');
        fireEvent.click(decreaseButton); //12400
        expect(amountPlanValue).toHaveTextContent('$ 12500.00');
        fireEvent.click(decreaseButton); //12400
        expect(decreaseButton).toBeDisabled()

    });
})