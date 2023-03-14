import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  useGetSubcategoriesQuery,
  useCreateSubcategoryMutation,
  useUpdateSubcategoryMutation,
  useDeleteSubcategoryMutation,
} from "state/api";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import CrudDatagridActions from "components/crudDatagrid/CrudDatagridActions";
import CrudDatagridTable from "components/crudDatagrid/CrudDatagridTable";
import CrudDatagridActionUpdate from "components/crudDatagrid/CrudDatagridActionUpdate";
import CrudDatagridActionCreate from "components/crudDatagrid/CrudDatagridActionCreate";
import CrudDatagridActionDelete from "components/crudDatagrid/CrudDatagridActionDelete";
import SubcategoryInputForm from "components/crudDatagrid/inputForms/SubcategoryInputForm";
import CrudDatagridActionDownload from "components/crudDatagrid/CrudDatagridActionDownload";

const Subcategories = () => {
  const entityName = "Subcategory";

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
        category: rowData.category,
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
      category: "",
    });
  };

  // QUERIES
  const { data, isLoading } = useGetSubcategoriesQuery({
    category: "",
    forceRefetch: true,
  });
  const [createQuery] = useCreateSubcategoryMutation();
  const [updateQuery] = useUpdateSubcategoryMutation();
  const [deleteQuery] = useDeleteSubcategoryMutation();

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
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="SUBCATEGORIES" subtitle="Subcategories management" />
        <CrudDatagridActions
          createAction={
            <CrudDatagridActionCreate
              entityName={entityName}
              createQuery={createQuery}
              createInput={createInput}
              setCreateInput={setCreateInput}
              handleClearInput={handleClearInput}
              Form={
                <SubcategoryInputForm
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
                <SubcategoryInputForm
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
              link="http://localhost:8088/subcategories"
              name="subcategories.json"
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

export default Subcategories;
