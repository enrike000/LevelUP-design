import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slots from "./slider";

const FavoriteSlots = () => {
  return (
    <>
      <Box sx={{ ml: "44px" }}>
        <Typography
          sx={{ fontSize: "24px", color: "white", fontFamily: "europebet" }}
        >
          დაატრიალე რჩეული სლოტები:
        </Typography>
        <Typography
          sx={{ fontSize: "13px", color: "white", fontFamily: "europebet" }}
        >
          სპინზე ფსონის მინ. რაოდენობა - 2₾
        </Typography>
        <Slots />
      </Box>
    </>
  );
};
export default FavoriteSlots;
