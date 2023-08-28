import { Outlet } from 'react-router-dom'
// import NavBar from '../../organisms/NavBar/NavBar'
export default function Layout() {
    return (
        <>
            {/* <NavBar /> */}
            <div >
                <Outlet />
            </div>
        </>
    )
}
