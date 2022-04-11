import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FavoriteSlots = () => {
  return (
    <>
      <Box sx={{ ml: "44px" }}>
        <Typography
          sx={{ fontSize: "24px", color: "white", fontFamily: "NinoMtav" }}
        >
          დაატრიალე რჩეული სლოტები:
        </Typography>
        <Typography
          sx={{ fontSize: "13px", color: "white", fontFamily: "NinoMtav" }}
        >
          სპინზე ფსონის მინ. რაოდენობა - 2₾
        </Typography>
      </Box>
    </>
  );
};
export default FavoriteSlots;
