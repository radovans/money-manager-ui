import React from "react";
import { Box } from "@mui/material";
import ButtonWIcon from "components/ButtonWIcon";
import { FileDownloadOutlined } from "@mui/icons-material";
import { saveAs } from "file-saver";

const CrudDatagridActionDownload = (props) => {
  const icons = {
    save: <FileDownloadOutlined sx={{ mt: "2px", mb:"2px" }}/>,
  };

  const saveFile = () => {
    saveAs(props.link, props.name);
  };

  return (
    <Box>
      <ButtonWIcon icon={icons.save} onClick={saveFile} />
    </Box>
  );
};

export default CrudDatagridActionDownload;
