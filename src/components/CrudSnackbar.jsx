import { Alert, AlertTitle, Box, Snackbar } from "@mui/material";
import React from "react";

const CrudSnackbar = ({
  createStatus,
  updateStatus,
  deleteStatus,
  handleCloseSnackbar,
  entityName,
}) => {
  return (
    <Box>
      {/* CREATE */}
      <Snackbar
        open={createStatus === "success"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Success</AlertTitle>
          {entityName} saved!
        </Alert>
      </Snackbar>
      <Snackbar
        open={createStatus === "error"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Error</AlertTitle>
          Error while saving {entityName}!
        </Alert>
      </Snackbar>

      {/* EDIT */}
      <Snackbar
        open={updateStatus === "success"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Success</AlertTitle>
          {entityName} updated!
        </Alert>
      </Snackbar>
      <Snackbar
        open={updateStatus === "error"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Error</AlertTitle>
          Error while updating {entityName}!
        </Alert>
      </Snackbar>

      {/* DELETE */}
      <Snackbar
        open={deleteStatus === "success"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Success</AlertTitle>
          {entityName} deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={deleteStatus === "error"}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Error</AlertTitle>
          Error while deleting {entityName}!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CrudSnackbar;
