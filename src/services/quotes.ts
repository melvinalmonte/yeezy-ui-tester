import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type YeProps = {
  ye_quote: string;
};

export const yeAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fast-kanye-rest.vercel.app",
  }),
  endpoints: (builder) => ({
    getYeQuote: builder.query<YeProps, void>({
      query: () => "/ye",
    }),
  }),
});

export const { useGetYeQuoteQuery } = yeAPI;
