import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ergastAPI = createApi({
  reducerPath: 'ergast',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://ergast.com/api/f1/'
  }),
  endpoints(builder) {
    return {
      fetchDriver: builder.query({
        query: () => {
          return {
            url: '2023/drivers.json',
            method: 'GET',
          };
        },
      }),
      fetchResult: builder.query({
        query: () => {
          return {
            url: 'current/last/results.json', //Most recent race results
            method: 'GET',
          };
        }
      }),
      fetchRaceSchedule: builder.query({
        query: () => {
          return {
            url: 'current.json', //Current season race schedule
            method: 'GET',
          };
        }
      }),
    };
  },
});

export const {useFetchDriverQuery, useFetchResultQuery, useFetchRaceScheduleQuery} = ergastAPI;
export { ergastAPI };