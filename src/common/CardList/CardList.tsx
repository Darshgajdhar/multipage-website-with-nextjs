import { Grid } from "@mui/material";
import Image from "next/image";
import { CardProps } from "../../interfaces/interfaces";
import {
  CardComponent,
  CardHeading,
  CardWrapper,
  TypeInfo,
  Type,
  Title,
  ShowInfo,
  ShowDuration,
  ShowType,
  Episodes,
  ListType,
} from "./style";

const CardList = ({ dataList, title }: CardProps) => (
  <CardWrapper>
    <CardHeading variant="h2">{title}</CardHeading>
    <Grid container spacing={3}>
      {/* slice method dataList.slice(0,5) */}
      {dataList?.map((data) => (
        <Grid item key={data.mal_id}>
          <CardComponent>
            <Image
              alt={data.title}
              src={data.images.jpg.image_url}
              width={250}
              height={350}
            />
            {/*alt and src values*/}
            <TypeInfo>
              <ListType>
                <Type>Sub</Type>
                <Type>Dub</Type>
              </ListType>
              <Episodes>{data.episodes}</Episodes>
            </TypeInfo>
            <Title>{data.title}</Title>
            <ShowInfo>
              <ShowType>{data.type}</ShowType>
              <ShowDuration>{data.duration}</ShowDuration>
            </ShowInfo>
          </CardComponent>
        </Grid>
      ))}
    </Grid>
  </CardWrapper>
);

export default CardList;
