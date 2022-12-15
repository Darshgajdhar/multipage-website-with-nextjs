import LayoutContainer from "../src/common/Layout/LayoutContainer";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <LayoutContainer title="Home">
      <Typography variant="h3">Hello Next Js Home page</Typography>
    </LayoutContainer>
  );
}
