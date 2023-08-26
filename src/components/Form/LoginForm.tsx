import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { schema } from './schemas/login-form-schema'
import Input from './Input'
import Button from '../Button'



type Inputs = {
    dni: string
    cellPhone: string
    licensePlate: string
}

export const LoginForm = () => {

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
        register, 
        handleSubmit, 
        watch, 
        formState : {errors, isDirty, isValid}, 
        reset
    } = formMethods;

    const dniWatch = watch('dni') 
    const cellPhoneWatch = watch('cellPhone') 
    const licensePlateWatch = watch('licensePlate') 

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log({data})
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


            {isDirty && isValid && (
                <>
                    <p>{dniWatch}</p> 
                    <p>{cellPhoneWatch}</p>
                    <p>{licensePlateWatch}</p>
                </>
            )}
        </>
    )
}
