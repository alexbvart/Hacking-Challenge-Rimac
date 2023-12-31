import useSWR from 'swr';
import { ErrorMessage, URL_PUBLIC_API } from '../../../../../utilities/constants';
import { fetchEndpoint } from '../../../../Home/services/call-endpoint';
import { useUserStore } from '../../../../../store/userStore';
import { UserDataMock } from '../../../../../_mocks_/LoginForm.mock';

const UserName = () => {
    
    const setName = useUserStore(state => state.setName)
    const setMailing = useUserStore(state => state.setMailing)

    const { data, error, isLoading } = useSWR(URL_PUBLIC_API, fetchEndpoint, {
        suspense: true,
        fallbackData: UserDataMock
    });

    
    if ( !error && !isLoading && data) {
        const { name, email} = data;
        name && setName(name)
        email && setMailing(email)
    }

    return (
        <div className='flex flex-col gap-2 pb-6 min-h-min lg:h-44 '>
            <p className={`f-cta ${ isLoading && "animate-pulse rounded-lg"}`}> 
                ¡Hola 
                { data && 
                    data.name !== ErrorMessage 
                        ? <span className='cl-primary'> {data.name}!</span> 
                        : " mira las coberturas!"}
            </p>
            <p className='f-sm'> Conoce las coberturas para tu plan </p>
        </div>
    )
}

export default UserName