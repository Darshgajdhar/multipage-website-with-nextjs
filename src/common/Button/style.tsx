import { styled, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export const LoginButton = styled(Button, {
  name: "LoginButton",
})`
  font-weight: bold;
  color: white;
  text-transform: capitalize;
  outline: 2px solid white;
  margin: 0px 10px;
  :hover {
    background-color: #cae962;
  }
`;

export const WatchButton = styled(Button, { name: "WatchButton" })`
  fontweight: bold;
  color: white;
  background-color: #cae962;
  texttransform: capitalize;
  margin: 10px 0px;
  width: 120px;
  :hover {
    background-color: #fff8c3;
    color: #cae962;
  }
`;

export const AddList = styled(Button, { name: "AddList" })`
  fontweight: bold;
  color: white;
  background-color: #cae962;
  texttransform: capitalize;
  margin: 10px;
  width: 120px;
  :hover {
    background-color: #fff8c3;
    color: #cae962;
  }
`;

export const ButtonIcon = styled(IconButton, {
  name: "ButtonIcon",
})({
  color: "white",
});
