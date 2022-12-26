import Link from "next/link";
import { DrawerData } from "../../interfaces/interfaces";
import { ButtonIcon } from "../Button/style";
import { DrawerWrapper } from "./style";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const Drawer = ({ isDrawerOpen, handleDrawer }: DrawerData) => (
  <>
    <DrawerWrapper
      anchor="left"
      open={isDrawerOpen}
      onClose={() => handleDrawer()}
    >
      <Link href={"/home"}>Home</Link>
      <Link href={"/favourite"}>Favourite</Link>
      <Link href={"/trending"}>Trending</Link>
      <Link href={"/popular"}>Popular</Link>
    </DrawerWrapper>
    <ButtonIcon onClick={() => handleDrawer()}>
      <MenuSharpIcon />
    </ButtonIcon>
  </>
);

export default Drawer;
