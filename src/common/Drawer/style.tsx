import { styled, Drawer } from "@mui/material";

export const DrawerWrapper = styled(Drawer, {
  name: "DrawerWrapper",
})({
  ".MuiDrawer-paper": {
    width: "75%",
    backgroundImage: "linear-gradient(to bottom, #434343 0%, black 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    a: {
      textDecoration: "none",
      color: "white",
      marginBottom: "15px",
      fontSize: "24px",
    },
  },
});
