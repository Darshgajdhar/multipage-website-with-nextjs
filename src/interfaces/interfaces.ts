import { ReactNode } from "react";

export interface LayoutDetails {
  children: ReactNode;
  title?: string | "Next App";
}

export interface ButtonValue {
  children: ReactNode;
  buttonType: string;
}

export interface CardDetails {
  title: string;
  dataList: CardList[];
}

export interface CardList {
  mal_id: string;
  title: string;
  type: string;
  episodes: number;
  duration: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  entry: {
    mal_id: string;
    images: { jpg: { image_url: string } };
    title: string;
    type: string;
    episodes: number;
    duration: string;
  };
  episode: [{ title: string }, { title: string }];
  pagination?: Pagination;
}

export interface ApiDetails {
  dataList: CardList[] | IFavourite[] | IPopular[] | ITrending[];
}

export interface PopularList {
  images: { jpg: { image_url: string } };
  mal_id: number;
  title: string;
  episodes?: number;
  duration?: string;
  type?: string;
}

export interface PopularDetails {
  dataList: { data: IPopular[] };
}

export interface TrendingDetails {
  dataList: { data: CardList[] };
}
export interface FavouriteDetails {
  dataList: { data: CardList[] };
}

export interface AboutList {
  data: {
    mal_id: number;
    images: { jpg: { image_url: string } };
    title: string;
    episodes: number;
    status: string;
    aired: { from: string; to: string; string: string };
    duration: string;
    rating: string;
    score: number;
    popularity: number;
    synopsis: string;
    title_japanese: string;
  };
}

export interface AboutDetails {
  dataList: AboutList;
}

export interface Pagination {
  current_page: number;
  items: {
    count: number;
    per_page: number;
    total: number;
  };
}

export interface ITrending {
  data: CardList;
  pagination: Pagination;
}

export interface IFavourite {
  data: CardList;
  pagination: Pagination;
}

export interface IPopular {
  entry: CardList;
  pagination: Pagination;
}

export interface PopularData {
  duration?: string;
  episodes?: number;
  images: { jpg: { image_url: string } };
  mal_id: number;
  type?: string;
}

export interface DrawerData {
  isDrawerOpen: boolean;
  handleDrawer: () => void;
}
