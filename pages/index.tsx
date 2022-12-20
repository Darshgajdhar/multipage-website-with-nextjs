import LayoutContainer from "../src/common/Layout/LayoutContainer";
import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <LayoutContainer title="Home">
      <Container>
        <Typography variant="h3">Hello Next Js Home page</Typography>
      </Container>
    </LayoutContainer>
  );
}
