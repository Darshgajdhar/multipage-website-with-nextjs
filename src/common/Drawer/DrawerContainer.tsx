import Drawer from "./Drawer";
import { FC, useState } from "react";

const DrawerContainer: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen((pervState) => !pervState);
  };

  return <Drawer isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer} />;
};

export default DrawerContainer;
