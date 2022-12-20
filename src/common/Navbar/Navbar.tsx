import {
  NavbarComponent,
  NavbarImageWrapper,
  NavbarSearchField,
  NavbarSearchWrapper,
  NavbarLeftWrapper,
  NavbarRightWrapper,
  NavbarTypeList,
} from "./style";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { LoginButton } from "../Button/style";
import Link from "next/link";

const Navbar = () => (
  <NavbarComponent>
    <NavbarLeftWrapper>
      <MenuSharpIcon />
      <NavbarImageWrapper>
        <Image
          alt="Logo"
          src={"https://zoro.to/images/logo.png"}
          height="50"
          width="200"
        />
      </NavbarImageWrapper>
      {/* Creating Links  */}
      <NavbarTypeList>
        <Link href={"/home"}>Home</Link>
        <Link href={"/favourite"}>Favourite</Link>
        <Link href={"/trending"}>Trending</Link>
        <Link href={"/popular"}>Popular</Link>
      </NavbarTypeList>
    </NavbarLeftWrapper>
    <NavbarRightWrapper>
      <NavbarSearchWrapper>
        <NavbarSearchField label="Search" size="small" color="secondary" />
        {/* Reminder: To use InputBase in place of TextField */}
        <SearchIcon />
      </NavbarSearchWrapper>
      <LoginButton variant="outlined">LOGIN</LoginButton>
    </NavbarRightWrapper>
  </NavbarComponent>
);

export default Navbar;
