import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CrudDatagridSaveForm from "./CrudDatagridSaveForm";

const UpdateModal = (props) => {
  const theme = useTheme();

  const onSubmit = (e) => {
    let id = props.selectedRow.id;
    e.preventDefault();
    props
      .updateQuery({ id: id, payload: props.updateInput })
      .unwrap()
      .then(() => {
        props.setUpdateStatus("success");
      })
      .catch((error) => {
        props.setUpdateStatus("error");
      });
    props.handleClearInput();
    props.handleCloseUpdateModal();
  };

  return (
    <Box>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        Edit {props.entityName}
      </Typography>
      <CrudDatagridSaveForm
        data={props.updateInput}
        setData={props.setUpdateInput}
        onSubmit={onSubmit}
        Form={props.Form}
      />
    </Box>
  );
};

export default UpdateModal;
