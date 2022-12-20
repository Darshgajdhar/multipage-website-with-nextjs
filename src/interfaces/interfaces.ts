import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  title?: string | "Next App";
}

export interface ButtonProps {
  children: ReactNode;
  buttonType: string;
}

export interface CardProps {
  title: string;
  dataList: CardList[];
}

export interface CardList {
  mal_id: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
  type: string;
  episodes: number;
  duration: string;
}

export interface ApiProps {
  dataList: CardList[];
}
