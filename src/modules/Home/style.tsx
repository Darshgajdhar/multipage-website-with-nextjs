import { Box, styled, Typography } from "@mui/material";

const Image =
  "https://img.zorores.com/_r/1366x768/100/ed/bb/edbb6d921cc766ae3f5e36b55a2e30df/edbb6d921cc766ae3f5e36b55a2e30df.jpg";

export const HomeComponent = styled(Box, {
  name: "HomeComponent",
})``;

export const HomeWrapper = styled(Box, {
  name: "HomeWrapper",
})`
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-image: radial-gradient(
      circle,
      rgba(8, 41, 44, 0) 0px,
      rgba(8, 41, 44, 0.8) 60%,
      rgb(8, 41, 44) 90%
    ),
    url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HomeContent = styled(Box, {
  name: "HomeContent",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 50px;
`;

export const HomeRankings = styled(Typography, { name: "HomeRankings" })`
  color: #cae962;
  margin: 15px 0px;
`;

export const HomeTitle = styled(Typography, { name: "HomeTitle" })`
  color: #fff8c3;
  font-weight: bolder;
`;

export const HomeShowDetails = styled(Box, {
  name: "HomeShowContent",
})`
  color: white;
  display: flex;
`;

export const HomeShowContents = styled(Typography, {
  name: "HomeShowContent",
})`
  margin: 10px;
  font-size: 16px;
`;

export const HomeShowList = styled(Box, { name: "HomeShowList" })`
  display: flex;
`;
