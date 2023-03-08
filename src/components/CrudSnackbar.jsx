import { Alert, AlertTitle, Box, Snackbar } from "@mui/material";
import React from "react";

const CrudSnackbar = ({
  addStatus,
  editStatus,
  deleteStatus,
  handleCloseSnackbar,
  entity,
}) => {
  return (
    <Box>
      {/* ADD */}
      <Snackbar
        open={addStatus === "success"}
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
          {entity} saved!
        </Alert>
      </Snackbar>
      <Snackbar
        open={addStatus === "error"}
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
          Error while saving {entity}!
        </Alert>
      </Snackbar>

      {/* EDIT */}
      <Snackbar
        open={editStatus === "success"}
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
          {entity} updated!
        </Alert>
      </Snackbar>
      <Snackbar
        open={editStatus === "error"}
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
          Error while updating {entity}!
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
          {entity} deleted!
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
          Error while deleting {entity}!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CrudSnackbar;
