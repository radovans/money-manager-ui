import React, { useState } from "react";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import ButtonWIcon from "components/ButtonWIcon";
import CreateModal from "./CreateModal";
import { AddOutlined } from "@mui/icons-material";
import CrudSnackbar from "components/crudDatagrid/CrudSnackbar";

const CrudDatagridActionCreate = (props) => {
  const icons = {
    save: <AddOutlined sx={{ mr: "10px" }} />,
  };

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);

  // SNACKBAR
  const [createStatus, setCreateStatus] = useState();

  const handleCloseSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCreateStatus();
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
        text={"Create " + props.entityName}
        icon={icons.save}
        onClick={handleOpenCreateModal}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openCreateModal}>
          <Box sx={style}>
            <CreateModal
              createQuery={props.createQuery}
              handleCloseCreateModal={handleCloseCreateModal}
              setCreateStatus={setCreateStatus}
              entityName={props.entityName}
              createInput={props.createInput}
              setCreateInput={props.setCreateInput}
              handleClearInput={props.handleClearInput}
              Form={props.Form}
            />
          </Box>
        </Fade>
      </Modal>
      <CrudSnackbar
        createStatus={createStatus}
        handleCloseSnackbar={handleCloseSnackbar}
        entityName={props.entityName}
      />
    </Box>
  );
};

export default CrudDatagridActionCreate;
