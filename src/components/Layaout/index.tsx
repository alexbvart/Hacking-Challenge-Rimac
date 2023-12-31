import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
export default function Layout() {
    return (
        <>
            <div>
                <Navbar />            
                <div className='max-w-screen overflow-x-hidden' >
                    <Outlet />
                </div>
            </div>
        </>
    )
}
