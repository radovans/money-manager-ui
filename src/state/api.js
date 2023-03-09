import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8088" }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Transactions",
    "Dashboard",
    "YearlyStatistics",
    "MonthlyStatistics",
    "MainCategoriesStatistics",
    "CategoriesStatistics",
    "Rules",
    "Accounts",
    "Categories",
    "MainCategories",
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

    // STATISTICS
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

    // RULES
    getRules: build.query({
      query: () => "rules",
      providesTags: ["Rules"],
    }),
    createRule: build.mutation({
      query: (payload) => ({
        url: "rules",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Rules"],
    }),
    updateRule: build.mutation({
      query: ({ id, payload }) => ({
        url: `rules/${id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Rules"],
    }),
    deleteRule: build.mutation({
      query: (id) => ({
        url: `rules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rules"],
    }),

    // ACCOUNTS
    getAccounts: build.query({
      query: () => "accounts",
      providesTags: ["Accounts"],
    }),
    createAccount: build.mutation({
      query: (payload) => ({
        url: "accounts",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Accounts"],
    }),
    updateAccount: build.mutation({
      query: ({ id, payload }) => ({
        url: `accounts/${id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Accounts"],
    }),
    deleteAccount: build.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Accounts"],
    }),

    // CATEGORIES
    getCategories: build.query({
      query: ({ mainCategory }) => ({
        url: "categories",
        method: "GET",
        params: { mainCategory },
      }),
      providesTags: ["Categories"],
    }),
    getMainCategories: build.query({
      query: () => "categories/main",
      providesTags: ["MainCategories"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetTransactionsQuery,
  useGetDashboardQuery,
  useGetYearlyStatisticsQuery,
  useGetMainCategoriesStatisticsQuery,
  useGetCategoriesStatisticsQuery,
  useGetMonthlyStatisticsQuery,
  useGetRulesQuery,
  useCreateRuleMutation,
  useDeleteRuleMutation,
  useUpdateRuleMutation,
  useGetAccountsQuery,
  useCreateAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
  useGetCategoriesQuery,
  useGetMainCategoriesQuery,
} = api;
