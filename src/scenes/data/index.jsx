import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
  useUpdateTransactionMutation,
} from "state/api";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import CrudDatagridActionCreate from "components/crudDatagrid/CrudDatagridActionCreate";
import CrudDatagridActions from "components/crudDatagrid/CrudDatagridActions";
import CrudDatagridActionUpdate from "components/crudDatagrid/CrudDatagridActionUpdate";
import CrudDatagridActionDelete from "components/crudDatagrid/CrudDatagridActionDelete";
import CrudDatagridTable from "components/crudDatagrid/CrudDatagridTable";
import TransactionInputForm from "components/crudDatagrid/inputForms/TransactionInputForm";
import CrudDatagridActionDownload from "components/crudDatagrid/CrudDatagridActionDownload";

const Data = () => {
  const entityName = "Transaction";

  // ROW SELECT
  const [selectedRow, setSelectedRow] = useState();

  const onRowsSelectionHandler = (ids) => {
    var rowData = ids.map((id) =>
      data?.transactions.find((row) => row.id === id)
    )[0];
    setSelectedRow(rowData);
    if (rowData) {
      setUpdateInput({
        ...updateInput,
        id: rowData.id,
        date: rowData.date,
        recipient: rowData.recipient,
        note: rowData.note,
        amount: rowData.amountInCzk,
        amountInCzk: rowData.amountInCzk,
        currency: rowData.currency,
        category: rowData.category,
        subcategory: rowData.subcategory,
        account: rowData.account,
        label: rowData.label,
      });
    }
  };

  // INPUTS
  const [createInput, setCreateInput] = useState({
    date: "",
    recipient: "",
    note: "",
    amount: "",
    amountInCzk: "",
    currency: "CZK",
    category: "",
    subcategory: "",
    account: "",
    label: "",
  });

  const [updateInput, setUpdateInput] = useState({
    id: selectedRow && selectedRow.id,
    date: selectedRow && selectedRow.date,
    recipient: selectedRow && selectedRow.recipient,
    note: selectedRow && selectedRow.note,
    amount: selectedRow && selectedRow.amountInCzk,
    amountInCzk: selectedRow && selectedRow.amountInCzk,
    currency: selectedRow && selectedRow.currency,
    category: selectedRow && selectedRow.category,
    subcategory: selectedRow && selectedRow.subcategory,
    account: selectedRow && selectedRow.account,
    label: selectedRow && selectedRow.label,
  });

  const handleClearInput = () => {
    setCreateInput({
      ...createInput,
      date: "",
      recipient: "",
      note: "",
      amount: "",
      amountInCzk: "",
      currency: "CZK",
      category: "",
      subcategory: "",
      account: "",
      label: "",
    });
  };

  // QUERIES
  const { data, isLoading } = useGetTransactionsQuery({});
  const [createQuery] = useCreateTransactionMutation();
  const [updateQuery] = useUpdateTransactionMutation();
  const [deleteQuery] = useDeleteTransactionMutation();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.15,
      sortable: false,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.25,
      sortable: false,
    },
    {
      field: "recipient",
      headerName: "Recipient",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "note",
      headerName: "Note",
      flex: 1,
      sortable: false,
    },
    {
      field: "formattedAmountInCzk",
      headerName: "Amount",
      flex: 0.35,
      sortable: false,
    },
    {
      field: "currency",
      headerName: "Currency",
      flex: 0.2,
      sortable: false,
    },
    {
      field: "account",
      headerName: "Account",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "label",
      headerName: "Label",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="TRANSACTIONS" subtitle="Transactions management" />
        <CrudDatagridActions
          createAction={
            <CrudDatagridActionCreate
              entityName={entityName}
              createQuery={createQuery}
              createInput={createInput}
              setCreateInput={setCreateInput}
              handleClearInput={handleClearInput}
              Form={
                <TransactionInputForm
                  data={createInput}
                  setData={setCreateInput}
                />
              }
            />
          }
          updateAction={
            <CrudDatagridActionUpdate
              entityName={entityName}
              updateQuery={updateQuery}
              selectedRow={selectedRow}
              updateInput={updateInput}
              setUpdateInput={setUpdateInput}
              handleClearInput={handleClearInput}
              Form={
                <TransactionInputForm
                  data={updateInput}
                  setData={setUpdateInput}
                />
              }
            />
          }
          deleteAction={
            <CrudDatagridActionDelete
              entityName={entityName}
              deleteQuery={deleteQuery}
              selectedRow={selectedRow}
            />
          }
          downloadAction={
            <CrudDatagridActionDownload
              link="http://localhost:8088/transactions"
              name="transactions.json"
            />
          }
        />
      </FlexBetween>
      <CrudDatagridTable
        columns={columns}
        data={data?.transactions}
        isLoading={isLoading}
        onRowsSelectionHandler={onRowsSelectionHandler}
      />
    </Box>
  );
};

export default Data;
