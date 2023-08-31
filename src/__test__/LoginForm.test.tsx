import {describe, expect, it, afterEach, vi} from 'vitest'
import {cleanup,  fireEvent,   render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginFormMock, LoginFormMockError, UserDataMock } from '../_mocks_/LoginForm.mock'
import axios from "axios";
import { LoginForm } from '../features/Home/components/Form/LoginForm';
import { PLAN_PATH } from '../routes/routesPath';
import { MemoryRouter as Router } from "react-router-dom";

// jest.mock('axios');
vi.mock('axios')
vi.mock('useNavigate')

describe('<LoginForm />', () => {
    
    afterEach(cleanup)
    beforeEach(()=>{
        vi.mocked(axios.get).mockReset()
        vi.mocked(axios.get).mockResolvedValue({data: UserDataMock})
        render( <Router> <LoginForm /> </Router>);
    })

    it('should render three inputs + button', () => {
        const dniInput = screen.getByRole('spinbutton',{ name: /dni/i});
        const cellPhoneInput = screen.getByRole('spinbutton',{ name: /celular/i});
        const licensePlateInput = screen.getByRole('textbox',{ name: /placa/i});
        const button = screen.getByRole('button',{ 'name': /COTÍZALO/i});

        expect(dniInput).toBeDefined();
        expect(cellPhoneInput).toBeDefined();
        expect(licensePlateInput).toBeDefined();
        expect(button).toBeDefined();
    })

    // Tests that submitting form data with an invalid DNI displays an error message and prevents form submission
    it('should display error message and prevent form submission when DNI is invalid', () => {
        const dniInput = screen.getByRole('spinbutton',{ name: /dni/i});
        const submitButton = screen.getByRole('button',{ 'name': /COTÍZALO/i});

    
        fireEvent.change(dniInput, { target: { value: '123' } });
        fireEvent.click(submitButton);
    
        // screen.debug()
        waitFor(()=>{
            expect(dniInput).toContain({ value: '123' })
            expect(screen.getByText(/DNI debe ser máximo de 8 caracteres/i))
            expect(submitButton).toBeDisabled()
        })

    });

    it('should enable the submit botton if the form values are valid', async () => {
        const dniInput = screen.getByRole('spinbutton',{ name: /dni/i});
        const cellPhoneInput = screen.getByRole('spinbutton',{ name: /celular/i});
        const licensePlateInput = screen.getByRole('textbox',{ name: /placa/i});
        const button = screen.getByRole('button',{ 'name': /COTÍZALO/i});

        await userEvent.type(dniInput, LoginFormMock.dni);
        await userEvent.type(cellPhoneInput, LoginFormMock.cellPhone);
        await userEvent.type(licensePlateInput, LoginFormMock.licensePlate);

        
        waitFor(()=>{
            expect(dniInput).toContain(LoginFormMock.dni)
            expect(cellPhoneInput).toContain(LoginFormMock.cellPhone)
            expect(licensePlateInput).toContain(LoginFormMock.licensePlate)
            expect(button).not.toHaveProperty('disabled', true)
        })
    })

        // Tests that error messages are displayed when required fields are missing
    it('should display error messages when required fields are missing', () => {
          // Act
          fireEvent.submit(screen.getByText(/COTÍZALO/i));

          // Assert
          expect(screen.findByText('DNI es requerido')).toBeDefined();
          expect(screen.findByText('Celular es requerido')).toBeDefined();
          expect(screen.findByText('Placa de auto es requerida')).toBeDefined();
          expect(screen.findByText('Acepte los termino para continuar')).toBeDefined();
    });


    it('should disabled the submit button if the form values are invalid', async()=>{
        const dniInput = screen.getByRole('spinbutton',{ name: /dni/i});
        const cellPhoneInput = screen.getByRole('spinbutton',{ name: /celular/i});
        const licensePlateInput = screen.getByRole('textbox',{ name: /placa/i});
        const button = screen.getByRole('button',{ 'name': /COTÍZALO/i});

        await userEvent.type(dniInput, LoginFormMockError.dni);
        await userEvent.type(cellPhoneInput, LoginFormMockError.cellPhone);
        await userEvent.type(licensePlateInput, LoginFormMockError.licensePlate);

        waitFor(()=>{
            expect(dniInput).toContain(LoginFormMockError.dni)
            expect(screen.getByText(/DNI debe ser máximo de 8 caracteres/i))
            
            expect(cellPhoneInput).toContain(LoginFormMockError.cellPhone)
            expect(screen.getByText(/Celular debe tener 9 caracteres/i))
            
            expect(licensePlateInput).toContain(LoginFormMockError.licensePlate)
            expect(screen.getByText(/La placa debe ser alfanumérico. Ejemplo: C2U-114s/i))
            
            expect(button).toHaveProperty('disabled', true)
            // expect(button).toHaveAttribute('disabled')
            // expect(button.disabled).toBeTruthy()
        })
    })

    it('should navigate to PLAN_PATH when submitting a valid form', async () => {
        const navigate = vitest.fn();
        const dniInput = screen.getByRole('spinbutton',{ name: /dni/i});
        const cellPhoneInput = screen.getByRole('spinbutton',{ name: /celular/i});
        const licensePlateInput = screen.getByRole('textbox',{ name: /placa/i});
        const button = screen.getByRole('button',{ 'name': /COTÍZALO/i});


        await userEvent.type(dniInput, LoginFormMock.dni);
        await userEvent.type(cellPhoneInput, LoginFormMock.cellPhone);
        await userEvent.type(licensePlateInput, LoginFormMock.licensePlate);
        await userEvent.click(button);

        // Assert
        waitFor(()=>{
            expect(navigate).toHaveBeenCalledTimes(1);
            expect(navigate).toHaveBeenCalledWith(PLAN_PATH);
        })
        });
        

    it('should return a user when calling api', async()=>{
        const dniInput = screen.getByRole('spinbutton',{ name: /dni/i});
        const cellPhoneInput = screen.getByRole('spinbutton',{ name: /celular/i});
        const licensePlateInput = screen.getByRole('textbox',{ name: /placa/i});
        const button = screen.getByRole('button',{ 'name': /COTÍZALO/i});

        await userEvent.type(dniInput, LoginFormMock.dni);
        await userEvent.type(cellPhoneInput, LoginFormMock.cellPhone);
        await userEvent.type(licensePlateInput, LoginFormMock.licensePlate);
        await userEvent.click(button);

        
        waitFor(()=>{
            expect(axios.get).toHaveBeenCalledTimes(1)
        })

    })
 })
