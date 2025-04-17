import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ergastAPI = createApi({
  reducerPath: "ergast",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jolpi.ca/ergast/f1/current/",
  }),
  endpoints(builder) {
    return {
      fetchDriver: builder.query({
        query: () => {
          return {
            url: "drivers/",
            method: "GET",
          };
        },
      }),
      fetchResult: builder.query({
        query: () => {
          return {
            url: "last/results/", //Most recent race results
            method: "GET",
          };
        },
      }),
      fetchRaceSchedule: builder.query({
        query: () => {
          return {
            url: "", //Current season race schedule
            method: "GET",
          };
        },
      }),
      fetchDriverStandings: builder.query({
        query: () => {
          return {
            url: "driverstandings/", //Current season driver standings
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchDriverQuery,
  useFetchResultQuery,
  useFetchRaceScheduleQuery,
  useFetchDriverStandingsQuery,
} = ergastAPI;
export { ergastAPI };
