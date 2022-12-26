import { Box, styled } from "@mui/material";

export const LayoutWrapper = styled(Box, {
  name: "LayoutWrapper",
})`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  @media (max-width: 768px) {
    height: auto;
    overflow: auto;
  }
`;
