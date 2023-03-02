import React from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
} from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import Header from "components/Header";

const Import = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="IMPORT" subtitle="Import data" />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h5" color={theme.palette.secondary[300]}>
            Import transations.
          </Typography>
          <Button
            style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
            sx={{
              backgroundColor: theme.palette.primary[800],
              color: theme.palette.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            variant="contained"
            component="label"
          >
            <UploadFileOutlinedIcon sx={{ mr: "10px" }} />
            Import
            <input type="file" hidden />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Import;
