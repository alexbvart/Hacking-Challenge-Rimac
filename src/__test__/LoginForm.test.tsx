import {describe, expect, it, afterEach, vi} from 'vitest'
import {cleanup,  render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '../pages/Home/components/Form/LoginForm'
import { LoginFormMock, LoginFormMockError, UserDataMock } from '../_mocks_/LoginForm.mock'
import axios from "axios";

// jest.mock('axios');
vi.mock('axios')

describe('<LoginForm />', () => {
    
    afterEach(cleanup)
    beforeEach(()=>{
        vi.mocked(axios.get).mockReset()
        vi.mocked(axios.get).mockResolvedValue({data: UserDataMock})
        render( <LoginForm />);
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
