import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from "state/api";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import CrudDatagridActions from "components/crudDatagrid/CrudDatagridActions";
import CrudDatagridTable from "components/crudDatagrid/CrudDatagridTable";
import CrudDatagridActionUpdate from "components/crudDatagrid/CrudDatagridActionUpdate";
import CrudDatagridActionCreate from "components/crudDatagrid/CrudDatagridActionCreate";
import CrudDatagridActionDelete from "components/crudDatagrid/CrudDatagridActionDelete";
import CategoryInputForm from "components/crudDatagrid/inputForms/CategoryInputForm";
import CrudDatagridActionDownload from "components/crudDatagrid/CrudDatagridActionDownload";

const Categories = () => {
  const entityName = "Category";

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
  const { data, isLoading } = useGetCategoriesQuery();
  const [createQuery] = useCreateCategoryMutation();
  const [updateQuery] = useUpdateCategoryMutation();
  const [deleteQuery] = useDeleteCategoryMutation();

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
        <Header title="CATEGORIES" subtitle="Categories management" />
        <CrudDatagridActions
          createAction={
            <CrudDatagridActionCreate
              entityName={entityName}
              createQuery={createQuery}
              createInput={createInput}
              setCreateInput={setCreateInput}
              handleClearInput={handleClearInput}
              Form={
                <CategoryInputForm
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
                <CategoryInputForm
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
              link="http://localhost:8088/categories"
              name="categories.json"
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

export default Categories;
