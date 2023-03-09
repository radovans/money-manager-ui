import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Transactions from "scenes/transactions";
import Balance from "scenes/balance";
import Incomes from "scenes/incomes"
import Expenses from "scenes/expenses"
import Categories from "scenes/categories"
import Cumulative from "scenes/cumulative";
import Import from "scenes/import";
import Rules from "scenes/rules";
import Accounts from "scenes/accounts";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/by-category" element={<Categories />} />
              <Route path="/cumulative" element={<Cumulative />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/categories" element={<Accounts />} />
              <Route path="/subcategories" element={<Accounts />} />
              <Route path="/import" element={<Import />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
