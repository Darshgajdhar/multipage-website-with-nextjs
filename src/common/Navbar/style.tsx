import { styled, Box, TextField } from "@mui/material";

export const NavbarComponent = styled(Box, { name: "NavbarComponent" })`
  width: 100%;
  height: 60px;
  background-color: #212121;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLeftWrapper = styled(Box, { name: "NavbarWrapper" })`
  height: 100%;
  margin: 0px 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const NavbarImageWrapper = styled(Box, {
  name: "NavbarImageWrapper",
})`
  display: flex;
  align-items: center;
  margin: 0px 15px;
`;

export const NavbarSearchWrapper = styled(Box, {
  name: "NavbarSearchWrapper",
})`
  display: flex;
  align-items: center;
  color: white;
`;

export const NavbarSearchField = styled(TextField, {
  name: "NavbarSearchField",
})`
  width: 250px;
  border-radius: 8px;
  margin-right: 15px;
  input {
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    :focus {
      border: none;
    }
  }
`;

export const NavbarTypeList = styled(Box, { name: "NavbarTypeList" })`
  display: flex;
  align-items: center;
  a {
    color: white;
    margin: 0px 8px;
    border: 2px solid white;
    text-align: center;
    border-radius: 8px;
    padding: 6px 12px;
    text-decoration: none;
    font-weight: bold;
    :hover {
      background-color: #cae962;
    }
  }
`;

export const NavbarRightWrapper = styled(Box, {
  name: "NavbarRightWrapper",
})`
  display: flex;
  align-items: center;
  margin: 0px 50px;
`;
