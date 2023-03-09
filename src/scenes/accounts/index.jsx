import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  useGetAccountsQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} from "state/api";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import CrudDatagridActions from "components/crudDatagrid/CrudDatagridActions";
import CrudDatagridTable from "components/crudDatagrid/CrudDatagridTable";
import CrudDatagridActionUpdate from "components/crudDatagrid/CrudDatagridActionUpdate";
import CrudDatagridActionCreate from "components/crudDatagrid/CrudDatagridActionCreate";
import CrudDatagridActionDelete from "components/crudDatagrid/CrudDatagridActionDelete";
import AccountInputForm from "components/crudDatagrid/inputForms/AccountInputForm";

const Accounts = () => {
  const entityName = "Account";

  // ROW SELECT
  const [selectedRow, setSelectedRow] = useState();

  const onRowsSelectionHandler = (ids) => {
    var rowData = ids.map((id) => data.find((row) => row.id === id))[0];
    setSelectedRow(rowData);
    if (rowData) {
      setUpdateInput({
        ...updateInput,
        id: rowData.id,
        name: rowData.name,
      });
    }
  };

  // INPUTS
  const [createInput, setCreateInput] = useState({
    name: "",
  });

  const [updateInput, setUpdateInput] = useState({
    id: selectedRow && selectedRow.id,
    name: selectedRow && selectedRow.name,
  });

  const handleClearInput = () => {
    setCreateInput({
      ...createInput,
      name: "",
    });
  };

  // QUERIES
  const { data, isLoading } = useGetAccountsQuery();
  const [createQuery] = useCreateAccountMutation();
  const [updateQuery] = useUpdateAccountMutation();
  const [deleteQuery] = useDeleteAccountMutation();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.03,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="ACCOUNTS" subtitle="Accounts management" />
        <CrudDatagridActions
          createAction={
            <CrudDatagridActionCreate
              entityName={entityName}
              createQuery={createQuery}
              createInput={createInput}
              setCreateInput={setCreateInput}
              handleClearInput={handleClearInput}
              Form={
                <AccountInputForm data={createInput} setData={setCreateInput} />
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
                <AccountInputForm data={updateInput} setData={setUpdateInput} />
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
        />
      </FlexBetween>
      <CrudDatagridTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        onRowsSelectionHandler={onRowsSelectionHandler}
      />
    </Box>
  );
};

export default Accounts;
