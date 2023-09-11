import {describe, expect, test} from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import Accordion from '../components/Accordion/Accordion';

describe('<Accordion />', ()=>{

    beforeEach(()=>{
        render( 
            <Accordion title='Hola a todos'>
                <span> ipsum, dolor sit amet consectetur adipisicing elit. Fuga aliquid adipisci fugiat expedita tempore illo similique deserunt iure quidem, repellendus fugit earum, in delectus blanditiis ut esse quo beatae doloremque?</span>
                <span>Ver mas</span>
            </Accordion>
        );
    })

    test("should show title all the time", ()=>{
        expect(screen.getByText(/hola a todos/i)).toBeDefined()
    })

    test("should not show the content at the start",()=>{
        expect(screen.queryByText(/Lorem/i)).toBeNull()
    })

    test("should show the content when button us clicked",()=>{
        const button = screen.getByText(/open/i);
        fireEvent.click(button);

        expect(screen.getByText(/ver mas/i)).toBeDefined()
    })

    test("should hide the content when button us clicked",()=>{
        const buttonOpen = screen.getByText(/open/i);
        fireEvent.click(buttonOpen);

        const buttonClose = screen.getByText(/close/i);
        fireEvent.click(buttonClose);

        expect(screen.queryByText(/ver mas/i)).toBeNull()
    })
} )