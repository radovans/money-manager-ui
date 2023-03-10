import { Box, useTheme } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${theme.palette.primary[500]} 45%, transparent 46%),
            conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.chart[100]} ${angle}deg 360deg),
            ${theme.palette.chart[300]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        
      }}
    />
  );
};

export default ProgressCircle;
