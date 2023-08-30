import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { schema } from './schemas/login-form-schema'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { InputsForLogin } from '../../../../models/input-model'
import { useUserStore } from '../../../../store/userStore'
import { useNavigate } from "react-router-dom";
import { PLAN_PATH } from '../../../../routes/routesPath'
import { Checkbox } from '@nextui-org/react'

export const LoginForm = () => {

    const setDni = useUserStore(state => state.setDni)
    const setCellPhone = useUserStore(state => state.setCellPhone)
    const setLicensePlate = useUserStore(state => state.setLicensePlate)
    const navigate = useNavigate();

    const formMethods  = useForm({
        defaultValues: {
            dni: '',
            cellPhone: '',
            licensePlate: "",
            acceptTerms: true
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const {
        register, 
        handleSubmit, 
        // watch, 
        formState : {isDirty, isValid,errors}, 
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
            <div className='flex flex-col py-4 gap-6'>
                <h2 className='fb-base'>Déjanos tus datos</h2>

                <FormProvider { ...formMethods} >
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <Input name='dni'  label='DNI' required={true} type='number' />
                        <Input name='cellPhone'  label='Celular' required={true} type='number'/>
                        <Input name='licensePlate'  label='Placa' required={true} />

                        <Checkbox  color="success"  radius="sm" isRequired {...register('acceptTerms')} >
                                <span className="text-slate-400">
                                Acepto la{` `}
                                <span className="text-slate-800 underline">Política de Protecciòn de Datos</span>{` `}
                                y los {` `}
                                <span className="text-slate-800  underline ">Términos y Condiciones</span>.
                            </span>
                        </Checkbox>
                        {errors.acceptTerms && <span className='f-xs'>This field is required</span>}


                        <Button type="submit" isDirty={isDirty} isValid={isValid} > COTÍZALO </Button>

                    </form>
                </FormProvider>
            </div>

        </>
    )
}
