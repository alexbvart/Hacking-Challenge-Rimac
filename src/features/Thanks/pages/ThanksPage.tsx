import { useVehiclePlanStore } from '../../../store/vehiclePlan'
import { useUserStore } from '../../../store/userStore'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import ThanksDestock from '../../../components/Icons/ThanksDestock';
import LinkButton from '../../../components/LinkButton';
import MenThank from '../../../components/Icons/MenThank';

export const ThanksPage = () => {

    const amountPlan = useVehiclePlanStore(state=> state.amountPlan)
    const ammuntCoverage = useVehiclePlanStore(state=> state.ammuntCoverage)

    const dni = useUserStore(state=> state.dni)
    const cellPhone = useUserStore(state=> state.cellPhone)
    const licensePlate = useUserStore(state=> state.licensePlate)
    const mailing = useUserStore(state=> state.mailing)
    const name = useUserStore(state=> state.name)


    return (
        <>  
            <div className=' responsive-two-col relative' >
                <div className='w-full lg:w-1/2 flex flex-row justify-between items-center '> 
                    <div className='w-full bg-image-cover'>
                        <MenThank/>
                    </div>
                </div>
                <section className="w-full flex items-center gap-4 py-8 bg-white
                                    sticky bottom-0 ">
                    <main className='flex flex-col gap-4'>
                        <h1 className='f-cta'>
                            <span className='text-rose-500 block'>¡Te damos la bienvenida! </span>
                            Cuenta con nosotros para proteger tu vehículo
                        </h1>
                        <p className='f-sm'>
                            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo
                            <span className='text-slate-800'>{mailing && `: ${mailing}`}</span>
                        </p>
                        <LinkButton href="#" > cómo usar mi seguro </LinkButton>
                    </main>

                </section>
            </div>


            {/* <Popover showArrow placement="bottom">
                <PopoverTrigger>
                    Store
                </PopoverTrigger>
                <PopoverContent className="p-1">
                    <p>dni: {dni}</p>
                    <p>name: {name}</p>
                    <p>celular: {cellPhone}</p>
                    <p>placa: {licensePlate}</p>
                    <p>correo: {mailing}</p>
                    <p>monto_final: {amountPlan}</p>
                    <p>covertura mensual: {ammuntCoverage}</p>
                </PopoverContent>
            </Popover> */}


        </>
    )
}
