import React, { useState } from "react";
import { Box, useTheme, Modal, Fade, Backdrop } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDeleteRuleMutation, useGetRulesQuery } from "state/api";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material";
import AddRule from "components/AddRule";
import EditRule from "components/EditRule";
import ContainedButton from "components/ContainedButton";

const Rules = () => {
  const theme = useTheme();
  const icons = {
    save: <AddOutlined sx={{ mr: "10px" }} />,
    edit: <EditOutlined sx={{ mr: "10px" }} />,
    delete: <DeleteOutline sx={{ mr: "10px" }} />,
  };

  const [selectedRow, setSelectedRow] = useState();

  const onRowsSelectionHandler = (ids) => {
    setSelectedRow(ids.map((id) => data.find((row) => row.id === id))[0]);
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

  const [openAddRule, setOpenAddRule] = useState(false);
  const handleOpenAddRule = () => setOpenAddRule(true);
  const handleCloseAddRule = () => setOpenAddRule(false);

  const [openEditRule, setOpenEditRule] = useState(false);
  const handleOpenEditRule = () => setOpenEditRule(true);
  const handleCloseEditRule = () => setOpenEditRule(false);

  const [deleteRule] = useDeleteRuleMutation();
  const onSubmit = (e) => {
    e.preventDefault();
    deleteRule(selectedRow.id)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  const { data, isLoading } = useGetRulesQuery({});

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
        <Box>
          <ContainedButton
            text="Add Rule"
            icon={icons.save}
            onClick={handleOpenAddRule}
          />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openAddRule}
            onClose={handleCloseAddRule}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openAddRule}>
              <Box sx={style}>
                <AddRule handleClose={handleCloseAddRule} />
              </Box>
            </Fade>
          </Modal>
          <ContainedButton
            text="Edit Rule"
            icon={icons.edit}
            onClick={handleOpenEditRule}
            disabled={!selectedRow}
            marginLeft={10}
          />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openEditRule}
            onClose={handleCloseEditRule}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openEditRule}>
              <Box sx={style}>
                <EditRule
                  handleClose={handleCloseEditRule}
                  editData={selectedRow}
                />
              </Box>
            </Fade>
          </Modal>
          <ContainedButton
            text="Delete"
            icon={icons.delete}
            onClick={onSubmit}
            disabled={!selectedRow}
            marginLeft={10}
          />
        </Box>
      </FlexBetween>
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          sx={{
            "& .MuiDataGrid-row.Mui-selected": {
              backgroundColor: theme.palette.primary[700],
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: theme.palette.secondary[200],
              color: theme.palette.primary[500],
            },
          }}
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={data || []}
          columns={columns}
          hideFooter
          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
      </Box>
    </Box>
  );
};

export default Rules;
