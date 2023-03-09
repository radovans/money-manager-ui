import React, { useState } from "react";
import { Box } from "@mui/material";
import ButtonWIcon from "components/ButtonWIcon";
import CrudSnackbar from "components/crudDatagrid/CrudSnackbar";
import { DeleteOutline } from "@mui/icons-material";

const CrudDatagridActionDelete = (props) => {
  const icons = {
    delete: <DeleteOutline sx={{ mr: "10px" }} />,
  };

  // SNACKBAR
  const [deleteStatus, setDeleteStatus] = useState();

  const handleCloseSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteStatus();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.deleteQuery(props.selectedRow.id)
      .unwrap()
      .then(() => {
        setDeleteStatus("success");
      })
      .catch((error) => {
        setDeleteStatus("error");
      });
  };

  return (
    <Box>
      <ButtonWIcon
        text={"Delete " + props.entityName}
        icon={icons.delete}
        onClick={onSubmit}
        disabled={!props.selectedRow}
      />
      <CrudSnackbar
        deleteStatus={deleteStatus}
        handleCloseSnackbar={handleCloseSnackbar}
        entityName={props.entityName}
      />
    </Box>
  );
};

export default CrudDatagridActionDelete;
