import { Box, styled, Card, Typography } from "@mui/material";

export const CardWrapper = styled(Box, { name: "CardWrapper" })`
  margin: 0px 50px;
  box-sizing: border-box;
`;

export const CardHeading = styled(Typography, { name: "CardHeading" })`
  font-weight: bold;
  color: #cae962;
  margin: 15px 0px;
`;

export const CardComponent = styled(Card, { name: "CardComponent" })`
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 520px;
  img {
    background-origin: border-box;
    background-size: cover;
    border-radius-top: 4px;
    margin-bottom: 15px;
    object-fit: cover;
  }
`;

export const TypeInfo = styled(Box, { name: "TypeInfo" })`
  display: flex;
  padding: 8px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Type = styled(Box, { name: "Type" })`
  padding: 0px 2px;
  height: 25px;
  background-color: black;
  font-weight: bold;
  color: white;
  margin: 0px 3px;
  text-transform: capitalize;
  border-radius: 4px;
`;

export const Episodes = styled(Box, { name: "EpisodeLength" })`
  padding: 0px 2px;
  height: 25px;
  background-color: #83e0f1;
  font-weight: bold;
  color: black;
  margin: 0px 3px;
  text-transform: capitalize;
  border-radius: 4px;
`;

export const ListType = styled(Box, { name: "ListType" })`
  display: flex;
`;

export const Title = styled(Typography, { name: "Title" })`
  font-size: 15px;
  padding: 15px;
  :hover {
    color: #cae962;
  }
`;

export const ShowInfo = styled(Box, { name: "ShowInfo" })`
  display: flex;
  color: #59898e;
  padding: 0px 15px;
`;

export const ShowType = styled(Typography, { name: "ShowType" })`
  margin: 5px;
  font-size: 12px;
`;

export const ShowDuration = styled(Typography, { name: "ShowDuration" })`
  margin: 5px;
  font-size: 12px;
`;
