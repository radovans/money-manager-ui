import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  useCreateRuleMutation,
  useDeleteRuleMutation,
  useUpdateRuleMutation,
  useGetRulesQuery,
} from "state/api";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import CrudDatagridActions from "components/crudDatagrid/CrudDatagridActions";
import CrudDatagridTable from "components/crudDatagrid/CrudDatagridTable";
import RuleInputForm from "components/crudDatagrid/modals/RuleInputForm";
import CrudDatagridActionUpdate from "components/crudDatagrid/CrudDatagridActionUpdate";
import CrudDatagridActionCreate from "components/crudDatagrid/CrudDatagridActionCreate";
import CrudDatagridActionDelete from "components/crudDatagrid/CrudDatagridActionDelete";

const Rules = () => {
  const entityName = "RULES";

  // ROW SELECT
  const [selectedRow, setSelectedRow] = useState();

  const onRowsSelectionHandler = (ids) => {
    var rowData = ids.map((id) => data.find((row) => row.id === id))[0];
    setSelectedRow(rowData);
    if (rowData) {
      setUpdateInput({
        ...updateInput,
        id: rowData.id,
        key: rowData.key,
        type: rowData.type,
        skipTransaction: rowData.skipTransaction,
        recipient: rowData.recipient,
        note: rowData.note,
        mainCategory: rowData.mainCategory,
        category: rowData.category,
        label: rowData.label,
      });
    }
  };

  // INPUTS
  const [createInput, setCreateInput] = useState({
    key: "",
    type: "NOTE",
    skipTransaction: false,
    recipient: "",
    note: "",
    mainCategory: "",
    category: "",
    label: "",
  });

  const [updateInput, setUpdateInput] = useState({
    id: selectedRow && selectedRow.id,
    key: selectedRow && selectedRow.key,
    type: selectedRow && selectedRow.type,
    skipTransaction: selectedRow && selectedRow.skipTransaction,
    recipient: selectedRow && selectedRow.recipient,
    note: selectedRow && selectedRow.note,
    mainCategory: selectedRow && selectedRow.mainCategory,
    category: selectedRow && selectedRow.category,
    label: selectedRow && selectedRow.label,
  });

  const handleClearInput = () => {
    setCreateInput({
      ...createInput,
      key: "",
      type: "NOTE",
      skipTransaction: false,
      recipient: "",
      note: "",
      mainCategory: "",
      category: "",
      label: "",
    });
  };

  // QUERIES
  const { data, isLoading } = useGetRulesQuery();
  const [createQuery] = useCreateRuleMutation();
  const [updateQuery] = useUpdateRuleMutation();
  const [deleteQuery] = useDeleteRuleMutation();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.15,
      sortable: false,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "key",
      headerName: "Key",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "skipTransaction",
      headerName: "Skip transaction",
      flex: 0.5,
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
      field: "mainCategory",
      headerName: "Main category",
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
      field: "label",
      headerName: "Label",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="RULES" subtitle="Rules management" />
        <CrudDatagridActions
          createAction={
            <CrudDatagridActionCreate
              entityName={entityName}
              createQuery={createQuery}
              createInput={createInput}
              setCreateInput={setCreateInput}
              handleClearInput={handleClearInput}
              Form={
                <RuleInputForm data={createInput} setData={setCreateInput} />
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
                <RuleInputForm data={updateInput} setData={setUpdateInput} />
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

export default Rules;
