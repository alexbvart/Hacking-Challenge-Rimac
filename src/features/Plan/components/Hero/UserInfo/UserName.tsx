import useSWR from 'swr';
import { URL_PUBLIC_API } from '../../../../../utilities/constants';
import { fetchEndpoint } from '../../../../Home/services/call-endpoint';
import { useUserStore } from '../../../../../store/userStore';


const UserName = () => {
    
    const setName = useUserStore(state => state.setName)
    const setMailing = useUserStore(state => state.setMailing)

    const { data, error, isLoading } = useSWR(URL_PUBLIC_API, fetchEndpoint, {
        suspense: true
    });
    
    if ( !error && !isLoading && data) {
        const { name, email} = data;
        name && setName(name)
        email && setMailing(email)
    }

    return (
        <div className='flex flex-col gap-2 pb-6'>
            <p className='f-cta'> ¡Hola <span className='cl-primary'>{ data && data.name }!</span> 
            </p>
            <p className='f-sm'> Conoce las coberturas para tu plan </p> 
        </div>
    )
}

export default UserName