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
      <Header
        title="IMPORT - EXPORT"
        subtitle="Import or Export application settings"
      />
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
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h5" color={theme.palette.secondary[300]}>
            Import settings.
          </Typography>
          <Typography variant="h6" style={{ marginTop: ".5rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            gravida finibus ligula id lacinia. Morbi justo quam, facilisis ac
            consectetur at, bibendum at elit. Nullam placerat porttitor lorem,
            ac venenatis arcu euismod vitae. Morbi consectetur bibendum arcu,
            non gravida augue laoreet eget. Suspendisse sit amet ipsum id sem
            elementum ullamcorper. Maecenas purus massa, blandit id volutpat in,
            laoreet nec lorem. Morbi nec velit eleifend urna mattis sodales.
            Nunc sagittis, ex a venenatis feugiat, felis elit finibus dolor, nec
            mattis massa erat et lectus. Morbi sed urna ac lorem tincidunt
            molestie. Maecenas elementum mauris non neque feugiat, vel cursus
            erat ornare. Sed eu est euismod, viverra turpis in, convallis ex.
            Mauris pretium enim quis velit auctor, sit amet suscipit lorem
            sagittis.
          </Typography>
          <Button
            style={{ marginTop: ".5rem" }}
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
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h5" color={theme.palette.secondary[300]}>
            Export settings.
          </Typography>
          <Typography variant="h6" style={{ marginTop: ".5rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            gravida finibus ligula id lacinia. Morbi justo quam, facilisis ac
            consectetur at, bibendum at elit. Nullam placerat porttitor lorem,
            ac venenatis arcu euismod vitae. Morbi consectetur bibendum arcu,
            non gravida augue laoreet eget. Suspendisse sit amet ipsum id sem
            elementum ullamcorper. Maecenas purus massa, blandit id volutpat in,
            laoreet nec lorem. Morbi nec velit eleifend urna mattis sodales.
            Nunc sagittis, ex a venenatis feugiat, felis elit finibus dolor, nec
            mattis massa erat et lectus. Morbi sed urna ac lorem tincidunt
            molestie. Maecenas elementum mauris non neque feugiat, vel cursus
            erat ornare. Sed eu est euismod, viverra turpis in, convallis ex.
            Mauris pretium enim quis velit auctor, sit amet suscipit lorem
            sagittis.
          </Typography>
          <Button
            style={{ marginTop: ".5rem" }}
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
