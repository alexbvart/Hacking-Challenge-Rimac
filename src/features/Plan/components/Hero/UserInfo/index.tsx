import { Suspense } from 'react'
import UserName from './UserName'
const UserInfo = () => {
    return (
        <Suspense
            fallback={
                <>
                    <div className='flex flex-col gap-2 pb-6 min-h-min lg:h-44 animate-pulse '>
                        <p className={`f-cta  rounded-lg"}`}>
                            ¡Hola 
                        </p>
                        <p className='f-sm'> Conoce las coberturas para tu plan </p>
                    </div>
                </>
            }
        >
            <UserName />
        </Suspense>
    )
}

export default UserInfo