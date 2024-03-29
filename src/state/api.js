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
    "CategoriesStatistics",
    "YearlyCategoriesStatistics",
    "MonthlyCategoriesStatistics",
    "YearlySubcategoriesStatistics",
    "MonthlySubcategoriesStatistics",
    "YearlyRecipientsStatistics",
    "MonthlyRecipientsStatistics",
    "Rules",
    "Accounts",
    "Categories",
    "Subcategories",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `users/${id}`,
      providesTags: ["User"],
    }),

    // STATISTICS
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
    getYearlyCategoriesStatistics: build.query({
      query: () => "statistics/categories/yearly",
      providesTags: ["YearlyCategoriesStatistics"],
    }),
    getMonthlyCategoriesStatistics: build.query({
      query: () => "statistics/categories/monthly",
      providesTags: ["MonthlyCategoriesStatistics"],
    }),
    getYearlySubcategoriesStatistics: build.query({
      query: () => "statistics/subcategories/yearly",
      providesTags: ["YearlySubcategoriesStatistics"],
    }),
    getMonthlySubcategoriesStatistics: build.query({
      query: () => "statistics/subcategories/monthly",
      providesTags: ["MonthlySubcategoriesStatistics"],
    }),
    getYearlyRecipientsStatistics: build.query({
      query: () => "statistics/recipients/yearly",
      providesTags: ["YearlyRecipientsStatistics"],
    }),
    getMonthlyRecipientsStatistics: build.query({
      query: () => "statistics/recipients/monthly",
      providesTags: ["MonthlyRecipientsStatistics"],
    }),
    getCategoriesStatistics: build.query({
      query: ({ from, to, category }) => ({
        url: "statistics/categories",
        method: "GET",
        params: { from, to, category },
      }),
      providesTags: ["CategoriesStatistics"],
    }),

    // TRANSACTIONS
    getTransactions: build.query({
      query: ({ page, size, sort, search, from, to, category }) => ({
        url: "transactions",
        method: "GET",
        params: { page, size, sort, search, from, to, category },
      }),
      providesTags: ["Transactions"],
    }),
    createTransaction: build.mutation({
      query: (payload) => ({
        url: "transactions",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Transactions"],
    }),
    updateTransaction: build.mutation({
      query: ({ id, payload }) => ({
        url: `transactions/${id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Transactions"],
    }),
    deleteTransaction: build.mutation({
      query: (id) => ({
        url: `transactions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transactions"],
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
      query: () => "categories",
      providesTags: ["Categories"],
    }),
    createCategory: build.mutation({
      query: (payload) => ({
        url: "categories",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: build.mutation({
      query: ({ id, payload }) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),

    // SUBCATEGORIES
    getSubcategories: build.query({
      query: ({ category }) => ({
        url: "subcategories",
        method: "GET",
        params: { category },
      }),
      providesTags: ["Subcategories"],
    }),
    createSubcategory: build.mutation({
      query: (payload) => ({
        url: "subcategories",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Subcategories"],
    }),
    updateSubcategory: build.mutation({
      query: ({ id, payload }) => ({
        url: `subcategories/${id}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Subcategories"],
    }),
    deleteSubcategory: build.mutation({
      query: (id) => ({
        url: `subcategories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subcategories"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetDashboardQuery,
  useGetYearlyStatisticsQuery,
  useGetCategoriesStatisticsQuery,
  useGetMonthlyStatisticsQuery,
  useGetYearlyCategoriesStatisticsQuery,
  useGetMonthlyCategoriesStatisticsQuery,
  useGetYearlySubcategoriesStatisticsQuery,
  useGetMonthlySubcategoriesStatisticsQuery,
  useGetYearlyRecipientsStatisticsQuery,
  useGetMonthlyRecipientsStatisticsQuery,

  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,

  useGetRulesQuery,
  useCreateRuleMutation,
  useDeleteRuleMutation,
  useUpdateRuleMutation,

  useGetAccountsQuery,
  useCreateAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,

  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,

  useGetSubcategoriesQuery,
  useCreateSubcategoryMutation,
  useDeleteSubcategoryMutation,
  useUpdateSubcategoryMutation,
} = api;
