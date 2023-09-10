import {  Navbar as NUINavbar,   NavbarBrand,   NavbarContent,   NavbarItem } from "@nextui-org/react";
import RimacSVG from "../Icons/Rimac";
import { Link } from "react-router-dom";
import Phone from "../Icons/Phone";
import {memo} from "react";

const NavbarComponent = () => {
  return (
    <NUINavbar>
      <NavbarBrand>
            <Link to="/">
                <RimacSVG/>
            </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-4">
            <p className="text-slate-500 hidden lg:block">¿Tienes alguna duda?</p>
            <Phone/>
            <p className="text-indigo-500">Llámanos</p>
            <p className="text-indigo-500 hidden lg:block">(01) 411 6001</p>
        </NavbarItem> 
      </NavbarContent>
    </NUINavbar>
  )
}

const Navbar = memo(NavbarComponent)
export default Navbar