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
    "Rules",
    "Accounts",
    "RemoveRule",
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
