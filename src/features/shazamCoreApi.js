import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shazamApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_SHAZAMAPI_KEY);
      headers.set("x-rapidapi-host", "shazam-core7.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/get-top-songs-in_world_by_genre?genre=POP",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamApi;
export default shazamApi;

//get-top-songs-in_world_by_genre?genre=POP