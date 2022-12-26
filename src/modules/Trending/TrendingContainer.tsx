import React from "react";
import { TrendingDetails } from "../../interfaces/interfaces";
import Trending from "./Trending";

const TrendingContainer = ({ dataList }: TrendingDetails) => (
  <Trending dataList={dataList} />
);

export default TrendingContainer;
