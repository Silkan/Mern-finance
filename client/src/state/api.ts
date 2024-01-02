import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL
  }),
  reducerPath: "main",
  tagTypes: ["kpis"],
  endpoint: (build) => ({
    getKpis: build.query({
        query: () => "kpi/kpis/",
        providesTags: ["kpis"] 
    })
  })
});

export const { useGetKpisQuery } = api;