import Image from "next/image";
import { AddList, WatchButton } from "../../common/Button/style";
import LayoutContainer from "../../common/Layout/LayoutContainer";
import { AboutDetails } from "../../interfaces/interfaces";
import {
  AboutComponent,
  AboutContents,
  AboutWrapper,
  AudioType,
  ButtonList,
  DetailList,
  ImageWrapper,
  LeftWrapper,
  ListHead,
  ListValue,
  Rating,
  RightWrapper,
  SeriesStats,
  StatsWrapper,
  Summary,
  Title,
} from "./style";

const About = ({ dataList }: AboutDetails) => (
  <AboutComponent>
    <AboutWrapper>
      <LeftWrapper>
        <ImageWrapper>
          <Image
            alt={dataList?.data?.title}
            src={dataList?.data?.images.jpg.image_url}
            width={250}
            height={350}
          />
        </ImageWrapper>
        <AboutContents>
          <Title variant="h3">{dataList?.data?.title}</Title>
          <SeriesStats>
            <StatsWrapper>
              <Rating>{dataList?.data.rating}</Rating>
            </StatsWrapper>
            <StatsWrapper>
              <AudioType>SUB</AudioType>
            </StatsWrapper>
            <StatsWrapper>
              <AudioType>DUB</AudioType>
            </StatsWrapper>
          </SeriesStats>
          <ButtonList>
            <WatchButton>Watch Now</WatchButton>
            <AddList>Add to List</AddList>
          </ButtonList>
          <Summary>{dataList?.data?.synopsis}</Summary>
        </AboutContents>
      </LeftWrapper>
      <RightWrapper>
        <DetailList>
          <ListHead>Japanese:</ListHead>
          <ListValue>{dataList?.data.title_japanese}</ListValue>
        </DetailList>
        <DetailList>
          <ListHead>Aired:</ListHead>
          <ListValue>{dataList?.data.aired.string}</ListValue>
        </DetailList>
        <DetailList>
          <ListHead>Duration:</ListHead>
          <ListValue>
            {dataList?.data.duration.replace("min per ep", "min")}
          </ListValue>
        </DetailList>
        <DetailList>
          <ListHead>Status:</ListHead>
          <ListValue>{dataList?.data.status}</ListValue>
        </DetailList>
        <DetailList>
          <ListHead>MAL Score:</ListHead>
          <ListValue>{dataList?.data.score}</ListValue>
        </DetailList>
      </RightWrapper>
    </AboutWrapper>
  </AboutComponent>
);

export default About;
