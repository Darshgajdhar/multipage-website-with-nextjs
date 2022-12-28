import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { BASE_URL } from "../../config";
import { CardList } from "../../interfaces/interfaces";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  //{/*This is use in for SSR*/}
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["animeApi"],
  endpoints: (builder) => ({
    getAnimeList: builder.query<object, { page: number }>({
      query: ({ page }) => {
        return {
          url: `/anime?page=${page}`,
          method: "GET",
        };
      },
      providesTags: ["animeApi"],
    }),
    getAnimeListById: builder.query<
      object,
      { id: string | string[] | undefined }
    >({
      query: ({ id }) => {
        return {
          url: `/anime/${id}`,
          method: "GET",
        };
      },
    }),
    getAnimeListByPopularity: builder.query<object, void>({
      query: () => {
        return {
          url: `/watch/episodes/popular`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { getAnimeList, getAnimeListById, getAnimeListByPopularity } =
  animeApi.endpoints;
