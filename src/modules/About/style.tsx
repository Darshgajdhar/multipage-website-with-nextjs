import { Box, styled, Typography } from "@mui/material";

export const AboutComponent = styled(Box, {
  name: "AboutComponent",
})`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const AboutWrapper = styled(Box, {
  name: "AboutWrapper",
})`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled(Box, {
  name: "LeftWrapper",
})`
  width: 75%;
  margin: 30px 50px;
  padding: 25px 15px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    margin: 30px auto;
  }
`;

export const ImageWrapper = styled(Box, {
  name: "ImageWrapper",
})`
  width: 30%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  img {
    background-origin: border-box;
    background-size: cover;
    margin-bottom: 15px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 35px;
  }
`;

export const AboutContents = styled(Box, {
  name: "AboutContents",
})`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 20px;
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    padding: 0px 10px;
  }
`;

export const Title = styled(Typography, {
  name: "Title",
})`
  color: white;
  font-weight: bold;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonList = styled(Box, {
  name: "ButtonList",
})`
  display: flex;
`;

export const SeriesStats = styled(Box, {
  name: "SeriesStats",
})`
  display: flex;
  margin: 15px 0px;
  // @media (max-width: 768px) {
  //   height: auto;
  // }
`;

export const StatsWrapper = styled(Box, {
  name: "StatsWrapper",
})`
  width: fit-content;
  border-radius: 19px;
  padding: 0px 10px;
  border: 1px solid white;
  color: white;
  margin-right: 5px;
  text-align: center;
  :hover {
    background-color: gray;
  }
`;

export const Rating = styled(Typography, {
  name: "Rating",
})`
  text-align: center;
  font-size: 13px;
  font-weight: bolder;
`;

export const AudioType = styled(Typography, {
  name: "AudioType",
})`
  font-size: 13px;
  font-weight: bolder;
  text-align: center;
`;

export const Summary = styled(Box, {
  name: "Summary",
})`
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin: 15px 0px;
`;

export const RightWrapper = styled(Box, {
  name: "RightWrapper",
})`
  width: 30%;
  margin: 0px 50px;
  padding: 0px 25px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  //
  @media (max-width: 768px) {
    margin: 30px 50px;
    padding: 25px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
  }
`;

export const DetailList = styled(Box, {
  name: "DetailList",
})`
  display: flex;
  margin-bottom: 10px;
`;
export const ListHead = styled(Typography, { name: "ListHead" })`
  color: white;
  font-weight: 600;
  margin-right: 5px;
  font-size: 15px;
`;

export const ListValue = styled(Typography, {
  name: "ListValue",
})`
  color: white;
  font-size: 15px;
`;
