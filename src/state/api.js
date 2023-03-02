import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8088" }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
    "YearlyStatistics",
    "MonthlyStatistics",
    "MainCategoriesStatistics",
    "CategoriesStatistics",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),
    getTransactions: build.query({
      query: ({ page, size, sort, search, from, to, category }) => ({
        url: "transactions",
        method: "GET",
        params: { page, size, sort, search, from, to, category },
      }),
      providesTags: ["Transactions"],
    }),
    getDashboard: build.query({
      query: () => "statistics",
      providesTags: ["Dashboard"],
    }),
    getYearlyStatistics: build.query({
      query: ({ salaryOnly }) => ({
        url: "statistics/year-month/year",
        method: "GET",
        params: { salaryOnly },
      }),
      providesTags: ["YearlyStatistics"],
    }),
    getMonthlyStatistics: build.query({
      query: () => "statistics/year-month/all",
      providesTags: ["MonthlyStatistics"],
    }),
    getMainCategoriesStatistics: build.query({
      query: ({ from, to }) => ({
        url: "statistics/main-categories",
        method: "GET",
        params: { from, to },
      }),
      providesTags: ["MainCategoriesStatistics"],
    }),
    getCategoriesStatistics: build.query({
      query: ({ from, to, category }) => ({
        url: "statistics/categories",
        method: "GET",
        params: { from, to, category },
      }),
      providesTags: ["CategoriesStatistics"],
    }),

    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetYearlyStatisticsQuery,
  useGetMainCategoriesStatisticsQuery,
  useGetCategoriesStatisticsQuery,
  useGetMonthlyStatisticsQuery,
} = api;
