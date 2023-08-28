import {  Navbar as NUINavbar,   NavbarBrand,   NavbarContent,   NavbarItem } from "@nextui-org/react";
import RimacSVG from "../Icons/Rimac";
import {Link} from "@nextui-org/react";

const Navbar = () => {
  return (
    <NUINavbar>
      <NavbarBrand>
            <Link href="/">
                <RimacSVG/>
            </Link>

      </NavbarBrand>


      <NavbarContent justify="end">
        <NavbarItem className="flex">
            <p className="font-bold text-inherit">ACME</p>

          {/* <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>*/}
        </NavbarItem> 
      </NavbarContent>
    </NUINavbar>
  )
}

export default Navbar