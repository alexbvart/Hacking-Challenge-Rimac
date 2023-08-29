import {  Navbar as NUINavbar,   NavbarBrand,   NavbarContent,   NavbarItem } from "@nextui-org/react";
import RimacSVG from "../Icons/Rimac";
import {Link} from "@nextui-org/react";
import Phone from "../Icons/Phone";

const Navbar = () => {
  return (
    <NUINavbar>
      <NavbarBrand>
            <Link href="/">
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

export default Navbar