import { AddOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import ButtonWIcon from "../ButtonWIcon";

const CrudDatagridSaveForm = (props) => {
  const icons = { save: <AddOutlined sx={{ mr: "10px" }} /> };

  return (
    <Box
      component="form"
      marginTop={"20px"}
      sx={{
        "& .MuiTextField-root": { marginTop: "15px", width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      {props.Form}
      <Box textAlign="center">
        <ButtonWIcon text="Save" icon={icons.save} onClick={props.onSubmit} />
      </Box>
    </Box>
  );
};

export default CrudDatagridSaveForm;
