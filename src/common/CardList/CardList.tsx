import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CardDetails } from "../../interfaces/interfaces";
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

const CardList = ({ dataList, title }: CardDetails) => {
  return (
    <CardWrapper>
      <CardHeading variant="h2">{title}</CardHeading>
      <Grid container spacing={3} justifyContent="center">
        {dataList?.map((item) => (
          <Grid item key={item.mal_id}>
            <CardComponent>
              <Link
                href={`/about/${item.mal_id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Image
                  alt={item.mal_id}
                  src={
                    item?.images?.jpg?.image_url?.includes("banned")
                      ? "https://zoro.to/images/zoro-min.png"
                      : item?.images?.jpg?.image_url
                  }
                  width={250}
                  height={350}
                />
                <TypeInfo>
                  <ListType>
                    <Type>Sub</Type>
                    <Type>Dub</Type>
                  </ListType>
                  <Episodes>{item.episodes}</Episodes>
                </TypeInfo>
                <Title>{item.title}</Title>
                <ShowInfo>
                  <ShowType>{item.type}</ShowType>
                  <ShowDuration>
                    {item.duration.replace("min per ep", "min")}
                  </ShowDuration>
                </ShowInfo>
              </Link>
            </CardComponent>
          </Grid>
        ))}
      </Grid>
    </CardWrapper>
  );
};

export default CardList;
