import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
export default function Layout() {
    return (
        <>
            <div>
                <Navbar />            
                <div className='max-w-screen overflow-hidden' >
                    <Outlet />
                </div>
            </div>
        </>
    )
}
