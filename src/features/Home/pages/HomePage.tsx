import WomanDesktop from '../../../components/Icons/WomanDesktop'
import { LoginForm } from '../components/Form/LoginForm'

const HomePage = () => {
    return (
        <>
            <div className={`responsive-two-col gap-12`} >
                <section className="w-full flex justify-between gap-4 
                        md:flex-col-reverse"
                >
                    <main className='flex flex-col gap-4'>
                        <span className='f-xs'>¡NUEVO!</span>
                        <h1 className='f-cta'>Seguro Vehicular <span className='text-rose-500'>Tracking</span></h1>
                        <p className='f-sm'>Cuéntanos donde le haras seguimiento a tu seguro</p>
                    </main>
                    <div className='w-full bg-image-cover-city'>
                        <WomanDesktop/>
                    </div>
                </section>

                <section className="w-full flex flex-col ">
                    <LoginForm/>
                </section>
            </div>
            
        </>
    )
}

export default HomePage