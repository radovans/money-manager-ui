import React, { useState } from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import ButtonWIcon from "components/ButtonWIcon";
import CrudSnackbar from "components/crudDatagrid/CrudSnackbar";
import { EditOutlined } from "@mui/icons-material";
import UpdateModal from "./UpdateModal";

const CrudDatagridActionUpdate = (props) => {
  const icons = {
    edit: <EditOutlined sx={{ mr: "10px" }} />,
  };

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  // SNACKBAR
  const [updateStatus, setUpdateStatus] = useState();

  const handleCloseSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setUpdateStatus();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box>
      <ButtonWIcon
        text={"Edit " + props.entityName}
        icon={icons.edit}
        onClick={handleOpenUpdateModal}
        disabled={!props.selectedRow}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openUpdateModal}
        onClose={handleCloseUpdateModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openUpdateModal}>
          <Box sx={style}>
            <UpdateModal
              updateQuery={props.updateQuery}
              handleCloseUpdateModal={handleCloseUpdateModal}
              selectedRow={props.selectedRow}
              setUpdateStatus={setUpdateStatus}
              entityName={props.entityName}
              updateInput={props.updateInput}
              setUpdateInput={props.setUpdateInput}
              handleClearInput={props.handleClearInput}
              Form={props.Form}
            />
          </Box>
        </Fade>
      </Modal>
      <CrudSnackbar
        updateStatus={updateStatus}
        handleCloseSnackbar={handleCloseSnackbar}
        entityName={props.entityName}
      />
    </Box>
  );
};

export default CrudDatagridActionUpdate;
