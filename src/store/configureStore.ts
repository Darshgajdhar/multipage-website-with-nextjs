import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { animeApi } from "./API/AnimeList";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [animeApi.reducerPath]: animeApi.reducer,
    },
    middleware: (data) => data().concat(animeApi.middleware),
  });
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export default store;
