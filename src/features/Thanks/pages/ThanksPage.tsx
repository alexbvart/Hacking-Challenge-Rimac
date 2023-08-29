import { useUserStore } from '../../../store/userStore'
import LinkButton from '../../../components/LinkButton';
import MenThank from '../../../components/Icons/MenThank';
import DataStore from '../components/DataStore/DataStore';

export const ThanksPage = () => {

    const mailing = useUserStore(state=> state.mailing)


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
                        <DataStore/>
                    </main>

                </section>
            </div>
        </>
    )
}
