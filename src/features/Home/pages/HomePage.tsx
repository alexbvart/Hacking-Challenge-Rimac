import WomanMobile from '../../../components/Icons/WomanMobile'
import { LoginForm } from '../components/Form/LoginForm'

const HomePage = () => {
    return (
        <>
            <section className="flex items-center gap-4 pl-8 pt-4">
                <main className='flex flex-col gap-4'>
                    <span className='f-xs'>¡NUEVO!</span>
                    <h1 className='f-cta'>Seguro Vehicular <span className='text-rose-500'>Tracking</span></h1>
                    <p className='f-sm'>Cuentanos donde le haras seguimiento a tu seguro</p>
                </main>
                <WomanMobile/>
            </section>

            <section className="flex flex-col px-8 pb-4">
                <LoginForm/>
            </section>
        </>
    )
}

export default HomePage