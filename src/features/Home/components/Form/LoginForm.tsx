import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { schema } from './schemas/login-form-schema'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { InputsForLogin } from '../../../../models/input-model'
import { useUserStore } from '../../../../store/userStore'
import { useNavigate } from "react-router-dom";
import { PLAN_PATH } from '../../../../routes/routesPath'

export const LoginForm = () => {

    const setDni = useUserStore(state => state.setDni)
    const setCellPhone = useUserStore(state => state.setCellPhone)
    const setLicensePlate = useUserStore(state => state.setLicensePlate)
    const navigate = useNavigate();

    const formMethods  = useForm({
        defaultValues: {
            dni: '',
            cellPhone: '',
            licensePlate: ""
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const {
        // register, 
        handleSubmit, 
        // watch, 
        formState : {isDirty, isValid}, 
        reset
    } = formMethods;



    const onSubmit: SubmitHandler<InputsForLogin> = async (data) => {

        if (data) {
            const {dni, cellPhone, licensePlate} = data

            dni && setDni(data.dni)
            cellPhone && setCellPhone(data.cellPhone)
            licensePlate && setLicensePlate(data.licensePlate)
        }
        navigate(PLAN_PATH);
        reset();
    }
 

    return (
        <>
            <FormProvider { ...formMethods} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='dni'  label='DNI' required={true} type='number' />
                    <Input name='cellPhone'  label='Celular' required={true} type='number'/>
                    <Input name='licensePlate'  label='Placa' required={true} />
                    <Button type="submit" isDirty={isDirty} isValid={isValid} > COTÍZALO </Button>
                </form>
            </FormProvider>
        </>
    )
}
